'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

/**
 * Vision Section - The Future Chamber
 * Features: 3D hangar environment (scaffold), floating text, cosmic lighting
 */
export default function Vision() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="vision"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing runway lines */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="runway-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#00FFFF" />
            </linearGradient>
          </defs>
          <line
            x1="20%"
            y1="100%"
            x2="50%"
            y2="0%"
            stroke="url(#runway-gradient)"
            strokeWidth="2"
          />
          <line
            x1="80%"
            y1="100%"
            x2="50%"
            y2="0%"
            stroke="url(#runway-gradient)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, z: -100 }}
          animate={inView ? { opacity: 1, scale: 1, z: 0 } : {}}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.div
            animate={{
              rotateY: [0, 10, -10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="inline-block"
          >
            <Sparkles className="w-16 h-16 text-plasma-cyan mx-auto mb-4" />
          </motion.div>

          <h2 className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl text-glow">
            <span className="bg-gradient-to-r from-plasma-cyan via-mach-blue to-plasma-glow bg-clip-text text-transparent">
              WHERE PROPULSION
            </span>
            <br />
            <span className="text-off-white">MEETS IMAGINATION</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-space-grotesk text-xl sm:text-2xl text-titanium max-w-3xl mx-auto leading-relaxed"
          >
            Pushing the boundaries of <span className="text-plasma-cyan font-bold">hypersonic flight</span>,
            one simulation at a time. The future of aerospace lies in{' '}
            <span className="text-plasma-cyan font-bold">validated innovation</span> and{' '}
            <span className="text-plasma-cyan font-bold">fearless exploration</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="glass p-8 rounded-2xl inline-block"
          >
            <blockquote className="font-space-grotesk text-lg italic text-off-white">
              &ldquo;In the realm of Mach numbers and plasma flows,
              <br />
              we don&apos;t just analyze &mdash; we <span className="text-plasma-cyan font-bold not-italic">innovate</span>.&rdquo;
            </blockquote>
            <p className="font-michroma text-sm text-plasma-cyan mt-4">&mdash; Ishar Singh Saini</p>
          </motion.div>

          {/* Floating particles */}
          <div className="flex justify-center space-x-8 mt-12">
            {['INNOVATE', 'SIMULATE', 'VALIDATE', 'OPTIMIZE'].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass px-4 py-2 rounded-full"
              >
                <span className="font-michroma text-xs text-plasma-cyan">{word}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3D hangar environment scaffold (can be replaced with react-three-fiber scene) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-space to-transparent" />
    </section>
  );
}
