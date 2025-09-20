import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Calendar, GraduationCap, Award, Brain, Code, School } from 'lucide-react';
import { GlitchText } from './GlitchText';

const timelineData = [
  {
    year: "2025-2028",
    title: "Cycle Ingénieur - Modélisation Mathématique",
    organization: "ENSGMM - Abomey",
    description: "École Nationale Supérieure de Génie Mathématique et Modélisation. Formation d'ingénieur spécialisé en modélisation mathématique et applications numériques",
    type: "En cours",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2025",
    title: "Formation Data Science & IA",
    organization: "Africa Tech UP Tour",
    description: "Programme intensif en Data Science et Intelligence Artificielle",
    type: "formation",
    icon: Brain,
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2023-2025",
    title: "Classes Préparatoires Ingénieur",
    organization: "INSPEI - UNSTIM, Abomey",
    description: "Institut National Supérieur des classes Préparatoires aux Études d'Ingénieur",
    type: "education",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500"
  },
  {
    year: "2022-2023",
    title: "Baccalauréat série C",
    organization: "Mention Très Bien avec 17.182/20 de moyenne",
    description: "Diplôme du baccalauréat scientifique avec brio",
    type: "diploma",
    icon: Award,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "2020-2023",
    title: "Enseignement Secondaire",
    organization: "Collège d'Enseignement Général I de Dogbo",
    description: "Formation secondaire complète avec focus sur les sciences",
    type: "education",
    icon: School,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "2024",
    title: "Club d'IA - ENSGMM",
    organization: "Membre Actif",
    description: "Participation active dans le développement de projets d'Intelligence Artificielle",
    type: "activity",
    icon: Code,
    color: "from-indigo-500 to-purple-500"
  }
];

export function TimelineSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{ y }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
            text="PARCOURS & FORMATION"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
          />
          <p className="text-white/70 text-xl font-mono">
            {">"} Timeline académique et professionnelle
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 opacity-30" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  className="w-5/12 group"
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
                    {/* Year badge */}
                    <div className="absolute -top-3 left-6">
                      <div className={`px-4 py-1 bg-gradient-to-r ${item.color} rounded-full text-white font-mono text-sm font-bold`}>
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="mt-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-cyan-400 font-mono text-sm">{item.organization}</p>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                      
                      {/* Type indicator */}
                      <div className="mt-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                        <span className="text-white/50 text-xs font-mono uppercase">{item.type}</span>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-5 blur-xl`} />
                    </div>
                  </div>
                </motion.div>
                
                {/* Center node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} relative z-10`} />
                    <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} animate-pulse opacity-50 scale-150`} />
                  </motion.div>
                </div>
                
                {/* Empty space for layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Années d'études", value: "5+", color: "text-cyan-400" },
            { label: "Projets IA", value: "10+", color: "text-purple-400" },
            { label: "Technologies maîtrisées", value: "8+", color: "text-green-400" },
            { label: "Certifications", value: "3", color: "text-yellow-400" }
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
      </div>
    </motion.section>
  );
}