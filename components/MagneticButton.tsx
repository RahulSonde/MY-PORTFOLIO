import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const MagneticButton: React.FC<Props> = ({ children, className = "", onClick, href }) => {
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * 0.3); // Magnetic strength
      yTo(y * 0.3);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove as any);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove as any);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    
    // Manual smooth scroll for anchor links to ensure reliability
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const baseClasses = `relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-black bg-cyber-lime rounded-full hover:bg-white transition-colors duration-300 cursor-none ${className}`;

  if (href) {
    return (
      <a 
        ref={buttonRef as React.RefObject<HTMLAnchorElement>} 
        href={href} 
        className={baseClasses}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      ref={buttonRef as React.RefObject<HTMLButtonElement>} 
      onClick={handleClick} 
      className={baseClasses}
    >
      {children}
    </button>
  );
};

export default MagneticButton;