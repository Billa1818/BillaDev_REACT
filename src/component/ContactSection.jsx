import React, { useState } from "react";
import { 
  MapPin, Phone, Mail, Send, Github, Linkedin, Twitter, MessageCircle,
  Clock, CheckCircle, ExternalLink
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    { icon: MapPin,  title: "Adresse",       content: "+229 53 40 01 60",              bgColor: "bg-gray-100",    iconColor: "text-gray-700"   },
    { icon: Phone,   title: "Téléphone",      content: "+229 53 40 01 60",              bgColor: "bg-green-50",    iconColor: "text-green-600"  },
    { icon: Mail,    title: "Email",          content: "contact@assouma-billa.com",     bgColor: "bg-gray-100",    iconColor: "text-gray-700"   },
    { icon: Clock,   title: "Disponibilité",  content: "24h/24",                        bgColor: "bg-orange-50",   iconColor: "text-orange-600" },
  ];

  const socialLinks = [
    { icon: Github,   href: "https://github.com/Billa1818",                        label: "GitHub",   color: "hover:bg-gray-800"  },
    { icon: Linkedin, href: "https://linkedin.com/in/z-billa-assouma-b1764931b",   label: "LinkedIn", color: "hover:bg-blue-600"  },
    { icon: Twitter,  href: "https://twitter.com/billa.assouma.18",                label: "Twitter",  color: "hover:bg-blue-400"  },
    { icon: Mail,     href: "mailto:contact@assouma-billa.com",                    label: "Email",    color: "hover:bg-red-500"   },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay:'1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{animationDelay:'2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse" style={{animationDelay:'3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Contactez-moi
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Prêt à donner vie à votre projet ? Discutons de vos besoins et créons ensemble 
            une solution sur mesure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Informations de contact */}
          <div>
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                <MessageCircle className="mr-3 size-6 flex-shrink-0" />
                Parlons de votre projet
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Pour toute demande de devis ou de renseignements, n'hésitez pas à me contacter. 
                Je vous répondrai dans les plus brefs délais et nous pourrons discuter de votre 
                projet en détail.
              </p>
            </div>

            {/* Cartes contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 hover:scale-105 transition-transform duration-300 border border-white/20">
                    <div className="flex items-center mb-3">
                      <div className={`p-3 ${info.bgColor} rounded-xl mr-4 flex-shrink-0`}>
                        <Icon className={`size-5 md:size-6 ${info.iconColor}`} />
                      </div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base break-all">{info.content}</p>
                  </div>
                );
              })}
            </div>

            {/* Réseaux sociaux */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Suivez-moi</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`group p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-110 transition-all duration-300 border border-white/20 ${social.color}`}
                    >
                      <Icon className="size-5 md:size-6 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Temps de réponse */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <CheckCircle className="size-6 text-green-400 mr-3 flex-shrink-0" />
                <h4 className="font-semibold text-white">Temps de réponse</h4>
              </div>
              <p className="text-blue-100 text-sm md:text-base">
                Je m'engage à vous répondre dans les <strong>24 heures</strong> pour toute demande.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Envoyez-moi un message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                  <div className="flex items-center text-green-100 text-sm md:text-base">
                    <CheckCircle className="size-5 mr-2 flex-shrink-0" />
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm md:text-base">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm md:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2 text-sm md:text-base">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm md:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-700 mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-5 flex-shrink-0" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>

              <p className="text-gray-400 text-xs md:text-sm mt-4 text-center">
                * Champs obligatoires
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;