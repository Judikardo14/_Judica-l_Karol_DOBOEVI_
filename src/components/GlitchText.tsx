import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

export function GlitchText({ text, className = '', trigger = false }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  const triggerGlitch = () => {
    if (glitching) return;
    
    setGlitching(true);
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setGlitchText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return text[index];
          })
          .join('')
      );
      
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setGlitchText(text);
        setGlitching(false);
      }
    }, 50);
  };

  useEffect(() => {
    if (trigger) {
      triggerGlitch();
    }
  }, [trigger]);

  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      onHoverStart={triggerGlitch}
      whileHover={{ scale: 1.02 }}
    >
      {/* Main text */}
      <span className="relative z-10 font-mono">
        {glitchText}
      </span>
      
      {/* Glitch layers */}
      {glitching && (
        <>
          <span
            className="absolute top-0 left-0 font-mono text-cyan-400 opacity-70"
            style={{ 
              transform: 'translate(-2px, -1px)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
            }}
          >
            {glitchText}
          </span>
          <span
            className="absolute top-0 left-0 font-mono text-purple-400 opacity-70"
            style={{ 
              transform: 'translate(2px, 1px)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
            }}
          >
            {glitchText}
          </span>
        </>
      )}
    </motion.div>
  );
}