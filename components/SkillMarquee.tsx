import React from 'react';
import { SKILLS } from '../constants';

const SkillMarquee: React.FC = () => {
  return (
    <div className="relative py-10 bg-midnight/50 backdrop-blur-sm border-y border-glass-border overflow-hidden z-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render twice for seamless loop */}
        {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
          <div key={`${skill.name}-${i}`} className="mx-6 flex items-center group">
            <span className={`text-4xl md:text-6xl font-display font-bold transition-colors duration-300 
              ${skill.category === 'code' ? 'text-gray-700 group-hover:text-neon-blue' : 
                skill.category === 'data' ? 'text-gray-700 group-hover:text-cyber-lime' : 
                'text-gray-700 group-hover:text-electric-violet'}`}
            >
              {skill.name}
            </span>
            <span className="ml-6 text-2xl text-gray-800">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;