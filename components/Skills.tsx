'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Skills Section - The Deep Systems Module
 * Features: Radar/gauge visualizations, animated CAD lines, tech icons
 */
export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      category: 'CFD & Simulation',
      skills: [
        { name: 'OpenFOAM', level: 90 },
        { name: 'Ansys Fluent', level: 85 },
        { name: 'Ansys CFX', level: 80 },
        { name: 'Paraview', level: 85 },
      ],
    },
    {
      category: 'Design & CAD',
      skills: [
        { name: 'SolidWorks', level: 90 },
        { name: 'CATIA', level: 75 },
        { name: 'Fusion 360', level: 70 },
        { name: 'Meshing', level: 85 },
      ],
    },
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'MATLAB', level: 80 },
        { name: 'C++', level: 70 },
        { name: 'Shell Script', level: 75 },
      ],
    },
    {
      category: 'Analysis',
      skills: [
        { name: 'FEA', level: 80 },
        { name: 'Thermodynamics', level: 90 },
        { name: 'Fluid Mechanics', level: 95 },
        { name: 'Aerodynamics', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative min-h-screen py-20 bg-deep-space">
      {/* Hexagonal grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon
                points="25,0 48.3,12.5 48.3,37.5 25,50 1.7,37.5 1.7,12.5"
                fill="none"
                stroke="rgba(0, 255, 255, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
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
            DEEP SYSTEMS MODULE
          </h2>
          <p className="font-space-grotesk text-lg text-titanium">
            Technical capabilities across aerospace disciplines
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-strong p-6 rounded-2xl"
            >
              <h3 className="font-michroma text-xl text-plasma-cyan mb-6 flex items-center space-x-2">
                <div className="w-2 h-2 bg-plasma-cyan rounded-full animate-pulse" />
                <span>{category.category}</span>
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-space-grotesk text-sm text-off-white">
                        {skill.name}
                      </span>
                      <span className="font-michroma text-xs text-plasma-cyan">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 bg-deep-space rounded-full overflow-hidden border border-plasma-cyan/30">
                      <motion.div
                        className="h-full bg-gradient-to-r from-plasma-cyan via-mach-blue to-plasma-glow"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular gauge display (radar chart scaffold) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="glass-strong p-8 rounded-2xl inline-block">
            <h3 className="font-michroma text-xl text-plasma-cyan mb-6 text-center">
              CAPABILITY MATRIX
            </h3>
            <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
              {/* Radar circles */}
              {[1, 2, 3, 4, 5].map((i) => (
                <circle
                  key={i}
                  cx="150"
                  cy="150"
                  r={i * 25}
                  fill="none"
                  stroke="rgba(0, 255, 255, 0.2)"
                  strokeWidth="1"
                />
              ))}

              {/* Radar axes */}
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 150 + 125 * Math.cos(rad - Math.PI / 2);
                const y = 150 + 125 * Math.sin(rad - Math.PI / 2);
                return (
                  <line
                    key={angle}
                    x1="150"
                    y1="150"
                    x2={x}
                    y2={y}
                    stroke="rgba(0, 255, 255, 0.3)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data polygon (example values) */}
              <motion.polygon
                points="150,50 220,95 195,180 105,180 80,95"
                fill="rgba(0, 255, 255, 0.2)"
                stroke="#00FFFF"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                style={{ transformOrigin: '150px 150px' }}
              />

              {/* Labels */}
              {['CFD', 'Design', 'Code', 'Analysis', 'Research', 'Systems'].map(
                (label, i) => {
                  const angle = (i * 60 * Math.PI) / 180;
                  const x = 150 + 140 * Math.cos(angle - Math.PI / 2);
                  const y = 150 + 140 * Math.sin(angle - Math.PI / 2);
                  return (
                    <text
                      key={label}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      fill="#00FFFF"
                      fontSize="12"
                      fontFamily="Michroma"
                    >
                      {label}
                    </text>
                  );
                }
              )}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
