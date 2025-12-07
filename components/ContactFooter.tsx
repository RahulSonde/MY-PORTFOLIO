import React from 'react';
import { PERSONAL_INFO } from '../constants';
import MagneticButton from './MagneticButton';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="relative px-6 lg:px-20 pt-32 pb-12 z-10 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
          LET'S TALK
        </h2>
        
        <div className="mb-16">
            <MagneticButton href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-2xl px-12 py-6">
                {PERSONAL_INFO.email}
            </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-12 text-sm text-gray-500 font-mono">
            <div className="text-center md:text-left">
                <p className="mb-2">CURRENTLY BASED IN</p>
                <p className="text-white">{PERSONAL_INFO.location}</p>
            </div>
            <div className="text-center">
                <p className="mb-2">SOCIAL</p>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-white hover:text-cyber-lime transition-colors">LinkedIn Profile</a>
            </div>
            <div className="text-center md:text-right">
                <p className="mb-2">PHONE</p>
                <p className="text-white">{PERSONAL_INFO.phone}</p>
            </div>
        </div>
        
        <div className="mt-20 text-xs text-gray-700">
            © 2026 RAHUL SONDE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;