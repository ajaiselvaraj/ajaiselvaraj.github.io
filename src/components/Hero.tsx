import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Hero3D } from './Hero3D';
import { ArrowDown, Code, PenTool, Video } from 'lucide-react';
import MagneticButton from './MagneticButton';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

interface HeroProps {
    isDark: boolean;
}

const Hero = ({ isDark }: HeroProps) => {
    const roles = ["Developer", "Designer", "Video Editor"];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark">
            {/* Background 3D */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Hero3D isDark={isDark} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-left space-y-6"
                >
                    <h2 className="text-xl md:text-2xl font-mono text-indigo-400">Hi, I'm</h2>
                    <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500 bg-clip-text text-transparent tracking-tighter">
                        AJAI SELVARAJ
                    </h1>

                    <div className="h-16 overflow-hidden">
                        <motion.div
                            key={roleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent flex items-center gap-2"
                        >
                            {roleIndex === 0 && <Code />}
                            {roleIndex === 1 && <PenTool />}
                            {roleIndex === 2 && <Video />}
                            {roles[roleIndex]}
                        </motion.div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg leading-relaxed">
                        Crafting immersive digital experiences with code, design, and motion. Specializing in React, 3D Interactives, and high-end UI/UX.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <MagneticButton
                            href="#projects"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-indigo-500/30"
                        >
                            View Projects
                        </MagneticButton>
                        <MagneticButton
                            href="#contact"
                            className="border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all"
                        >
                            Hire Me
                        </MagneticButton>
                    </div>
                </motion.div>

                <div className="hidden md:block">
                    {/* The 3D element is covering the whole background, but we could add another interactive element here */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-900/50 dark:text-white/50"
            >
                <ArrowDown size={32} />
            </motion.div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark via-transparent to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
