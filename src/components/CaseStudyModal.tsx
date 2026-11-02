import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Award, Terminal } from 'lucide-react';
import { CaseStudyData } from '../data/projectsData';

interface CaseStudyModalProps {
  project: CaseStudyData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-panel liquid-glass-modal border border-black/10 dark:border-white/15 p-6 sm:p-10 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/10 dark:border-white/10">
                {project.category}
              </span>
              {project.achievementBadge && (
                <span className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Award size={13} />
                  {project.achievementBadge}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#111111] dark:text-[#FFFFFF] transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3 mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
              {project.title}
            </h2>
            <p className="text-lg text-[#777777] dark:text-[#A1A1A6] font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {project.verifiedResults.map((res, idx) => (
              <div
                key={idx}
                className="p-4 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5"
              >
                <div className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                  {res.value}
                </div>
                <div className="text-xs font-mono uppercase text-[#777777] dark:text-[#A1A1A6] mt-1">
                  {res.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                <AlertTriangle size={15} />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-sm text-[#111111] dark:text-[#E5E5EA] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                <CheckCircle2 size={15} />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-[#111111] dark:text-[#E5E5EA] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="mb-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
              <Layers size={16} />
              <span>System Architecture & Pipeline</span>
            </div>

            <p className="text-sm text-[#777777] dark:text-[#A1A1A6]">
              {project.architecture.overview}
            </p>

            <div className="grid gap-3">
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-[#111111] dark:text-[#FFFFFF]">
                      {layer.title}
                    </div>
                    <div className="text-xs text-[#777777] dark:text-[#A1A1A6]">
                      {layer.description}
                    </div>
                  </div>
                  <div className="px-3 py-1 text-xs font-mono rounded-full bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] whitespace-nowrap self-start sm:self-center">
                    {layer.tech}
                  </div>
                </div>
              ))}
            </div>

            {project.architecture.asciiFlow && (
              <div className="mt-4 p-5 rounded-card bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 font-mono text-xs text-[#333333] dark:text-[#CCCCCC] overflow-x-auto leading-relaxed">
                <pre>{project.architecture.asciiFlow}</pre>
              </div>
            )}
          </div>

          {/* Technology Stack Matrix */}
          <div className="mb-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
              <Terminal size={16} />
              <span>Verified Technology Stack Matrix</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {project.techStackMatrix.map((matrix, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-control bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2"
                >
                  <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6] uppercase">
                    {matrix.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {matrix.items.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs rounded-full bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Engineering Contributions */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                Key Capabilities
              </h4>
              <ul className="space-y-2.5 text-sm text-[#111111] dark:text-[#E5E5EA]">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#111111] dark:text-[#FFFFFF] mt-1 text-xs">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Contributions */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                My Technical Contributions
              </h4>
              <ul className="space-y-2.5 text-sm text-[#111111] dark:text-[#E5E5EA]">
                {project.contributions.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#111111] dark:text-[#FFFFFF] mt-1 text-xs">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Complex Challenges & Technical Solutions */}
          <div className="mb-10 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
              Key Engineering Challenges Overcome
            </h4>
            <div className="grid gap-3">
              {project.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2"
                >
                  <div className="text-sm font-semibold text-[#111111] dark:text-[#FFFFFF]">
                    Challenge: {item.challenge}
                  </div>
                  <div className="text-xs text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                    Engineering Resolution: {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links & Actions */}
          <div className="flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-6">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#111111] dark:text-[#FFFFFF] transition-all"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all"
                >
                  <ExternalLink size={15} />
                  <span>Verified Demo / Deployment</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6] hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors"
            >
              Close [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
