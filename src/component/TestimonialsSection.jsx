import React from "react";

const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Ce que disent mes clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Témoignage 1 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md testimonial-card">
          <div className="flex items-center mb-4">
            <img src="/img/utilisateur.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Sophie Martin</h3>
              <p className="text-gray-600 text-sm">PDG, TechStart</p>
            </div>
          </div>
          <div className="mb-4 text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-gray-600 italic">"Un développeur exceptionnel qui a su comprendre nos besoins et livrer un produit de qualité dans les délais impartis. Une communication claire et une expertise technique impressionnante."</p>
        </div>
        {/* Témoignage 2 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md testimonial-card">
          <div className="flex items-center mb-4">
            <img src="/img/utilisateur.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Marc Dubois</h3>
              <p className="text-gray-600 text-sm">Fondateur, E-Shop Plus</p>
            </div>
          </div>
          <div className="mb-4 text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-gray-600 italic">"Notre site e-commerce a vu une augmentation de 40% des ventes depuis sa refonte. Performance, design et expérience utilisateur au top. Je recommande vivement !"</p>
        </div>
        {/* Témoignage 3 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md testimonial-card">
          <div className="flex items-center mb-4">
            <img src="/img/utilisateur.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Julie Leroy</h3>
              <p className="text-gray-600 text-sm">Directrice Marketing, FitLife</p>
            </div>
          </div>
          <div className="mb-4 text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text-gray-600 italic">"Notre application mobile a reçu d'excellentes critiques depuis son lancement. Interface intuitive, fonctionnalités bien pensées et performance impeccable. Un vrai plaisir de travailler ensemble."</p>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 