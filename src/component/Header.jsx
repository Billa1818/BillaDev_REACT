import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, BadgeCheck, Folder, Mail, Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Sur les pages autres que "/", on force toujours le mode scrolled (fond blanc)
  const isHome = location.pathname === "/";
  const showScrolled = !isHome || scrolled;

  useEffect(() => {
    // Réinitialiser le scroll et fermer le menu au changement de page
    setScrolled(false);
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) return; // Inutile d'écouter le scroll hors de la home

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/",            label: "Accueil",     icon: Home       },
    { href: "/apropos",     label: "À propos",    icon: User       },
    { href: "/competences", label: "Compétences", icon: BadgeCheck },
    { href: "/services",    label: "Services",    icon: Zap        },
    { href: "/projets",     label: "Projets",     icon: Folder     },
    { href: "/contact",     label: "Contact",     icon: Mail       },
  ];

  return (
    <header
      className={`fixed left-2 right-2 top-2 md:left-4 md:right-4 md:top-4 z-50 transition-all duration-300 rounded-2xl ${
        showScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50"
          : "bg-black/20 backdrop-blur-md shadow-md"
      }`}
    >
      <nav className="w-full px-4 md:px-6 py-3 flex flex-col">

        {/* Barre principale */}
        <div className="flex items-center justify-between w-full">

          {/* Logo */}
          <Link
            to="/"
            className={`text-xl md:text-2xl lg:text-3xl font-extrabold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
              showScrolled
                ? "bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent hover:scale-110"
                : "text-white hover:text-yellow-300"
            }`}
          >
            ASSOUMA Billa
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={`group relative font-semibold text-sm transition-all duration-300 flex items-center px-2 xl:px-3 py-2 rounded-lg ${
                    showScrolled
                      ? isActive
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      : isActive
                        ? "text-yellow-300 bg-white/10"
                        : "text-white hover:text-yellow-300 hover:bg-white/10"
                  }`}
                >
                  <Icon className="mr-1.5 size-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      showScrolled ? "bg-gray-700" : "bg-yellow-300"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Actions droite */}
          <div className="flex items-center gap-2">
            {/* CTA desktop */}
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center px-4 xl:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex-shrink-0 ${
                showScrolled
                  ? "bg-gray-700 text-white hover:bg-gray-800 hover:scale-105"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:scale-105"
              }`}
            >
              <Mail className="size-4" />
            </Link>

            {/* Burger mobile */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                showScrolled
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "bg-white/20 backdrop-blur-sm hover:bg-white/30"
              }`}
            >
              {open ? (
                <X className={`size-5 ${showScrolled ? "text-gray-700" : "text-white"}`} />
              ) : (
                <Menu className={`size-5 ${showScrolled ? "text-gray-700" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-1 pb-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-gray-200/50">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={`group flex items-center px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="mr-3 size-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-200">
              <Link
                to="/contact"
                className="btn-primary w-full text-center inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                <Mail className="mr-2 size-4" />
                Me contacter
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;