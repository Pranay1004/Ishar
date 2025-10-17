'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'CFD Analysis System',
      description: 'Advanced computational fluid dynamics simulation platform with interactive visualization of airflow patterns.',
      tags: ['CFD', 'Simulation', 'Aerodynamics'],
      color: 'linear-gradient(45deg, #9D00FF, #FF2D55)',
    },
    {
      id: 2,
      title: 'Propulsion Optimizer',
      description: 'Machine learning-driven optimization tool for rocket propulsion systems enhancing thrust efficiency.',
      tags: ['Propulsion', 'Machine Learning', 'Optimization'],
      color: 'linear-gradient(45deg, #CCFF00, #00F0FF)',
    },
    {
      id: 3,
      title: 'Experimental Wing Design',
      description: 'Novel wing architecture for supersonic aircraft implementing adaptive geometry principles.',
      tags: ['Aerodynamics', 'Design', 'Supersonic'],
      color: 'linear-gradient(45deg, #9D00FF, #CCFF00)',
    },
    {
      id: 4,
      title: 'Materials Analysis Framework',
      description: 'Computational system for evaluating high-temperature materials for hypersonic applications.',
      tags: ['Materials', 'Thermal Analysis', 'Hypersonic'],
      color: 'linear-gradient(45deg, #FF2D55, #00F0FF)',
    },
    {
      id: 5,
      title: 'Flight Data Visualizer',
      description: 'Real-time telemetry visualization system with predictive analytics capabilities for test flights.',
      tags: ['Data Visualization', 'Analytics', 'Telemetry'],
      color: 'linear-gradient(45deg, #00F0FF, #CCFF00)',
    },
  ];
  
  // Brutalist animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-void py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 
            data-text="PROJECTS.GRID" 
            className="font-monument text-5xl md:text-7xl mb-6 digital-text"
          >
            PROJECTS.GRID
          </h2>
          <p className="text-xl font-neue max-w-2xl">
            Experimental works exploring the boundaries of aerospace engineering
            and computational design.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative h-[450px] overflow-hidden brutal-border"
              style={{ 
                backgroundColor: hoveredProject === project.id ? '#FFFFFF' : '#1A1A1A',
                transition: 'background-color 0.3s ease',
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ 
                  background: project.color,
                  filter: 'blur(30px)',
                }}
              />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div>
                  <motion.span 
                    className="inline-block font-mono text-sm opacity-50 mb-1"
                    animate={{ 
                      color: hoveredProject === project.id ? '#070215' : '#FFFFFF'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    PROJECT/{project.id.toString().padStart(2, '0')}
                  </motion.span>
                  
                  <motion.h3
                    className="font-monument text-2xl md:text-3xl mb-4"
                    animate={{ 
                      color: hoveredProject === project.id ? '#070215' : '#FFFFFF'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="font-neue mb-6 max-w-sm"
                    animate={{ 
                      color: hoveredProject === project.id ? '#070215' : '#CCCCCC'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono border"
                        animate={{ 
                          color: hoveredProject === project.id ? '#070215' : '#FFFFFF',
                          borderColor: hoveredProject === project.id ? '#070215' : '#FFFFFF'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full py-3 font-monument text-sm flex justify-center items-center brutal-border border-none text-void"
                    style={{ 
                      backgroundColor: hoveredProject === project.id ? '#070215' : '#CCFF00',
                      boxShadow: hoveredProject === project.id ? '5px 5px 0px rgba(11, 2, 21, 1)' : 'none',
                      transform: hoveredProject === project.id ? 'translateY(-2px)' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    VIEW PROJECT
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}