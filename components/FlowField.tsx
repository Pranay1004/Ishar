'use client';

import { useRef, useEffect } from 'react';

/**
 * CFD-inspired Flow Field Animation using Canvas
 * Simulates plasma flow with particle system
 */
export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for CFD visualization
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 0;
        this.maxLife = Math.random() * 100 + 50;
      }

      update(flowField: number[][]) {
        // Apply flow field forces
        const gridX = Math.floor(this.x / 20);
        const gridY = Math.floor(this.y / 20);
        
        if (flowField[gridY] && flowField[gridY][gridX] !== undefined) {
          const angle = flowField[gridY][gridX];
          this.vx += Math.cos(angle) * 0.1;
          this.vy += Math.sin(angle) * 0.1;
        }

        // Damping
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = 1 - this.life / this.maxLife;
        ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      isDead(): boolean {
        return this.life >= this.maxLife;
      }
    }

    // Generate flow field
    const cols = Math.ceil(canvas.width / 20);
    const rows = Math.ceil(canvas.height / 20);
    const flowField: number[][] = [];

    for (let y = 0; y < rows; y++) {
      flowField[y] = [];
      for (let x = 0; x < cols; x++) {
        const angle = Math.sin(x * 0.05) * Math.cos(y * 0.05) * Math.PI * 2;
        flowField[y][x] = angle;
      }
    }

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 12, 16, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update flow field over time
      time += 0.01;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          flowField[y][x] = 
            Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time) * Math.PI * 2;
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update(flowField);
        particles[i].draw(ctx);

        if (particles[i].isDead()) {
          particles.splice(i, 1);
          particles.push(new Particle());
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #0B0C10 0%, #1a1d29 100%)' }}
    />
  );
}
