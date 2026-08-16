import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const stats = [
        { label: "Projects", value: "10+" },
        { label: "Years Exp", value: "2+" },
        { label: "Clients", value: "5+" },
    ];

    return (
        <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-lighter relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="w-full h-[400px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-transparent group">
                        <img
                            src="/ajai-selvaraj-profile.jpg"
                            alt="Ajai Selvaraj"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallbackNode = e.currentTarget.parentElement?.querySelector('.fallback-profile-content');
                                if (fallbackNode) {
                                    fallbackNode.classList.remove('hidden');
                                    fallbackNode.classList.add('flex');
                                }
                            }}
                        />
                        <div className="fallback-profile-content hidden absolute inset-0 flex-col items-center justify-center p-8 text-center">
                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-4">
                                AJAI SELVARAJ
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">AI & Data Science Student &<br />AI/ML Developer</p>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <motion.div
                        style={{ y }}
                        className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
                    />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Designing the Future of AI,<br /> <span className="text-indigo-500">One Model at a Time.</span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        I am an AI & Data Science student and an AI/ML and Software Developer with a track record of building predictive pipelines, digital twin systems, and scalable web apps.
                        As a Smart India Hackathon (SIH) 2025 Winner, I combine deep technical reasoning (React, TypeScript, Python, FastAPI) with creative execution to build experiences that feel alive.
                    </p>

                    <div className="grid grid-cols-3 gap-6 pt-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none"
                            >
                                <h4 className="text-3xl font-bold text-indigo-400">{stat.value}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
