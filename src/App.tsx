import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import DeveloperActivity from './components/DeveloperActivity';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loading from './components/Loading';
import { CaseStudyModal } from './components/CaseStudyModal';
import { flagshipProjects, CaseStudyData } from './data/projectsData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  // Initialize Theme and Lenis
  useEffect(() => {
    // 1. Theme initialization
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 2. Lenis Smooth Scroll initialization
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // 3. Fast entrance without artificial delay
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 180);

    // 4. Check URL hash for direct Case Study deep link
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#case-study/')) {
        const projectId = hash.replace('#case-study/', '');
        const found = flagshipProjects.find((p) => p.id === projectId);
        if (found) setSelectedCaseStudy(found);
      } else if (!hash.startsWith('#case-study') && selectedCaseStudy) {
        setSelectedCaseStudy(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
      clearTimeout(loadTimer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'profile',
      'expertise',
      'projects',
      'achievements',
      'experience',
      'activity',
      'resume',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  }, []);

  const openCaseStudy = (project: CaseStudyData) => {
    setSelectedCaseStudy(project);
    window.history.pushState(null, '', `#case-study/${project.id}`);
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
    if (window.location.hash.startsWith('#case-study')) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="bg-white dark:bg-black text-[#111111] dark:text-[#FFFFFF] font-sans antialiased selection:bg-[#111111] selection:text-[#FFFFFF] dark:selection:bg-[#FFFFFF] dark:selection:text-[#000000] overflow-x-hidden min-h-screen">
      <AnimatePresence>
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <CustomCursor />

      <main>
        {/* 1. Hero Introduction */}
        <Hero isDark={isDark} />

        {/* 2. Professional Profile */}
        <About />

        {/* 3. Technical Expertise */}
        <Skills />

        {/* 4. Six Flagship Projects */}
        <Projects onSelectProject={openCaseStudy} />

        {/* 5. Engineering Achievements */}
        <Achievements />

        {/* 6. Experience & Education */}
        <Experience />

        {/* 7. Developer Activity & GitHub */}
        <DeveloperActivity />

        {/* 8. Resume & Technical CV */}
        <ResumeSection />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Minimalist Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={closeCaseStudy}
      />
    </div>
  );
}

export default App;
