import React from "react";
import { ArrowRight, Github, Linkedin, Twitter, Mail, Sparkles, ExternalLink } from "lucide-react";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-24 pb-16">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-pulse"></div>

    {/* Particules */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{animationDelay:'1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay:'2s'}}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay:'3s'}}></div>
    </div>

    <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

        {/* Contenu principal */}
        <div className="lg:w-1/2 text-center lg:text-left w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium mb-5 md:mb-6 border border-white/20">
            <Sparkles className="mr-2 size-3 md:size-4 flex-shrink-0" />
            Développeur Fullstack disponible
          </div>

          {/* Titre */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 md:mb-6 text-white leading-tight">
            Créateur de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Solutions Digitales
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-7 md:mb-8 leading-relaxed">
            Spécialisé en développement web, applications mobiles et intelligence artificielle. 
            Je transforme vos idées en réalité numérique.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
            >
              <Mail className="mr-2 size-5 flex-shrink-0" />
              Démarrer un projet
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="https://comeup.com/fr/@billa1818" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm md:text-base"
            >
              <ExternalLink className="mr-2 size-5 flex-shrink-0" />
              Voir mon portfolio
            </a>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-12">
            {[
              { value: "17+", label: "Projets réalisés"    },
              { value: "4+",  label: "Années d'expérience" },
              { value: "100%",label: "Satisfaction client" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center lg:justify-start flex-wrap gap-3 md:gap-6">
            {[
              { href: "https://github.com/Billa1818",                      icon: Github,   label: "GitHub"   },
              { href: "https://linkedin.com/in/z-billa-assouma-b1764931b", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/billa.assouma.18",              icon: Twitter,  label: "Twitter"  },
              { href: "mailto:az9245054@gmail.com",                        icon: Mail,     label: "Email"    },
            ].map(({ href, icon: Icon, label }, i) => (
              <a 
                key={i}
                href={href}
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="group p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Icon className="size-5 md:size-6 text-white group-hover:text-yellow-300 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center w-full">
          <div className="relative">
            <div className="absolute -top-8 -right-4 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 md:-bottom-10 md:-left-10 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-full animate-pulse" style={{animationDelay:'1s'}}></div>

            <div className="relative z-10">
              <img 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500" 
                src="/img/programmation.png" 
                alt="Photo de ASSOUMA Billa, développeur web et mobile expérimenté basé au Bénin." 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-700/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Badges flottants — masqués sur très petit écran */}
            <div className="hidden sm:block absolute top-16 -left-6 md:-left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20 animate-pulse">
              <div className="text-white text-xs md:text-sm font-semibold">React.js</div>
            </div>
            <div className="hidden sm:block absolute bottom-16 -right-6 md:-right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20 animate-pulse" style={{animationDelay:'2s'}}>
              <div className="text-white text-xs md:text-sm font-semibold">Python</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default HeroSection;