'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      
      // Add to trail
      const newTrail = {
        x: event.clientX,
        y: event.clientY,
        id: Date.now(),
      };
      
      setTrail((prev) => [...prev.slice(-5), newTrail]);
      
      // Remove trail dot after delay
      setTimeout(() => {
        setTrail((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 200);
    };

    const mouseOverHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                     target.tagName.toLowerCase() === 'button' ||
                     target.closest('a') !== null ||
                     target.closest('button') !== null;
      setIsPointer(isLink);
    };
    
    const mouseDownHandler = () => setIsActive(true);
    const mouseUpHandler = () => setIsActive(false);
    
    const mouseEnterHandler = () => setIsVisible(true);
    const mouseLeaveHandler = () => setIsVisible(false);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', mouseOverHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', mouseOverHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block mix-blend-difference">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 150,
          damping: 15
        }}
      >
        <div className={`w-full h-full 
          ${isPointer ? 'border-2 border-neon-acid rounded-full' : 'bg-neon-acid'} 
          ${isActive ? 'scale-50 opacity-70' : 'scale-100 opacity-100'} 
          transition-all duration-200`}
        />
      </motion.div>
      
      {/* Secondary dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-acid pointer-events-none z-50"
        animate={{
          x: position.x - 1,
          y: position.y - 1,
          opacity: isVisible ? (isPointer ? 0 : 0.8) : 0
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 280,
          damping: 15
        }}
      />
      
      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-neon-acid/30"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index / trail.length) * 0.5,
            transform: `scale(${(index / trail.length) * 0.8})`,
          }}
        />
      ))}
    </div>
  );
}
