import React from "react";
import PageTransition from "./PageTransition";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import NewsletterSection from "./NewsletterSection";

const Home = () => (
  <PageTransition>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />
    <FAQSection />
    <NewsletterSection />
  </PageTransition>
);

export default Home; 