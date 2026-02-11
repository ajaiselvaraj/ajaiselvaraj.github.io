import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'AAZHI Smart Kiosk',
        category: 'Web',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        description: 'A civic service kiosk interface for optimized public service delivery.',
        longDescription: 'A comprehensive kiosk solution for smart cities, enabling citizens to access government services, pay bills, and lodge grievances. Built with a focus on accessibility and ease of use.',
        image: 'https://images.unsplash.com/photo-1555677241-c7d6b9aadc5f?q=80&w=600&auto=format&fit=crop', // Placeholder
        link: '#',
        github: '#'
    },
    {
        title: 'LMS UI',
        category: 'Design',
        tags: ['HTML', 'CSS', 'Figma'],
        description: 'A modern Learning Management System interface with intuitive navigation.',
        longDescription: 'Redesigned the user experience for a leading LMS platform. Focus on clean typography, consistent color theory, and an intuitive course dashboard.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
        link: '#',
        github: '#'
    },
    {
        title: 'Travel Planning App',
        category: 'Web',
        tags: ['React Native', 'Firebase'],
        description: 'An AI-powered travel itinerary planner for seamless trips.',
        longDescription: 'Mobile application that uses AI to generate personalized travel itineraries based on user preferences and budget. Features offline maps and real-time collaboration.',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
        link: '#',
        github: '#'
    },
    {
        title: 'Cinematic Showreel',
        category: 'Video',
        tags: ['Premiere Pro', 'After Effects'],
        description: 'A compilation of high-energy edits and motion graphics work.',
        longDescription: 'A 2-minute showreel demonstrating expertise in video editing, color grading, and motion graphics. Includes cuts from commercial projects and creative shorts.',
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop',
        link: '#',
        github: '#'
    }
];

const categories = ['All', 'Web', 'Design', 'Video'];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = projects.filter(project =>
        filter === 'All' ? true : project.category === filter
    );

    return (
        <section id="projects" className="py-20 bg-dark-lighter relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-12 text-center">
                    Featured Works
                </h2>

                {/* Filter Buttons */}
                <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${filter === cat
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}
                        `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="bg-dark border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-colors group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2 block">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-dark border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-10 transition-colors"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <X size={20} />
                                </button>

                                <div className="h-64 sm:h-80 overflow-hidden">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-indigo-400 font-mono text-xs uppercase tracking-wider">{selectedProject.category}</span>
                                            <h3 className="text-3xl font-bold text-white mt-1">{selectedProject.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {selectedProject.longDescription || selectedProject.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="text-sm px-3 py-1 bg-white/5 rounded-full text-gray-200 border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={selectedProject.link}
                                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={selectedProject.github}
                                            className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <Github size={18} />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
