import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Profile', href: '#profile' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Activity', href: '#activity' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 py-4 flex justify-center">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-5 py-2.5 sm:px-6 sm:py-3 ${
          scrolled
            ? 'liquid-glass shadow-float dark:shadow-float-dark border border-black/10 dark:border-white/10'
            : 'bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/5'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF] group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-mono text-xs tracking-wider uppercase">Ajai Selvaraj</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-[#111111] dark:text-[#FFFFFF] font-semibold'
                    : 'text-[#777777] dark:text-[#A1A1A6] hover:text-[#111111] dark:hover:text-[#FFFFFF]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2">
          {/* Glass Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-[#111111] dark:text-[#FFFFFF] bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/5 dark:border-white/10 transition-all duration-300"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Direct CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] hover:opacity-90 transition-opacity"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden p-2 rounded-full text-[#111111] dark:text-[#FFFFFF] bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 left-4 right-4 rounded-panel liquid-glass p-6 border border-black/10 dark:border-white/15 shadow-2xl flex flex-col gap-3 z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-control text-sm font-medium text-[#111111] dark:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full text-xs font-medium bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000]"
            >
              Initiate Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
