import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Code, Brain, User, Briefcase, Lightbulb, Mail } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export function CyberpunkNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0.5)', 'rgba(17, 24, 39, 0.95)']
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.3]
  );

  const menuItems = [
    { id: 'hero', label: 'Accueil', icon: User },
    { id: 'timeline', label: 'Parcours', icon: Code },
    { id: 'internship', label: 'Stage', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Brain },
    { id: 'projects', label: 'Projets', icon: Lightbulb },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Track active section with throttled scroll handling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = menuItems.map(item => item.id);
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 120 && rect.bottom >= 120;
            }
            return false;
          }) || sections[0]; // Default to first section if none found
          
          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleScrollToSection = (sectionId: string) => {
    console.log(`Navigation clicked: ${sectionId}`);
    setClickedButton(sectionId);
    setTimeout(() => setClickedButton(null), 200);
    scrollToSection(sectionId, 80);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 hidden lg:block"
        style={{ backgroundColor }}
      >
        <motion.div
          className="border-b border-cyan-400/30"
          style={{ borderOpacity }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur-lg opacity-50 animate-pulse" />
                </div>
                <div className="font-mono">
                  <div className="text-white font-bold">JUDICAËL</div>
                  <div className="text-cyan-400 text-sm">KAROL DOBOEVI</div>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-mono ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-white/70 hover:text-cyan-400 hover:bg-cyan-400/5'
                    } ${clickedButton === item.id ? 'scale-95 bg-cyan-400/20' : ''}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 border border-cyan-400/50 rounded-lg"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 rounded-lg bg-cyan-400/5 blur-xl" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{ backgroundColor }}
      >
        <motion.div
          className="border-b border-cyan-400/30"
          style={{ borderOpacity }}
        >
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="font-mono">
                  <div className="text-white font-bold text-sm">JUDICAËL</div>
                  <div className="text-cyan-400 text-xs">KAROL DOBOEVI</div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-gray-800/50 border border-cyan-400/30 text-cyan-400 hover:bg-gray-800/70 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-gray-900/95 backdrop-blur-sm border-b border-cyan-400/30"
        >
          <div className="py-4">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-300 font-mono ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10 border-r-2 border-cyan-400'
                    : 'text-white/70 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: isOpen ? index * 0.1 : 0 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 lg:h-24" />
    </>
  );
}