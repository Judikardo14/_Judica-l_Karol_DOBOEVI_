import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, School } from 'lucide-react';
import { GlassCard } from './GlassCard';

const educationData = [
  {
    year: "2025",
    title: "Formation en Data Science",
    institution: "Programme Data & IA pour l'Afrique - Africa Tech UP Tour",
    type: "formation",
    icon: <Award className="w-6 h-6" />
  },
  {
    year: "2023-2025",
    title: "Classes Préparatoires aux Études d'Ingénieur",
    institution: "INSPEI - UNSTIM, Abomey, Bénin",
    type: "études",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    year: "2020-2023",
    title: "Enseignement Secondaire",
    institution: "Collège d'Enseignement Général I de Dogbo",
    type: "études",
    icon: <School className="w-6 h-6" />
  },
  {
    year: "2016-2020",
    title: "Enseignement Secondaire",
    institution: "Complexe Scolaire Catholique de Dogbo",
    type: "études",
    icon: <School className="w-6 h-6" />
  }
];

const diplomesData = [
  {
    year: "2022-2023",
    title: "Baccalauréat série C",
    type: "Diplôme professionnel"
  },
  {
    year: "2019-2020",
    title: "Brevet d'Etude du premier cycle",
    type: "Diplôme académique"
  },
  {
    year: "2015-2016",
    title: "Certificat d'Etude Primaire",
    type: "Diplôme académique"
  }
];

export function EducationSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Cursus & Formation
          </h2>
          <p className="text-white/70 text-xl">Mon parcours académique et professionnel</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              Parcours Académique
            </h3>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-300 font-semibold">{item.year}</span>
                      </div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.institution}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Diplomas */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-400" />
              Diplômes Obtenus
            </h3>
            <div className="space-y-4">
              {diplomesData.map((diplome, index) => (
                <GlassCard key={index} delay={index * 0.15 + 0.3}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                      <Award className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 font-semibold">{diplome.year}</span>
                      </div>
                      <h4 className="text-white font-semibold mb-1">{diplome.title}</h4>
                      <p className="text-white/60 text-sm">{diplome.type}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}