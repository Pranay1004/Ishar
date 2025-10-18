'use client';

import { useEffect, useRef, useState } from 'react';
import { Rocket, Zap, Wind, Gauge, Mail, Linkedin, Phone, ChevronDown, Plane, Target, Navigation, Github } from 'lucide-react';

export default function Home() {
  const rocketRef = useRef<HTMLDivElement>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, itemType: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-HTTPS environments
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedItem(itemType);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

export default function Home() {
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rocketRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      rocketRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Particle Field Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-accent-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="font-display text-xl font-bold gradient-text tracking-wider">
              ISHAR SAINI
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
              <a href="#about" className="text-white/70 hover:text-accent-cyan transition-colors">
                ABOUT
              </a>
              <a href="#projects" className="text-white/70 hover:text-accent-cyan transition-colors">
                PROJECTS
              </a>
              <a href="#experience" className="text-white/70 hover:text-accent-cyan transition-colors">
                EXPERIENCE
              </a>
              <a href="#research" className="text-white/70 hover:text-accent-cyan transition-colors">
                RESEARCH
              </a>
              <a
                href="#contact"
                className="px-5 py-2 bg-gradient-accent text-white rounded-md hover:shadow-lg hover:scale-105 transition-all"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 reveal">
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl font-bold gradient-text tracking-tight leading-tight">
              ISHAR SINGH SAINI
            </h1>
            <p className="text-xl md:text-2xl text-accent-cyan font-medium tracking-widest">
              AEROSPACE ENGINEER · HYPERSONICS · CFD · PROPULSION
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Bridging high-speed aerodynamics, turbine-based combined cycle propulsion, and precision UAV systems.
            From TBCC mode transition analysis to hypersonic CFD validation—translating complex flow physics into
            flight-ready performance.
          </p>

          {/* 3D Floating Fighter Jet */}
          <div ref={rocketRef} className="relative mx-auto w-32 h-32 my-12 animate-float" style={{ perspective: '1200px' }}>
            <svg className="w-full h-full text-accent-cyan glow-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Main fuselage */}
              <path d="M2 12L22 12"/>
              {/* Wings */}
              <path d="M8 8L16 12L8 16"/>
              {/* Tail fins */}
              <path d="M4 10L4 14"/>
              {/* Nose cone */}
              <path d="M18 12L22 10L22 14L18 12"/>
              {/* Cockpit */}
              <circle cx="14" cy="12" r="1"/>
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform shadow-lg hover:glow-cyan"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-panel text-white rounded-md font-medium hover:scale-105 transition-transform"
            >
              GET IN TOUCH
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-accent-cyan/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Visual - Skills Circle */}
            <div className="relative reveal">
              <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] mx-auto overflow-visible [--orbit-r:8rem] md:[--orbit-r:9rem]">
                <div className="absolute inset-16 md:inset-20 glass-panel rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Gauge className="w-16 h-16 text-accent-cyan mx-auto mb-3" />
                    <div className="font-display text-3xl gradient-text font-bold">SKILLS</div>
                  </div>
                </div>

                {/* Revolving Skills - Each positioned at center for orbit */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-1 text-xs whitespace-nowrap">
                    <Wind className="w-3 h-3 text-accent-cyan inline mr-1" />
                    <span className="font-medium">CFD</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-2 text-xs whitespace-nowrap">
                    <Zap className="w-3 h-3 text-accent-orange inline mr-1" />
                    <span className="font-medium">Hypersonics</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-3 text-xs whitespace-nowrap">
                    <Rocket className="w-3 h-3 text-accent-purple inline mr-1" />
                    <span className="font-medium">Propulsion</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-4 text-xs whitespace-nowrap">
                    <Navigation className="w-3 h-3 text-accent-cyan inline mr-1" />
                    <span className="font-medium">OpenFOAM</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-5 text-xs whitespace-nowrap">
                    <Target className="w-3 h-3 text-accent-orange inline mr-1" />
                    <span className="font-medium">Ansys</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-6 text-xs whitespace-nowrap">
                    <Plane className="w-3 h-3 text-accent-purple inline mr-1" />
                    <span className="font-medium">SolidWorks</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-7 text-xs whitespace-nowrap">
                    <Gauge className="w-3 h-3 text-accent-cyan inline mr-1" />
                    <span className="font-medium">MATLAB</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-panel px-3 py-1.5 rounded-full animate-revolve-8 text-xs whitespace-nowrap">
                    <span className="font-medium text-accent-orange">🐍</span>
                    <span className="font-medium ml-1">Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 reveal">
              <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
                AEROSPACE ENGINEER
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Presented hypersonic CFD analysis at <span className="text-accent-cyan font-semibold">SAROD 2024</span> and got awarded by a National Award by{' '}
                <span className="text-accent-cyan font-semibold">IIT Bombay</span>. I&apos;m an Aerospace graduate specializing in high-speed aerodynamics, CFD, and propulsion systems. 
                Known for rapid problem-solving and hands-on troubleshooting in high-pressure environments; applied across CFD simulations, CAD modelling, and UAV prototyping.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Proficient in CFD softwares like <span className="text-accent-purple font-semibold">OpenFOAM</span>, <span className="text-accent-orange font-semibold">Ansys</span>, and{' '}
                <span className="text-accent-cyan font-semibold">HiFUN</span>, and making high quality Structured Meshes using softwares like ICEM CFD, GridPro, and Ansys Mesh-Modeler. 
                Additionally, experienced in CAD modeling and design using <span className="text-accent-purple font-semibold">SolidWorks</span>, AutoCAD, and ANSYS, 
                as I emphasize on functional design approaches and engineering practicality.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Strong competencies in <span className="text-accent-orange font-semibold">Unmanned Aerial Systems piloting</span> (Fixed and Rotary Wing), and aerodynamic design align with a passion for innovative aerospace solutions and defense applications. 
                My work bridges theory, simulation, and real-world application, and I&apos;m now ready to solve cutting-edge challenges in next-gen propulsion and aerothermal systems.
              </p>

              {/* Skill Categories Grid - No Percentages */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-panel p-4 rounded-lg reveal" style={{ animationDelay: '0.1s' }}>
                  <div className="text-sm text-accent-cyan font-semibold mb-2">CFD & Analysis</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>OpenFOAM, HiFUN, Ansys Fluent</div>
                    <div>ICEM CFD, GridPro, Meshing</div>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg reveal" style={{ animationDelay: '0.2s' }}>
                  <div className="text-sm text-accent-purple font-semibold mb-2">Design & CAD</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>SolidWorks, AutoCAD, CATIA</div>
                    <div>UAV Design, FEM Analysis</div>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg reveal" style={{ animationDelay: '0.3s' }}>
                  <div className="text-sm text-accent-orange font-semibold mb-2">Programming</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>Python, MATLAB, C/C++</div>
                    <div>Linux, GitHub, LaTeX</div>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg reveal" style={{ animationDelay: '0.4s' }}>
                  <div className="text-sm text-accent-cyan font-semibold mb-2">Specialization</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>Hypersonics, UAS Piloting</div>
                    <div>Wind Tunnel Testing, TBCC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="relative py-16 px-4 bg-gradient-accent/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '7% Drag', label: 'Reduction in Radome Design' },
            { value: '50% Weight', label: 'Reduction with Composites' },
            { value: '2cm Accuracy', label: 'RTK GPS Landing System' },
            { value: '1st Rank', label: '300+ National Participants' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-lg reveal" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="font-display text-2xl md:text-3xl gradient-text font-bold">{stat.value}</div>
              <div className="text-sm text-white/70 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Hypersonic propulsion analysis, UAV precision systems, and CFD solver development across Mach 0.8&ndash;4.0 flight regimes.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {/* Featured Project - TBCC (Large Card) */}
            <div className="md:col-span-2 lg:col-span-2 group relative glass-panel p-8 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              {/* Project Visual */}
              <div className="mb-6 relative">
                <div className="w-full h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Rocket className="w-20 h-20 text-accent-cyan opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                </div>
                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs text-accent-orange font-semibold">
                  2024
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold gradient-text">TBCC Propulsion Analysis</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Validated TBCC mode transition performance across Mach 0.8&ndash;4.0 using OEM data correlation. 
                  Achieved seamless ramjet-to-scramjet transition with optimized fuel injection strategies.
                </p>
                
                {/* Metrics */}
                <div className="flex flex-wrap gap-3 text-xs">
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-cyan font-semibold">Mach 0.8&ndash;4.0</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-purple font-semibold">15% Efficiency Gain</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-orange font-semibold">SAROD 2024</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs text-white/60">
                  <span>OpenFOAM</span> • <span>CFD Analysis</span> • <span>Heat Transfer</span> • <span>Propulsion</span>
                </div>
              </div>
            </div>

            {/* UAV Project */}
            <div className="group relative glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              <div className="mb-4 relative">
                <div className="w-full h-32 bg-gradient-to-br from-accent-purple/20 to-accent-orange/20 rounded-lg flex items-center justify-center">
                  <Plane className="w-12 h-12 text-accent-purple opacity-60" />
                </div>
                <div className="absolute top-3 right-3 glass-panel px-2 py-1 rounded-full text-xs text-accent-cyan font-semibold">
                  2023
                </div>
              </div>

              <h3 className="font-display text-xl font-bold gradient-text mb-3">Supersonic UCAV Design</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Conceptual design and CFD validation of supersonic unmanned combat vehicle with stealth characteristics.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-2 text-xs">
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-cyan">Mach 1.8</span>
                  </div>
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-purple">-20% Drag</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  SolidWorks • Ansys • Stealth Design
                </div>
              </div>
            </div>

            {/* Precision Landing */}
            <div className="group relative glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              <div className="mb-4 relative">
                <div className="w-full h-32 bg-gradient-to-br from-accent-orange/20 to-accent-cyan/20 rounded-lg flex items-center justify-center">
                  <Target className="w-12 h-12 text-accent-orange opacity-60" />
                </div>
                <div className="absolute top-3 right-3 glass-panel px-2 py-1 rounded-full text-xs text-accent-purple font-semibold">
                  2023
                </div>
              </div>

              <h3 className="font-display text-xl font-bold gradient-text mb-3">UAV Precision Landing</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Autonomous landing system achieving &le;2cm accuracy through advanced control algorithms and sensor fusion.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-2 text-xs">
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-orange">&le;2cm</span>
                  </div>
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-cyan">IIT Bombay</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  MATLAB • Control Systems • Sensors
                </div>
              </div>
            </div>

            {/* Aerospike Nozzle */}
            <div className="group relative glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              <div className="mb-4 relative">
                <div className="w-full h-32 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-12 h-12 text-accent-cyan opacity-60" />
                </div>
                <div className="absolute top-3 right-3 glass-panel px-2 py-1 rounded-full text-xs text-accent-orange font-semibold">
                  2022
                </div>
              </div>

              <h3 className="font-display text-xl font-bold gradient-text mb-3">Aerospike Nozzle CFD</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Computational analysis of altitude-compensating aerospike nozzle for improved rocket efficiency.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-2 text-xs">
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-cyan">8% Isp Gain</span>
                  </div>
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-purple">CFD</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  OpenFOAM • Nozzle Design • Propulsion
                </div>
              </div>
            </div>

            {/* TLAM Project */}
            <div className="group relative glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              <div className="mb-4 relative">
                <div className="w-full h-32 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-lg flex items-center justify-center">
                  <Navigation className="w-12 h-12 text-accent-purple opacity-60" />
                </div>
                <div className="absolute top-3 right-3 glass-panel px-2 py-1 rounded-full text-xs text-accent-cyan font-semibold">
                  2022
                </div>
              </div>

              <h3 className="font-display text-xl font-bold gradient-text mb-3">TLAM Cruise Missile</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Aerodynamic design and trajectory optimization for long-range subsonic cruise missile system.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-2 text-xs">
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-purple">1500km Range</span>
                  </div>
                  <div className="glass-panel px-2 py-1 rounded-full">
                    <span className="text-accent-orange">Subsonic</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  Trajectory • Aerodynamics • CATIA
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12 reveal">
            <button className="px-8 py-3 glass-panel hover:bg-gradient-accent hover:scale-105 transition-all duration-300 rounded-lg font-medium text-white">
              <Github className="w-5 h-5 inline mr-2" />
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="relative py-24 px-4 bg-gradient-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              EXPERIENCE
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Internship experiences across industry leaders and premier research institutions.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-orange opacity-40 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* TATA Advanced Systems */}
              <div className="relative flex flex-col reveal" style={{ animationDelay: '0.1s' }}>
                {/* Timeline Dot */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent-orange rounded-full border-4 border-space shadow-lg shadow-accent-orange/50 hidden md:block z-10"></div>
                
                <div className="glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="glass-panel p-3 rounded-full">
                      <Rocket className="w-6 h-6 text-accent-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold gradient-text leading-tight">Concept Design Intern</h3>
                      <p className="text-accent-cyan font-semibold text-xs">TATA Advanced Systems</p>
                    </div>
                  </div>
                  <div className="text-xs text-white/60 mb-3">Jun 2024 – Aug 2024 • Bengaluru</div>
                  <div className="space-y-2 text-sm text-white/80 mb-4 flex-grow">
                    <p>• Analyzed hybrid UAV crosswind performance using HiFUN CFD software</p>
                    <p>• Investigated radome aerodynamics achieving 7% drag reduction</p>
                    <p>• Generated high-quality meshes from complex geometries on Linux HPC</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs mt-auto">
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-cyan">HiFUN CFD</span>
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-purple">Linux HPC</span>
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-orange">Mesh Generation</span>
                  </div>
                </div>
              </div>

              {/* FOSSEE IIT Bombay */}
              <div className="relative flex flex-col reveal" style={{ animationDelay: '0.3s' }}>
                {/* Timeline Dot */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent-purple rounded-full border-4 border-space shadow-lg shadow-accent-purple/50 hidden md:block z-10"></div>
                
                <div className="glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="glass-panel p-3 rounded-full">
                      <Wind className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold gradient-text leading-tight">Semester Long Intern</h3>
                      <p className="text-accent-purple font-semibold text-xs">FOSSEE, IIT Bombay</p>
                    </div>
                  </div>
                  <div className="text-xs text-white/60 mb-3">Mar 2024 – Jun 2024 • Mumbai</div>
                  <div className="space-y-2 text-sm text-white/80 mb-4 flex-grow">
                    <p>• Developed hypersonic CFD solver using OpenFOAM framework</p>
                    <p>• Achieved 1st Rank in National OpenFOAM Screening (300+ participants)</p>
                    <p>• Presented research findings at SAROD 2024 conference</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs mt-auto">
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-cyan">OpenFOAM</span>
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-purple">Hypersonics</span>
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-orange">1st Rank</span>
                  </div>
                </div>
              </div>

              {/* IIT Bombay Precision Landing */}
              <div className="relative flex flex-col reveal" style={{ animationDelay: '0.5s' }}>
                {/* Timeline Dot */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent-cyan rounded-full border-4 border-space shadow-lg shadow-accent-cyan/50 hidden md:block z-10"></div>
                
                <div className="glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="glass-panel p-3 rounded-full">
                      <Target className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold gradient-text leading-tight">Project & Research Intern</h3>
                      <p className="text-accent-orange font-semibold text-xs">IIT Bombay Aerospace</p>
                    </div>
                  </div>
                  <div className="text-xs text-white/60 mb-3">Jun 2023 – Aug 2023 • Mumbai</div>
                  <div className="space-y-2 text-sm text-white/80 mb-4 flex-grow">
                    <p>• Designed precision landing drone under Prof. Arnab Maity</p>
                    <p>• Conducted FEM analysis achieving 50% weight reduction with composites</p>
                    <p>• Achieved 2cm landing accuracy using RTK GPS and ArUco markers</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs mt-auto">
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-cyan">Ansys FEM</span>
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-purple">SolidWorks</span>
                    <span className="glass-panel px-2 py-1 rounded-full text-accent-orange">RTK GPS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Milestone */}
            <div className="mt-16 text-center reveal">
              <div className="glass-panel p-6 rounded-xl max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Gauge className="w-8 h-8 text-accent-cyan" />
                  <div>
                    <h3 className="font-display text-lg font-bold gradient-text">B.Tech Aerospace Engineering</h3>
                    <p className="text-accent-purple font-semibold">Amity University Mumbai</p>
                    <p className="text-accent-cyan text-xs">Minors in Business Management</p>
                  </div>
                </div>
                <div className="text-sm text-white/60 mb-2">2021 – 2025 • Mumbai</div>
                <div className="text-sm text-white/80">CGPA: 8.33/10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section id="research" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              RESEARCH & PUBLICATIONS
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Contributing to aerospace engineering knowledge through hypersonic research and CFD analysis publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SAROD 2024 Presentation */}
            <div className="group relative glass-panel p-8 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden reveal">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              {/* Publication Visual */}
              <div className="mb-6 relative">
                <div className="w-full h-48 bg-gradient-to-br from-accent-orange/20 to-accent-cyan/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-accent-orange opacity-60 mx-auto mb-2" />
                    <div className="font-display text-lg gradient-text font-bold">SAROD 2024</div>
                    <div className="text-xs text-white/60">Conference Presentation</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                </div>
                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs text-accent-orange font-semibold">
                  PRESENTED
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold gradient-text">
                  Hypersonic TBCC Propulsion Analysis
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Presented computational fluid dynamics analysis of Turbine-Based Combined Cycle (TBCC) propulsion systems 
                  at the SAROD 2024 aerospace conference. Validated performance across Mach 0.8&ndash;4.0 flight regime.
                </p>
                
                {/* Publication Details */}
                <div className="space-y-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-cyan font-semibold">Conference:</span>
                    <span>SAROD 2024 - Society for Aerospace Research and Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-purple font-semibold">Location:</span>
                    <span>Indian Institute of Technology, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-orange font-semibold">Keywords:</span>
                    <span>Hypersonics, CFD, TBCC, Propulsion, OpenFOAM</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-cyan font-semibold">Peer Reviewed</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-purple font-semibold">Mach 0.8&ndash;4.0</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-orange font-semibold">2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CFD Letters Publication */}
            <div className="group relative glass-panel p-8 rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden reveal" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              
              {/* Publication Visual */}
              <div className="mb-6 relative">
                <div className="w-full h-48 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Wind className="w-16 h-16 text-accent-purple opacity-60 mx-auto mb-2" />
                    <div className="font-display text-lg gradient-text font-bold">CFD LETTERS</div>
                    <div className="text-xs text-white/60">Journal Publication</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                </div>
                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs text-accent-purple font-semibold">
                  PUBLISHED
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold gradient-text">
                  OpenFOAM Hypersonic Flow Analysis
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Published research on hypersonic flow simulation methodology using OpenFOAM framework. 
                  Developed and validated computational approaches for high-speed aerodynamic analysis.
                </p>
                
                {/* Publication Details */}
                <div className="space-y-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-cyan font-semibold">Journal:</span>
                    <span>CFD Letters - Computational Fluid Dynamics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-purple font-semibold">Status:</span>
                    <span>Peer-Reviewed Publication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-orange font-semibold">Keywords:</span>
                    <span>OpenFOAM, Hypersonics, CFD, Flow Simulation</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-cyan font-semibold">Indexed Journal</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-purple font-semibold">OpenFOAM</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full">
                    <span className="text-accent-orange font-semibold">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Impact Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal">
            <div className="glass-panel p-6 rounded-lg">
              <div className="font-display text-2xl gradient-text font-bold">2</div>
              <div className="text-sm text-white/70 mt-1">Publications</div>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <div className="font-display text-2xl gradient-text font-bold">1</div>
              <div className="text-sm text-white/70 mt-1">Conference</div>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <div className="font-display text-2xl gradient-text font-bold">1st</div>
              <div className="text-sm text-white/70 mt-1">National Rank</div>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <div className="font-display text-2xl gradient-text font-bold">300+</div>
              <div className="text-sm text-white/70 mt-1">Participants Beat</div>
            </div>
          </div>

          {/* Academic Profiles CTA */}
          <div className="text-center mt-12 reveal">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 glass-panel hover:bg-gradient-accent hover:scale-105 transition-all duration-300 rounded-lg font-medium text-white">
                <span className="inline mr-2">📚</span>
                Google Scholar Profile
              </button>
              <button className="px-6 py-3 glass-panel hover:bg-gradient-accent hover:scale-105 transition-all duration-300 rounded-lg font-medium text-white">
                <span className="inline mr-2">🔬</span>
                ResearchGate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 bg-gradient-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              LET&apos;S COLLABORATE
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready for hypersonic research, CFD simulation challenges, and aerospace R&D collaborations. 
              Let&apos;s push the boundaries of aerospace engineering together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info & Quick Actions */}
            <div className="grid md:grid-cols-3 gap-8 reveal">
              {/* Email Card */}
              <div className="glass-panel p-6 rounded-lg group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                   onClick={() => copyToClipboard('isharsaini@yahoo.com', 'email')}>
                <div className="text-center">
                  <div className="glass-panel p-4 rounded-full w-fit mx-auto mb-4">
                    <Mail className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <div className="font-semibold text-white mb-2">Email</div>
                  <div className="text-white/70 text-sm mb-3">isharsaini@yahoo.com</div>
                  <div className="text-xs text-accent-cyan font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedItem === 'email' ? 'Copied!' : 'Click to copy'}
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-panel p-6 rounded-lg group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                   onClick={() => copyToClipboard('+91 8104156108', 'phone')}>
                <div className="text-center">
                  <div className="glass-panel p-4 rounded-full w-fit mx-auto mb-4">
                    <Phone className="w-8 h-8 text-accent-purple" />
                  </div>
                  <div className="font-semibold text-white mb-2">Phone / WhatsApp</div>
                  <div className="text-white/70 text-sm mb-3">+91 8104156108</div>
                  <div className="text-xs text-accent-purple font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedItem === 'phone' ? 'Copied!' : 'Click to copy'}
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/ishar-singh-saini"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-6 rounded-lg group hover:scale-[1.02] transition-all duration-300 block"
              >
                <div className="text-center">
                  <div className="glass-panel p-4 rounded-full w-fit mx-auto mb-4">
                    <Linkedin className="w-8 h-8 text-accent-orange" />
                  </div>
                  <div className="font-semibold text-white mb-2">LinkedIn</div>
                  <div className="text-white/70 text-sm mb-3">Professional Network</div>
                  <div className="text-xs text-accent-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Open profile
                  </div>
                </div>
              </a>
            </div>

            {/* Resume Download */}
            <div className="text-center mt-8 reveal">
              <a href="/resume/Ishar_Resume.pdf" download="Ishar_Singh_Saini_Resume.pdf" className="inline-block px-8 py-4 glass-panel hover:bg-gradient-accent hover:scale-[1.02] transition-all duration-300 rounded-lg font-medium text-white group">
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl">📄</span>
                  <span>Download PDF Resume</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-white/10 reveal">
            <p className="text-sm text-white/50 mb-4">
              © 2025 Ishar Singh Saini · Aerospace Engineer · Hypersonics · CFD · Propulsion Systems
            </p>
            <div className="flex justify-center gap-6 text-xs text-white/40">
              <span>Built with Next.js</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
