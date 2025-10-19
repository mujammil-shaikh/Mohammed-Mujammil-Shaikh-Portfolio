import React, { useRef, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { PROFILE_DATA } from './constants';
import { useTheme } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Chatbot } from './components/Chatbot';

const AnimatedSectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};


const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 250;
    
    const particleColor = theme === 'dark' ? 'rgba(100, 116, 139, 0.5)' : 'rgba(192, 132, 252, 0.5)';
    const lineColor = theme === 'dark' ? 'rgba(100, 116, 139, ' : 'rgba(192, 132, 252, ';


    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 2 - 1) * 0.3;
        this.speedY = (Math.random() * 2 - 1) * 0.3;
      }

      update() {
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 120;
        
        if (distance < interactionRadius && distance > 0) {
            const force = 1 - (distance / interactionRadius);
            this.x += (dx / distance) * force * 3.0;
            this.y += (dy / distance) * force * 3.0;
        }

        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = Math.sqrt(
                    (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                    (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
                );

                if (distance < 100) {
                    opacityValue = 1 - (distance / 100);
                    if (ctx) {
                       ctx.strokeStyle = `${lineColor}${opacityValue})`;
                       ctx.lineWidth = 0.5;
                       ctx.beginPath();
                       ctx.moveTo(particles[a].x, particles[a].y);
                       ctx.lineTo(particles[b].x, particles[b].y);
                       ctx.stroke();
                    }
                }
            }
        }
    }

    function animate() {
      if(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.update();
          p.draw();
        });
        connect();
      }
      requestAnimationFrame(animate);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', () => {
        resizeCanvas();
        init();
    });
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    init();
    animate();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [theme]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    
    const element = document.querySelector(targetId);
    if (element) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight + 16 : 80;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative isolate min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-300 font-sans leading-relaxed transition-colors duration-300">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-50"></canvas>
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-sm transition-colors duration-300">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#hero" onClick={handleNavClick} className="text-xl font-bold gradient-text">{PROFILE_DATA.name.split(' ').slice(-1)}</a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#about" onClick={handleNavClick} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">About</a>
              <a href="#experience" onClick={handleNavClick} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">Experience</a>
              <a href="#projects" onClick={handleNavClick} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">Projects</a>
              <a href="#skills" onClick={handleNavClick} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">Skills</a>
              <a href="#testimonials" onClick={handleNavClick} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">Testimonials</a>
              <a href="#contact" onClick={handleNavClick} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">Contact</a>
              <ThemeToggle />
            </nav>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 pt-24">
          <Hero onNavClick={handleNavClick} />
          <AnimatedSectionWrapper><About /></AnimatedSectionWrapper>
          <div className="py-10 md:py-14">
            <AnimatedSectionWrapper><Stats /></AnimatedSectionWrapper>
          </div>
          <AnimatedSectionWrapper><ExperienceSection /></AnimatedSectionWrapper>
          <AnimatedSectionWrapper><Projects /></AnimatedSectionWrapper>
          <AnimatedSectionWrapper><Skills /></AnimatedSectionWrapper>
          <AnimatedSectionWrapper><Awards /></AnimatedSectionWrapper>
          <AnimatedSectionWrapper><Testimonials /></AnimatedSectionWrapper>
          <AnimatedSectionWrapper><Contact /></AnimatedSectionWrapper>
        </main>

        <footer className="text-center py-8 text-slate-500 dark:text-slate-500 text-sm">
          <p>Designed & Built by Shaikh Mohammad Mujammil</p>
        </footer>
      </div>
      <Chatbot />
    </div>
  );
};

export default App;