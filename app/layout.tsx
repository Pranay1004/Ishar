import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ishar Singh Saini | Aerospace Engineer - Hypersonics, CFD, UAV Systems",
    template: "%s | Ishar Singh Saini - Aerospace Engineer"
  },
  description:
    "Leading aerospace engineer specializing in hypersonic flow analysis, computational fluid dynamics (CFD), turbine-based combined cycle (TBCC) propulsion, and UAV system development. Expert in OpenFOAM, HiFUN, precision landing systems, and aerospike nozzle optimization. Research experience at IIT Bombay FOSSEE and TATA Advanced Systems.",
  metadataBase: new URL('https://ishar-aerospace.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>✈️</text></svg>",
    shortcut: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>✈️</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>✈️</text></svg>",
  },
  keywords: [
    // Core Aerospace Engineering
    "aerospace engineer",
    "aeronautical engineer",
    "flight dynamics engineer",
    "aircraft design engineer",
    "propulsion systems engineer",
    
    // CFD & Simulation
    "CFD specialist",
    "computational fluid dynamics",
    "OpenFOAM expert",
    "HiFUN CFD",
    "aerodynamics simulation",
    "fluid mechanics simulation",
    "turbulence modeling",
    "mesh generation",
    "numerical analysis",
    
    // Hypersonics & High-Speed Flow
    "hypersonics engineer",
    "hypersonic flow analysis",
    "high-speed aerodynamics",
    "supersonic flow",
    "shock wave analysis",
    "compressible flow",
    "Mach number analysis",
    
    // Propulsion Systems
    "TBCC propulsion",
    "turbine-based combined cycle",
    "ramjet propulsion",
    "scramjet technology",
    "rocket propulsion",
    "aerospike nozzle",
    "altitude compensating nozzle",
    "propulsion optimization",
    "engine performance analysis",
    
    // UAV & Aircraft Systems
    "UAV systems",
    "unmanned aerial vehicle",
    "drone technology",
    "aircraft prototyping",
    "precision landing systems",
    "autopilot systems",
    "flight control systems",
    "avionics integration",
    
    // Research & Academia
    "IIT Bombay",
    "FOSSEE",
    "aerospace research",
    "academic research",
    "engineering publications",
    
    // Industry Experience
    "TATA Advanced Systems",
    "defense aerospace",
    "military aircraft",
    "aerospace consulting",
    "engineering services",
    
    // Technical Skills
    "MATLAB",
    "Python programming",
    "engineering simulation",
    "CAD design",
    "technical documentation",
    "project management",
    
    // Location & Availability
    "India aerospace engineer",
    "Mumbai aerospace engineer",
    "Bangalore aerospace engineer",
    "Delhi aerospace engineer",
    "aerospace engineer hire",
    "freelance aerospace engineer",
  ],
  authors: [
    { 
      name: "Ishar Singh Saini",
      url: "https://linkedin.com/in/ishar-singh-saini"
    }
  ],
  creator: "Ishar Singh Saini",
  publisher: "Ishar Singh Saini",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ishar Singh Saini | Leading Aerospace Engineer - Hypersonics & CFD Specialist",
    description:
      "Expert aerospace engineer specializing in hypersonic flow analysis, CFD simulation, TBCC propulsion systems, and UAV development. Proven track record in OpenFOAM, precision landing systems, and aerospike nozzle optimization.",
    type: "website",
    locale: "en_US",
    url: "https://ishar-aerospace.vercel.app",
    siteName: "Ishar Singh Saini - Aerospace Engineer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ishar Singh Saini - Aerospace Engineer specializing in Hypersonics and CFD",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1080,
        height: 1080,
        alt: "Ishar Singh Saini - Aerospace Engineering Portfolio",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishar Singh Saini | Aerospace Engineer - Hypersonics & CFD",
    description: "Leading aerospace engineer specializing in hypersonic flow analysis, CFD simulation, and propulsion systems. Expert in OpenFOAM, TBCC propulsion, and UAV development.",
    images: ["/og-image.jpg"],
    creator: "@ishar_aerospace",
    site: "@ishar_aerospace",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Engineering",
  classification: "Aerospace Engineering Portfolio",
  other: {
    "DC.title": "Ishar Singh Saini - Aerospace Engineer",
    "DC.creator": "Ishar Singh Saini",
    "DC.subject": "Aerospace Engineering, CFD, Hypersonics, Propulsion Systems",
    "DC.description": "Professional portfolio of aerospace engineer specializing in hypersonics and computational fluid dynamics",
    "DC.publisher": "Ishar Singh Saini",
    "DC.contributor": "Ishar Singh Saini",
    "DC.date": "2025",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "geo.region": "IN",
    "geo.country": "India",
    "ICBM": "19.0760,72.8777",
    "geo.position": "19.0760;72.8777",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "referrer": "origin-when-cross-origin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://ishar-aerospace.vercel.app/#person",
                  name: "Ishar Singh Saini",
                  givenName: "Ishar Singh",
                  familyName: "Saini",
                  jobTitle: [
                    "Aerospace Engineer",
                    "CFD Specialist",
                    "Hypersonics Engineer",
                    "Propulsion Systems Engineer"
                  ],
                  description: "Leading aerospace engineer specializing in hypersonic flow analysis, computational fluid dynamics, TBCC propulsion systems, and UAV development.",
                  url: "https://ishar-aerospace.vercel.app",
                  image: "https://ishar-aerospace.vercel.app/profile-image.jpg",
                  sameAs: [
                    "https://linkedin.com/in/ishar-singh-saini",
                    "https://github.com/ishar-singh-saini"
                  ],
                  email: "isharsaini@yahoo.com",
                  telephone: "+91-8104156108",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                    addressRegion: "Maharashtra",
                    addressLocality: "Mumbai"
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "TATA Advanced Systems Limited",
                    description: "Defense and Aerospace Systems"
                  },
                  alumniOf: [
                    {
                      "@type": "EducationalOrganization",
                      name: "Indian Institute of Technology Bombay",
                      description: "IIT Bombay - FOSSEE Research"
                    }
                  ],
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Aerospace Engineer",
                    occupationLocation: {
                      "@type": "Country",
                      name: "India"
                    },
                    skills: [
                      "Computational Fluid Dynamics",
                      "Hypersonic Flow Analysis",
                      "OpenFOAM",
                      "HiFUN CFD",
                      "TBCC Propulsion",
                      "UAV Systems",
                      "Aerospike Nozzles",
                      "Precision Landing Systems"
                    ]
                  },
                  knowsAbout: [
                    "Aerospace Engineering",
                    "Computational Fluid Dynamics",
                    "Hypersonics",
                    "Propulsion Systems",
                    "UAV Technology",
                    "Aircraft Design",
                    "Turbulence Modeling",
                    "Numerical Analysis"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ishar-aerospace.vercel.app/#website",
                  url: "https://ishar-aerospace.vercel.app",
                  name: "Ishar Singh Saini - Aerospace Engineer Portfolio",
                  description: "Professional portfolio showcasing aerospace engineering expertise in hypersonics, CFD, and propulsion systems",
                  publisher: {
                    "@id": "https://ishar-aerospace.vercel.app/#person"
                  },
                  inLanguage: "en-US",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://ishar-aerospace.vercel.app/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://ishar-aerospace.vercel.app/#webpage",
                  url: "https://ishar-aerospace.vercel.app",
                  name: "Ishar Singh Saini | Aerospace Engineer - Hypersonics, CFD, UAV Systems",
                  description: "Leading aerospace engineer specializing in hypersonic flow analysis, computational fluid dynamics, and propulsion systems",
                  isPartOf: {
                    "@id": "https://ishar-aerospace.vercel.app/#website"
                  },
                  about: {
                    "@id": "https://ishar-aerospace.vercel.app/#person"
                  },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: "https://ishar-aerospace.vercel.app/og-image.jpg"
                  },
                  datePublished: "2025-01-01",
                  dateModified: "2025-10-18",
                  breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://ishar-aerospace.vercel.app"
                      }
                    ]
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://ishar-aerospace.vercel.app/#service",
                  name: "Aerospace Engineering Consulting",
                  description: "Professional aerospace engineering services including CFD analysis, hypersonics research, and propulsion system design",
                  provider: {
                    "@id": "https://ishar-aerospace.vercel.app/#person"
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "India"
                  },
                  serviceType: [
                    "CFD Analysis",
                    "Hypersonic Flow Simulation",
                    "Propulsion System Design",
                    "UAV Development",
                    "Aerodynamics Consulting"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased font-body">
        <div className="blueprint-grid fixed inset-0 z-0 pointer-events-none opacity-30" />
        {children}
      </body>
    </html>
  );
}
