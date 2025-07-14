import React from "react";

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Mes services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all text-white">
          <div className="mb-6">
            <i className="fas fa-code text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Développement Web</h3>
          <p>Création de sites web et applications web responsives, modernes et optimisés pour les moteurs de recherche.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all">
          <div className="mb-6 text-blue-600">
            <i className="fas fa-mobile-alt text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Applications Mobiles</h3>
          <p className="text-gray-600">Développement d'applications mobiles cross-platform avec React(Capacitor) pour iOS et Android.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all text-white">
          <div className="mb-6">
            <i className="fas fa-server text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Développement Backend</h3>
          <p>Création d'API RESTful, gestion de bases de données et intégration de systèmes complexes.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all">
          <div className="mb-6 text-blue-600">
            <i className="fas fa-shopping-cart text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">E-commerce</h3>
          <p className="text-gray-600">Mise en place de solutions e-commerce performantes  sur mesure.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all text-white">
          <div className="mb-6">
            <i className="fas fa-search text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Référencement SEO</h3>
          <p>Optimisation de votre site web pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all">
          <div className="mb-6 text-blue-600">
            <i className="fas fa-comments text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Consultation</h3>
          <p className="text-gray-600">Conseils et stratégies pour améliorer votre présence en ligne et optimiser vos solutions numériques.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:translate-y-[-5px] transition-all text-white">
          <div className="mb-6">
            <i className="fas fa-robot text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Ingénierie IA avec Python</h3>
          <p>Développement de solutions d'intelligence artificielle, machine learning et automatisation sur mesure avec Python.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection; 
