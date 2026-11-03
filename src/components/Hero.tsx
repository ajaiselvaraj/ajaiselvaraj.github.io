import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Mail,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const credentials = [
    {
      icon: Trophy,
      title: 'SIH 2025',
      subtitle: 'Winner',
      href: '#achievements',
    },
    {
      icon: Award,
      title: 'SUVIDHA 2026',
      subtitle: '2nd Runner-up',
      href: '#achievements',
    },
    {
      icon: Code2,
      title: '6+',
      subtitle: 'Flagship Systems',
      href: '#projects',
    },
    {
      icon: ShieldCheck,
      title: 'Verified',
      subtitle: 'Engineering Portfolio',
      href: '#profile',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-24 px-6 overflow-hidden bg-white dark:bg-black text-[#111111] dark:text-[#FFFFFF]"
    >
      {/* ============================================================ */}
      {/* 1. ATMOSPHERIC BACKDROP & SUBTLE AMBIENT GLOW (z-0)           */}
      {/* Clean & minimal - no duplicate background silhouettes         */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-black/[0.012] dark:bg-white/[0.018] blur-[150px]" />
      </div>

      {/* ============================================================ */}
      {/* 2. FLOWING WAVE RIBBON (Layered strictly behind foreground)  */}
      {/* Stacking Context: z-[5]                                      */}
      {/* ============================================================ */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden select-none z-[5]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-28 sm:h-40 md:h-52 lg:h-64"
        >
          <img
            src="/images/hero-wave.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-bottom opacity-85 dark:opacity-20 dark:invert transition-all"
          />
          {/* Subtle bottom fade to blend smoothly into #profile section */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent" />
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* 3. MAIN FOREGROUND 3-COLUMN HEROIC CONTAINER (z-20)          */}
      {/* In front of waves, halo, and ambient graphics                */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-20">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: Typographic Headline & Actions (col-span-5)     */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:pr-4 order-2 lg:order-1">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-subtle text-[11px] sm:text-xs font-mono tracking-tight text-[#111111] dark:text-[#FFFFFF]"
          >
            <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#FFFFFF] animate-pulse" />
            <span>Computer Science &amp; Business Systems Student</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl xl:text-[4.25rem] font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[1.05]"
            >
              Building
              <br />
              intelligent
              <br />
              systems.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl xl:text-[2.6rem] font-medium tracking-tight text-[#777777] dark:text-[#8E8E93] leading-snug pt-2"
            >
              Creating meaningful impact.
            </motion.h2>
          </div>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#555555] dark:text-[#A1A1A6] font-normal leading-relaxed max-w-md"
          >
            Software Engineer &amp; AI Systems Developer specializing in real-time digital twins,
            offline-first architectures, spatial AI, and high-reliability engineering.
          </motion.p>

          {/* Three CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2 w-full"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={14} />
            </a>

            {/* View CV Glass Button */}
            <a
              href="#resume"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/10 dark:border-white/15 active:scale-95 transition-all"
            >
              <FileText size={14} className="opacity-70" />
              <span>View CV</span>
            </a>

            {/* Contact Glass Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/10 dark:border-white/15 active:scale-95 transition-all"
            >
              <Mail size={14} className="opacity-70" />
              <span>Contact</span>
            </a>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* CENTER COLUMN: Heroic Profile Portrait (Lg: col-span-4)      */}
        {/* Centered within halo circle, scaled larger, color on hover   */}
        {/* ============================================================ */}
        <div className="lg:col-span-4 flex items-center justify-center relative order-1 lg:order-2 my-2 lg:my-0">
          {/* Subtle Halo Glow backdrop */}
          <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] lg:w-[560px] lg:h-[560px] rounded-full bg-white/70 dark:bg-white/[0.04] blur-2xl pointer-events-none -z-10" />

          {/* Minimalist Circular Halo Ring — perfectly frames upper body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[540px] lg:h-[540px] xl:w-[580px] xl:h-[580px] rounded-full border border-black/[0.08] dark:border-white/[0.14] bg-gradient-to-b from-white/70 via-white/15 to-transparent dark:from-white/[0.08] dark:via-white/[0.02] dark:to-transparent z-0 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.7)] pointer-events-none"
          />

          {/* Heroic Portrait Container — Shifted up & scaled larger to visually center head/chest in the circle */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[330px] sm:w-[450px] lg:w-[520px] xl:w-[560px] h-[460px] sm:h-[590px] lg:h-[680px] xl:h-[720px] flex items-center justify-center select-none group cursor-pointer -translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
          >
            <img
              src="/images/ajai-portrait-cutout.png"
              alt="Ajai Selvaraj — Software Engineer & AI Systems Developer"
              width={560}
              height={720}
              fetchPriority="high"
              loading="eager"
              className="w-full h-full object-contain object-center filter grayscale contrast-[1.08] brightness-[0.98] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 ease-out drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)] drop-shadow-[0_36px_50px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_20px_45px_rgba(255,255,255,0.08)]"
            />
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Vertically Stacked Floating Panel (col-span-3) */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 flex flex-col justify-center order-3 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm mx-auto lg:max-w-none rounded-panel liquid-glass border border-black/10 dark:border-white/15 p-3.5 sm:p-4 shadow-float dark:shadow-float-dark space-y-2 backdrop-blur-2xl"
          >
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <a
                  key={idx}
                  href={cred.href}
                  className="group flex items-center justify-between p-3 rounded-control hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-black/5 dark:hover:border-white/10"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Minimalist Icon Badge */}
                    <div className="w-10 h-10 rounded-full liquid-glass-subtle flex items-center justify-center text-[#111111] dark:text-[#FFFFFF] border border-black/5 dark:border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    {/* Text Hierarchy */}
                    <div className="text-left">
                      <div className="text-sm font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight group-hover:text-black dark:group-hover:text-white">
                        {cred.title}
                      </div>
                      <div className="text-xs text-[#777777] dark:text-[#A1A1A6] font-normal">
                        {cred.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    size={15}
                    className="text-[#777777] dark:text-[#A1A1A6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
