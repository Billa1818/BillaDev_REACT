import React from "react";

const AboutSection = () => (
  <section id="apropos" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 text-center md:text-left">
        <div className="w-full md:w-2/5 mb-8 md:mb-0 flex justify-center">
          <img src="/img/utilisateur.png" alt="Photo professionnelle" className="rounded-lg w-48 h-48 object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">À propos de moi</h2>
          <p className="text-gray-600 mb-6">
            Bonjour ! Je suis un développeur web passionné avec plus de 2 ans d'expérience dans la création de solutions web innovantes. Spécialisé dans le développement fullstack, j'aime créer des applications performantes, accessibles et esthétiques.
          </p>
          <p className="text-gray-600 mb-6">
            Mon expertise inclut les technologies front-end modernes comme Tailwind css, React ainsi que des frameworks back-end comme Django ,djangorestframework(DRF),Node.js, et l'ingénierie en intelligence artificielle (IA) avec Python, ainsi que la gestion de serveurs et de VPS. J'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes et solutions IA pour des clients de différents secteurs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800">Nom :</h3>
              <p className="text-gray-600">ASSOUMA Z. Billa</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email :</h3>
              <p className="text-gray-600">billaassouma188@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Téléphone :</h3>
              <p className="text-gray-600">+229 01 53 40 01 60</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Disponibilité :</h3>
              <p className="text-gray-600">Freelance / CDI</p>
            </div>
          </div>
          <a href="#" className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Télécharger mon CV</a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 
