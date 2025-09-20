import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { GlitchText } from './GlitchText';

export function ContactSection() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isGlitching, setIsGlitching] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGlitching(true);
    
    try {
      // Using EmailJS or similar service (you'll need to configure this)
      // For now, we'll create a mailto link as fallback
      const subject = `Portfolio Contact - ${formData.name}`;
      const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:judikardo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setIsGlitching(false);
        alert('Votre client email s\'est ouvert avec le message pré-rempli. Vous pouvez maintenant l\'envoyer!');
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
      
    } catch (error) {
      setTimeout(() => {
        setIsGlitching(false);
        alert('Erreur lors de l\'envoi. Veuillez réessayer ou m\'écrire directement à judikardo@gmail.com');
      }, 1000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Judikardo14',
      color: 'hover:text-white hover:bg-gray-800',
      description: 'Repositories & Code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/judicael-doboevi',
      color: 'hover:text-white hover:bg-blue-600',
      description: 'Professional Network'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/iveobod',
      color: 'hover:text-white hover:bg-sky-500',
      description: 'Tech Updates'
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      url: 'https://discord.com/users/karol_hu',
      color: 'hover:text-white hover:bg-indigo-600',
      description: 'Tech Community'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{ y }}
    >
      {/* Background matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyan-400 text-sm"
            style={{ left: `${i * 5}%` }}
            animate={{
              y: ["-100vh", "100vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random().toString(36).charAt(0)}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText
            text="CONTACT & COLLABORATION"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
            trigger={isGlitching}
          />
          <p className="text-white/70 text-xl font-mono">
            {">"} Construisons l'avenir ensemble
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                Informations de contact
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: 'Téléphone',
                    value: ['(+229) 01 97 20 89 54', '(+229) 01 44 81 14 23'],
                    color: 'text-green-400'
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: ['judikardo@gmail.com'],
                    color: 'text-blue-400'
                  },
                  {
                    icon: MapPin,
                    label: 'Localisation',
                    value: ['Abomey, Bénin', 'UNSTIM Campus'],
                    color: 'text-purple-400'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-2 rounded-lg bg-gray-800/50 ${contact.color}`}>
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm font-mono uppercase tracking-wider">
                        {contact.label}
                      </div>
                      {contact.value.map((val, valIndex) => (
                        <div key={valIndex} className="text-white font-medium">
                          {val}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                Réseaux sociaux
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-white/5 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-xs opacity-70">{social.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              animate={{
                borderColor: ['rgba(255,255,255,0.1)', 'rgba(0,255,255,0.3)', 'rgba(255,255,255,0.1)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono font-bold">DISPONIBLE</span>
              </div>
              <p className="text-white/70 text-sm">
                Ouvert aux opportunités de stage, projets collaboratifs et missions freelance
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <Send className="w-6 h-6 text-cyan-400" />
                Envoyer un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-mono mb-2">
                    Nom complet
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors font-mono"
                    placeholder="Votre nom..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-mono mb-2">
                    Adresse email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors font-mono"
                    placeholder="votre@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-mono mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors font-mono resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isGlitching}
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white overflow-hidden disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={isGlitching ? {
                    x: [0, -2, 2, -2, 2, 0],
                    textShadow: [
                      "0 0 0 transparent",
                      "2px 0 0 #ff00ff, -2px 0 0 #00ffff",
                      "0 0 0 transparent"
                    ]
                  } : {}}
                  transition={isGlitching ? { duration: 0.1, repeat: 10 } : {}}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-mono">
                    <Send className="w-5 h-5" />
                    {isGlitching ? 'TRANSMISSION...' : 'ENVOYER MESSAGE'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Sending animation */}
                  {isGlitching && (
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.5, repeat: 4 }}
                    />
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <blockquote className="text-white/80 text-lg italic font-mono mb-4">
              "L'innovation distingue les leaders des suiveurs."
            </blockquote>
            <cite className="text-cyan-400 text-sm">- Steve Jobs</cite>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}