import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ServicesSection />
    <ProjectsSection />
    {/* <TestimonialsSection /> */}
    <ContactSection />
    <FAQSection />
    <NewsletterSection />
    <Footer />
  </>
);

export default Home; 