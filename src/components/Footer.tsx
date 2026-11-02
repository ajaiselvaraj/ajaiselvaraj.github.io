import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 bg-white dark:bg-black text-[#111111] dark:text-[#FFFFFF] border-t border-black/10 dark:border-white/10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Identity & Status */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                Ajai Selvaraj
              </span>
            </div>
            <p className="text-xs text-[#777777] dark:text-[#A1A1A6]">
              Computer Science & Business Systems Student • Software Engineer & AI Systems Developer
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 text-[#777777] dark:text-[#A1A1A6]">
            <a
              href="https://github.com/ajaiselvaraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-full hover:text-[#111111] dark:hover:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajaiselvaraj-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-full hover:text-[#111111] dark:hover:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://x.com/ajaiselvaraj_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) profile"
              className="p-2 rounded-full hover:text-[#111111] dark:hover:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.instagram.com/ajaiselvaraj_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2 rounded-full hover:text-[#111111] dark:hover:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Navigation Anchors & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-black/5 dark:border-white/5 text-xs text-[#777777] dark:text-[#A1A1A6]">
          <div className="flex flex-wrap gap-4 sm:gap-6 font-mono">
            <a href="#profile" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Profile</a>
            <a href="#expertise" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Achievements</a>
            <a href="#experience" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Experience</a>
            <a href="#activity" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Activity</a>
            <a href="#resume" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">CV</a>
            <a href="#contact" className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors self-start sm:self-auto"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] font-mono text-[#888888] dark:text-[#666666]">
          <span>
            “If it doesn’t exist. Build it.” • © {new Date().getFullYear()} Ajai Selvaraj
          </span>
          <span>
            Verified Zero-Fabrication Technical Portfolio.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
