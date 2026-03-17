import React from "react";
import { Download, MapPin, Phone, Mail, Calendar, Award, Code, Database, Cpu, ExternalLink } from "lucide-react";

const AboutSection = () => (
  <section id="apropos" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Passionné par la technologie et l'innovation, je crée des solutions digitales 
            qui transforment les idées en réalité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image et informations personnelles */}
          <div>
            <div className="relative flex justify-center">
              <div className="relative z-10">
                <img 
                  src="/img/utilisateur.png" 
                  alt="ASSOUMA Z. Billa - Développeur Fullstack" 
                  className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-3xl shadow-2xl object-cover border-4 border-white hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-700/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -top-6 -right-2 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-2 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Informations personnelles */}
            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Localisation",
                  content: "Parakou, Bénin",
                  bg: "bg-gray-200",
                  iconColor: "text-gray-700",
                  isLink: false
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  content: "+229 53 40 01 60",
                  href: "https://wa.me/22953400160",
                  bg: "bg-green-100",
                  iconColor: "text-green-600",
                  hoverColor: "hover:text-green-600",
                  isLink: true
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@assouma-billa.com",
                  href: "mailto:contact@assouma-billa.com",
                  bg: "bg-gray-200",
                  iconColor: "text-gray-700",
                  hoverColor: "hover:text-gray-800",
                  isLink: true
                },
                {
                  icon: Calendar,
                  title: "Disponibilité",
                  content: "Freelance / CDI",
                  bg: "bg-orange-100",
                  iconColor: "text-orange-600",
                  isLink: false
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 ${item.bg} rounded-lg mr-3 flex-shrink-0`}>
                        <Icon className={`size-5 ${item.iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    </div>
                    {item.isLink ? (
                      <a href={item.href} className={`text-gray-600 ${item.hoverColor} transition-colors text-sm sm:text-base break-all`}>{item.content}</a>
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base">{item.content}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="space-y-6 md:space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl mr-4 flex-shrink-0">
                  <Award className="size-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Développeur Fullstack</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                Bonjour ! Je suis <strong>ASSOUMA Z. Billa</strong>, un développeur web passionné avec plus de 4 ans d'expérience 
                dans la création de solutions web innovantes. Spécialisé dans le développement fullstack, j'aime créer des 
                applications performantes, accessibles et esthétiques.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Mon expertise inclut les technologies front-end modernes comme <strong>React, React Native</strong>, <strong>Tailwind CSS</strong> ainsi que des frameworks back-end comme <strong>Django</strong>, <strong>Django REST Framework</strong>, <strong>Node.js</strong>, et l'ingénierie en intelligence artificielle avec <strong>Python</strong>.
              </p>
            </div>

            {/* Spécialisations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Code, label: "Frontend", desc: "React, React Native, Tailwind CSS", bg: "bg-gray-200", iconColor: "text-gray-700" },
                { icon: Database, label: "Backend", desc: "Django, Node.js, APIs REST", bg: "bg-green-100", iconColor: "text-green-600" },
                { icon: Cpu, label: "IA & ML", desc: "Python, Machine Learning", bg: "bg-gray-200", iconColor: "text-gray-700" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className={`p-3 ${item.bg} rounded-xl mb-3 mx-auto w-fit`}>
                      <Icon className={`size-6 ${item.iconColor}`} />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.label}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Parcours */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Mon parcours</h4>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                J'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes 
                et solutions IA pour des clients de différents secteurs. Mon approche se base sur la 
                compréhension approfondie des besoins clients et la livraison de solutions sur mesure.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Passionné par l'apprentissage continu, je reste constamment à jour avec les dernières 
                technologies et tendances du développement web pour offrir les meilleures solutions possibles.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-2xl hover:from-gray-800 hover:to-gray-950 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <Mail className="mr-2 size-5 flex-shrink-0" />
                Me contacter
              </a>
              <a 
                href="https://assouma-billa.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-700 text-gray-700 font-semibold rounded-2xl hover:bg-gray-700 hover:text-white transition-all duration-300 text-sm md:text-base"
              >
                <ExternalLink className="mr-2 size-5 flex-shrink-0" />
                Voir mon portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;