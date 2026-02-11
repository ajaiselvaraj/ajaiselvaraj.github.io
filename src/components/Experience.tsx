import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Freelance",
        date: "2024 - Present",
        description: "Developed and deployed custom web applications for diverse clients using React, Node.js, and Supabase. Improved site performance by 40% on average.",
        type: "experience"
    },
    {
        id: 2,
        role: "Hackathon Winner",
        company: "TechNova 2024",
        date: "Oct 2024",
        description: "Secured 1st place for building an AI-powered accessibility tool for visually impaired users.",
        type: "achievement"
    },
    {
        id: 3,
        role: "Frontend Intern",
        company: "StartUp Inc.",
        date: "Jan 2023 - Dec 2023",
        description: "Collaborated with the design team to implement pixel-perfect UI components using Tailwind CSS and React.",
        type: "experience"
    },
    {
        id: 4,
        role: "Certified React Developer",
        company: "Meta Coursera",
        date: "Aug 2023",
        description: "Completed advanced React certification covering hooks, context API, and performance optimization.",
        type: "certification"
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <section id="experience" className="py-20 md:py-32 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-4">
                        Experience & Achievements
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/20 via-pink-500/20 to-transparent ml-6 md:ml-0"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex items-center mb-12 md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-dark border-2 border-indigo-500 rounded-full z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 md:w-[45%]">
                                <div className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all hover:border-indigo-500/30">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                                    <div className="relative">
                                        <div className="flex items-center gap-2 mb-2 text-indigo-400">
                                            {exp.type === 'experience' && <Briefcase size={18} />}
                                            {exp.type === 'achievement' && <Award size={18} />}
                                            {exp.type === 'certification' && <Award size={18} />}
                                            <span className="text-xs font-mono uppercase tracking-wider">{exp.type}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center text-sm text-gray-400 mb-4 gap-2">
                                            <span className="font-semibold text-gray-300">{exp.company}</span>
                                            <span>•</span>
                                            <div className="flex items-center">
                                                <Calendar size={14} className="mr-1" />
                                                {exp.date}
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Empty Space for the other side */}
                            <div className="hidden md:block md:w-[45%]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
