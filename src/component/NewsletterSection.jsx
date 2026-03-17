import React, { useState } from "react";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 2000);
  };

  const benefits = [
    {
      icon: Mail,
      title: "Contenu exclusif",
      description: "Articles et tutoriels que je ne partage nulle part ailleurs"
    },
    {
      icon: Sparkles,
      title: "Conseils pratiques",
      description: "Astuces et bonnes pratiques pour améliorer vos projets"
    },
    {
      icon: CheckCircle,
      title: "Pas de spam",
      description: "Un email par semaine maximum, contenu de qualité uniquement"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-500/10 rounded-full animate-float" style={{animationDelay:'1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gray-500/10 rounded-full animate-float" style={{animationDelay:'2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full animate-float" style={{animationDelay:'3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">

          {/* Icône décorative */}
          <div className="flex justify-center mb-5 md:mb-6">
            <div className="p-3 md:p-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl">
              <Sparkles className="size-6 md:size-8 text-white" />
            </div>
          </div>

          {/* Titre */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white px-2">
            Restez informé de mes dernières actualités
          </h2>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-300 mb-7 md:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
            Recevez mes derniers articles, conseils en développement, et actualités 
            directement dans votre boîte mail. Pas de spam, juste du contenu de qualité.
          </p>

          {/* Formulaire */}
          <div className="max-w-2xl mx-auto">
            {isSubscribed ? (
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="size-10 md:size-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Merci pour votre abonnement !
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Vous recevrez bientôt mes dernières actualités dans votre boîte mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 md:size-5 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      required
                      className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                        Abonnement...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4 md:size-5 flex-shrink-0" />
                        S'abonner
                      </>
                    )}
                  </button>
                </div>

                <p className="text-gray-400 text-xs md:text-sm mt-4">
                  En vous abonnant, vous acceptez de recevoir mes emails. 
                  Vous pouvez vous désabonner à tout moment.
                </p>
              </form>
            )}
          </div>

          {/* Avantages */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="glass rounded-xl p-5 md:p-6 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-2.5 md:p-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl">
                      <Icon className="size-5 md:size-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;