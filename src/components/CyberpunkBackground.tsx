import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  connections: number[];
}

export function CyberpunkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Reduce particle count significantly for better performance
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          connections: []
        });
      }
      
      particlesRef.current = particles;
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      
      particles.forEach((particle, i) => {
        particle.connections = [];
        
        // Connection to mouse
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouse.x, 2) + Math.pow(particle.y - mouse.y, 2)
        );
        
        if (mouseDistance < 120) {
          ctx!.beginPath();
          ctx!.moveTo(particle.x, particle.y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.strokeStyle = `rgba(0, 255, 255, ${1 - mouseDistance / 120})`;
          ctx!.lineWidth = 2;
          ctx!.stroke();
        }
        
        // Connections between particles
        particles.slice(i + 1).forEach((otherParticle, j) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx!.beginPath();
            ctx!.moveTo(particle.x, particle.y);
            ctx!.lineTo(otherParticle.x, otherParticle.y);
            ctx!.strokeStyle = `rgba(138, 43, 226, ${0.3 * (1 - distance / 100)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
            
            particle.connections.push(i + j + 1);
          }
        });
      });
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const drawParticles = () => {
      const particles = particlesRef.current;
      
      particles.forEach(particle => {
        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx!.fillStyle = particle.connections.length > 0 ? '#00ffff' : '#8a2be2';
        ctx!.fill();
        
        // Glow effect
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = particle.connections.length > 0 ? '#00ffff' : '#8a2be2';
        ctx!.fill();
        ctx!.shadowBlur = 0;
      });
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawConnections();
      drawParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Throttle mouse move for better performance
    let mouseMoveRAF: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseMoveRAF) {
        cancelAnimationFrame(mouseMoveRAF);
      }
      mouseMoveRAF = requestAnimationFrame(() => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      });
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners with passive flag for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mouseMoveRAF) {
        cancelAnimationFrame(mouseMoveRAF);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Ambient Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}