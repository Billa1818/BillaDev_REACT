import React, { useState } from "react";
import { ChevronDown, HelpCircle, Clock, DollarSign, Wrench, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quels sont vos délais de livraison moyens ?",
      answer: "Les délais varient en fonction de la complexité du projet. Pour un site vitrine simple, comptez environ 2-3 semaines. Pour une application web ou mobile complexe, le délai peut s'étendre à 8-12 semaines. Je définis toujours un calendrier précis au début du projet avec des jalons intermédiaires pour vous tenir informé de l'avancement.",
      icon: Clock,
    },
    {
      question: "Comment se déroule la collaboration ?",
      answer: "Je travaille de manière agile, avec des points réguliers pour vous tenir informé de l'avancement. Après une phase d'analyse de vos besoins, je vous propose une maquette, puis procède au développement avec des validations intermédiaires. Une fois le projet terminé, je vous accompagne dans la mise en ligne et vous forme à l'utilisation. Communication transparente et feedback continu garantis.",
      icon: MessageCircle,
    },
    {
      question: "Proposez-vous un service de maintenance ?",
      answer: "Oui, je propose plusieurs formules de maintenance pour assurer le bon fonctionnement de votre site ou application. Cela inclut les mises à jour de sécurité, les correctifs de bugs, l'assistance technique, et l'ajout de nouvelles fonctionnalités. Nous pouvons discuter des options qui correspondent le mieux à vos besoins et à votre budget.",
      icon: Wrench,
    },
    {
      question: "Comment sont calculés vos tarifs ?",
      answer: "Mes tarifs sont basés sur la complexité du projet, les fonctionnalités demandées et le temps estimé pour la réalisation. Je propose soit un tarif forfaitaire pour l'ensemble du projet, soit un tarif journalier pour des missions spécifiques. Chaque devis est personnalisé selon vos besoins. N'hésitez pas à me contacter pour un devis gratuit et sans engagement.",
      icon: DollarSign,
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "J'utilise les technologies les plus récentes et performantes : React.js et Next.js pour le frontend, Django et Node.js pour le backend, React Native pour les applications mobiles, et Python pour l'intelligence artificielle. Je m'adapte également à vos préférences technologiques si vous en avez des spécifiques.",
      icon: HelpCircle,
    },
    {
      question: "Proposez-vous une formation à l'utilisation ?",
      answer: "Absolument ! Je considère qu'il est essentiel que vous puissiez utiliser votre solution en toute autonomie. Je propose des sessions de formation personnalisées pour vous et votre équipe, avec documentation complète et support technique. L'objectif est de vous rendre autonome dans l'utilisation de votre outil.",
      icon: HelpCircle,
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4 md:mb-6">
            Questions fréquentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Retrouvez les réponses aux questions les plus courantes sur mes services 
            et ma méthode de travail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index}
                  className="card hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between p-4 md:p-6 gap-3">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="p-2 md:p-3 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mr-3 md:mr-4 flex-shrink-0">
                          <Icon className="size-5 md:size-6 text-white" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 pr-2 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="size-5 md:size-6 text-gray-500" />
                      </div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center animate-fadeInUp">
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-gray-700 to-gray-900 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              N'hésitez pas à me contacter directement. Je serai ravi de répondre 
              à toutes vos questions et de discuter de votre projet.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-600 transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              <MessageCircle className="mr-2 size-5 flex-shrink-0" />
              Me poser une question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;