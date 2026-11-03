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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden bg-[#FFFFFF] dark:bg-[#000000] text-[#111111] dark:text-[#FFFFFF]"
    >
      {/* ============================================================ */}
      {/* 1. ATMOSPHERIC BACKDROP & SUBTLE PROFILE SILHOUETTE (z-0)    */}
      {/* Exactly matches reference: faint side silhouette on the right*/}
      {/* ============================================================ */}
      <div className="absolute right-0 top-1/2 -translate-y-[45%] w-[520px] sm:w-[650px] lg:w-[740px] xl:w-[820px] h-[550px] sm:h-[680px] lg:h-[760px] pointer-events-none z-0 overflow-hidden select-none opacity-[0.24] dark:opacity-[0.14] mix-blend-multiply dark:mix-blend-screen transition-opacity">
        <img
          src="/images/ajai-silhouette-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain object-right filter grayscale contrast-125"
        />
      </div>

      {/* ============================================================ */}
      {/* 2. FLOWING WAVE RIBBON (Layered across bottom in background) */}
      {/* Stacking Context: z-[5]                                      */}
      {/* ============================================================ */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden select-none z-[5]">
        <div className="relative w-full h-24 sm:h-36 md:h-44 lg:h-56">
          <img
            src="/images/hero-wave.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-bottom opacity-95 dark:opacity-25 dark:invert transition-all"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. MAIN FOREGROUND 3-COLUMN HEROIC COMPOSITION (z-20)        */}
      {/* Left: Typography | Center: Large Portrait | Right: Panel     */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center relative z-20">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: Typographic Headline & Actions (col-span-5)     */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:pr-6 order-2 lg:order-1">
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
              className="text-4xl sm:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[1.02]"
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
              className="text-2xl sm:text-4xl xl:text-[2.75rem] font-medium tracking-tight text-[#777777] dark:text-[#8E8E93] leading-snug pt-2"
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
        {/* CENTER COLUMN: Heroic Profile Portrait & Heavenly Gold Halo  */}
        {/* Hover triggers Heavenly Yellow / Gold ambient halo radiance  */}
        {/* ============================================================ */}
        <div className="lg:col-span-4 flex items-end justify-center relative order-1 lg:order-2 self-end h-[420px] sm:h-[520px] lg:h-[580px] xl:h-[640px] group cursor-pointer">
          {/* 1. Deep Heavenly Gold Ambient Bloom (Ignites on Hover) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] rounded-full bg-gradient-to-tr from-[#F59E0B]/20 via-[#FBBF24]/30 to-[#FEF08A]/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none -z-10" />

          {/* 2. Soft Heavenly Yellow Halo Outer Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[470px] lg:h-[470px] xl:w-[500px] xl:h-[500px] rounded-full blur-xl opacity-0 group-hover:opacity-100 bg-[#FACC15]/25 transition-all duration-700 ease-out pointer-events-none z-0" />

          {/* 3. Circular Halo Ring Backdrop (White/Monochrome -> Heavenly Gold on hover) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[470px] lg:h-[470px] xl:w-[500px] xl:h-[500px] rounded-full border border-black/[0.08] dark:border-white/[0.14] group-hover:border-[#F59E0B]/60 dark:group-hover:border-[#FDE047]/70 bg-gradient-to-b from-white/70 via-white/15 to-transparent dark:from-white/[0.08] dark:via-white/[0.02] dark:to-transparent group-hover:from-[#FEF3C7]/40 group-hover:via-[#FDE68A]/15 group-hover:to-transparent dark:group-hover:from-[#F59E0B]/20 dark:group-hover:via-[#FBBF24]/05 z-0 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_50px_rgba(251,191,36,0.45),0_0_100px_rgba(245,158,11,0.25)] transition-all duration-700 ease-out pointer-events-none"
          />

          {/* 4. Heroic Portrait Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-full flex items-end justify-center select-none"
          >
            <img
              src="/images/ajai-portrait-cutout.png"
              alt="Ajai Selvaraj — Software Engineer & AI Systems Developer"
              width={520}
              height={640}
              fetchPriority="high"
              loading="eager"
              className="w-auto h-full max-h-full object-contain object-bottom filter grayscale contrast-[1.06] brightness-[0.98] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 ease-out drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_20px_45px_rgba(245,158,11,0.30)] dark:drop-shadow-[0_15px_40px_rgba(255,255,255,0.06)] dark:group-hover:drop-shadow-[0_20px_50px_rgba(251,191,36,0.35)]"
            />
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Vertically Stacked Floating Panel (col-span-3) */}
        {/* Clean 4-row glass card matching reference                    */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 flex flex-col justify-center order-3 lg:pl-4">
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
