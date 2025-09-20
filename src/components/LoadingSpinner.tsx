import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 w-12 h-12 rounded-full border-2 border-transparent border-b-purple-400 border-l-purple-400"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Loading text */}
      <motion.div
        className="ml-4 font-mono text-cyan-400"
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Chargement...
      </motion.div>
    </div>
  );
}