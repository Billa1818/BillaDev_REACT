import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" }
  ];

  const services = [
    { label: "Développement Web" },
    { label: "Applications Mobiles" },
    { label: "Intelligence Artificielle" },
    { label: "Consultation" }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Billa1818",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/z-billa-assouma-b1764931b",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/billa.assouma.18",
      label: "Twitter",
      color: "hover:bg-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:az9245054@gmail.com",
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-300 overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Contenu principal */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <a 
                  href="#" 
                  className="text-3xl font-extrabold text-white hover:text-blue-400 transition-colors duration-300"
                >
                  BillaDev
                </a>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Développeur Web Fullstack passionné par la création de solutions 
                  digitales innovantes et performantes.
                </p>
              </div>

              {/* Informations de contact */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MapPin className="size-4 mr-3 text-blue-400" />
                  <span className="text-sm">Parakou, Bénin</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="size-4 mr-3 text-green-400" />
                  <a href="https://wa.me/22953400160" className="text-sm hover:text-green-400 transition-colors">+229 53 40 01 60</a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="size-4 mr-3 text-purple-400" />
                  <a href="mailto:az9245054@gmail.com" className="text-sm hover:text-purple-400 transition-colors">az9245054@gmail.com</a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="size-4 mr-3 text-orange-400" />
                  <span className="text-sm">Lun - Ven, 9h - 18h</span>
                </div>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-sm">
                      {service.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Réseaux sociaux et portfolio */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Suivez-moi</h3>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-xl hover:scale-110 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="size-5 text-white" />
                    </a>
                  );
                })}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2 text-sm">
                  Portfolio
                </h4>
                <p className="text-gray-400 text-xs mb-3">
                  Découvrez mes réalisations
                </p>
                <a 
                  href="https://billa-dev-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 size-4" />
                  Voir le portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700"></div>

        {/* Bas de page */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} BillaDev. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Fait avec <Heart className="inline size-3 text-red-500" /> par ASSOUMA Z. Billa
              </p>
            </div>

            {/* Bouton retour en haut */}
            <button
              onClick={scrollToTop}
              className="group flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105"
              aria-label="Retour en haut"
            >
              <ArrowUp className="size-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm">Haut de page</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
