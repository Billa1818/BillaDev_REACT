import React from "react";
import { useState } from "react";

const faqs = [
  {
    question: "Quels sont vos délais de livraison moyens ?",
    answer: "Les délais varient en fonction de la complexité du projet. Pour un site vitrine simple, comptez environ 2-3 semaines. Pour une application web ou mobile complexe, le délai peut s'étendre à 8-12 semaines. Je définis toujours un calendrier précis au début du projet."
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer: "Je travaille de manière agile, avec des points réguliers pour vous tenir informé de l'avancement. Après une phase d'analyse de vos besoins, je vous propose une maquette, puis procède au développement avec des validations intermédiaires. Une fois le projet terminé, je vous accompagne dans la mise en ligne et vous forme à l'utilisation."
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer: "Oui, je propose plusieurs formules de maintenance pour assurer le bon fonctionnement de votre site ou application. Cela inclut les mises à jour de sécurité, les correctifs de bugs et l'assistance technique. Nous pouvons discuter des options qui correspondent le mieux à vos besoins."
  },
  {
    question: "Comment sont calculés vos tarifs ?",
    answer: "Mes tarifs sont basés sur la complexité du projet, les fonctionnalités demandées et le temps estimé pour la réalisation. Je propose soit un tarif forfaitaire pour l'ensemble du projet, soit un tarif journalier pour des missions spécifiques. N'hésitez pas à me contacter pour un devis personnalisé."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Questions fréquentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div className="mb-6" key={idx}>
              <button
                className="faq-toggle flex justify-between items-center w-full p-5 bg-gray-50 rounded-lg text-left"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <i className={`fas fa-chevron-down transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`faq-content ${openIndex === idx ? '' : 'hidden'} p-5 bg-gray-50 rounded-b-lg mt-[-5px]`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 