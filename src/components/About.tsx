import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const stats = [
        { label: "Projects", value: "20+" },
        { label: "Years Exp", value: "3+" },
        { label: "Clients", value: "15+" },
    ];

    return (
        <section id="about" className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="w-full h-[400px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-4">
                                AJAI SELVARAJ
                            </h3>
                            <p className="text-gray-400 text-lg">Full Stack Developer &<br />Creative Designer</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Designing the Future,<br /> <span className="text-indigo-500">One Pixel at a Time.</span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-lg">
                        I'm a passionate developer with a knack for creating visually stunning and highly functional web applications.
                        My journey involves mastering the art of React, TypeScript, and 3D web technologies to build interfaces that don't just work, but feel alive.
                    </p>

                    <div className="grid grid-cols-3 gap-6 pt-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-4 bg-white/5 rounded-xl border border-white/5"
                            >
                                <h4 className="text-3xl font-bold text-indigo-400">{stat.value}</h4>
                                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
