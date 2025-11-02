import React, { useEffect } from 'react';
import Navbar from '../components/Header/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsCarousel from '../components/sections/ProjectsCarousel';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsCarousel />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;