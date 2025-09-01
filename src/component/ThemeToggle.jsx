import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl transition-all duration-300 hover:scale-110 group"
      aria-label={`Basculer vers le mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      <div className="relative w-6 h-6">
        {/* Icône du soleil */}
        <Sun 
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            theme === 'light' 
              ? 'text-yellow-500 rotate-0 scale-100' 
              : 'text-gray-400 rotate-90 scale-0'
          }`} 
        />
        
        {/* Icône de la lune */}
        <Moon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            theme === 'dark' 
              ? 'text-blue-400 rotate-0 scale-100' 
              : 'text-gray-400 -rotate-90 scale-0'
          }`} 
        />
      </div>
      
      {/* Effet de halo */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-yellow-100/20 group-hover:bg-yellow-100/30' 
          : 'bg-blue-100/20 group-hover:bg-blue-100/30'
      }`}></div>
    </button>
  );
};

export default ThemeToggle;
