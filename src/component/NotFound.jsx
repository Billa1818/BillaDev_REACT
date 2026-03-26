import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-pulse"></div>
      
      {/* Effets de particules */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Numéro 404 */}
          <div className="mb-8">
            <h1 className="text-9xl lg:text-10xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
              404
            </h1>
          </div>

          {/* Titre */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Page non trouvée
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Oups! La page que vous cherchez n'existe pas ou a été déplacée. 
            Ne vous inquiétez pas, vous pouvez revenir à l'accueil.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Home className="mr-2 size-5" />
              Retour à l'accueil
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Nous contacter
            </Link>
          </div>

          {/* Suggestion de navigation */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-gray-300 mb-8">Pages populaires:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Accueil
              </Link>
              <Link 
                to="/apropos" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                À propos
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/projets" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Projets
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
