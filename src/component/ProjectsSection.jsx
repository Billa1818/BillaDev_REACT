import React, { useState } from "react";
import { ExternalLink, Github, Eye, Code, Smartphone, Globe, Database } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "DestinyJobs",
      description: "Plateforme de recrutement innovante avec matching intelligent et tests de compétences.",
      longDescription: "DestinyJobs est une plateforme de recrutement révolutionnaire qui connecte les candidats et les recruteurs grâce à un algorithme de matching intelligent. Avec des fonctionnalités telles que des tests de compétences en ligne, un chat intégré pour faciliter la communication, et des analytics avancés pour suivre les performances, DestinyJobs transforme la manière dont les talents sont découverts et recrutés.",
      image: "img/destinyjobs.png",
      technologies: ["React", "Django", "MySQL", "fedapay"],
      category: "web",
      features: ["Matching intelligent", "Paiement sécurisé", "Gestion des candidatures", "Analytics"],
      github: "https://github.com/Billa1818",
      demo: "destinyjobs.net",
      status: "completed"
    },
    {
      id: 2,
      title: "OptiBudget",
      description: "Application de gestion financière personnelle avec suivi des dépenses et analyses.",
      longDescription: "Une application complète de gestion de budget avec visualisation des données, catégorisation automatique des dépenses, et rapports détaillés.",
      image: "img/optibudget.png",
      technologies: ["React.js", "Django", "MySQL", "Charts.js", "redis"],
      category: "web",
      features: ["Dashboard interactif", "Rapports visuels", "Catégorisation", "Export PDF"],
      github: "https://github.com/Billa1818",
      demo: "optibudget.site",
      status: "completed"
    },
    {
      id: 3,
      title: "Tiae",
      description: "Gérez vos groupes simplement avec TIAE, la plateforme tout-en-un pour associations, clubs et paroisses.",
      longDescription: "TIAE est la plateforme complète pour administrer vos associations, clubs, chorales et paroisses. Gestion des membres, finances, présences et documents en un seul endroit.",
      image: "img/tiae.png",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      category: "web",
      features: ["Prise RDV en ligne", "Dossiers patients", "Planning médical", "Notifications"],
      github: "https://github.com/Billa1818",
      demo: "tiae.com",
      status: "in-progress"
    },
    {
      id: 6,
      title: "RestoOnline",
      description: "Application de commande en ligne pour restaurants avec menu interactif et paiement intégré.",
      longDescription: "RestoOnline permet aux restaurants de proposer un menu interactif en ligne, avec des options de personnalisation pour les clients et un système de paiement intégré pour une expérience de commande fluide.",
      image: "img/ro.jpg",
      technologies: ["React Native", "Django", "Maps API", "Payment"],
      category: "mobile",
      features: ["Géolocalisation", "Réservation", "Paiement mobile", "Suivi temps réel"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all',    label: 'Tous les projets', icon: Globe    },
    { id: 'web',    label: 'Web',              icon: Code     },
    { id: 'mobile', label: 'Mobile',           icon: Smartphone },
    { id: 'ai',     label: 'IA/ML',            icon: Database },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web':    return Code;
      case 'mobile': return Smartphone;
      case 'ai':     return Database;
      default:       return Globe;
    }
  };

  return (
    <section id="projets" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Mes projets récents
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Découvrez quelques-unes de mes réalisations qui démontrent mon expertise 
            en développement web et mobile.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center px-4 md:px-6 py-2.5 md:py-3 rounded-2xl font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeFilter === category.id
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="mr-2 size-4 flex-shrink-0" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-xs md:text-sm text-gray-200 mb-3 line-clamp-2">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a href={project.demo} className="flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300 text-sm">
                          <Eye className="mr-1 size-4 flex-shrink-0" />Demo
                        </a>
                        <a href={project.github} className="flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300 text-sm">
                          <Github className="mr-1 size-4 flex-shrink-0" />Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Badge statut */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.status === 'completed' ? 'Terminé' : 'En cours'}
                    </span>
                  </div>

                  {/* Icône catégorie */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                      <CategoryIcon className="size-4 md:size-5 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Contenu carte */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 md:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center px-3 md:px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base"
                    >
                      <ExternalLink className="mr-2 size-4 flex-shrink-0" />
                      Voir le projet
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center px-3 md:px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="rounded-3xl p-6 md:p-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-2xl border-4 border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                  Intéressé par mon travail ?
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Découvrez plus de projets sur mon GitHub ou discutons de votre prochain projet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href="https://github.com/Billa1818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base whitespace-nowrap"
                >
                  <Github className="mr-2 size-5 flex-shrink-0" />
                  Voir sur GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-700 transition-all duration-300 hover:scale-105 text-sm md:text-base whitespace-nowrap"
                >
                  <ExternalLink className="mr-2 size-5 flex-shrink-0" />
                  Discuter d'un projet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;