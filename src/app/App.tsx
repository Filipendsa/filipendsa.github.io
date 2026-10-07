import React from 'react';
import { I18nProvider } from './providers/I18nProvider';
import { AmbientBackground } from '../shared/components/UI/AmbientBackground';
import { Navbar } from '../shared/components/Header/Navbar';
import { HeroSection } from '../features/hero/HeroSection';
import { AboutSection } from '../features/about/AboutSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { ResearchSection } from '../features/research/ResearchSection';
import { ContactSection } from '../features/contact/ContactSection';
import { Footer } from '../shared/components/Footer/Footer';
import { ScrollToTopButton } from '../shared/components/UI/ScrollToTopButton';

export const App: React.FC = () => {
  return (
    <I18nProvider>
      <AmbientBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </I18nProvider>
  );
};
