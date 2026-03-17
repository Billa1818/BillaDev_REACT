import React from "react";
import {
  Code, Smartphone, Server, ShoppingCart, Search, MessageCircle,
  Bot, Palette, Shield, ExternalLink
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites web et applications web responsives, modernes et optimisés pour les moteurs de recherche.",
      features: ["Responsive Design", "Performance", "SEO Optimisé"],
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-700"
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles cross-platform avec React Native et Capacitor pour iOS et Android.",
      features: ["Cross-platform", "Native Performance", "App Store Ready"],
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-700"
    },
    {
      icon: Server,
      title: "Développement Backend",
      description: "Création d'API RESTful, gestion de bases de données et intégration de systèmes complexes.",
      features: ["API RESTful", "Base de données", "Microservices"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Mise en place de solutions e-commerce performantes et sécurisées sur mesure.",
      features: ["Paiement sécurisé", "Gestion stock", "Analytics"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Search,
      title: "Référencement SEO",
      description: "Optimisation de votre site web pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.",
      features: ["Audit SEO", "Optimisation", "Monitoring"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Conseils et stratégies pour améliorer votre présence en ligne et optimiser vos solutions numériques.",
      features: ["Audit technique", "Stratégie digitale", "Formation"],
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-700"
    },
    {
      icon: Bot,
      title: "Intelligence Artificielle",
      description: "Développement de solutions d'intelligence artificielle, machine learning et automatisation sur mesure avec Python.",
      features: ["Machine Learning", "Automatisation", "Data Analysis"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Création d'interfaces utilisateur modernes et intuitives pour une expérience utilisateur optimale.",
      features: ["Prototypage", "Design System", "User Research"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      icon: Shield,
      title: "Sécurité Web",
      description: "Mise en place de mesures de sécurité robustes pour protéger vos applications et données.",
      features: ["HTTPS/SSL", "Authentification", "Audit sécurité"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    }
  ];

  const stats = [
    { number: "17+",  label: "Projets réalisés"     },
    { number: "2+",   label: "Années d'expérience"  },
    { number: "100%", label: "Satisfaction client"   },
    { number: "24/7", label: "Support disponible"    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Mes services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Des solutions complètes pour tous vos besoins numériques, de la conception à la mise en production.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative overflow-hidden">
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                  {/* Icône */}
                  <div className="relative mb-5 md:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`size-7 md:size-8 ${service.iconColor}`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="px-2 md:px-3 py-1 bg-gray-100 text-gray-600 text-xs md:text-sm rounded-full font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton Comeup */}
        <div className="mt-10 md:mt-12 text-center">
          <a
            href="https://comeup.com/fr/@billa1818"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-2xl hover:from-gray-800 hover:to-gray-950 transition-all duration-300 hover:scale-105 shadow-xl text-base md:text-lg"
          >
            🚀 Découvrez mon profil Comeup
            <svg className="ml-3 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-gray-600 text-sm mt-3">Consultez mes services et avis clients sur Comeup</p>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="rounded-3xl p-6 md:p-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                  Prêt à démarrer votre projet ?
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Discutons de vos besoins et créons ensemble une solution sur mesure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm md:text-base whitespace-nowrap"
                >
                  <MessageCircle className="mr-2 size-5 flex-shrink-0" />
                  Discuter du projet
                </a>
                <a
                  href="/projets"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-700 transition-all duration-300 hover:scale-105 text-sm md:text-base whitespace-nowrap"
                >
                  Voir mes réalisations
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;