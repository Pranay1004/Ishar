'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'LAUNCH', href: '#hero' },
  { name: 'CORE', href: '#about' },
  { name: 'COMMAND', href: '#experience' },
  { name: 'ORBIT', href: '#projects' },
  { name: 'SYSTEMS', href: '#skills' },
  { name: 'VISION', href: '#vision' },
  { name: 'TRANSMIT', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Calculate Mach number based on scroll (0.1 to 4.0)
  const machNumber = useTransform(scrollYProgress, [0, 1], [0.1, 4.0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-strong' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#hero" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-plasma-cyan to-mach-blue flex items-center justify-center">
                <span className="text-deep-space font-orbitron font-bold text-xl">I</span>
              </div>
              <span className="font-orbitron font-bold text-xl text-plasma-cyan hidden sm:block">
                THE MACH BEYOND
              </span>
            </a>
          </motion.div>

          {/* Mach Indicator */}
          <motion.div className="hidden md:flex items-center space-x-3 glass px-4 py-2 rounded-full">
            <Gauge className="w-5 h-5 text-plasma-cyan" />
            <div className="flex flex-col">
              <span className="text-xs text-titanium font-michroma">MACH</span>
              <motion.span className="text-lg font-orbitron font-bold text-plasma-cyan">
                {machNumber.get().toFixed(2)}
              </motion.span>
            </div>
            <div className="w-24 h-2 bg-deep-space rounded-full overflow-hidden border border-plasma-cyan/30">
              <motion.div
                className="h-full bg-gradient-to-r from-mach-blue via-plasma-cyan to-plasma-glow"
                style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-michroma text-titanium hover:text-plasma-cyan transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-plasma-cyan"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden glass p-2 rounded-lg text-plasma-cyan"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden glass-strong"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-sm font-michroma text-titanium hover:text-plasma-cyan hover:bg-plasma-cyan/10 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.name}
            </motion.a>
          ))}
          
          {/* Mobile Mach Indicator */}
          <motion.div className="flex items-center justify-between glass p-3 rounded-lg mt-4">
            <div className="flex items-center space-x-2">
              <Gauge className="w-4 h-4 text-plasma-cyan" />
              <span className="text-xs text-titanium font-michroma">MACH</span>
            </div>
            <motion.span className="text-lg font-orbitron font-bold text-plasma-cyan">
              {machNumber.get().toFixed(2)}
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
