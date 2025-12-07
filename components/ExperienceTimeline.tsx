import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the line drawing down
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        height: 0,
        ease: "none"
      });

      // Reveal Items
      gsap.utils.toArray('.exp-item').forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: "power3.out"
        });
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-6 lg:px-20 py-24 relative z-10 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-right">
        Professional <span className="text-neon-blue">Trajectory</span>
      </h2>

      <div className="relative pl-8 md:pl-0">
        {/* Glowing Central Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2">
           <div ref={lineRef} className="w-full bg-gradient-to-b from-electric-violet to-cyber-lime h-full shadow-[0_0_15px_rgba(124,58,237,0.5)] origin-top"></div>
        </div>

        {EXPERIENCE.map((exp, index) => (
          <div key={exp.id} className={`exp-item relative mb-20 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'}`}>
            
            {/* Timeline Dot */}
            <div className={`absolute top-0 w-6 h-6 rounded-full border-4 border-black bg-cyber-lime z-10 shadow-[0_0_10px_#ccff00] 
                ${index % 2 === 0 ? '-left-[44px] md:-left-[12px]' : '-left-[44px] md:-right-[12px] md:left-auto'}`}
            ></div>

            <div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
              <div className={`flex flex-col mb-4 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-neon-blue mb-2 w-fit">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                   <Briefcase size={14} /> {exp.company} | {exp.location}
                </div>
              </div>
              
              <ul className={`space-y-2 text-gray-300 text-sm leading-relaxed list-none`}>
                {exp.description.map((point, idx) => (
                  <li key={idx} className="relative pl-4">
                     {index % 2 === 0 && <span className="absolute left-0 top-2 w-1 h-1 bg-electric-violet rounded-full"></span>}
                     {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;