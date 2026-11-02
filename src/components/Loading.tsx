import React from 'react';
import { motion } from 'framer-motion';

export const Loading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[10000] bg-white dark:bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle monochrome progress ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border border-black/10 dark:border-white/20 border-t-black dark:border-t-white rounded-full"
        />
        <span className="absolute font-mono text-[10px] tracking-widest text-[#111111] dark:text-[#FFFFFF] uppercase">
          AS
        </span>
      </div>
    </motion.div>
  );
};

export default Loading;
