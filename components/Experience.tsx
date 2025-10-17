'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Trophy } from 'lucide-react';

/**
 * Experience Section - The Command Deck
 * Features: Glassmorphic cockpit, radar timeline, expandable mission logs
 */
export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      role: 'Graduate Engineer Trainee',
      company: 'TATA Advanced Systems Limited',
      location: 'Hyderabad, India',
      period: 'Aug 2024 – Present',
      achievements: [
        'Presented hypersonic CFD analysis at SAROD 2024',
        'Validated TBCC propulsion performance using OEM data',
        'Optimized high-speed aerodynamic designs',
      ],
      color: '#00FFFF',
    },
    {
      role: 'Research Project - CFD',
      company: 'IIT Bombay',
      location: 'Mumbai, India',
      period: 'Jan 2024 – May 2024',
      achievements: [
        'Developed 3D CFD model for rocket nozzle analysis',
        'Achieved accurate results for all flow regimes',
        'Implemented advanced meshing strategies',
      ],
      color: '#1E90FF',
    },
    {
      role: 'Research Project - Design',
      company: 'IIT Bombay',
      location: 'Mumbai, India',
      period: 'Aug 2023 – Nov 2023',
      achievements: [
        'Designed scramjet-powered launch vehicle (Blaze-1)',
        'Performed CFD & FEA analysis',
        'Optimized aerodynamic efficiency',
      ],
      color: '#00FFAA',
    },
  ];

  return (
    <section id="experience" ref={ref} className="relative min-h-screen py-20 bg-deep-space">
      {/* Cockpit Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-6xl text-plasma-cyan mb-4 text-glow">
            THE COMMAND DECK
          </h2>
          <p className="font-space-grotesk text-lg text-titanium">
            Mission logs from the frontlines of aerospace innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-plasma-cyan via-mach-blue to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute left-0 md:left-1/2 top-8 w-4 h-4 -ml-2 rounded-full border-2 border-plasma-cyan bg-deep-space"
                style={{ borderColor: exp.color }}
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="cockpit-panel p-6 rounded-2xl ml-8 md:ml-0 md:mr-12 md:last:mr-0"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-michroma text-xl text-plasma-cyan mb-2">{exp.role}</h3>
                    <div className="flex items-center space-x-2 text-titanium text-sm mb-1">
                      <Trophy className="w-4 h-4" />
                      <span className="font-space-grotesk font-bold">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-titanium/70 text-xs font-space-grotesk">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-2 text-off-white text-sm font-space-grotesk"
                    >
                      <span className="text-plasma-cyan mt-1">▸</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
