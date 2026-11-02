import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      type: "work",
      title: "Lead Software & Systems Architect",
      organization: "Independent Engineering / Retail Showroom Clients",
      period: "2024 — Present",
      location: "Tamil Nadu, India",
      description: "Designed, engineered, and deployed commercial store management, ERP, and point-of-sale platforms. Built offline-first transactional ledgers using Flutter, Drift SQLite, and Supabase cloud sync. Integrated physical RS-232 serial weighing scales and implemented Indian CGST Rule 46 dual-split tax compliance.",
      highlights: [
        "Production deployment handling daily high-value retail jewellery billing",
        "Sub-milligram scale integration with moving-average jitter stabilization",
        "Deterministic offline sync ledger ensuring zero transaction loss during network outages"
      ]
    },
    {
      type: "project-lead",
      title: "Lead Systems Architect & 3D Engineering Lead",
      organization: "Team Oceanberg (Smart India Hackathon 2025)",
      period: "2025",
      location: "Grand Finale Winner",
      description: "Led the engineering team that developed the AI/ML-driven Digital Twin for EHV 400kV/220kV Substations. Developed the Three.js 3D viewport with dynamic HUD parameter overlays, color-temperature emissive shaders, and coordinated FastAPI predictive services.",
      highlights: [
        "1st Place Grand Finale Award across nationwide university teams",
        "Engineered 8 Mbps high-bitrate simulation recorder for substation operations",
        "Coupled real-time SCADA telemetry with predictive XGBoost & LSTM failure curves"
      ]
    },
    {
      type: "work",
      title: "Full-Stack & Systems Developer",
      organization: "Freelance & Open Systems Engineering",
      period: "2023 — 2024",
      location: "Remote",
      description: "Delivered responsive web applications, backend microservices, and database models using React, TypeScript, Node.js, and PostgreSQL. Focused on architectural simplicity, performance tuning, and clean component systems.",
      highlights: [
        "Constructed modular RESTful services with strict TypeScript type-safety",
        "Built responsive client portals optimized for low-latency network connections",
        "Integrated third-party payment and telemetry APIs"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology — Computer Science & Business Systems",
      institution: "Anna University Affiliated Institution",
      period: "2022 — 2026",
      status: "Final Year Student",
      description: "Comprehensive curriculum combining computer science foundations with business operations, financial analysis, software engineering management, and intelligent data systems.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Distributed Computing & Cloud",
        "Machine Learning & Statistical Modeling",
        "Software Project Management",
        "Business Operations & Strategy"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 05 // Experience & Education
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
            Engineering track record and academic foundation.
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
            <Briefcase size={15} />
            <span>Professional Roles & Technical Leadership</span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-panel liquid-glass border border-black/10 dark:border-white/10 space-y-4 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6] mt-0.5">
                      {exp.organization} • {exp.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] self-start sm:self-auto">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#111111] dark:text-[#E5E5EA]">
                      <CheckCircle2 size={13} className="text-[#111111] dark:text-[#FFFFFF] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
            <GraduationCap size={16} />
            <span>Academic Degree & Coursework</span>
          </div>

          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-panel liquid-glass border border-black/10 dark:border-white/10 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6] mt-0.5">
                    {edu.institution}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black text-white dark:bg-white dark:text-black self-start sm:self-auto">
                  <span>{edu.period} • {edu.status}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                {edu.description}
              </p>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6] mb-3">
                  Core Technical & Analytical Foundations
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
