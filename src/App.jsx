import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useScrollToTop from './hooks/useScrollToTop'
import Header from "./component/Header";
import PageTransition from "./component/PageTransition";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import SkillsSection from "./component/SkillsSection";
import ServicesSection from "./component/ServicesSection";
import ProjectsSection from "./component/ProjectsSection";
import ContactSection from "./component/ContactSection";
import NewsletterSection from "./component/NewsletterSection";
import FAQSection from "./component/FAQSection";
import Footer from "./component/Footer";
import Home from "./component/Home";

function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={
            <PageTransition>
              <HeroSection />
            </PageTransition>
          } />
          <Route path="/apropos" element={
            <PageTransition>
              <AboutSection />
            </PageTransition>
          } />
          <Route path="/competences" element={
            <PageTransition>
              <SkillsSection />
            </PageTransition>
          } />
          <Route path="/services" element={
            <PageTransition>
              <ServicesSection />
            </PageTransition>
          } />
          <Route path="/projets" element={
            <PageTransition>
              <ProjectsSection />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <ContactSection />
            </PageTransition>
          } />
          <Route path="/faq" element={
            <PageTransition>
              <FAQSection />
            </PageTransition>
          } />
          <Route path="/newsletter" element={
            <PageTransition>
              <NewsletterSection />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
