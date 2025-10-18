import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishar Singh Saini | Aerospace Engineer - Hypersonics, CFD, UAV Systems",
  description:
    "Aerospace engineer specializing in high-speed aerodynamics, CFD simulation, propulsion systems, and UAV prototyping. TBCC propulsion research, hypersonic flow analysis, precision landing systems.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🚀</text></svg>",
  },
  keywords: [
    "aerospace engineer",
    "CFD specialist",
    "hypersonics",
    "TBCC propulsion",
    "UAV systems",
    "OpenFOAM",
    "HiFUN",
    "turbine-based combined cycle",
    "computational fluid dynamics",
    "aircraft design",
    "TATA Advanced Systems",
    "IIT Bombay",
    "FOSSEE",
  ],
  authors: [{ name: "Ishar Singh Saini" }],
  openGraph: {
    title: "Ishar Singh Saini | Aerospace Engineer",
    description:
      "Hypersonics • CFD • Propulsion Systems • UAV Design — Aerospace engineer bridging simulation fidelity with flight-ready performance.",
    type: "website",
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
              "@type": "Person",
              name: "Ishar Singh Saini",
              jobTitle: "Aerospace Engineer",
              description:
                "Aerospace engineer specializing in hypersonics, CFD, and propulsion systems",
              url: "https://linkedin.com/in/ishar-singh-saini",
              sameAs: ["https://linkedin.com/in/ishar-singh-saini"],
            }),
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
