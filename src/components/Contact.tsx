import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus({ type: 'error', message: 'All fields are required.' });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: null, message: '' });

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Replace these with your actual EmailJS service, template, and public key
            // Start of EmailJS logic
            await emailjs.send(
                'YOUR_SERVICE_ID', // Service ID
                'YOUR_TEMPLATE_ID', // Template ID
                {
                    from_name: formData.name,
                    to_name: "Ajai", // Or simulate dynamic if needed
                    from_email: formData.email,
                    message: formData.message,
                    reply_to: formData.email,
                },
                'YOUR_PUBLIC_KEY' // Public Key
            );
            // End of EmailJS logic

            setStatus({ type: 'success', message: 'Message sent successfully!' });
            setFormData({ name: '', email: '', message: '' });
            if (formRef.current) formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
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
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
                >
                    {status.message && (
                        <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                            {status.message}
                        </div>
                    )}

                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                                placeholder="Your Name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                                placeholder="your@email.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors resize-none"
                                placeholder="Tell me about your project..."
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full font-bold py-3 rounded-lg shadow-lg shadow-indigo-500/30 transition-shadow ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/50 text-white'}`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
