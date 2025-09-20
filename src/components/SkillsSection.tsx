import { motion } from 'motion/react';
import { Code, FileText, Cpu, Globe, Users, Trophy } from 'lucide-react';
import { GlassCard } from './GlassCard';

const skillsData = [
  {
    category: "Programmation & Technologies",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 90, year: "2023-2024" },
      { name: "C", level: 85, year: "2023-2024" },
      { name: "Matlab", level: 80, year: "2023-2024" },
      { name: "LaTeX", level: 85, year: "2025" }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Outils Bureautiques",
    icon: <FileText className="w-6 h-6" />,
    skills: [
      { name: "Microsoft Word", level: 95, year: "2019-2023" },
      { name: "Microsoft Excel", level: 90, year: "2019-2023" },
      { name: "Microsoft PowerPoint", level: 92, year: "2019-2023" }
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    category: "Langues",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "Adja", level: 100, year: "Langue maternelle" },
      { name: "Français", level: 95, year: "Courant" },
      { name: "Anglais", level: 80, year: "Intermédiaire" }
    ],
    color: "from-green-500 to-teal-500"
  }
];

const activitiesData = [
  {
    title: "Club d'IA de l'ENSGMM",
    description: "Membre actif du club d'Intelligence Artificielle",
    year: "2024",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Génie en Herbe",
    description: "Joueur de compétition intellectuelle",
    year: "2023-2025",
    icon: <Trophy className="w-6 h-6" />
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Compétences & Aptitudes
          </h2>
          <p className="text-white/70 text-xl">Technologies, langues et activités</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillsData.map((category, categoryIndex) => (
            <GlassCard key={categoryIndex} delay={categoryIndex * 0.2}>
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 bg-gradient-to-r ${category.color} rounded-xl text-white mb-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.year}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Activities */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Users className="w-6 h-6 text-purple-400" />
            Autres Activités
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activitiesData.map((activity, index) => (
              <GlassCard key={index} delay={index * 0.2 + 0.5}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl text-purple-300">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyan-300 font-semibold text-sm">{activity.year}</span>
                    </div>
                    <h4 className="text-white font-bold mb-2">{activity.title}</h4>
                    <p className="text-white/70">{activity.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}