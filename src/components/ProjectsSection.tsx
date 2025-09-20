import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Brain, Code, Database, Globe, Zap, Terminal } from 'lucide-react';
import { GlitchText } from './GlitchText';

const projectsData = [
  {
    id: 1,
    title: "Reconnaissance Chien et Chat",
    description: "Modèle de Deep Learning pour la classification d'images de chiens et chats avec haute précision",
    longDescription: "Développement d'un modèle CNN utilisant TensorFlow/Keras pour classifier automatiquement les images de chiens et chats. Architecture optimisée avec data augmentation et techniques de régularisation pour atteindre plus de 95% de précision.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib"],
    category: "Deep Learning",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDc5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-green-500 to-emerald-500",
    icon: Brain
  },
  {
    id: 2,
    title: "Système de Gestion de Stock",
    description: "Application complète de gestion d'inventaire pour entreprises avec interface moderne",
    longDescription: "Développement d'un système complet de gestion de stock avec authentification, gestion des fournisseurs, alertes automatiques, rapports détaillés et interface responsive. Intégration d'API REST et base de données sécurisée.",
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
    category: "Développement Web",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDc5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-cyan-500",
    icon: Database
  },
  {
    id: 3,
    title: "Prédiction Maladies Cardiovasculaires",
    description: "Modèle ML pour prédire les risques de maladies cardiaques basé sur des données médicales",
    longDescription: "Développement d'un modèle de Machine Learning utilisant plusieurs algorithmes (Random Forest, SVM, Logistic Regression) pour prédire les risques cardiovasculaires. Analyse exploratoire approfondie et optimisation des hyperparamètres.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    category: "Machine Learning",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDc5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-red-500 to-pink-500",
    icon: Brain
  },
  {
    id: 4,
    title: "Chatbot Éducatif avec Gemini",
    description: "Assistant virtuel intelligent utilisant l'API Gemini pour l'aide aux étudiants",
    longDescription: "Création d'un chatbot éducatif avancé intégrant l'API Google Gemini pour répondre aux questions des étudiants. Interface conversationnelle intuitive avec historique des conversations et système de feedback.",
    technologies: ["Python", "Gemini API", "Streamlit", "LangChain", "NLP"],
    category: "Natural Language Processing",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDc5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-indigo-500",
    icon: Terminal
  },
  {
    id: 5,
    title: "IA Prédictive Agricole",
    description: "Système d'IA pour prédire les rendements agricoles au Bénin utilisant machine learning",
    longDescription: "Développement d'un modèle prédictif utilisant Python, TensorFlow et des données météorologiques pour optimiser les rendements agricoles locaux. Analyse de données climatiques et de sols pour des recommandations personnalisées aux agriculteurs béninois.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "API Météo"],
    category: "Intelligence Artificielle",
    status: "En développement",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDc5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-green-500 to-teal-500",
    icon: Zap
  },
  {
    id: 6,
    title: "Portfolio Web Interactif",
    description: "Portfolio personnel cyberpunk avec animations 3D et effets futuristes avancés",
    longDescription: "Création de ce portfolio interactif avec des animations avancées, effets de particules, design cyberpunk et Easter egg Konami Code. Optimisation des performances et responsive design pour une expérience utilisateur immersive.",
    technologies: ["React", "Framer Motion", "TypeScript", "Tailwind", "Canvas"],
    category: "Développement Web",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDc5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-cyan-500 to-purple-500",
    icon: Globe
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé': return 'text-green-400 bg-green-400/20';
      case 'En développement': return 'text-yellow-400 bg-yellow-400/20';
      case 'En cours': return 'text-blue-400 bg-blue-400/20';
      case 'Prototype': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{ y }}
    >
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20h60v60h-60z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              <circle cx="80" cy="20" r="3" fill="currentColor"/>
              <circle cx="20" cy="80" r="3" fill="currentColor"/>
              <circle cx="80" cy="80" r="3" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400" />
        </svg>
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
            text="PROJETS & RÉALISATIONS"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
          />
          <p className="text-white/70 text-xl font-mono">
            {">"} Portfolio de projets innovants et technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <motion.div
                className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full hover:border-cyan-400/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                  
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${project.color}`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <motion.a
                        href="https://github.com/Judikardo14"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-cyan-400/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.button
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-purple-400/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-white/80 text-xs rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-md font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedProject === project.id ? "auto" : 0,
                    opacity: selectedProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-white/10">
                    <div className="pt-4">
                      <h4 className="text-white font-semibold mb-2 font-mono">Description détaillée:</h4>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                      
                      <h4 className="text-white font-semibold mb-2 font-mono">Technologies complètes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs rounded-full font-mono font-bold`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-5 blur-2xl`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Judikardo14"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              <Github className="w-5 h-5" />
              Voir mes projets sur GitHub
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}