import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`
        relative backdrop-blur-lg bg-white/5 border border-white/10 
        rounded-2xl p-6 shadow-2xl hover:bg-white/10 
        transition-all duration-300 hover:scale-[1.02]
        hover:shadow-purple-500/20
        ${className}
      `}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}