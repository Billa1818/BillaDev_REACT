import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-gray-800 text-gray-300">
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center text-center md:text-left">
        <div>
          <a href="#" className="text-2xl font-extrabold text-white hover:text-blue-400 transition-all">BillaDev</a>
          <p className="mt-2">Développeur Web Fullstack</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:space-x-8 md:gap-0 items-center justify-center">
          <a href="#accueil" className="hover:text-white transition-all">Accueil</a>
          <a href="#apropos" className="hover:text-white transition-all">À propos</a>
          <a href="#competences" className="hover:text-white transition-all">Compétences</a>
          <a href="#projets" className="hover:text-white transition-all">Projets</a>
          <a href="#contact" className="hover:text-white transition-all">Contact</a>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="bg-gray-700 hover:bg-blue-600 rounded-full p-3 transition duration-300"><Github size={20} /></a>
          <a href="#" className="bg-gray-700 hover:bg-blue-600 rounded-full p-3 transition duration-300"><Linkedin size={20} /></a>
          <a href="#" className="bg-gray-700 hover:bg-blue-600 rounded-full p-3 transition duration-300"><Twitter size={20} /></a>
          <a href="#" className="bg-gray-700 hover:bg-blue-600 rounded-full p-3 transition duration-300"><Mail size={20} /></a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; 2025 BillaDev. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 
