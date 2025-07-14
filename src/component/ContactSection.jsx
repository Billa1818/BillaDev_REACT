import React from "react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-blue-600 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Contactez-moi</h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
          <p className="mb-6">Pour toute demande de devis ou de renseignements, n'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.</p>
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 rounded-full p-3 mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-semibold">Adresse</h4>
                <p>12 rue de la Paix, 75002 Cotonou, Benin</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 rounded-full p-3 mr-4">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4 className="font-semibold">Téléphone</h4>
                <p>+229 01 53 40 01 60</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 rounded-full p-3 mr-4">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>billaassouma188@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300"><i className="fab fa-github"></i></a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="md:w-1/2">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Nom</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-200 border border-blue-500 focus:outline-none focus:border-white" placeholder="Votre nom" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-200 border border-blue-500 focus:outline-none focus:border-white" placeholder="Votre email" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2">Sujet</label>
              <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-200 border border-blue-500 focus:outline-none focus:border-white" placeholder="Sujet de votre message" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-200 border border-blue-500 focus:outline-none focus:border-white" placeholder="Votre message"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection; 