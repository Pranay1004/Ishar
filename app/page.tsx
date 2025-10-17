'use client';

import { useEffect, useRef } from 'react';
import { Rocket, Zap, Wind, Gauge, Mail, Linkedin, Phone, ChevronDown } from 'lucide-react';

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

          {/* 3D Floating Rocket */}
          <div ref={rocketRef} className="relative mx-auto w-32 h-32 my-12 animate-float" style={{ perspective: '1200px' }}>
            <Rocket className="w-full h-full text-accent-cyan glow-cyan" />
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
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 animate-pulse-glow" />
                <div className="absolute inset-4 glass-panel rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Gauge className="w-16 h-16 text-accent-cyan mx-auto mb-3" />
                    <div className="font-display text-3xl gradient-text font-bold">SKILLS</div>
                    <div className="text-xs text-white/50 mt-2">4 Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Skill Badges - All Skills from Resume */}
              <div className="absolute top-0 right-0 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '0s' }}>
                <Wind className="w-4 h-4 text-accent-cyan inline mr-1" />
                <span className="font-medium">CFD Specialist</span>
              </div>
              <div className="absolute top-12 right-8 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '0.3s' }}>
                <Zap className="w-4 h-4 text-accent-orange inline mr-1" />
                <span className="font-medium">Hypersonics</span>
              </div>
              <div className="absolute bottom-0 left-0 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '0.6s' }}>
                <Rocket className="w-4 h-4 text-accent-purple inline mr-1" />
                <span className="font-medium">Propulsion</span>
              </div>
              <div className="absolute bottom-12 left-8 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '0.9s' }}>
                <span className="font-medium">OpenFOAM</span>
              </div>
              <div className="absolute top-1/3 -left-4 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '1.2s' }}>
                <span className="font-medium">Ansys</span>
              </div>
              <div className="absolute top-1/3 -right-4 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '1.5s' }}>
                <span className="font-medium">HiFUN</span>
              </div>
              <div className="absolute bottom-1/3 -left-6 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '1.8s' }}>
                <span className="font-medium">SolidWorks</span>
              </div>
              <div className="absolute bottom-1/3 -right-6 glass-panel px-3 py-1.5 rounded-full animate-float text-xs" style={{ animationDelay: '2.1s' }}>
                <span className="font-medium">MATLAB</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 reveal">
              <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
                AEROSPACE ENGINEER
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                <span className="text-accent-orange font-semibold">4 years of hands-on experience</span> in aerospace engineering,
                from concept design to hypersonic validation. Presented CFD analysis at <span className="text-accent-cyan font-semibold">SAROD 2024</span>,
                validated TBCC propulsion across Mach 0.8–4.0, and achieved ≤2 cm UAV landing precision.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Specialized in high-speed aerodynamics, CFD simulation, and propulsion systems. Worked at{' '}
                <span className="text-accent-purple font-semibold">TATA Advanced Systems</span> on hybrid UAV analysis,{' '}
                <span className="text-accent-cyan font-semibold">IIT Bombay</span> on precision landing systems, and{' '}
                <span className="text-accent-purple font-semibold">FOSSEE</span> on hypersonic OpenFOAM research (1st Rank nationally).
              </p>

              {/* Skill Categories Grid - No Percentages */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-panel p-4 rounded-lg reveal" style={{ animationDelay: '0.1s' }}>
                  <div className="text-sm text-accent-cyan font-semibold mb-2">CFD & Analysis</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>OpenFOAM, HiFUN, Ansys Fluent</div>
                    <div>Mesh Generation, Turbulence</div>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg reveal" style={{ animationDelay: '0.2s' }}>
                  <div className="text-sm text-accent-purple font-semibold mb-2">Design & CAD</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>SolidWorks, CATIA, OpenVSP</div>
                    <div>UAV Prototyping, FEM</div>
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
                    <div>Hypersonics, TBCC</div>
                    <div>Wind Tunnel Testing</div>
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
            { value: '4 Years', label: 'Aerospace Experience' },
            { value: 'SAROD 2024', label: 'Hypersonic CFD Presentation' },
            { value: 'Mach 0.8–4', label: 'TBCC Research Range' },
            { value: '1st Rank', label: 'FOSSEE National Screening' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-lg reveal" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="font-display text-2xl md:text-3xl gradient-text font-bold">{stat.value}</div>
              <div className="text-sm text-white/70 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text reveal">
            LET'S COLLABORATE
          </h2>
          <p className="text-lg text-white/80 reveal">
            Ready for hypersonic, CFD, and concept design challenges. Available for aerospace R&D roles and
            simulation-heavy engagements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <a
              href="mailto:peisharsaini@yahoo.com"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform shadow-lg"
            >
              <Mail className="w-5 h-5" />
              EMAIL ISHAR
            </a>
            <a
              href="https://linkedin.com/in/ishar-singh-saini"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass-panel text-white rounded-md font-medium hover:scale-105 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
              LINKEDIN
            </a>
            <a
              href="tel:+918104156108"
              className="flex items-center gap-3 px-6 py-3 glass-panel text-white rounded-md font-medium hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              CALL / WHATSAPP
            </a>
          </div>

          <div className="pt-12 text-sm text-white/50">
            <p>© 2025 Ishar Singh Saini · Aerospace Engineer · Hypersonics · CFD · Propulsion Systems</p>
          </div>
        </div>
      </section>
    </div>
  );
}
