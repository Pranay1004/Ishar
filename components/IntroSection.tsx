'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextMorphing from './TextMorphing';

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Parallax effect for text and shapes
  const shapeX1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const shapeX2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const shapeRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Animate cursor position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textContainerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = textContainerRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      textContainerRef.current.style.setProperty('--mouse-x', `${x}`);
      textContainerRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      id="home"
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative bg-void"
    >
      {/* Background elements */}
      <motion.div 
        style={{ x: shapeX1, rotate: shapeRotate }} 
        className="absolute w-[60vh] h-[60vh] border-[30px] border-neon-acid/20 right-[-10vh] top-[15vh] z-0"
      />
      
      <motion.div 
        style={{ x: shapeX2, rotate: shapeRotate }} 
        className="absolute w-[40vh] h-[40vh] bg-ultraviolet/30 left-[-10vh] bottom-[10vh] z-0"
      />

      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      
      {/* Content */}
      <motion.div 
        style={{ y, opacity }} 
        className="container mx-auto px-6 h-full flex items-center justify-center relative z-10"
      >
        <div 
          ref={textContainerRef}
          className="max-w-5xl"
          style={{
            background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(204, 255, 0, 0.2), transparent 50%)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2 
            }}
            className="overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="font-monument text-7xl md:text-9xl mb-6 tracking-tighter"
              >
                <div className="flex items-center whitespace-nowrap overflow-x-hidden pb-4">
                  <TextMorphing text="BRUTAL" className="acid-text" />
                  <span className="digital-text ml-2" data-text="LUXURY">LUXURY</span>
                </div>
                <div className="flex items-center whitespace-nowrap overflow-x-hidden">
                  <TextMorphing text="DESIGN" className="text-stark-white" />
                  <span className="ultraviolet-text ml-2">SYSTEM</span>
                </div>
              </motion.h1>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl"
          >
            <p className="font-neue text-xl md:text-2xl leading-relaxed">
              An experimental design laboratory pushing the boundaries of <span className="acid-text">digital aesthetics</span> and <span className="ultraviolet-text">interactive experiences</span>.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex"
          >
            <a 
              href="#projects"
              className="brutal-btn bg-neon-acid text-void font-monument hover:bg-ultraviolet hover:text-stark-white transition-colors flex items-center gap-2"
            >
              VIEW WORK
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-xs font-mono mb-2 opacity-60 tracking-widest">SCROLL</div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-stark-white/0 to-stark-white"></div>
      </motion.div>
    </div>
  );
}