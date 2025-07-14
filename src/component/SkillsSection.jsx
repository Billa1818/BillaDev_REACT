import React from "react";

const SkillsSection = () => (
  <section id="competences" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Mes compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Développement Frontend</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">HTML/CSS</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">JavaScript</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">React.js</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Tailwind CSS</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium"> React Native Capacitor (React) </span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Développement Backend</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Node.js</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">IA Engineer (Python)</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Django / django rest framework (DRF)</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">MySQL / MongoDB</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">API RESTful</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection; 
