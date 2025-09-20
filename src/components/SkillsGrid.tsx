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
      { name: "Python", level: 80, description: "Data Science, ML, Automation" },
      { name: "C", level: 75, description: "Programmation système" },
      { name: "Matlab", level: 80, description: "Calcul scientifique" },
      { name: "LaTeX", level: 65, description: "Documentation technique" }
    ]
  },
  {
    category: "Intelligence Artificielle",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Machine Learning", level: 80, description: "Algorithmes d'apprentissage" },
      { name: "Data Science", level: 75, description: "Analyse et visualisation" },
      { name: "Neural Networks", level: 70, description: "Deep Learning" },
      { name: "NLP", level: 60, description: "Traitement du langage" }
    ]
  },
  {
    category: "Outils & Technologies",
    icon: Terminal,
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Git", level: 85, description: "Contrôle de version" },
      { name: "Docker", level: 50, description: "Containerisation" },
      { name: "Linux", level: 50, description: "Administration système" },
      { name: "Jupyter", level: 90, description: "Notebooks scientifiques" }
    ]
  },
  {
    category: "Bureautique",
    icon: FileText,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Microsoft Office", level: 95, description: "Suite complète" },
      { name: "Excel Avancé", level: 90, description: "Analyse de données" },
      { name: "PowerPoint", level: 92, description: "Présentations pro" },
      { name: "Word", level: 95, description: "Rédaction technique" }
    ]
  },
  {
    category: "Langues",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Français", level: 95, description: "Langue de travail" },
      { name: "Anglais", level: 80, description: "Technique et scientifique" },
      { name: "Adja", level: 100, description: "Langue maternelle" }
    ]
  },
  {
    category: "Bases de Données",
    icon: Database,
    color: "from-red-500 to-rose-500",
    skills: [
      { name: "SQL", level: 65, description: "Requêtes complexes" },
      { name: "MongoDB", level: 40, description: "NoSQL" },
      { name: "PostgreSQL", level: 30, description: "SGBD relationnel" },
      { name: "Data Modeling", level: 55, description: "Conception BDD" }
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
                title: "Club d'IA - ENSGMM",
                period: "2024 - Présent",
                description: "Membre actif dans le développement de projets d'Intelligence Artificielle et participation aux hackathons",
                icon: Brain,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Génie en Herbe",
                period: "2023 - 2025",
                description: "Compétition intellectuelle développant les capacités de réflexion rapide et de culture générale",
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