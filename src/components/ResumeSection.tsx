import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, CheckCircle, Printer, X, Award, Briefcase, GraduationCap } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const skillsSummary = [
    { title: "Languages & Frameworks", desc: "Python, TypeScript, Dart, Node.js, C/C++, React 19, Flutter 3.32+, Next.js" },
    { title: "AI, ML & Vision", desc: "PyTorch (GRU HAR), Scikit-Learn (DBSCAN, RF, SVM), YOLOv8, OpenCV, SMPL-24 HMR" },
    { title: "Databases & Spatial", desc: "Drift SQLite, Neo4j (Cypher), PostgreSQL, Shapely 2.0 (STRtree), PyProj, Rasterio" },
    { title: "Specializations", desc: "Anti-hallucination validation, offline sync ledgers, RS-232 serial hardware, 3D WebGL" },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 07 // Curriculum Vitae & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
            Verified credentials and engineering CV.
          </h2>
          <p className="text-sm sm:text-base text-[#777777] dark:text-[#A1A1A6] max-w-2xl font-normal">
            Comprehensive documentation of academic coursework, production deployments, and national hackathon achievements.
          </p>
        </div>

        {/* Liquid Glass Resume Card */}
        <div className="p-8 sm:p-12 rounded-panel liquid-glass border border-black/10 dark:border-white/10 shadow-glass-light dark:shadow-glass-dark space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/5 dark:border-white/5 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
                <span className="text-xs font-mono tracking-wider uppercase text-[#777777] dark:text-[#A1A1A6]">
                  Curriculum Vitae • Technical Dossier
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                Ajai Selvaraj
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6]">
                Computer Science & Business Systems Student • Software Engineer & AI Systems Developer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPreview(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] transition-all"
              >
                <FileText size={14} />
                <span>Inspect CV Dossier</span>
              </button>

              <a
                href="/resume.pdf"
                download="Ajai_Selvaraj_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] hover:opacity-90 transition-all shadow-sm active:scale-95"
              >
                <Download size={14} />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Core Competencies Matrix */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillsSummary.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-1.5"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF]">
                  {item.title}
                </div>
                <div className="text-xs text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Snapshot Credentials */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5 dark:border-white/5 text-xs font-mono text-[#777777] dark:text-[#A1A1A6]">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#111111] dark:text-[#FFFFFF]" />
              Smart India Hackathon 2025 Winner (SIH25191)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#111111] dark:text-[#FFFFFF]" />
              SUVIDHA 2026 2nd Runner-up (Civic AI Helpdesk)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#111111] dark:text-[#FFFFFF]" />
              Commercial Showroom Hardware POS Active
            </span>
          </div>
        </div>
      </div>

      {/* Full Screen Interactive CV Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreview(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-panel liquid-glass-modal border border-black/10 dark:border-white/15 p-8 sm:p-12 z-10 shadow-2xl space-y-8"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#777777] dark:text-[#A1A1A6]">
                    Curriculum Vitae Preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    aria-label="Print CV"
                    className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                  >
                    <Printer size={16} />
                  </button>
                  <button
                    onClick={() => setShowPreview(false)}
                    aria-label="Close modal"
                    className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* CV Header */}
              <div className="space-y-2 border-b border-black/5 dark:border-white/5 pb-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                  Ajai Selvaraj
                </h2>
                <p className="text-sm text-[#777777] dark:text-[#A1A1A6]">
                  Software Engineer · AI Systems Developer · Full-Stack Developer
                </p>
                <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6] pt-1">
                  Tamil Nadu, India • ajaiselvaraj2105@gmail.com • github.com/ajaiselvaraj • ajaiselvaraj.me
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF]">
                  <GraduationCap size={15} />
                  <span>Education</span>
                </div>
                <div className="p-4 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-1">
                  <div className="flex justify-between items-center text-sm font-semibold text-[#111111] dark:text-[#FFFFFF]">
                    <span>Bachelor of Technology — Computer Science & Business Systems</span>
                    <span className="text-xs font-mono font-normal">2022 — 2026</span>
                  </div>
                  <div className="text-xs text-[#777777] dark:text-[#A1A1A6]">
                    Anna University Affiliation • Final Year Student
                  </div>
                  <div className="text-xs text-[#777777] dark:text-[#A1A1A6] pt-1">
                    Coursework: Distributed Systems, Algorithms, Machine Learning, Database Architecture, Business Analytics.
                  </div>
                </div>
              </div>

              {/* Flagship Achievements */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF]">
                  <Award size={15} />
                  <span>Key Engineering Achievements</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                    <strong className="text-[#111111] dark:text-[#FFFFFF]">Winner — Smart India Hackathon (SIH) 2025:</strong> 1st place in Grand Finale for EHV 400kV/220kV Substation Digital Twin (Team Oceanberg, Problem ID SIH25191). Built Three.js 3D viewport, 8 Mbps video recorder, and FastAPI XGBoost/LSTM telemetry forecasting.
                  </div>
                  <div className="p-3.5 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                    <strong className="text-[#111111] dark:text-[#FFFFFF]">2nd Runner-up — SUVIDHA 2026 National Hackathon:</strong> Built AAZHI, a 10-model multimodal voice civic helpdesk with Web Speech API, Scikit-learn routing, and DBSCAN geographic hotspot clustering.
                  </div>
                  <div className="p-3.5 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                    <strong className="text-[#111111] dark:text-[#FFFFFF]">35/35 Master Hardening Suite Pass (VIKSHANA):</strong> Architected anti-hallucination interceptor and forensic relational models across 69,841 historical Karnataka Police dockets with Neo4j graph syndicates.
                  </div>
                  <div className="p-3.5 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                    <strong className="text-[#111111] dark:text-[#FFFFFF]">Production Enterprise Retail POS Deployment:</strong> Operating in South Indian jewellery showrooms with sub-milligram RS-232 COM scale streams and Indian CGST Rule 46 dual-split tax compliance.
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF]">
                  <Briefcase size={15} />
                  <span>Work & Technical Leadership</span>
                </div>
                <div className="p-4 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-sm font-semibold text-[#111111] dark:text-[#FFFFFF]">
                    <span>Independent Systems Architect</span>
                    <span className="text-xs font-mono font-normal">2024 — Present</span>
                  </div>
                  <p className="text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                    Designed and built offline-first commercial retail systems. Developed reactive SQLite databases in Drift, constructed bi-directional sync queues with Supabase, integrated physical RS-232 serial hardware, and produced thermal/A4 GST tax documentation.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000]"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumeSection;
