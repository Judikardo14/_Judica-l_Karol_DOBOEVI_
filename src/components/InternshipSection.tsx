import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, TrendingUp, Users, FileText } from 'lucide-react';
import { GlitchText } from './GlitchText';

export function InternshipSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{ y }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Corporate pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(138, 43, 226, 0.2) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border border-cyan-400/20 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border border-purple-400/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
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
            text="EXPÉRIENCE PROFESSIONNELLE"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4"
          />
          <p className="text-white/70 text-xl font-mono">
            {">"} Immersion en entreprise et développement professionnel
          </p>
        </motion.div>

        {/* Main Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative group">
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Stage d'Immersion en Entreprise
                    </h3>
                    <p className="text-green-400 font-mono font-semibold">
                      Compagnie Béninoise des Textiles
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-sm font-bold">ACCOMPLI</span>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    icon: Calendar,
                    label: "Durée",
                    value: "5 semaines",
                    color: "text-blue-400"
                  },
                  {
                    icon: Users,
                    label: "Département",
                    value: "Financier",
                    color: "text-purple-400"
                  },
                  {
                    icon: MapPin,
                    label: "Localisation",
                    value: "Bénin",
                    color: "text-green-400"
                  }
                ].map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-white/5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`p-2 rounded-lg bg-gray-700/50 ${detail.color}`}>
                      <detail.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm font-mono uppercase tracking-wider">
                        {detail.label}
                      </div>
                      <div className="text-white font-semibold">{detail.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white font-bold mb-3 font-mono flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  Description de la mission
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Stage d'immersion professionnelle de 5 semaines au sein du département financier 
                  de la Compagnie Béninoise des Textiles. Cette expérience m'a permis de découvrir 
                  le fonctionnement interne d'une entreprise industrielle, d'acquérir des compétences 
                  en gestion financière et de comprendre les enjeux économiques du secteur textile au Bénin.
                </p>
              </div>

              {/* Skills Acquired */}
              <div>
                <h4 className="text-white font-bold mb-3 font-mono flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  Compétences développées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Analyse financière",
                    "Gestion budgétaire", 
                    "Reporting",
                    "Excel avancé",
                    "Travail en équipe",
                    "Communication professionnelle"
                  ].map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm rounded-full font-mono font-semibold"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-blue-500/5 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Semaines d'immersion", value: "5", color: "text-green-400" },
            { label: "Rapports analysés", value: "15+", color: "text-blue-400" },
            { label: "Compétences acquises", value: "6", color: "text-purple-400" },
            { label: "Évaluation", value: "Excellent", color: "text-yellow-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 group-hover:border-cyan-400/30 transition-colors">
                <div className={`text-3xl font-bold font-mono ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-lg bg-cyan-400/5 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-2 font-mono">
              Ouvert aux nouvelles opportunités
            </h4>
            <p className="text-white/70 text-sm">
              Recherche active de stages et missions pour approfondir mon expérience professionnelle 
              en Data Science et Intelligence Artificielle.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}