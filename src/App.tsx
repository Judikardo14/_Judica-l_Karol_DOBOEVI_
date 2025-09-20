import { useEffect, lazy, Suspense } from "react";
import { CyberpunkBackground } from "./components/CyberpunkBackground";
import { CustomCursor } from "./components/CustomCursor";
import { ThemeToggle } from "./components/ThemeToggle";
import { CyberpunkNavigation } from "./components/CyberpunkNavigation";
import { CyberpunkHero } from "./components/CyberpunkHero";
import { LoadingSpinner } from "./components/LoadingSpinner";

// Lazy load heavy components to improve initial load time
const TimelineSection = lazy(() =>
  import("./components/TimelineSection").then((module) => ({
    default: module.TimelineSection,
  })),
);
const InternshipSection = lazy(() =>
  import("./components/InternshipSection").then((module) => ({
    default: module.InternshipSection,
  })),
);
const SkillsGrid = lazy(() =>
  import("./components/SkillsGrid").then((module) => ({
    default: module.SkillsGrid,
  })),
);
const ProjectsSection = lazy(() =>
  import("./components/ProjectsSection").then((module) => ({
    default: module.ProjectsSection,
  })),
);
const ContactSection = lazy(() =>
  import("./components/ContactSection").then((module) => ({
    default: module.ContactSection,
  })),
);
const KonamiEasterEgg = lazy(() =>
  import("./components/KonamiEasterEgg").then((module) => ({
    default: module.KonamiEasterEgg,
  })),
);

export default function App() {
  useEffect(() => {
    // Set default dark theme
    document.documentElement.classList.add("dark");

    // Custom scrollbar styling
    const style = document.createElement("style");
    style.textContent = `
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.3);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #00ffff, #8b5cf6);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #8b5cf6, #00ffff);
      }

      /* Custom selection */
      ::selection {
        background: rgba(0, 255, 255, 0.2);
        color: #00ffff;
      }

      /* Hide default cursor only on desktop */
      @media (min-width: 1024px) {
        * {
          cursor: none !important;
        }
      }

      /* Smooth scrolling - disabled to use JS smooth scrolling */
      html {
        scroll-behavior: auto;
      }
      
      /* Custom font loading */
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
      
      body {
        font-family: 'JetBrains Mono', monospace;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Background Effects */}
      <CyberpunkBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <CyberpunkNavigation />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero">
          <CyberpunkHero />
        </section>

        {/* Lazy loaded sections with loading fallbacks */}
        <Suspense fallback={<LoadingSpinner />}>
          {/* Timeline Section */}
          <section id="timeline">
            <TimelineSection />
          </section>

          {/* Internship Section */}
          <section id="internship">
            <InternshipSection />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SkillsGrid />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>
        </Suspense>
      </main>

      {/* Easter Egg */}
      <Suspense fallback={null}>
        <KonamiEasterEgg />
      </Suspense>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono">
            <span className="text-cyan-400">{">"}</span>
            <span className="text-white">
              Judicaël Karol DOBOEVI
            </span>
            <span className="text-purple-400">{"</"}</span>
          </div>
          <p className="text-white/60 text-sm font-mono">
            © 2025 • Étudiant Ingénieur • Data Science & IA
          </p>
        </div>
      </footer>
    </div>
  );
}