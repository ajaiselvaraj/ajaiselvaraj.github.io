import { motion } from 'framer-motion';

const Testimonials = () => {


    const testimonials = [
        {
            name: "John Doe",
            role: "CTO, TechStart",
            feedback: "Ajai is an absolute wizard with React. The smooth animations and attention to detail transformed our MVP into a polished product.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Emily Wang",
            role: "Product Manager",
            feedback: "Detailed-oriented and creative. Ajai didn't just code the design, he enhanced it with micro-interactions that our users love.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "CodeMaster",
            role: "Developer Advocate",
            feedback: "One of the cleanest codebases I've seen. Easy to maintain and scalable. Highly recommended!",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-lighter relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-4">
                        What People Say
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Don't just take my word for it. Here's what clients and collaborators have to say.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-2xl relative shadow-lg dark:shadow-none hover:shadow-indigo-500/20 transition-all duration-300"
                        >
                            <div className="absolute -top-4 -left-4 text-6xl text-indigo-500/20 font-serif">"</div>

                            <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10 leading-relaxed">
                                {testimonial.feedback}
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/5 pt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-indigo-500"
                                />
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-bold text-lg">{testimonial.name}</h4>
                                    <span className="text-xs text-indigo-400 uppercase tracking-widest">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
        </section>
    );
};

export default Testimonials;
