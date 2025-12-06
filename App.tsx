import React from 'react';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import SkillMarquee from './components/SkillMarquee';
import BentoGrid from './components/BentoGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectGallery from './components/ProjectGallery';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-midnight text-white selection:bg-cyber-lime selection:text-black">
      {/* Immersive Background */}
      <Background />
      
      {/* UI Interaction */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <SkillMarquee />
        <BentoGrid />
        <ExperienceTimeline />
        <ProjectGallery />
        <ContactFooter />
      </main>
    </div>
  );
};

export default App;