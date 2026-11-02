import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const MainQuote: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-6 relative bg-white dark:bg-black border-y border-black/5 dark:border-white/5 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] rounded-full bg-black/[0.015] dark:bg-white/[0.02] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-subtle text-xs font-mono uppercase tracking-widest text-[#777777] dark:text-[#A1A1A6]"
        >
          <Quote size={12} className="text-[#111111] dark:text-[#FFFFFF]" />
          <span>Core Engineering Creed</span>
        </motion.div>

        {/* Main Quote Typography */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[1.1]"
        >
          “If it doesn’t exist. Build it.”
        </motion.blockquote>

        {/* Attribution Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-wider uppercase text-[#777777] dark:text-[#A1A1A6]"
        >
          The Principle Guiding Every System I Architect
        </motion.p>
      </div>
    </section>
  );
};

export default MainQuote;
