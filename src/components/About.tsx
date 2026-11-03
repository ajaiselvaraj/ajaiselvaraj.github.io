import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Compass, Code2, GraduationCap, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Systems & Edge AI",
      description: "Engineering low-latency, edge-first inference pipelines (NVIDIA Jetson, PyTorch, YOLOv8) resilient against extreme communication constraints."
    },
    {
      icon: Database,
      title: "Offline-First Architectures",
      description: "Developing transactional local-first databases (Drift SQLite, Riverpod, Supabase Sync Queue) that guarantee 100% uptime without network dependence."
    },
    {
      icon: Compass,
      title: "Geospatial & Spatial Intelligence",
      description: "Architecting high-precision geodetic coordinate transformations (PyProj), 2D R-Tree spatial indexing (Shapely), and multi-source cadastral harmonization."
    },
    {
      icon: Code2,
      title: "Anti-Hallucination & AI Reliability",
      description: "Implementing deterministic interceptor guards that strictly enforce ground-truth validation against relational databases, eliminating LLM hallucinations."
    }
  ];

  const highlights = [
    { value: "SIH 2025", label: "Grand Finale 1st Place", detail: "EHV Substation Digital Twin" },
    { value: "SUVIDHA", label: "2nd Runner-up 2026", detail: "10-Model AI Civic Platform" },
    { value: "Enterprise POS", label: "Production Active", detail: "Gold Showroom Hardware POS" },
    { value: "2028", label: "B.Tech Graduation", detail: "CS & Business Systems" },
  ];

  return (
    <section id="profile" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 01 // Professional Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
            Engineering systems with mathematical rigor and real-world resilience.
          </h2>
        </div>

        {/* Narrative & Editorial Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#555555] dark:text-[#A1A1A6] font-normal leading-relaxed">
            {/* Verified Subject Secondary Portrait Badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-card liquid-glass-subtle border border-black/5 dark:border-white/10 mb-6">
              <img
                src="/images/ajai-selvaraj-profile.jpg"
                alt="Ajai Selvaraj"
                width={88}
                height={88}
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover object-top ring-2 ring-black/10 dark:ring-white/20 shrink-0 shadow-md filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                  Ajai Selvaraj
                </h3>
                <p className="text-xs font-mono text-[#777777] dark:text-[#8E8E93]">
                  B.Tech Computer Science &amp; Business Systems (Expected 2028)
                </p>
                <p className="text-xs text-[#555555] dark:text-[#A1A1A6] pt-1">
                  Primary Subject • Software Engineer &amp; AI Systems Developer. Focused on physical, civil, and industrial hardware-software coupling.
                </p>
              </div>
            </div>

            <p>
              I am a <strong className="text-[#111111] dark:text-[#FFFFFF] font-medium">Computer Science &amp; Business Systems student</strong> and software engineer dedicated to building intelligent systems that solve high-stakes physical and civil engineering challenges.
            </p>
            <p>
              Rather than assembling superficial AI demos, my engineering focus centers on <strong className="text-[#111111] dark:text-[#FFFFFF] font-medium">end-to-end reliability</strong>: from sub-milligram RS-232 serial hardware integration and geodetic coordinate projections, to 3D WebGL telemetry twins and deterministic anti-hallucination validation layers.
            </p>
            <p>
              Whether competing at national hackathons like the <strong className="text-[#111111] dark:text-[#FFFFFF] font-medium">Smart India Hackathon</strong> or deploying commercial POS infrastructure into operating South Indian retail showrooms, I design for performance, architectural transparency, and verified data integrity.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#777777] dark:text-[#A1A1A6]">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#111111] dark:text-[#FFFFFF]" />
                Zero-Fabrication Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#111111] dark:text-[#FFFFFF]" />
                Offline-First Fault Tolerance
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={14} className="text-[#111111] dark:text-[#FFFFFF]" />
                B.Tech CSBS (2024–2028)
              </span>
            </div>
          </div>

          {/* Stat Pillars */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-card liquid-glass-card border border-black/5 dark:border-white/10 space-y-2 flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                  {item.value}
                </div>
                <div>
                  <div className="text-xs font-medium text-[#111111] dark:text-[#FFFFFF]">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#777777] dark:text-[#A1A1A6] mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4 Architectural Focus Cards */}
        <div className="grid sm:grid-cols-2 gap-4 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-panel liquid-glass border border-black/5 dark:border-white/10 space-y-3 hover:border-black/20 dark:hover:border-white/25 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-control bg-black/5 dark:bg-white/10 flex items-center justify-center text-[#111111] dark:text-[#FFFFFF]">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
