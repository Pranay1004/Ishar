'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TextMorphingProps {
  text: string;
  words?: string[];
  interval?: number;
  className?: string;
}

export default function TextMorphing({ text, words = [], interval = 3000, className = '' }: TextMorphingProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Text scrambling effect
  const scrambleText = (finalText: string, duration: number = 1500) => {
    if (!containerRef.current) return;
    
    const finalLength = finalText.length;
    const element = containerRef.current;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,./<>?';
    
    let frameRequest = 0;
    let currentLength = 0;
    const maxLength = Math.max(finalLength, element.innerText.length);
    let frameCount = 0;
    const maxFrameCount = Math.floor(duration / 1000 * 60); // 60fps for duration
    
    const update = () => {
      let outputText = '';
      const progressPercent = frameCount / maxFrameCount;
      
      // As we progress, we gradually reveal more of the final text
      currentLength = Math.floor(progressPercent * finalLength);
      
      // Build the output text
      for (let i = 0; i < maxLength; i++) {
        // If this position should show the final character
        if (i < currentLength) {
          outputText += finalText[i];
        } 
        // Otherwise show a random character
        else if (i < finalLength) {
          outputText += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      
      element.innerText = outputText;
      frameCount++;
      
      if (frameCount <= maxFrameCount) {
        frameRequest = requestAnimationFrame(update);
      } else {
        element.innerText = finalText;
        setIsAnimating(false);
      }
    };
    
    setIsAnimating(true);
    cancelAnimationFrame(frameRequest);
    frameRequest = requestAnimationFrame(update);
    
    return () => cancelAnimationFrame(frameRequest);
  };
  
  // Word cycling
  useEffect(() => {
    if (words.length <= 1) return;
    
    const cycleWords = () => {
      if (isAnimating) return;
      
      const nextIndex = (currentWord + 1) % words.length;
      scrambleText(words[nextIndex]);
      setCurrentWord(nextIndex);
    };
    
    const intervalId = setInterval(cycleWords, interval);
    return () => clearInterval(intervalId);
  }, [words, interval, currentWord, isAnimating]);
  
  // Initial text setup
  useEffect(() => {
    if (containerRef.current) {
      // Use single text prop if provided, otherwise use first word from words array
      const initialText = text || (words.length > 0 ? words[0] : '');
      containerRef.current.innerText = initialText;
      
      // Initial animation
      if (initialText) {
        setTimeout(() => {
          scrambleText(initialText, 800);
        }, 500);
      }
    }
  }, [text, words]);
  
  return (
    <div 
      ref={containerRef} 
      className={`font-mono inline-block ${className}`}
    >
      {text || (words.length > 0 ? words[0] : '')}
    </div>
  );
}