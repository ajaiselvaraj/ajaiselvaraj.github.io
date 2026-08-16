

import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-dark text-gray-900 dark:text-white py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent"></div>
            <div className="container mx-auto px-6 text-center">

                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="text-2xl font-bold font-mono tracking-tighter mb-4">
                        <span className="text-indigo-500">&lt;</span>
                        Ajai
                        <span className="text-pink-500">/&gt;</span>
                    </div>
                </div>

                {/* Social links for SEO crawling and desktop view */}
                <div className="flex justify-center space-x-6 mb-8 text-gray-500">
                    <a href="https://github.com/ajaiselvaraj" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ajaiselvaraj-/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/ajaiselvaraj_/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="https://x.com/ajaiselvaraj_/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>

                <div className="flex justify-center space-x-6 mb-8 text-gray-500 text-sm">
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
                    <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
                    <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
                </div>

                <p className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Ajai Selvaraj. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
