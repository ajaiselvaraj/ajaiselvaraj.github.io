import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Instagram, Sun, Moon } from 'lucide-react';
import { cn } from '../utils/cn';
import MagneticButton from './MagneticButton';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10" : "bg-transparent"
            )}
        >
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-mono tracking-tighter">
                    <span className="text-indigo-500">&lt;</span>
                    Ajai
                    <span className="text-pink-500">/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative group text-sm font-medium"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors border border-black/5 dark:border-white/5"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <MagneticButton
                        href="#contact"
                        className="px-5 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 rounded-full text-sm font-medium transition-all backdrop-blur-sm text-gray-900 dark:text-white"
                    >
                        Hire Me
                    </MagneticButton>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-dark/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 flex flex-col space-y-4 shadow-lg dark:shadow-none"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-white/10 items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors border border-black/5 dark:border-white/5"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2"></div>
                        <a href="https://github.com/ajaiselvaraj" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/ajaiselvaraj" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"><Linkedin size={20} /></a>
                        <a href="mailto:contact@ajaisp.com" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"><Mail size={20} /></a>
                        <a href="https://instagram.com/ajaiselvaraj" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"><Instagram size={20} /></a>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
