import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Brain, Code, GraduationCap, Calendar } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Photo and Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-20 scale-110" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMGFmcmljYW4lMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgwNzkwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/
              alt="Judicaël Karol DOBOEVI"
              className="relative w-64 h-64 object-cover rounded-full mx-auto border-4 border-white/20 shadow-2xl"
            />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Judicaël Karol
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white/90"
          >
            DOBOEVI
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-white/90">Data Science & IA</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-white/90">Étudiant Ingénieur</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact & Info */}
        <div className="space-y-6">
          <GlassCard delay={0.5}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-purple-400" />
              Informations Personnelles
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>4 Juillet 2006 à Dogbo, Bénin</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span>Célibataire sans enfant</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.7}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-cyan-400" />
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div>(+229) 01 97 20 89 54</div>
                  <div>(+229) 01 44 81 14 23</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>judikardo@gmail.com</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.9}>
            <h3 className="text-2xl font-bold text-white mb-4">Formation Actuelle</h3>
            <div className="text-white/80">
              <div className="font-semibold text-purple-300">UNSTIM - Abomey, Bénin</div>
              <div>Institut National Supérieur des classes Préparatoires aux Études d'Ingénieur (INSPEI)</div>
              <div className="text-cyan-300 mt-2">2023-2025</div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}