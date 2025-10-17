'use client';

import { useState, useEffect, useCallback } from 'react';

interface SoundControl {
  isEnabled: boolean;
  volume: number;
  toggleSound: () => void;
  setVolume: (volume: number) => void;
  playSound: (soundType: 'hover' | 'click' | 'transition' | 'ambient') => void;
}

export function useSoundControl(): SoundControl {
  const [isEnabled, setIsEnabled] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        setAudioContext(new AudioContextClass());
      }
    }
  }, []);

  const toggleSound = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);

  const playSound = useCallback((soundType: 'hover' | 'click' | 'transition' | 'ambient') => {
    if (!isEnabled || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Sound profiles for different interactions
    switch (soundType) {
      case 'hover':
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(volume * 0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
        break;
      case 'click':
        oscillator.frequency.value = 1200;
        gainNode.gain.setValueAtTime(volume * 0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
      case 'transition':
        oscillator.frequency.value = 600;
        gainNode.gain.setValueAtTime(volume * 0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;
      default:
        break;
    }
  }, [isEnabled, audioContext, volume]);

  return {
    isEnabled,
    volume,
    toggleSound,
    setVolume,
    playSound,
  };
}
