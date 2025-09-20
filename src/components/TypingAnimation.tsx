import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export function TypingAnimation({ 
  texts, 
  className = '', 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000 
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetween]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span>{currentText}</span>
      <motion.span
        className="text-cyan-400"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0 }}
      >
        |
      </motion.span>
    </div>
  );
}