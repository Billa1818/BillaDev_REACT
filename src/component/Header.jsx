import React, { useState } from "react";
import { Home, User, BadgeCheck, Folder, Mail } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-3xl font-extrabold text-blue-600 hover:scale-110 transition-all">BillaDev</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="font-semibold hover:text-blue-600 transition-all flex items-center"><Home className="mr-1" size={18} />Accueil</a>
            <a href="#apropos" className="font-semibold hover:text-blue-600 transition-all flex items-center"><User className="mr-1" size={18} />À propos</a>
            <a href="#competences" className="font-semibold hover:text-blue-600 transition-all flex items-center"><BadgeCheck className="mr-1" size={18} />Compétences</a>
            <a href="#projets" className="font-semibold hover:text-blue-600 transition-all flex items-center"><Folder className="mr-1" size={18} />Projets</a>
            <a href="#contact" className="font-semibold hover:text-blue-600 transition-all flex items-center"><Mail className="mr-1" size={18} />Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${open ? '' : 'hidden'} md:hidden`}>
          <div className="flex flex-col space-y-2 mt-4 pb-4">
            <a href="#accueil" className="font-semibold p-2 hover:bg-gray-100 rounded transition-all flex items-center" onClick={() => setOpen(false)}><Home className="mr-2" size={18} />Accueil</a>
            <a href="#apropos" className="font-semibold p-2 hover:bg-gray-100 rounded transition-all flex items-center" onClick={() => setOpen(false)}><User className="mr-2" size={18} />À propos</a>
            <a href="#competences" className="font-semibold p-2 hover:bg-gray-100 rounded transition-all flex items-center" onClick={() => setOpen(false)}><BadgeCheck className="mr-2" size={18} />Compétences</a>
            <a href="#projets" className="font-semibold p-2 hover:bg-gray-100 rounded transition-all flex items-center" onClick={() => setOpen(false)}><Folder className="mr-2" size={18} />Projets</a>
            <a href="#contact" className="font-semibold p-2 hover:bg-gray-100 rounded transition-all flex items-center" onClick={() => setOpen(false)}><Mail className="mr-2" size={18} />Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 