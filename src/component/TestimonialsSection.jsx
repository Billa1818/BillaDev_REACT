import React from "react";

const stars = (count, half = false) => (
  <div className="mb-4 flex gap-0.5 text-yellow-400 text-base md:text-lg">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>&#9733;</span>
    ))}
    {half && <span>&#9734;</span>}
  </div>
);

const testimonials = [
  {
    name: "Sophie Martin",
    role: "PDG, TechStart",
    quote: "Un développeur exceptionnel qui a su comprendre nos besoins et livrer un produit de qualité dans les délais impartis. Une communication claire et une expertise technique impressionnante.",
    fullStars: 5,
    half: false,
  },
  {
    name: "Marc Dubois",
    role: "Fondateur, E-Shop Plus",
    quote: "Notre site e-commerce a vu une augmentation de 40% des ventes depuis sa refonte. Performance, design et expérience utilisateur au top. Je recommande vivement !",
    fullStars: 5,
    half: false,
  },
  {
    name: "Julie Leroy",
    role: "Directrice Marketing, FitLife",
    quote: "Notre application mobile a reçu d'excellentes critiques depuis son lancement. Interface intuitive, fonctionnalités bien pensées et performance impeccable. Un vrai plaisir de travailler ensemble.",
    fullStars: 4,
    half: true,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      {/* En-tête */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12 text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
        Ce que disent mes clients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
          >
            {/* Avatar + nom */}
            <div className="flex items-center mb-4 gap-3 md:gap-4">
              <img
                src="/img/utilisateur.png"
                alt={t.name}
                className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight">{t.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm truncate">{t.role}</p>
              </div>
            </div>

            {/* Étoiles */}
            {stars(t.fullStars, t.half)}

            {/* Citation */}
            <p className="text-gray-600 italic leading-relaxed text-sm md:text-base flex-1">
              "{t.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;