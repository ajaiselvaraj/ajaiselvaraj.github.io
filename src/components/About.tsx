import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Compass, CheckCircle } from 'lucide-react';

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
    { value: "35 / 35", label: "Audit Suite Pass Rate", detail: "Zero Flaws in Master Suite" },
  ];

  return (
    <section id="profile" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark">
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

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#555555] dark:text-[#A1A1A6] font-normal leading-relaxed">
            <p>
              I am a <strong className="text-[#111111] dark:text-[#FFFFFF] font-medium">Computer Science & Business Systems student</strong> and software engineer dedicated to building intelligent systems that solve high-stakes physical and civil engineering challenges.
            </p>
            <p>
              Rather than assembling superficial AI demos, my engineering focus centers on <strong className="text-[#111111] dark:text-[#FFFFFF] font-medium">end-to-end reliability</strong>: from sub-milligram RS-232 serial hardware integration and geodetic coordinate projections, to 3D WebGL telemetry twins and deterministic anti-hallucination validation layers.
            </p>
            <p>
              Whether competing at national hackathons like the <strong className="text-[#111111] dark:text-[#FFFFFF] font-medium">Smart India Hackathon</strong> or deploying commercial POS infrastructure into operating South Indian retail showrooms, I design for performance, architectural transparency, and verified data integrity.
            </p>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-[#777777] dark:text-[#A1A1A6]">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#111111] dark:text-[#FFFFFF]" />
                Zero-Fabrication Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#111111] dark:text-[#FFFFFF]" />
                Offline-First Fault Tolerance
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
