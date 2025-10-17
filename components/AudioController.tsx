'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useSoundControl } from '@/hooks/useSoundControl';
import { motion } from 'framer-motion';

export default function AudioController() {
  const { isEnabled, toggleSound } = useSoundControl();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleSound}
      className="fixed bottom-8 right-8 z-50 glass p-4 rounded-full hover:bg-plasma-cyan/20 transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isEnabled ? (
        <Volume2 className="w-6 h-6 text-plasma-cyan" />
      ) : (
        <VolumeX className="w-6 h-6 text-titanium" />
      )}
      <span className="absolute right-full mr-4 px-3 py-1 glass rounded-lg text-xs font-michroma text-plasma-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isEnabled ? 'AUDIO ON' : 'AUDIO OFF'}
      </span>
    </motion.button>
  );
}
