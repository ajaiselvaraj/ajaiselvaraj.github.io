import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="container mx-auto px-6 text-center">

                <div className="flex flex-col items-center justify-center mb-8">
                    <h2 className="text-2xl font-bold font-mono tracking-tighter mb-4">
                        <span className="text-indigo-500">&lt;</span>
                        Ajai
                        <span className="text-pink-500">/&gt;</span>
                    </h2>
                </div>

                <div className="flex justify-center space-x-6 mb-8 text-gray-500 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <p className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Ajai Selvaraj. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
