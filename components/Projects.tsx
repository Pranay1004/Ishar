'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, FileText } from 'lucide-react';

/**
 * Projects Section - The Orbit Layer
 * Features: 3D orbital map with satellites (react-three-fiber scaffold)
 * Note: Full 3D implementation requires Three.js setup - using card grid as fallback
 */
export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Hypersonic CFD Analysis',
      category: 'Research',
      description: 'Validated TBCC propulsion performance with OEM data at SAROD 2024',
      tags: ['CFD', 'Hypersonics', 'TBCC'],
      link: '#',
    },
    {
      title: 'Rocket Nozzle Optimization',
      category: 'Simulation',
      description: '3D CFD model achieving accurate results across all flow regimes',
      tags: ['OpenFOAM', 'Ansys', 'Meshing'],
      link: '#',
    },
    {
      title: 'Scramjet Launch Vehicle (Blaze-1)',
      category: 'Design',
      description: 'Complete vehicle design with integrated CFD & FEA analysis',
      tags: ['SolidWorks', 'Aerodynamics', 'FEA'],
      link: '#',
    },
    {
      title: 'Turbofan Engine Analysis',
      category: 'Performance',
      description: 'Off-design performance evaluation and optimization',
      tags: ['MATLAB', 'Thermodynamics', 'Python'],
      link: '#',
    },
    {
      title: 'High-Speed Flow Visualization',
      category: 'Analysis',
      description: 'Advanced CFD post-processing and flow visualization techniques',
      tags: ['Paraview', 'Python', 'Visualization'],
      link: '#',
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Orbital ring background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-plasma-cyan"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-6xl text-plasma-cyan mb-4 text-glow">
            THE ORBIT LAYER
          </h2>
          <p className="font-space-grotesk text-lg text-titanium">
            Satellite projects orbiting the knowledge sphere
          </p>
        </motion.div>

        {/* Projects Grid (3D orbital map scaffold - can be replaced with react-three-fiber) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-strong p-6 rounded-2xl cursor-pointer group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-plasma-cyan/0 via-plasma-cyan/5 to-mach-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-michroma bg-plasma-cyan/20 text-plasma-cyan rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-titanium group-hover:text-plasma-cyan transition-colors" />
                </div>

                <h3 className="font-michroma text-lg text-off-white mb-3 group-hover:text-plasma-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-titanium font-space-grotesk mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-deep-space border border-plasma-cyan/30 text-plasma-cyan rounded font-michroma"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Orbital indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-plasma-cyan rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-strong p-8 rounded-2xl"
        >
          <h3 className="font-michroma text-2xl text-plasma-cyan mb-6 flex items-center space-x-2">
            <FileText className="w-6 h-6" />
            <span>PUBLICATIONS</span>
          </h3>
          <ul className="space-y-4">
            {[
              'Hypersonic CFD Analysis - SAROD 2024',
              'Turbofan Off-Design Performance - IEEE Conference',
              'Blaze-1 Design Paper - Aerospace Journal',
            ].map((pub, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-3 text-off-white font-space-grotesk group cursor-pointer"
              >
                <span className="text-plasma-cyan">▸</span>
                <span className="group-hover:text-plasma-cyan transition-colors">{pub}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
