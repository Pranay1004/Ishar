'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BrutalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      // For vertical scrolling site
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      
      // Find which section is currently in view
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop - windowHeight / 3 && 
            scrollPosition < sectionTop + sectionHeight - windowHeight / 3) {
          setActiveSection(section.id || 'home');
        }
      });
      
      // If at top of page, set to home
      if (scrollPosition < windowHeight / 2) {
        setActiveSection('home');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const menuVariants = {
    closed: {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };
  
  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };
  
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];
  
  // Smooth scroll to section when clicking nav items
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetId === 'home' ? 0 : targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };
  
  return (
    <>
      {/* Fixed navigation bar */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-10 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
          <h1 className="font-monument text-2xl tracking-tight">
            <span className="acid-text">BRUTAL</span>
            <span className="digital-text" data-text=".LUXURY">.LUXURY</span>
          </h1>
        </a>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="w-12 h-12 brutal-border bg-void flex flex-col justify-center items-center gap-1.5 relative p-2 hover:bg-neon-acid hover:text-void transition-colors"
        >
          <motion.span 
            className="w-6 h-0.5 bg-current block" 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-current block" 
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-current block" 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </header>
      
      {/* Full screen menu overlay */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed inset-0 z-40 bg-void"
      >
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
        
        <div className="h-full w-full flex flex-col justify-center items-center">
          <nav className="text-center">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={itemVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={isOpen ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i * 0.05 }}
                >
                  <a 
                    href={item.href} 
                    className="font-monument text-6xl md:text-8xl block py-4 hover:acid-text transition-all"
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </nav>
          
          {/* Menu background elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute inset-0 -z-10 pointer-events-none"
          >
            <motion.div 
              animate={{ 
                rotate: isOpen ? [0, 180] : 0,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-[40vh] h-[40vh] border-[30px] border-neon-acid/10"
            />
            
            <motion.div 
              animate={{ 
                rotate: isOpen ? [0, -180] : 0,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 right-1/4 w-[50vh] h-[50vh] border-[20px] border-ultraviolet/10"
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Side indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className={`w-3 h-12 brutal-border transition-all duration-300 relative flex items-center ${
              activeSection === item.href.replace('#', '') 
                ? 'bg-neon-acid' 
                : 'bg-transparent hover:bg-ultraviolet/50'
            }`}
            aria-label={`Navigate to ${item.name}`}
          >
            <span className="absolute right-full mr-4 font-mono text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}