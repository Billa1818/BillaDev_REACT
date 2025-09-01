import React from "react";
import { 
  Code, 
  Smartphone, 
  Server, 
  ShoppingCart, 
  Search, 
  MessageCircle, 
  Bot,
  Palette,
  Shield,
  Zap,
  Globe,
  Database
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites web et applications web responsives, modernes et optimisés pour les moteurs de recherche.",
      features: ["Responsive Design", "Performance", "SEO Optimisé"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles cross-platform avec React Native et Capacitor pour iOS et Android.",
      features: ["Cross-platform", "Native Performance", "App Store Ready"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
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
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes pour tous vos besoins numériques, de la conception à la mise en production.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Carte principale */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                  {/* Icône et gradient */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`size-8 ${service.iconColor}`} />
                    </div>
                    
                    {/* Gradient décoratif */}
                    <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Effet de hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA - Corrigée avec classes Tailwind standard */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Prêt à démarrer votre projet ?
                </h3>
                <p className="text-blue-100 text-lg">
                  Discutons de vos besoins et créons ensemble une solution sur mesure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2 size-5" />
                  Discuter du projet
                </a>
                <a 
                  href="#projets" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Voir mes réalisations
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "17+", label: "Projets réalisés" },
            { number: "2+", label: "Années d'expérience" },
            { number: "100%", label: "Satisfaction client" },
            { number: "24/7", label: "Support disponible" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
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
