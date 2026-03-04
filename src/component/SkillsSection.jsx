import React, { useState, useEffect, useRef } from "react";
import { Code, Database, Cpu, Smartphone, Globe, Zap } from "lucide-react";

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const sectionRef = useRef(null);

  const skills = {
    frontend: {
      title: "Développement Frontend",
      icon: Code,
      color: "from-gray-500 to-gray-600",
      skills: [
        { name: "HTML/CSS", percentage: 85, color: "bg-gray-500" },
        { name: "JavaScript", percentage: 80, color: "bg-green-500" },
        { name: "React.js", percentage: 80, color: "bg-cyan-500" },
        { name: "Tailwind CSS", percentage: 80, color: "bg-gray-500" },
        { name: "React Native", percentage: 90, color: "bg-gray-600" },
      ]
    },
    backend: {
      title: "Développement Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", percentage: 60, color: "bg-green-500" },
        { name: "Python (IA)", percentage: 75, color: "bg-yellow-500" },
        { name: "Django/DRF", percentage: 80, color: "bg-red-500" },
        { name: "MySQL/MongoDB", percentage: 85, color: "bg-orange-500" },
        { name: "API RESTful", percentage: 90, color: "bg-pink-500" },
      ]
    },
    mobile: {
      title: "Applications Mobiles",
      icon: Smartphone,
      color: "from-gray-600 to-gray-700",
      skills: [
        { name: "React Native", percentage: 85, color: "bg-gray-600" },
        { name: "Capacitor", percentage: 80, color: "bg-pink-500" },
        { name: "Firebase", percentage: 70, color: "bg-orange-500" },
        { name: "Redux", percentage: 75, color: "bg-gray-600" },
      ]
    },
    ai: {
      title: "Intelligence Artificielle",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", percentage: 85, color: "bg-orange-500" },
        { name: "Machine Learning", percentage: 70, color: "bg-red-500" },
        { name: "TensorFlow", percentage: 65, color: "bg-yellow-500" },
        { name: "Pandas/NumPy", percentage: 80, color: "bg-green-500" },
      ]
    },
    devops: {
      title: "DevOps & Déploiement",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git/GitHub", percentage: 85, color: "bg-gray-500" },
        { name: "Docker", percentage: 60, color: "bg-gray-500" },
        { name: "VPS Management", percentage: 75, color: "bg-green-500" },
        { name: "CI/CD", percentage: 65, color: "bg-gray-600" },
      ]
    },
    web: {
      title: "Développement Web",
      icon: Globe,
      color: "from-gray-500 to-gray-700",
      skills: [
        { name: "Responsive Design", percentage: 90, color: "bg-cyan-500" },
        { name: "SEO", percentage: 70, color: "bg-green-500" },
        { name: "Performance", percentage: 75, color: "bg-yellow-500" },
        { name: "Accessibilité", percentage: 65, color: "bg-purple-500" },
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.dataset.category;
            setVisibleSkills(prev => ({ ...prev, [category]: true }));
            // Unobserve après animation pour éviter rechargement
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const skillCards = sectionRef.current.querySelectorAll('[data-category]');
      skillCards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, isVisible }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setWidth(skill.percentage);
        }, 300);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.percentage]);

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-700 ">{skill.name}</span>
          <span className="text-sm font-bold text-gray-500 ">{skill.percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out progress-bar`}
            style={{ 
              width: `${width}%`,
              willChange: 'width'
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="competences" className="py-20 bg-white ">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Mes compétences
          </h2>
          <p className="text-xl text-gray-600  max-w-3xl mx-auto leading-relaxed">
            Un éventail de technologies modernes pour créer des solutions digitales complètes et performantes.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon;
            const isVisible = visibleSkills[key];
            
            return (
              <div 
                key={key}
                data-category={key}
                className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 "
              >
                {/* En-tête de la catégorie */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl mr-4`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 ">{category.title}</h3>
                </div>

                {/* Barres de compétences */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section des certifications/outils */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800  mb-4">Outils & Technologies</h3>
            <p className="text-gray-600 ">Les technologies que j'utilise quotidiennement</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", color: "bg-cyan-100  text-cyan-600 " },
              { name: "Python", color: "bg-yellow-100  text-yellow-600 " },
              { name: "Django", color: "bg-green-100  text-green-600 " },
              { name: "Node.js", color: "bg-green-100  text-green-600 " },
              { name: "MongoDB", color: "bg-green-100  text-green-600 " },
              { name: "MySQL", color: "bg-orange-100  text-orange-600 " },
              { name: "Git", color: "bg-gray-100  text-gray-600 " },
              { name: "Docker", color: "bg-gray-200  text-gray-700 " },
              { name: "AWS", color: "bg-orange-100  text-orange-600 " },
              { name: "Firebase", color: "bg-yellow-100  text-yellow-600 " },
              { name: "Tailwind", color: "bg-cyan-100  text-cyan-600 " },
              { name: "Figma", color: "bg-gray-200  text-gray-700 " },
            ].map((tool, index) => (
              <div 
                key={index}
                className="bg-white  rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 "
              >
                <div className={`px-4 py-2 rounded-lg font-semibold ${tool.color}`}>
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
