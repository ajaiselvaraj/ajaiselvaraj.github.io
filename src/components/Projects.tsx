import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Github, ArrowRight, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { flagshipProjects, CaseStudyData } from '../data/projectsData';

interface ProjectsProps {
  onSelectProject: (project: CaseStudyData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 03 // Flagship Systems
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                Six Flagship Engineering Projects.
              </h2>
              <p className="text-sm sm:text-base text-[#777777] dark:text-[#A1A1A6] font-normal leading-relaxed">
                Audited codebases across national hackathon winners, enterprise retail ERPs, aerospace edge copilots, and geospatial platforms.
              </p>
            </div>

            <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
              <span>Click any card for full Case Study & Architecture</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {flagshipProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-panel liquid-glass border border-black/10 dark:border-white/10 p-7 sm:p-8 flex flex-col justify-between group hover:border-black/25 dark:hover:border-white/25 transition-all duration-300 shadow-glass-light dark:shadow-glass-dark"
            >
              <div className="space-y-6">
                {/* Card Top Pill Bar */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                    {project.category}
                  </span>
                  {project.achievementBadge && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] shadow-sm">
                      <Award size={12} />
                      <span>{project.achievementBadge}</span>
                    </span>
                  )}
                </div>

                {/* Minimalist Graphic / Visual Architecture Preview Frame */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="w-full h-44 rounded-image bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 p-5 flex flex-col justify-between overflow-hidden relative group/canvas cursor-pointer transition-all duration-300 group-hover:border-black/15 dark:group-hover:border-white/15"
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono text-[#777777] dark:text-[#A1A1A6] uppercase tracking-wider">
                      Architecture Blueprint
                    </span>
                    <span className="text-xs font-mono text-[#111111] dark:text-[#FFFFFF] opacity-0 group-hover/canvas:opacity-100 transition-opacity flex items-center gap-1">
                      <span>View Dossier</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>

                  {/* ASCII or Schematic Accent */}
                  <div className="font-mono text-[11px] text-[#555555] dark:text-[#888888] line-clamp-3 select-none opacity-80 group-hover/canvas:opacity-100 transition-opacity">
                    {project.architecture.asciiFlow ? (
                      <pre className="whitespace-pre overflow-hidden leading-tight text-[10px]">
                        {project.architecture.asciiFlow}
                      </pre>
                    ) : (
                      <div className="space-y-1">
                        <div>// Verified Pipeline Module</div>
                        <div className="text-[#111111] dark:text-[#FFFFFF] font-semibold">{project.architecture.overview}</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#777777] dark:text-[#A1A1A6] z-10 border-t border-black/5 dark:border-white/5 pt-2">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-[#111111] dark:text-[#FFFFFF]" />
                      Audit Verified
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers size={12} />
                      {project.architecture.layers.length} Subsystems
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-2xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight hover:underline cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6] font-normal leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-black/5 dark:border-white/5">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] dark:text-[#FFFFFF] hover:opacity-75 transition-opacity"
                >
                  <FileText size={14} />
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                      className="p-2 rounded-full text-[#777777] dark:text-[#A1A1A6] hover:text-[#111111] dark:hover:text-[#FFFFFF] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Link`}
                      className="p-2 rounded-full text-[#777777] dark:text-[#A1A1A6] hover:text-[#111111] dark:hover:text-[#FFFFFF] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
