# 🚀 THE MACH BEYOND

**Cinematic Aerospace Portfolio for Ishar Singh Saini**  
*Aerospace Engineer | CFD Specialist | Propulsion Innovator*

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r163-000000?logo=three.js)](https://threejs.org/)

---

## 🌌 Overview

THE MACH BEYOND is not just a portfolio—it's a **cinematic, 3D, mission-control-inspired digital experience** that fuses three aerospace themes:

1. **Mach Theme**: Hypersonic plasma flow + CFD-inspired motion
2. **Control Deck Theme**: Futuristic cockpit UI with HUD elements, gauges, and glassmorphic overlays
3. **Spaceborne Theme**: Orbital exploration with satellites, zero-gravity transitions, and cosmic ambience

The user's journey simulates a **digital flight simulation**—from atmospheric flow to orbital control to interplanetary exploration.

---

## ✨ Features

### 🎬 Cinematic Animations
- **Boot Sequence**: System initialization with animated text and Mach meter
- **CFD Flow Fields**: Real-time particle system simulating hypersonic flow
- **Smooth Transitions**: Framer Motion + scroll-based animations
- **Plasma Cursor Trail**: Custom jet pointer with glowing plasma effects

### 🎨 Design Language
- **Glassmorphism**: Frosted glass panels with backdrop blur
- **Glow Effects**: Neon cyan/orange lighting with hover states
- **Aerospace Typography**: Orbitron, Michroma, Space Grotesk, Inter
- **Color Palette**: Deep-space black, plasma cyan, titanium gray, off-white

### 🛰️ Interactive Sections
1. **Launch Interface**: Fullscreen intro with flowfield animation
2. **Aerodynamic Core**: About section with CFD backgrounds
3. **Command Deck**: Glassmorphic cockpit-style experience timeline
4. **Orbit Layer**: 3D orbital map with satellite projects (Three.js)
5. **Deep Systems**: Radar/gauge skill visualizations
6. **Future Chamber**: 3D hangar environment vision statement
7. **Transmission Terminal**: 3D Earth globe contact form

### 🔊 Audio System
- Optional ambient sounds (toggle-able)
- Hover/click interaction sounds
- Web Audio API implementation

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### Animation & 3D
- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **3D Rendering**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Globe**: [react-globe.gl](https://github.com/vasturiano/react-globe.gl)

### Data Visualization
- **Charts**: [Recharts](https://recharts.org/)

### Icons & UI
- **Icons**: [Lucide React](https://lucide.dev/)

### State Management
- **Store**: [Zustand](https://github.com/pmndrs/zustand)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mach-beyond
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Type Check
```bash
npm run type-check
```

### Lint
```bash
npm run lint
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

Or connect your GitHub repository to [Vercel](https://vercel.com/) for automatic deployments.

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Install Netlify Plugin**: Add `@netlify/plugin-nextjs` in `netlify.toml`

See `netlify.toml` for configuration.

---

## 📁 Project Structure

```
mach-beyond/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx             # Home page (all sections)
│   └── globals.css          # Global styles & animations
├── components/
│   ├── Navbar.tsx           # Glass nav with Mach indicator
│   ├── Hero.tsx             # Launch interface with boot sequence
│   ├── FlowField.tsx        # CFD particle animation (Canvas)
│   ├── About.tsx            # Aerodynamic Core section
│   ├── Experience.tsx       # Command Deck timeline
│   ├── Projects.tsx         # Orbital map with satellites
│   ├── Skills.tsx           # Radar gauge visualizations
│   ├── Vision.tsx           # 3D hangar future chamber
│   ├── Contact.tsx          # 3D Earth contact form
│   ├── CustomCursor.tsx     # Plasma trail cursor
│   └── AudioController.tsx  # Sound toggle button
├── hooks/
│   ├── useSoundControl.ts   # Web Audio API hook
│   └── useMousePosition.ts  # Mouse tracking
├── lib/
│   └── utils.ts             # Utility functions (lerp, easing, etc.)
├── types/
│   └── index.ts             # TypeScript types
├── public/
│   └── (assets)             # Images, models, textures
├── tailwind.config.ts       # Tailwind theme config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  'deep-space': '#0B0C10',
  'plasma-cyan': '#00FFFF',
  'titanium': '#C0C0C0',
  // ... more colors
}
```

### Fonts
Imported in `app/globals.css`:
- **Orbitron** (titles)
- **Michroma** (labels)
- **Space Grotesk** (body)
- **Inter** (optional)

### Animations
Keyframes defined in `tailwind.config.ts` under `keyframes` and `animation`.

---

## 🧩 Components Overview

### 1. **Hero (Launch Interface)**
- Boot sequence with typewriter effect
- Animated Mach meter (0.1 → 4.0)
- CFD flowfield background (Canvas particle system)
- CTA button to scroll to About

### 2. **About (Aerodynamic Core)**
- Animated CFD flowlines backdrop
- Gradient text trails
- Interactive skill keywords with popups

### 3. **Experience (Command Deck)**
- Glassmorphic cockpit panels
- Circular radar timeline layout
- Expandable mission logs

### 4. **Projects (Orbit Layer)**
- 3D orbital map (react-three-fiber)
- Satellite objects representing projects
- Zoom/dock animations on click

### 5. **Skills (Deep Systems)**
- Radar/gauge charts (Recharts)
- Animated CAD line backgrounds
- Tech stack icons with hover sounds

### 6. **Vision (Future Chamber)**
- 3D hangar environment
- Floating 3D text in space
- Cosmic fog + ambient lighting

### 7. **Contact (Transmission Terminal)**
- Rotating 3D Earth globe
- Glassmorphic contact form overlay
- Email integration (Nodemailer ready)

---

## 🎯 Performance Optimization

- **Next.js Image Optimization**: Use `<Image />` for assets
- **Code Splitting**: Automatic via Next.js App Router
- **Lazy Loading**: Three.js components loaded on demand
- **Web Workers**: Offload particle calculations (optional)

---

## 🐛 Known Issues

- **Safari**: WebGL performance may vary on older devices
- **Mobile**: 3D orbital map simplified for touch devices
- **Audio**: Requires user interaction to enable (browser policy)

---

## 🤝 Contributing

This is a personal portfolio project. Contributions are not actively sought, but suggestions are welcome!

---

## 📄 License

MIT License - feel free to fork and adapt for your own use.

---

## 📬 Contact

**Ishar Singh Saini**  
- **Email**: peisharsaini@yahoo.com
- **LinkedIn**: [linkedin.com/in/ishar-singh-saini](https://linkedin.com/in/ishar-singh-saini)
- **Location**: Mumbai, Maharashtra, India

---

## 🌟 Acknowledgments

- **Inspiration**: NASA Mission Control, SpaceX Dragon UI, Cyberpunk aesthetics
- **Fonts**: Google Fonts
- **Icons**: Lucide React
- **3D Assets**: (Add attribution if using external models)

---

**Built with 🚀 by Ishar Singh Saini**  
*Where propulsion meets imagination.*
# Ishar
# Ishar
# Ishar
