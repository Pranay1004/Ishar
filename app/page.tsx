import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const experiences = [
  {
    role: "Concept Design Intern",
    company: "TATA Advanced Systems Limited",
    location: "Bengaluru, India",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Simulated hybrid UAV performance on TASL's HPC, tuning RPM distribution to balance thrust in crosswind hover scenarios.",
      "Delivered 7% drag reduction for radome redesign and established mesh workflows for complex NMG geometries.",
      "Investigated Pitot tube errors from fuselage interference, identifying stagnation issues up to 2% at high dynamic pressure.",
    ],
  },
  {
    role: "Semester Long Intern",
    company: "FOSSEE, IIT Bombay",
    location: "Remote / Mumbai, India",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Ranked 1st nationally, leading OpenFOAM simulations on high-speed compressible flow over blunt re-entry bodies.",
      "Validated sonicFoam solver in hypersonic regimes with 13% error bounds and executed mesh-independence studies.",
      "Presented hypersonic CFD analysis at SAROD 2024, distilling shock structure trends for re-entry vehicle design.",
    ],
  },
  {
    role: "Project & Research Intern",
    company: "IIT Bombay — Precision Landing Drone Lab",
    location: "Mumbai, India",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Modelled carbon-fiber airframe in Ansys achieving ~50% mass reduction vs aluminum by validating stress envelopes.",
      "Led composite manufacturing and PLA component design, integrating sensors with RTK + ArUco landing stack.",
      "Reached autonomous landings with ≤2 cm accuracy using dual-phase guidance and custom calibration scripts.",
    ],
  },
];

const projects = [
  {
    title: "TBCC Mode Transition Study",
    context: "Final Year Dissertation · Amity University Mumbai",
    summary:
      "Mapped mode transition of a GE F404-IN20 powered TBCC across Mach 0.8–4.0, using GasTurb + MATLAB coupling to optimise air-splitting and thrust sharing.",
    highlights: ["Identified critical Mach 2.8–3.2 transition window", "Boosted specific thrust & TSFC near Mach 2.75"],
  },
  {
    title: "Supersonic UCAV Concept",
    context: "NACDeC-VIII · Aeronautical Society of India",
    summary:
      "Directed concept design for a 18,800 kg UCAV achieving 5,000 kg payload delivery within a 1,000 km combat radius and <2,000 m runway requirement.",
    highlights: ["Delta wing + afterburning turbofan for Mach 2 cruise", "Mission fuel fraction optimised to 0.346"],
  },
  {
    title: "Autonomous Navigation Aerial Vehicle",
    context: "ISRO Robotics Challenge – URSC",
    summary:
      "Engineered LiDAR-driven SLAM and precision-landing logic for GPS-denied environments with modular emergency recovery systems.",
    highlights: ["≤50 cm landing radius with real-time telemetry", "Dual-mode manual/autonomous architecture"],
  },
  {
    title: "Minimum Length Rocket Nozzle",
    context: "FOSSEE Scilab Case Study Hackathon",
    summary:
      "Implemented Method of Characteristics solver in Scilab for supersonic nozzle design, applying surrogate optimisation to streamline divergent contouring.",
    highlights: ["Optimised nozzle for uniform exit Mach", "Reduced compute cost via surrogate refinement"],
  },
];

const publications = [
  {
    title:
      "Assessment of Existing OpenFOAM Solvers for Incompressible Flow Over a 2D Prism",
    meta: "CFD Letters 17(10):184-197, 2025",
    link: "https://doi.org/10.37934/cfdl.17.10.184197",
  },
  {
    title:
      "Numerical Simulation of High-Speed Compressible Flow over Re-entry Vehicles using OpenFOAM",
    meta: "SAROD 2024 — Paper ID 57",
  },
];

