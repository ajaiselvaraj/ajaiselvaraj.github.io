import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loading from './components/Loading';
import Lenis from 'lenis';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            syncTouch: false,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');


        if (savedTheme === 'dark' || !savedTheme) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            lenis.destroy();
            clearTimeout(timer);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="bg-white dark:bg-dark text-gray-900 dark:text-white font-sans antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden min-h-screen">
            <AnimatePresence mode='wait'>
                {isLoading && <Loading key="loading" />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <Navbar isDark={isDark} toggleTheme={toggleTheme} />
                    <CustomCursor />
                    <Hero isDark={isDark} />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Testimonials />

                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
