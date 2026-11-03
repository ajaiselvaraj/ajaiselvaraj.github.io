import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Award, ShieldCheck, Sparkles, Quote } from 'lucide-react';

interface HeroProps {
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden bg-white dark:bg-black text-[#111111] dark:text-[#FFFFFF]"
    >
      {/* Background Refined Ambient Liquid Glow (Monochrome Only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full bg-black/[0.02] dark:bg-white/[0.025] blur-[120px] transition-all" />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 space-y-8">
        {/* Status Pill Badge & Main Quote Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-subtle text-xs font-mono tracking-tight text-[#111111] dark:text-[#FFFFFF]"
          >
            <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#FFFFFF] animate-pulse" />
            <span>Computer Science & Business Systems Student</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs font-mono font-medium tracking-tight text-[#111111] dark:text-[#FFFFFF] border border-black/10 dark:border-white/10"
          >
            <Quote size={11} className="text-[#111111] dark:text-[#FFFFFF] opacity-70" />
            <span>“If it doesn’t exist. Build it.”</span>
          </motion.div>
        </div>

        {/* Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-black/20 via-black/5 to-transparent dark:from-white/30 dark:via-white/10 dark:to-transparent ring-1 ring-black/10 dark:ring-white/15 shadow-xl">
            <img
              src="/images/ajai-selvaraj-profile.jpg"
              alt="Ajai Selvaraj — Software Engineer & AI Systems Developer"
              width={144}
              height={144}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-top rounded-full shadow-inner filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-500 ease-out"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-black dark:bg-white text-white dark:text-black shadow-md border border-white/20 dark:border-black/20">
            Available
          </div>
        </motion.div>

        {/* Name & Primary Headline */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]"
          >
            Ajai Selvaraj
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[1.08]"
          >
            Building intelligent systems.
            <br />
            <span className="text-[#777777] dark:text-[#8E8E93] font-normal">
              Creating meaningful impact.
            </span>
          </motion.h1>
        </div>

        {/* Roles Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#777777] dark:text-[#A1A1A6] max-w-2xl font-normal leading-relaxed"
        >
          Software Engineer & AI Systems Developer specializing in real-time digital twins, spatial AI harmonization, computer vision, and offline-first enterprise applications.
        </motion.p>

        {/* Engineering Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center items-center gap-2 pt-2"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/5 dark:border-white/5">
            <Award size={13} />
            SIH 2025 Winner
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/5 dark:border-white/5">
            <Sparkles size={13} />
            SUVIDHA 2026 Runner-up
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/5 dark:border-white/5">
            <ShieldCheck size={13} />
            Production POS Deployed
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] hover:opacity-90 transition-all shadow-sm active:scale-95"
          >
            <span>Explore Flagship Projects</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="#profile"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] transition-all active:scale-95"
          >
            <span>Technical Profile</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#777777] dark:text-[#A1A1A6] text-xs font-mono"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <ArrowDown size={12} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