const certifications = [
  { title: "Aircraft Design", issuer: "NPTEL", year: "2025" },
  {
    title: "Supersonic & Hypersonic Flows (Elite + Silver)",
    issuer: "NPTEL",
    year: "2024",
  },
  { title: "FreeFlyer Level 1", issuer: "a.i. solutions", year: "2023" },
];

const awards = [
  { title: "Emerging Talent in Open Source", org: "FOSSEE, IIT Bombay", year: "2025" },
  { title: "1st Consolation Prize · Scilab Case Study", org: "FOSSEE, IIT Bombay", year: "2025" },
  { title: "1st Place · Innovation Day Project Presentation", org: "Amity University Mumbai", year: "2024" },
  { title: "3rd Place · Innovation Day Poster", org: "Amity University Mumbai", year: "2023" },
];

const skills = {
  "CFD & Analysis": [
    "OpenFOAM",
    "HiFUN",
    "Ansys Fluent",
    "SimScale",
    "Mesh Generation",
    "Turbulence Modelling",
  ],
  "Design & Prototyping": [
    "SolidWorks",
    "CATIA",
    "OpenVSP",
    "CAD / FEM",
    "Wind Tunnel Testing",
    "UAV Prototyping",
  ],
  "Programming & Tools": [
    "Python",
    "MATLAB/Scilab",
    "C/C++",
    "Linux",
    "GitHub",
    "LaTeX",
  ],
  Languages: ["English", "German (A2)", "Hindi", "Punjabi", "Marathi"],
};

