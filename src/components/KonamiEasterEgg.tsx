import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Code, Brain, Rocket } from 'lucide-react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export function KonamiEasterEgg() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setInputSequence(prev => {
        const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length);
        
        if (newSequence.length === KONAMI_CODE.length && 
            newSequence.every((key, index) => key === KONAMI_CODE[index])) {
          triggerEasterEgg();
          return [];
        }
        
        return newSequence;
      });
    };

    const triggerEasterEgg = () => {
      setShowEasterEgg(true);
      
      // Generate random particles
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticles(newParticles);
      
      // Hide after animation
      setTimeout(() => {
        setShowEasterEgg(false);
        setParticles([]);
      }, 5000);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Matrix effect background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/50 to-green-900/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(0,255,0,0.1), rgba(0,0,0,0.5), rgba(0,255,0,0.1))",
                "linear-gradient(45deg, rgba(0,255,255,0.1), rgba(0,0,0,0.5), rgba(255,0,255,0.1))",
                "linear-gradient(45deg, rgba(0,255,0,0.1), rgba(0,0,0,0.5), rgba(0,255,0,0.1))",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Central message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center font-mono"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div
                className="text-6xl font-bold text-green-400 mb-4"
                animate={{
                  textShadow: [
                    "0 0 5px #00ff00",
                    "0 0 20px #00ff00, 0 0 30px #00ff00",
                    "0 0 5px #00ff00"
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                KONAMI CODE
              </motion.div>
              
              <motion.div
                className="text-2xl text-cyan-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                CHEAT CODE ACTIVATED!
              </motion.div>
              
              <motion.div
                className="flex justify-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[Zap, Code, Brain, Rocket].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="p-3 bg-green-400/20 rounded-full border border-green-400"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="w-8 h-8 text-green-400" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                className="text-green-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Félicitations, hacker! 🚀
              </motion.div>
              
              <motion.div
                className="text-white/70 text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Mode développeur: ACTIVÉ
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                y: particle.y - 200,
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Matrix rain effect */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-green-400 text-sm opacity-60"
              style={{ left: `${i * 5}%` }}
              animate={{
                y: ["-100vh", "100vh"],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random(),
              }}
            >
              {Array.from({ length: 15 }).map((_, j) => (
                <div key={j} className="mb-1">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </motion.div>
          ))}

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 0.5,
              repeat: 10,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}