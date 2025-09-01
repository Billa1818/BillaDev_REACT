import React from "react";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, ExternalLink } from "lucide-react";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background avec gradient animé */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 animate-pulse"></div>
    
    {/* Effets de particules */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>

    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Contenu principal */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="mr-2 size-4" />
            Développeur Fullstack disponible
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Créateur de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Solutions Digitales
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            Spécialisé en développement web, applications mobiles et intelligence artificielle. 
            Je transforme vos idées en réalité numérique.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 size-5" />
              Démarrer un projet
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="https://billa-dev-react.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <ExternalLink className="mr-2 size-5" />
              Voir mon portfolio
            </a>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">17+</div>
              <div className="text-blue-200 text-sm">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2+</div>
              <div className="text-blue-200 text-sm">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-blue-200 text-sm">Satisfaction client</div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a 
              href="https://github.com/Billa1818" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Github className="size-6 text-white group-hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com/in/z-billa-assouma-b1764931b" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Linkedin className="size-6 text-white group-hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a 
              href="https://twitter.com/billa.assouma.18" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Twitter className="size-6 text-white group-hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a 
              href="mailto:az9245054@gmail.com" 
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Mail className="size-6 text-white group-hover:text-yellow-300 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Cercle décoratif */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Image principale */}
            <div className="relative z-10">
              <img 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500" 
                src="/img/programmation.png" 
                alt="Développeur Web Fullstack" 
              />
              
              {/* Overlay avec effet glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Éléments flottants */}
            <div className="absolute top-20 -left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-pulse">
              <div className="text-white text-sm font-semibold">React.js</div>
            </div>
            <div className="absolute bottom-20 -right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-pulse" style={{animationDelay: '2s'}}>
              <div className="text-white text-sm font-semibold">Python</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default HeroSection;
