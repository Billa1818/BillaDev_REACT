import React from "react";

const HeroSection = () => (
  <section id="accueil" className="pt-28 pb-20">
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Développeur Web Fullstack</h1>
            <p className="text-xl mb-8">Spécialisé en création d'applications web modernes et performantes</p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">Me contacter</a>
              <a href="#projets" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">Voir mes projets</a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition-all"><i className="fab fa-github text-2xl"></i></a>
              <a href="#" className="text-white hover:text-gray-200 transition-all"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="#" className="text-white hover:text-gray-200 transition-all"><i className="fab fa-twitter text-2xl"></i></a>
              <a href="#" className="text-white hover:text-gray-200 transition-all"><i className="fas fa-envelope text-2xl"></i></a>
            </div>
          </div>
          <div className="md:w-2/5 mt-10 md:mt-0">
            <img className="w-5/10 rounded-lg shadow-2xl" src="/img/programmation.png" alt="Developer Illustration" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 