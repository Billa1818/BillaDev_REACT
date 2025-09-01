import React from "react";
import { Download, MapPin, Phone, Mail, Calendar, Award, Code, Database, Cpu, ExternalLink } from "lucide-react";

const AboutSection = () => (
  <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 ">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600  max-w-3xl mx-auto leading-relaxed">
            Passionné par la technologie et l'innovation, je crée des solutions digitales 
            qui transforment les idées en réalité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image et informations personnelles */}
          <div>
            <div className="relative">
              {/* Image principale */}
              <div className="relative z-10">
                <img 
                  src="/img/utilisateur.png" 
                  alt="ASSOUMA Z. Billa - Développeur Fullstack" 
                  className="w-80 h-80 mx-auto rounded-3xl shadow-2xl object-cover border-4 border-white  hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Informations personnelles */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100  rounded-lg mr-3">
                    <MapPin className="size-5 text-blue-600 " />
                  </div>
                  <h3 className="font-semibold text-gray-800 ">Localisation</h3>
                </div>
                <p className="text-gray-600 ">Parakou, Bénin</p>
              </div>

              <div className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-100  rounded-lg mr-3">
                    <Phone className="size-5 text-green-600 " />
                  </div>
                  <h3 className="font-semibold text-gray-800 ">Téléphone</h3>
                </div>
                <a href="https://wa.me/22953400160" className="text-gray-600  hover:text-green-600  transition-colors">+229 53 40 01 60</a>
              </div>

              <div className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-purple-100  rounded-lg mr-3">
                    <Mail className="size-5 text-purple-600 " />
                  </div>
                  <h3 className="font-semibold text-gray-800 ">Email</h3>
                </div>
                <a href="mailto:az9245054@gmail.com" className="text-gray-600  hover:text-purple-600  transition-colors">az9245054@gmail.com</a>
              </div>

              <div className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-orange-100  rounded-lg mr-3">
                    <Calendar className="size-5 text-orange-600 " />
                  </div>
                  <h3 className="font-semibold text-gray-800 ">Disponibilité</h3>
                </div>
                <p className="text-gray-600 ">Freelance / CDI</p>
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div>
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4">
                    <Award className="size-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ">Développeur Fullstack</h3>
                </div>
                <p className="text-gray-600  leading-relaxed mb-4">
                  Bonjour ! Je suis <strong>ASSOUMA Z. Billa</strong>, un développeur web passionné avec plus de 2 ans d'expérience 
                  dans la création de solutions web innovantes. Spécialisé dans le développement fullstack, j'aime créer des 
                  applications performantes, accessibles et esthétiques.
                </p>
                <p className="text-gray-600  leading-relaxed">
                  Mon expertise inclut les technologies front-end modernes comme <strong>React</strong>, <strong>Tailwind CSS</strong> 
                  ainsi que des frameworks back-end comme <strong>Django</strong>, <strong>Django REST Framework</strong>, 
                  <strong>Node.js</strong>, et l'ingénierie en intelligence artificielle avec <strong>Python</strong>.
                </p>
              </div>

              {/* Spécialisations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white  rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                  <div className="p-3 bg-blue-100  rounded-xl mb-3 mx-auto w-fit">
                    <Code className="size-6 text-blue-600 " />
                  </div>
                  <h4 className="font-semibold text-gray-800  mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600 ">React, Tailwind CSS, JavaScript</p>
                </div>

                <div className="bg-white  rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                  <div className="p-3 bg-green-100  rounded-xl mb-3 mx-auto w-fit">
                    <Database className="size-6 text-green-600 " />
                  </div>
                  <h4 className="font-semibold text-gray-800  mb-2">Backend</h4>
                  <p className="text-sm text-gray-600 ">Django, Node.js, APIs REST</p>
                </div>

                <div className="bg-white  rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                  <div className="p-3 bg-purple-100  rounded-xl mb-3 mx-auto w-fit">
                    <Cpu className="size-6 text-purple-600 " />
                  </div>
                  <h4 className="font-semibold text-gray-800  mb-2">IA & ML</h4>
                  <p className="text-sm text-gray-600 ">Python, Machine Learning</p>
                </div>
              </div>

              {/* Expérience */}
              <div className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ">
                <h4 className="text-xl font-bold text-gray-800  mb-4">Mon parcours</h4>
                <p className="text-gray-600  leading-relaxed mb-4">
                  J'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes 
                  et solutions IA pour des clients de différents secteurs. Mon approche se base sur la 
                  compréhension approfondie des besoins clients et la livraison de solutions sur mesure.
                </p>
                <p className="text-gray-600  leading-relaxed">
                  Passionné par l'apprentissage continu, je reste constamment à jour avec les dernières 
                  technologies et tendances du développement web pour offrir les meilleures solutions possibles.
                </p>
              </div>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="mr-2 size-5" />
                  Me contacter
                </a>
                <a 
                  href="https://billa-dev-react.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600  font-semibold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="mr-2 size-5" />
                  Voir mon portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
