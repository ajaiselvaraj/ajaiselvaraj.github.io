import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Video, PenTool } from 'lucide-react';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Web Development',
        description: 'Building fast, responsive, and SEO-optimized websites.',
        price: 'Starting at $500',
        delay: 0
    },
    {
        icon: <Monitor size={32} />,
        title: 'UI/UX Design',
        description: 'Creating intuitive and visually stunning user interfaces.',
        price: 'Starting at $300',
        delay: 0.1
    },
    {
        icon: <Video size={32} />,
        title: 'Video Editing',
        description: 'Professional editing for YouTube, Reels, and Corporate videos.',
        price: 'Starting at $200',
        delay: 0.2
    },
    {
        icon: <PenTool size={32} />,
        title: 'Graphic Design',
        description: 'Logos, branding, and social media assets that stand out.',
        price: 'Starting at $150',
        delay: 0.3
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-dark text-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-4">
                        Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Providing top-notch digital solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full" />

                            <div className="mb-6 text-indigo-400 group-hover:text-pink-500 transition-colors">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                                    {service.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow"
                    >
                        Start a Project
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Services;
