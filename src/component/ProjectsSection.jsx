import React, { useState } from "react";
import { ExternalLink, Github, Eye, Code, Smartphone, Globe, Database } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description: "Site e-commerce complet avec gestion de produits, panier et paiement en ligne sécurisé.",
      longDescription: "Une plateforme e-commerce moderne et performante avec système de gestion des commandes, intégration de paiement Stripe, et tableau de bord administrateur complet.",
      image: "img/hirevac.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      features: ["Panier intelligent", "Paiement sécurisé", "Gestion stock", "Analytics"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "App de Gestion de Budget",
      description: "Application de gestion financière personnelle avec suivi des dépenses et analyses.",
      longDescription: "Une application complète de gestion de budget avec visualisation des données, catégorisation automatique des dépenses, et rapports détaillés.",
      image: "img/carvilla.jpg",
      technologies: ["React.js", "Django", "MySQL", "Charts.js"],
      category: "web",
      features: ["Dashboard interactif", "Rapports visuels", "Catégorisation", "Export PDF"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "Application Mobile Fitness",
      description: "Application mobile de fitness pour suivre les entraînements et la nutrition.",
      longDescription: "Une application mobile complète avec suivi d'entraînements personnalisés, planification nutritionnelle, et communauté d'utilisateurs.",
      image: "img/finexo.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      features: ["Entraînements personnalisés", "Suivi nutrition", "Communauté", "Gamification"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "completed"
    },
    {
      id: 4,
      title: "Système de Gestion Hospitalière",
      description: "Application web pour la gestion des patients, rendez-vous et dossiers médicaux.",
      longDescription: "Un système complet de gestion hospitalière avec prise de rendez-vous en ligne, gestion des dossiers patients, et interface pour le personnel médical.",
      image: "img/klinik.jpg",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      category: "web",
      features: ["Prise RDV en ligne", "Dossiers patients", "Planning médical", "Notifications"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Plateforme de Recrutement",
      description: "Plateforme de mise en relation entre candidats et recruteurs avec matching intelligent.",
      longDescription: "Une plateforme innovante de recrutement avec algorithme de matching, tests de compétences, et système de recommandations.",
      image: "img/hirevac.jpg",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      category: "web",
      features: ["Matching intelligent", "Tests en ligne", "Chat intégré", "Analytics"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "App Mobile de Transport",
      description: "Application mobile de transport urbain avec géolocalisation et paiement intégré.",
      longDescription: "Une application de transport urbain avec géolocalisation en temps réel, système de réservation, et paiement mobile sécurisé.",
      image: "img/navette.png",
      technologies: ["React Native", "Firebase", "Maps API", "Payment"],
      category: "mobile",
      features: ["Géolocalisation", "Réservation", "Paiement mobile", "Suivi temps réel"],
      github: "https://github.com/Billa1818",
      demo: "#",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: Globe },
    { id: 'web', label: 'Web', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'ai', label: 'IA/ML', icon: Database }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web': return Code;
      case 'mobile': return Smartphone;
      case 'ai': return Database;
      default: return Globe;
    }
  };

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Mes projets récents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-unes de mes réalisations qui démontrent mon expertise 
            en développement web et mobile.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="mr-2 size-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image du projet */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay avec informations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                        {project.longDescription}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Boutons d'action */}
                      <div className="flex gap-2">
                        <a 
                          href={project.demo}
                          className="flex items-center px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          <Eye className="mr-1 size-4" />
                          Demo
                        </a>
                        <a 
                          href={project.github}
                          className="flex items-center px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github className="mr-1 size-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Badge de statut */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.status === 'completed' ? 'Terminé' : 'En cours'}
                    </span>
                  </div>

                  {/* Icône de catégorie */}
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                      <CategoryIcon className="size-5 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.demo}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <ExternalLink className="mr-2 size-4" />
                      Voir le projet
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <Github className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section - Corrigée avec meilleure visibilité */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-2xl border-4 border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Intéressé par mon travail ?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Découvrez plus de projets sur mon GitHub ou discutons de votre prochain projet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://github.com/Billa1818" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Github className="mr-2 size-5" />
                  Voir sur GitHub
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="mr-2 size-5" />
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
