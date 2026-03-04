import React, { useState, useEffect } from "react";
import { Home, User, BadgeCheck, Folder, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#accueil", label: "Accueil", icon: Home },
    { href: "#apropos", label: "À propos", icon: User },
    { href: "#competences", label: "Compétences", icon: BadgeCheck },
    { href: "#projets", label: "Projets", icon: Folder },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-black/20 backdrop-blur-md shadow-md'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              className={`text-3xl font-extrabold transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent hover:scale-110' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              ASSOUMA Billa
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={index}
                  href={item.href} 
                  className={`group relative font-semibold transition-all duration-300 flex items-center px-3 py-2 rounded-lg ${
                    scrolled
                      ? 'text-gray-700  hover:text-gray-900  hover:bg-gray-100 '
                      : 'text-white hover:text-yellow-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-gray-700 ' : 'bg-yellow-300'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">

            
            {/* CTA Button */}
            <a 
              href="#contact" 
              className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-gray-700 text-white hover:bg-gray-800 hover:scale-105'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:scale-105'
              }`}
            >
              <Mail className="mr-2 size-4" />
              Me contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => setOpen(!open)} 
              className={`relative p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? 'bg-gray-100  hover:bg-gray-200 '
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              {open ? (
                <X className={`size-6 ${scrolled ? 'text-gray-700 ' : 'text-white'}`} />
              ) : (
                <Menu className={`size-6 ${scrolled ? 'text-gray-700 ' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-200/50">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={index}
                  href={item.href} 
                  className="group flex items-center px-4 py-3 font-semibold text-gray-700  hover:text-gray-900  hover:bg-gray-100  rounded-xl transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="mr-3 size-5 transition-transform duration-300 group-hover:scale-110" />
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-gray-200 ">
              <a 
                href="#contact" 
                className="btn-primary w-full text-center inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                <Mail className="mr-2 size-4" />
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
