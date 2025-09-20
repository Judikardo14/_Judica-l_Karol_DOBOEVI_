import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Code, Brain, Zap, Terminal } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';
import { GlitchText } from './GlitchText';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { scrollToSection, downloadFile } from '../utils/scroll';

export function CyberpunkHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const typingTexts = [
    "Étudiant Ingénieur",
    "Data Scientist",
    "Développeur Python",
    "Passionné d'IA",
    "Innovateur Tech"
  ];

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/30"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Data streams */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-2">~/judicael-doboevi</span>
            </div>
            <div className="text-cyan-400">
              <span className="text-green-400">$</span> whoami
            </div>
            <div className="text-white mt-1">
              Judicaël Karol DOBOEVI
            </div>
            <div className="text-cyan-400 mt-2">
              <span className="text-green-400">$</span> cat profile.txt
            </div>
            <div className="text-white mt-1">
              <TypingAnimation texts={typingTexts} />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            <GlitchText
              text="JUDICAËL KAROL"
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 block"
            />
            <GlitchText
              text="DOBOEVI"
              className="text-4xl lg:text-6xl font-bold text-white/90 block"
            />
          </motion.div>

          {/* Status Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            {[
              { icon: Brain, text: "IA & Data Science", color: "from-purple-500 to-pink-500" },
              { icon: Code, text: "Python • C • Matlab", color: "from-cyan-500 to-blue-500" },
              { icon: Zap, text: "Innovation Tech", color: "from-yellow-500 to-orange-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{item.text}</span>
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-20 blur-xl`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Voir mes projets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
            <motion.button
              onClick={() => downloadFile('/cv-judicael-doboevi.pdf', 'CV-Judicael-Karol-DOBOEVI.pdf')}
              className="group px-8 py-3 border border-cyan-400/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            {/* Image container */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://raw.githubusercontent.com/Judikardo14/Judikardo/master/my_tof.jpg"
                alt="Judicaël Karol DOBOEVI"
                className="w-full max-w-md mx-auto object-cover aspect-square rounded-2xl border-2 border-cyan-400/30"
              />
              
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 rounded-2xl" />
              
              {/* Scan lines */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              className="absolute -top-4 -left-4 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 font-mono text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-cyan-400">STATUS:</div>
              <div className="text-green-400">● ONLINE</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gray-900/80 backdrop-blur-sm border border-purple-400/30 rounded-lg p-3 font-mono text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="text-purple-400">UNSTIM</div>
              <div className="text-white">2023-present</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center text-cyan-400">
          <span className="text-sm font-mono mb-2">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}