export default function Home() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <span className="badge">Aerospace Engineer · Hypersonics · CFD</span>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight heading-gradient">
                Ishar Singh Saini
              </h1>
              <p className="text-muted text-lg">
                Bridging high-speed aerodynamics, propulsion, and hands-on prototyping. From TBCC propulsion analysis to
                hypersonic CFD validation and precision UAV landings, I translate complex flow physics into flight-ready
                performance.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-app-foreground text-white px-5 py-2 text-sm font-medium shadow-md">
                  View Experience
                  <ArrowRight size={16} />
                </a>
                <a href="mailto:peisharsaini@yahoo.com" className="inline-flex items-center gap-2 rounded-full border border-app px-5 py-2 text-sm font-medium text-app-foreground hover:bg-white">
                  Email
                  <Mail size={16} />
                </a>
              </div>
            </div>
            <div className="card-subtle w-full md:max-w-xs p-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-muted mt-0.5" />
                <div>
                  <div className="font-medium">Mumbai, Maharashtra, India</div>
                  <div className="text-muted">Open to relocation</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-muted mt-0.5" />
                <div>
                  <div className="font-medium">+91 8104156108</div>
                  <div className="text-muted">WhatsApp / Call</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-muted mt-0.5" />
                <div>
                  <div className="font-medium">peisharsaini@yahoo.com</div>
                  <div className="text-muted">Primary contact</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight size={16} className="text-muted rotate-[-45deg] mt-0.5" />
                <div>
                  <a href="https://linkedin.com/in/ishar-singh-saini" target="_blank" rel="noreferrer" className="font-medium text-app-foreground hover:underline">
                    linkedin.com/in/ishar-singh-saini
                  </a>
                  <div className="text-muted">Professional network</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-muted md:grid-cols-4">
            <div>
              <div className="text-app-foreground text-xl font-semibold">SAROD 2024</div>
              <div>Hypersonic CFD presentation</div>
            </div>
            <div>
              <div className="text-app-foreground text-xl font-semibold">TBCC Focus</div>
              <div>Mach 0.8–4 propulsion research</div>
            </div>
            <div>
              <div className="text-app-foreground text-xl font-semibold">GATE AE 2025</div>
              <div>Score: 21.0 / 100</div>
            </div>
            <div>
              <div className="text-app-foreground text-xl font-semibold">CGPA 8.33</div>
              <div>Amity University Mumbai</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10">
          <span className="badge">Experience</span>
          <h2 className="mt-3 text-3xl font-semibold text-app-foreground">Hands-on aerospace problem solving</h2>
          <p className="mt-2 text-muted max-w-2xl">
            Concept design, hypersonic CFD, UAV prototyping, and HPC-based solver deployment across industry and leading
            research labs.
          </p>
        </header>
        <div className="space-y-6">
          {experiences.map((item) => (
            <article key={item.role} className="card-subtle p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-app-foreground">{item.role}</h3>
                  <p className="text-muted">{item.company}</p>
                </div>
                <div className="text-sm text-muted md:text-right">
                  <div>{item.location}</div>
                  <div>{item.period}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
                {item.bullets.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-app-foreground mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10">
          <span className="badge">Projects & Research</span>
          <h2 className="mt-3 text-3xl font-semibold text-app-foreground">Selected work across propulsion, CFD, and design</h2>
          <p className="mt-2 text-muted max-w-2xl">
            From TBCC mode transition mapping to supersonic combat concepts and autonomous navigation systems, each
            project connects simulation fidelity with practical mission outcomes.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card-subtle h-full p-6">
              <h3 className="text-lg font-semibold text-app-foreground">{project.title}</h3>
              <p className="text-xs uppercase tracking-wide text-muted mt-1">{project.context}</p>
              <p className="text-muted text-sm leading-relaxed mt-4">{project.summary}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-app-foreground mt-1">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="badge">Publications</span>
            <h2 className="mt-3 text-3xl font-semibold text-app-foreground">Peer-reviewed contributions</h2>
            <ul className="mt-6 space-y-4">
              {publications.map((pub) => (
                <li key={pub.title} className="card-subtle p-5">
                  <p className="text-sm font-medium text-app-foreground">{pub.title}</p>
                  <p className="text-xs uppercase tracking-wide text-muted mt-2">{pub.meta}</p>
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noreferrer" className="text-sm text-app-foreground hover:underline mt-2 inline-block">
                      View publication
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div id="awards">
            <span className="badge">Awards & Certifications</span>
            <div className="mt-6 grid gap-4">
              <div className="card-subtle p-5">
                <h3 className="text-sm font-semibold text-app-foreground uppercase tracking-wide">Awards</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {awards.map((award) => (
                    <li key={award.title} className="flex justify-between gap-4">
                      <span>{award.title}</span>
                      <span className="text-xs text-muted">{award.org} · {award.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-subtle p-5">
                <h3 className="text-sm font-semibold text-app-foreground uppercase tracking-wide">Certifications</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {certifications.map((cert) => (
                    <li key={cert.title} className="flex justify-between gap-4">
                      <span>{cert.title}</span>
                      <span className="text-xs text-muted">{cert.issuer} · {cert.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <span className="badge">Skills Portfolio</span>
          <h2 className="mt-3 text-3xl font-semibold text-app-foreground">Toolchain across simulation, design, and delivery</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card-subtle p-6">
              <h3 className="text-lg font-semibold text-app-foreground">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="badge bg-transparent text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="card p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="badge">Let’s collaborate</span>
              <h2 className="mt-3 text-3xl font-semibold text-app-foreground">Ready for hypersonic, CFD, and concept design challenges.</h2>
              <p className="mt-2 text-muted max-w-xl">
                Available for aerospace R&D roles, simulation-heavy engagements, and multidisciplinary teams needing rapid
                experimentation and validation.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:peisharsaini@yahoo.com" className="inline-flex items-center gap-2 rounded-full bg-app-foreground text-white px-5 py-2 font-medium shadow-md">
                Email Ishar
                <Mail size={16} />
              </a>
              <a href="tel:+918104156108" className="inline-flex items-center gap-2 rounded-full border border-app px-5 py-2 font-medium text-app-foreground hover:bg-white">
                Call or WhatsApp
                <Phone size={16} />
              </a>
              <a href="https://linkedin.com/in/ishar-singh-saini" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-app px-5 py-2 font-medium text-app-foreground hover:bg-white">
                LinkedIn Profile
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
