import { motion } from 'motion/react';
import { Brain, Code, Heart, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Judicaël Karol DOBOEVI
            </span>
            <Code className="w-6 h-6 text-cyan-400" />
          </div>
          
          <p className="text-white/70 mb-4">
            Étudiant Ingénieur • Data Science & IA • Futur Innovateur
          </p>
          
          <div className="flex items-center justify-center gap-2 text-white/60 mb-6">
            <MapPin className="w-4 h-4" />
            <span>Abomey, Bénin</span>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/50 flex items-center justify-center gap-2">
              Fait avec <Heart className="w-4 h-4 text-red-400" /> à Abomey le 15/07/2025
            </p>
            <p className="text-white/40 mt-2 text-sm">
              "Je certifie sur l'honneur justes et vérifiables tous les renseignements ci-dessus."
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}