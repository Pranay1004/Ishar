import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Ishar Singh Saini | Aerospace Engineer (Hypersonics, CFD, Aircraft Design)",
  description:
    "Premium, glass-designed resume site for Ishar Singh Saini — Aerospace Engineer specializing in Hypersonics, Aircraft Design, and CFD.",
  keywords: [
    "Aerospace Engineering",
    "Hypersonics",
    "CFD",
    "Aircraft Design",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: "Ishar Singh Saini" }],
  openGraph: {
    title: "Ishar Singh Saini | Aerospace Engineer",
    description:
      "Hypersonics • CFD • Aircraft Design — Apple/Pixar-inspired, premium glass UI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head />
      <body className="antialiased bg-app text-app-foreground">
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(255,255,255,0.85)] border-b border-app shadow-sm">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#top" className="font-semibold tracking-tight text-app-foreground">
              Ishar Singh Saini
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm text-muted">
              <a href="#experience" className="hover:text-app-foreground">Experience</a>
              <a href="#projects" className="hover:text-app-foreground">Projects</a>
              <a href="#publications" className="hover:text-app-foreground">Publications</a>
              <a href="#skills" className="hover:text-app-foreground">Skills</a>
              <a href="#awards" className="hover:text-app-foreground">Awards</a>
              <a href="#contact" className="rounded-md px-3 py-1.5 bg-app-foreground text-white hover:bg-[rgba(var(--accent),1)] transition">Contact</a>
            </div>
          </div>
        </nav>

        <main id="top" className="min-h-dvh w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
