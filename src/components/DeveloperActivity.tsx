import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitBranch, ExternalLink } from 'lucide-react';

export const DeveloperActivity: React.FC = () => {
  const repositories = [
    {
      name: "AAZHI",
      url: "https://github.com/ajaiselvaraj/AAZHI",
      description: "SUVIDHA 2026 2nd Runner-up: 10-model multimodal voice grievance helpdesk and DBSCAN spatial hotspot clustering.",
      language: "Python / FastAPI",
      stars: "Flagship",
      status: "Public Open Access"
    },
    {
      name: "ajaiselvaraj.github.io",
      url: "https://github.com/ajaiselvaraj/ajaiselvaraj.github.io",
      description: "Apple-inspired monochrome liquid glass portfolio engineering with React 19, TypeScript, and Lenis.",
      language: "TypeScript",
      stars: "Main",
      status: "Production Deployment"
    },
    {
      name: "Digital-Twin-Substation",
      url: "https://github.com/ajaiselvaraj",
      description: "Smart India Hackathon 2025 Winner: Three.js 3D viewport, Next.js, and predictive XGBoost/LSTM telemetry.",
      language: "TypeScript / Python",
      stars: "Awarded",
      status: "SIH Winner"
    },
    {
      name: "ULAG",
      url: "https://github.com/ajaiselvaraj",
      description: "SIH PS 26013: Shapely STRtree 2D R-Tree, PyProj geodetic projection, and 5-factor parcel confidence scoring.",
      language: "Python / Shapely",
      stars: "Validated",
      status: "16/16 Pytest Passed"
    },
    {
      name: "ORBITA",
      url: "https://github.com/ajaiselvaraj",
      description: "Edge copilot for spaceflight analogs: YOLOv8, SMPL-24 3D mesh recovery, PyTorch GRU, and SHA-256 logs.",
      language: "Python / PyTorch",
      stars: "Edge-First",
      status: "Jetson Orin Target"
    },
    {
      name: "VIKSHANA",
      url: "https://github.com/ajaiselvaraj",
      description: "AI criminal intelligence with Neo4j graphs, 69,841 Karnataka Police dockets, and HallucinationGuardService.",
      language: "Node.js / React 19",
      stars: "Hardened",
      status: "35/35 Test Suite Pass"
    }
  ];

  const engineeringMetrics = [
    { label: "Codebases Audited", value: "6 Flagship Systems", detail: "End-to-end verified architectures" },
    { label: "Automated Tests", value: "100% Pass Rates", detail: "Pytest, Jest & Hardening Suites" },
    { label: "Core Git Branch", value: "main & feature-driven", detail: "Clean commits & PR integrity" },
    { label: "Zero-Hallucination", value: "AST Interceptors", detail: "Strict ground-truth DB enforcement" }
  ];

  return (
    <section id="activity" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 06 // Developer Activity & GitHub
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                Open engineering and verified repositories.
              </h2>
              <p className="text-sm sm:text-base text-[#777777] dark:text-[#A1A1A6] font-normal mt-2">
                Code architecture, commit history, and technical dossiers hosted on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/ajaiselvaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] hover:opacity-90 transition-opacity self-start sm:self-auto shrink-0"
            >
              <Github size={15} />
              <span>@ajaiselvaraj on GitHub</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-card liquid-glass border border-black/5 dark:border-white/10 space-y-2"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                {item.label}
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] text-[#777777] dark:text-[#A1A1A6]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Repositories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repositories.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-panel liquid-glass border border-black/10 dark:border-white/10 flex flex-col justify-between space-y-4 group hover:border-black/25 dark:hover:border-white/25 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-[#777777] dark:text-[#A1A1A6]">
                    <GitBranch size={13} />
                    <span>main</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF]">
                    {repo.status}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight group-hover:underline flex items-center gap-1.5">
                    <span>{repo.name}</span>
                    <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>

                <p className="text-xs text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/5 text-xs font-mono text-[#777777] dark:text-[#A1A1A6]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
                  <span>{repo.language}</span>
                </div>
                <span className="text-[11px]">{repo.stars}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperActivity;
