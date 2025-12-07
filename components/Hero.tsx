import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { ArrowDownRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        skewY: 7
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(".hero-btn", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 z-10">
      <div className="max-w-5xl">
        <h1 ref={titleRef} className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
          <div className="overflow-hidden"><span className="hero-text-line block text-white">DATA</span></div>
          <div className="overflow-hidden"><span className="hero-text-line block text-white/50">ANALYST</span></div>
          <div className="overflow-hidden"><span className="hero-text-line block text-gradient">& QA ENGINEER</span></div>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light">
          {PERSONAL_INFO.summary}
        </p>

        <div className="hero-btn relative z-50">
          <MagneticButton href="#contact">
            HIRE ME <ArrowDownRight className="ml-2 w-5 h-5" />
          </MagneticButton>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden md:block animate-spin-slow opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" className="fill-white">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text>
            <textPath href="#circlePath" className="font-display uppercase tracking-widest text-[10px]">
              Analysis • Visualization • Engineering •
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default Hero;