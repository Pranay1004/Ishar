'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface DiagonalSectionProps {
  children: ReactNode;
  reverse?: boolean;
  color?: 'void' | 'ultraviolet' | 'neon-acid' | 'stark-white';
  accentColor?: 'void' | 'ultraviolet' | 'neon-acid' | 'stark-white';
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export default function DiagonalSection({
  children,
  reverse = false,
  color = 'void',
  accentColor = 'neon-acid',
  className = '',
  id,
  fullHeight = false
}: DiagonalSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const skew = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  
  // Map colors to tailwind classes
  const colorMap = {
    'void': 'bg-void text-stark-white',
    'ultraviolet': 'bg-ultraviolet text-stark-white',
    'neon-acid': 'bg-neon-acid text-void',
    'stark-white': 'bg-stark-white text-void'
  };
  
  const accentColorMap = {
    'void': 'bg-void',
    'ultraviolet': 'bg-ultraviolet',
    'neon-acid': 'bg-neon-acid',
    'stark-white': 'bg-stark-white'
  };
  
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative ${fullHeight ? 'min-h-screen' : 'py-32'} overflow-hidden ${colorMap[color]} ${className}`}
    >
      {/* Diagonal slash decoration */}
      <motion.div
        style={{ skew: skew }}
        className={`absolute ${reverse ? 'right-0' : 'left-0'} top-0 bottom-0 w-1/4 ${accentColorMap[accentColor]} 
        transform ${reverse ? '-skew-x-12' : 'skew-x-12'} -z-1 origin-top-left`}
      />
      
      {/* Content wrapper */}
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {children}
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
    </section>
  );
}