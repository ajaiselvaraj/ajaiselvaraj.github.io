import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Three.js', level: 60 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 }
];

const Skills = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="skills" className="py-20 md:py-32 bg-white dark:bg-dark relative" ref={containerRef}>
            <div className="container mx-auto px-6 mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-12 text-center"
                >
                    My Tech Stack
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl relative overflow-hidden group shadow-lg dark:shadow-none"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-400 transition-colors">
                                {skill.name}
                            </h3>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                                />
                            </div>
                            <span className="absolute top-4 right-4 text-sm font-mono text-gray-500">{skill.level}%</span>

                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Background Text */}
            <motion.div
                style={{ x }}
                className="absolute top-1/2 left-0 w-full text-[120px] font-black text-black/5 dark:text-white/5 whitespace-nowrap pointer-events-none select-none overflow-hidden"
            >
                DEVELOP • DESIGN • ANIMATE • LEARN • CREATE
            </motion.div>
        </section>
    );
};

export default Skills;
