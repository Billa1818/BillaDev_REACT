import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  Clock,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Parakou, Bénin",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+229 53 40 01 60",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "az9245054@gmail.com",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      content: "Lun - Ven, 9h - 18h",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Billa1818",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/z-billa-assouma-b1764931b",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/billa.assouma.18",
      label: "Twitter",
      color: "hover:bg-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:az9245054@gmail.com",
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Contactez-moi
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Prêt à donner vie à votre projet ? Discutons de vos besoins et créons ensemble 
            une solution sur mesure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="mr-3 size-6" />
                Parlons de votre projet
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Pour toute demande de devis ou de renseignements, n'hésitez pas à me contacter. 
                Je vous répondrai dans les plus brefs délais et nous pourrons discuter de votre 
                projet en détail.
              </p>
            </div>

            {/* Cartes d'informations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-white/20"
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-3 ${info.bgColor} rounded-xl mr-4`}>
                        <Icon className={`size-6 ${info.iconColor}`} />
                      </div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                    </div>
                    <p className="text-blue-100">{info.content}</p>
                  </div>
                );
              })}
            </div>

            {/* Réseaux sociaux */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-110 transition-all duration-300 border border-white/20 ${social.color}`}
                    >
                      <Icon className="size-6 text-white group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Temps de réponse */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <CheckCircle className="size-6 text-green-400 mr-3" />
                <h4 className="font-semibold text-white">Temps de réponse</h4>
              </div>
              <p className="text-blue-100">
                Je m'engage à vous répondre dans les <strong>24 heures</strong> pour toute demande.
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envoyez-moi un message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                  <div className="flex items-center text-green-100">
                    <CheckCircle className="size-5 mr-2" />
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>

              <p className="text-blue-200 text-sm mt-4 text-center">
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
