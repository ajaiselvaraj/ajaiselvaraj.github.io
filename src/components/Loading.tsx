import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center pointer-events-none"
        >
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-t-2 border-indigo-500 rounded-full"
                />
                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute w-16 h-16 border-b-2 border-pink-500 rounded-full"
                />

                {/* Initials */}
                <span className="absolute text-xl font-bold font-mono text-white tracking-widest">AS</span>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-sm font-mono text-gray-500"
            >
                LOADING EXPERIENCE...
            </motion.p>
        </motion.div>
    );
};

export default Loading;
