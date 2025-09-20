import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-4 lg:top-6 lg:right-6 z-40 p-3 rounded-full backdrop-blur-lg bg-gray-900/50 border border-cyan-400/30 hover:bg-gray-900/70 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 180,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 text-cyan-400" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? -180 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </div>
      
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <div className={`absolute inset-0 rounded-full blur-xl ${
          isDark ? 'bg-cyan-400/20' : 'bg-yellow-400/20'
        }`} />
      </div>
      
      {/* Status indicator */}
      <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
    </motion.button>
  );
}