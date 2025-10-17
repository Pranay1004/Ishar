'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FlowField from './FlowField';

export default function Hero() {
  const [bootSequence, setBootSequence] = useState(0);
  const [machValue, setMachValue] = useState(0.1);

  const bootMessages = [
    'INITIALIZING SIMULATION...',
    'MACH SYSTEMS ONLINE...',
    'CFD MODULES LOADED...',
    'PROPULSION CORES ACTIVE...',
    'WELCOME, COMMANDER ISHAR',
  ];

  useEffect(() => {
    // Boot sequence animation
    const bootInterval = setInterval(() => {
      setBootSequence((prev) => {
        if (prev < bootMessages.length - 1) {
          return prev + 1;
        }
        clearInterval(bootInterval);
        return prev;
      });
    }, 800);

    // Mach meter animation
    const machInterval = setInterval(() => {
      setMachValue((prev) => {
        if (prev < 4.0) {
          return Math.min(prev + 0.1, 4.0);
        }
        clearInterval(machInterval);
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(bootInterval);
      clearInterval(machInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background FlowField Animation */}
      <div className="absolute inset-0 z-0">
        <FlowField />
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="scan-line absolute w-full h-1 bg-gradient-to-r from-transparent via-plasma-cyan to-transparent opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Boot Sequence */}
        <div className="mb-12 space-y-2">
          {bootMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: index <= bootSequence ? 1 : 0,
                x: index <= bootSequence ? 0 : -50,
              }}
              transition={{ duration: 0.3 }}
              className="font-michroma text-xs sm:text-sm text-plasma-cyan tracking-wider"
            >
              {'>'} {message}
            </motion.div>
          ))}
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="font-orbitron font-black text-5xl sm:text-7xl lg:text-9xl mb-6"
        >
          <span className="text-glow plasma-gradient bg-clip-text text-transparent">
            THE MACH
          </span>
          <br />
          <span className="text-off-white">BEYOND</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="font-space-grotesk text-lg sm:text-2xl text-titanium mb-12 max-w-3xl mx-auto"
        >
          <span className="text-plasma-cyan font-bold">Ishar Singh Saini</span>
          <br className="sm:hidden" /> —{' '}
          <span className="text-off-white">Aerospace Engineer</span> |{' '}
          <span className="text-off-white">CFD Specialist</span> |{' '}
          <span className="text-off-white">Propulsion Innovator</span>
        </motion.p>

        {/* Mach Meter Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 0.5 }}
          className="inline-flex items-center space-x-4 glass p-6 rounded-2xl mb-12"
        >
          <div className="text-left">
            <div className="text-xs font-michroma text-titanium uppercase tracking-widest mb-1">
              Current Velocity
            </div>
            <div className="text-5xl font-orbitron font-bold text-plasma-cyan">
              MACH {machValue.toFixed(1)}
            </div>
          </div>
          <div className="w-px h-16 bg-titanium/30" />
          <div className="w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Circular gauge background */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(192, 192, 192, 0.2)"
                strokeWidth="8"
              />
              {/* Animated gauge progress */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#plasma-gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={2 * Math.PI * 40 * (1 - machValue / 4)}
                transform="rotate(-90 50 50)"
                className="filter drop-shadow-glow-cyan"
              />
              <defs>
                <linearGradient id="plasma-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FFFF" />
                  <stop offset="50%" stopColor="#00FFAA" />
                  <stop offset="100%" stopColor="#1E90FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 glass-strong rounded-full font-michroma text-sm tracking-wider text-plasma-cyan border-2 border-plasma-cyan hover:bg-plasma-cyan/20 transition-all group"
        >
          ENGAGE PORTFOLIO
          <ChevronDown className="inline-block ml-2 w-5 h-5 animate-bounce" />
        </motion.a>

        {/* Ambient particles indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-michroma text-titanium/50 tracking-widest"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>
    </section>
  );
}
