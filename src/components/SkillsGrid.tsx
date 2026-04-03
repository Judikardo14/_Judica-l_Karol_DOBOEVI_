import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Code, Database, Brain, Globe, FileText, Terminal } from 'lucide-react';
import { GlitchText } from './GlitchText';

const skillsData = [
  {
    category: "Programmation",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Python", level: 70, description: "Data Science, ML, Automatisation" },
      { name: "C", level: 65, description: "Programmation système (cours)" },
      { name: "Matlab", level: 65, description: "Calcul scientifique (cours)" },
      { name: "LaTeX", level: 75, description: "Documentation technique" }
    ]
  },
  {
    category: "Intelligence Artificielle",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Machine Learning", level: 65, description: "Algorithmes supervisés/non-supervisés" },
      { name: "Data Science", level: 65, description: "Analyse et visualisation" },
      { name: "LightGBM / Scikit-learn", level: 60, description: "Modèles ensemblistes" },
      { name: "NLP (notions)", level: 40, description: "Traitement du langage naturel" }
    ]
  },
  {
    category: "Outils & Technologies",
    icon: Terminal,
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Git", level: 70, description: "Contrôle de version" },
      { name: "Linux (notions)", level: 40, description: "Ligne de commande" },
      { name: "Jupyter", level: 80, description: "Notebooks scientifiques" },
      { name: "Streamlit", level: 65, description: "Dashboards Python" }
    ]
  },
  {
    category: "Bureautique",
    icon: FileText,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Microsoft Office", level: 90, description: "Suite complète" },
      { name: "Excel Avancé", level: 85, description: "Analyse de données" },
      { name: "PowerPoint", level: 88, description: "Présentations professionnelles" },
      { name: "Word", level: 90, description: "Rédaction technique" }
    ]
  },
  {
    category: "Langues",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Adja", level: 100, description: "Langue maternelle" },
      { name: "Français", level: 95, description: "Langue de travail" },
      { name: "Anglais", level: 70, description: "Technique et scientifique" },
      { name: "Fon / Yoruba", level: 60, description: "Langues locales" }
    ]
  },
  {
    category: "Mathématiques",
    icon: Database,
    color: "from-red-500 to-rose-500",
    skills: [
      { name: "Algèbre linéaire", level: 75, description: "Fondements du ML" },
      { name: "Probabilités & Statistiques", level: 70, description: "Analyse de données" },
      { name: "Modélisation numérique", level: 65, description: "Équations différentielles" },
      { name: "Chaînes de Markov", level: 60, description: "Processus stochastiques" }
    ]
  }
];

export function SkillsGrid() {
  const ref = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{ y }}
    >
      {/* Background matrix effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 font-mono text-xs text-cyan-400 leading-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              {Math.random().toString(2).substr(2, 1)}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText
            text="COMPÉTENCES & TECHNOLOGIES"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          />
          <p className="text-white/70 text-xl font-mono">
            {">"} Stack technologique et expertises
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02]">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative cursor-pointer"
                      onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ x: 5 }}
                    >
                      {/* Skill name and level */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium font-mono">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                        
                        {/* Animated glow */}
                        <motion.div
                          className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r ${category.color} opacity-50 blur-sm`}
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      
                      {/* Description tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1 : 0,
                          y: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 0 : 10
                        }}
                        className="mt-2 text-white/60 text-sm italic"
                      >
                        {skill.description}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-5 blur-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-mono">
            {">"} Activités & Engagements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Club d'IA — ENSGMM",
                period: "2024 - Présent",
                description: "Membre actif du bureau du Club d'IA de l'ENSGMM — organisation de compétitions et développement de projets à impact social.",
                icon: Brain,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Génie en Herbe",
                period: "2023",
                description: "Compétition intellectuelle universitaire développant les capacités de réflexion rapide et de culture générale.",
                icon: Terminal,
                color: "from-cyan-500 to-blue-500"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.02, rotateY: index === 0 ? 3 : -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${activity.color} shrink-0`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-white font-bold">{activity.title}</h4>
                        <span className="text-cyan-400 text-sm font-mono">{activity.period}</span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${activity.color} opacity-5 blur-xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
