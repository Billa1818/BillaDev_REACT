import React from "react";

const ProjectsSection = () => (
  <section id="projets" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Mes projets récents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Projet 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
          <div className="relative">
            <img src="img/hirevac.jpg" alt="Projet E-commerce" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Plateforme E-commerce</h3>
                <p className="mb-4">Site e-commerce complet avec gestion de produits, panier et paiement en ligne</p>
                <a href="#" className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-all">Voir le projet</a>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Plateforme E-commerce</h3>
            <p className="text-gray-600 mb-4">React.js, Node.js, MongoDB, Stripe</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
        </div>
        {/* Projet 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
          <div className="relative">
            <img src="img/carvilla.jpg" alt="Application de Gestion" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Application de Gestion</h3>
                <p className="mb-4">Système de gestion d'entreprise avec tableau de bord, rapports et analyses</p>
                <a href="#" className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-all">Voir le projet</a>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-gray-800">App de Gestion de budget</h3>
            <p className="text-gray-600 mb-4">React.js, Django, MySQL, Charts.js</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">React.js</span>
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">Django</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">API REST</span>
            </div>
          </div>
        </div>
        {/* Projet 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
          <div className="relative">
            <img src="img/finexo.jpg" alt="Application Mobile" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Application Mobile</h3>
                <p className="mb-4">Application de fitness pour suivre les entraînements et la nutrition</p>
                <a href="#" className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-all">Voir le projet</a>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Application Mobile </h3>
            <p className="text-gray-600 mb-4">React Native, Firebase, Redux</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Firebase</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Redux</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a href="https://github.com/Billa1818" className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Voir tous les projets</a>
      </div>
    </div>
  </section>
);

export default ProjectsSection; 