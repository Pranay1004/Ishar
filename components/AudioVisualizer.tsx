'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AudioVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [audioData, setAudioData] = useState<Uint8Array | null>(null);
  const [audioSource, setAudioSource] = useState<MediaElementAudioSourceNode | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  
  // Initialize audio context and analyzer
  useEffect(() => {
    // Wait for user interaction before creating AudioContext (browser policy)
    const handleFirstInteraction = () => {
      if (!audioContext) {
        const newAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const newAnalyser = newAudioContext.createAnalyser();
        
        newAnalyser.fftSize = 256;
        const bufferLength = newAnalyser.frequencyBinCount;
        const newAudioData = new Uint8Array(bufferLength);
        
        setAudioContext(newAudioContext);
        setAnalyser(newAnalyser);
        setAudioData(newAudioData);
        
        // Remove event listeners once audio context is created
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };
    
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [audioContext]);
  
  // Connect audio element to analyzer when both are available
  useEffect(() => {
    if (audioContext && analyser && audioRef.current && !audioSource) {
      const source = audioContext.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      setAudioSource(source);
    }
    
    return () => {
      if (audioSource) {
        audioSource.disconnect();
      }
    };
  }, [audioContext, analyser, audioSource]);
  
  // Draw visualization when playing
  useEffect(() => {
    if (!analyser || !audioData || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 100;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const draw = () => {
      if (!analyser || !audioData || !ctx) return;
      
      analyser.getByteFrequencyData(audioData);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / audioData.length) * 2.5;
      let x = 0;
      
      for (let i = 0; i < audioData.length; i++) {
        const barHeight = audioData[i] / 2;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#9D00FF');
        gradient.addColorStop(1, '#CCFF00');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(draw);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, analyser, audioData]);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-30">
      {/* Audio visualizer */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-[50px]"
      />
      
      {/* Audio controls */}
      <div className="absolute bottom-4 right-4">
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 brutal-border bg-void flex justify-center items-center hover:bg-neon-acid hover:text-void transition-colors"
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="5" width="4" height="14" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" fill="currentColor" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 5L19 12L7 19V5Z" fill="currentColor" />
            </svg>
          )}
        </motion.button>
      </div>
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        src="/sounds/background.mp3" 
        loop 
        preload="auto"
      />
    </div>
  );
}