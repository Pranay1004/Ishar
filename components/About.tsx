'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Wind, Zap } from 'lucide-react';

/**
 * About Section - The Aerodynamic Core
 * Features: CFD flowlines background, gradient text trails, interactive keywords
 */
export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    { icon: Rocket, name: 'Propulsion Systems', description: 'Advanced rocket engine design & optimization' },
    { icon: Wind, name: 'CFD Analysis', description: 'Hypersonic flow simulation & validation' },
    { icon: Zap, name: 'Performance', description: 'TBCC propulsion & validated OEM data' },
  ];

  return (
    <section id="about" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated CFD lines background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#1E90FF" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${i * 100} 0 Q ${i * 100 + 50} ${Math.random() * 600 + 200} ${i * 100 + 100} 800`}
              stroke="url(#flow-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-6xl text-plasma-cyan mb-4 text-glow">
            THE AERODYNAMIC CORE
          </h2>
          <p className="font-space-grotesk text-lg text-titanium max-w-3xl mx-auto">
            Specialized in high-speed aerodynamics, CFD analysis, and validated TBCC propulsion performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-michroma text-2xl text-plasma-cyan mb-4">MISSION PROFILE</h3>
              <div className="space-y-4 text-off-white font-space-grotesk leading-relaxed">
                <p>
                  Presented <span className="text-plasma-cyan font-bold">hypersonic CFD analysis</span> at SAROD 2024, 
                  validating TBCC propulsion performance using OEM data.
                </p>
                <p>
                  Aerospace graduate specializing in <span className="text-plasma-cyan font-bold">high-speed aerodynamics</span>, 
                  CFD, and propulsion systems. Known for rapid problem-solving in mission-critical environments.
                </p>
                <p>
                  Based in <span className="text-plasma-cyan font-bold">Mumbai, Maharashtra</span>, ready to collaborate 
                  on next-generation aerospace innovations.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'PROJECTS', value: '15+' },
                { label: 'PAPERS', value: '3' },
                { label: 'YEARS EXP', value: '2+' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass p-4 rounded-xl text-center"
                >
                  <div className="text-3xl font-orbitron font-bold text-plasma-cyan">{stat.value}</div>
                  <div className="text-xs font-michroma text-titanium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-strong p-6 rounded-xl cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-plasma-cyan/10 rounded-lg group-hover:bg-plasma-cyan/20 transition-colors">
                    <skill.icon className="w-8 h-8 text-plasma-cyan" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-michroma text-lg text-plasma-cyan mb-2">{skill.name}</h4>
                    <p className="font-space-grotesk text-sm text-titanium">{skill.description}</p>
                  </div>
                </div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-plasma-cyan to-mach-blue mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
