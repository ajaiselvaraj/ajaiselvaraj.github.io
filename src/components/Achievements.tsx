import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      badge: "Winner — 1st Place",
      title: "Smart India Hackathon (SIH) 2025",
      organization: "Ministry of Education & AICTE • Government of India",
      role: "Lead Full-Stack & 3D Systems Architect (Team Oceanberg | Problem ID: SIH25191)",
      description: "Engineered an AI/ML-driven Digital Twin for EHV 400kV/220kV power substations. Delivered real-time 3D asset telemetry, progressive thermal color transitions, predictive fault forecasting, and 8 Mbps video recording.",
      metrics: ["1st Place Grand Finale", "EHV 400kV/220kV Digital Twin", "60fps Telemetry HUD"],
      icon: Trophy
    },
    {
      badge: "2nd Runner-up",
      title: "SUVIDHA 2026 National Civic Tech Hackathon",
      organization: "National Civic Innovation Initiative",
      role: "Lead AI Engineer & Defense Presenter",
      description: "Developed AAZHI, a 10-model multimodal voice-enabled municipal helpdesk integrating Web Speech API, automated department triage with token attributions, TF-IDF duplicate prevention, and DBSCAN geographic hotspot clustering.",
      metrics: ["2nd Runner-up Award", "10 Decoupled AI Models", "Zero-Keyboard Civic Kiosk"],
      icon: Award
    },
    {
      badge: "100% Verification Pass",
      title: "VIKSHANA Law Enforcement Hardening Audit",
      organization: "Zoho Catalyst Serverless & Forensic Data Defense",
      role: "Systems & Security Architect",
      description: "Engineered the deterministic HallucinationGuardService and forensic data models across 69,841 historical Karnataka Police dockets, achieving flawless pass rates on master hardening and adversarial evaluation suites.",
      metrics: ["35/35 Hardening Tests", "26/26 Sentinel Tests", "16/16 Adversarial Tests"],
      icon: ShieldAlert
    },
    {
      badge: "Production Validation",
      title: "Commercial Retail POS Hardware Deployment",
      organization: "South Indian Jewellery Retail Showrooms",
      role: "Independent Software Architect",
      description: "Built and deployed an offline-first retail ERP in Flutter & Drift SQLite with live RS-232 serial weighing scales, automated Indian CGST Rule 46 dual-split tax compliance, and Gemini Vision HUID optical validation.",
      metrics: ["Production Deployed", "0.001g Scale Stream", "100% Offline Uptime"],
      icon: Cpu
    }
  ];

  return (
    <section id="achievements" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 04 // Engineering Achievements
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
            Verified milestones across competitive and commercial platforms.
          </h2>
          <p className="text-sm sm:text-base text-[#777777] dark:text-[#A1A1A6] max-w-2xl font-normal">
            National hackathon titles and validated production deployments, backed by transparent technical evidence.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-panel liquid-glass border border-black/10 dark:border-white/10 flex flex-col justify-between space-y-6 hover:border-black/25 dark:hover:border-white/25 transition-all duration-300 shadow-glass-light dark:shadow-glass-dark"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black text-white dark:bg-white dark:text-black">
                      <Sparkles size={12} />
                      <span>{item.badge}</span>
                    </span>
                    <Icon size={20} className="text-[#111111] dark:text-[#FFFFFF]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6]">
                      {item.organization}
                    </div>
                  </div>

                  <p className="text-xs text-[#111111] dark:text-[#E5E5EA] font-medium">
                    {item.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metric Strip */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-black/5 dark:border-white/5">
                  {item.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2.5 rounded-control bg-black/[0.02] dark:bg-white/[0.03] text-center border border-black/5 dark:border-white/5"
                    >
                      <span className="text-[11px] font-mono font-medium text-[#111111] dark:text-[#FFFFFF] block leading-tight">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
