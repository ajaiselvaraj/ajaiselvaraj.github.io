import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
    const formRef = useRef(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, integrate with Formspree or EmailJS
        alert("Message sent! (Simulation)");
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
                {/* Left: Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400 border border-white/10">
                                <span className="sr-only">Email</span>
                                📧
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a href="mailto:ajaiselvaraj22@gmail.com" className="text-white font-medium hover:text-indigo-400 transition-colors">ajaiselvaraj22@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400 border border-white/10">
                                <span className="sr-only">Location</span>
                                📍
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <span className="text-white font-medium">Coimbatore, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Socials</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/ajaiselvaraj" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all text-white hover:scale-110">GitHub</a>
                            <a href="https://www.linkedin.com/in/ajaiselvaraj-" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all text-white hover:scale-110">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl"
                >
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors resize-none"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-indigo-500/30 transition-shadow hover:shadow-indigo-500/50"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
