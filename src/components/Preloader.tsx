'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 3500);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(prev + diff, 100);
            });
        }, 200);

        // Lock scroll
        document.body.style.overflow = 'hidden';

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center pointer-events-none"
                >
                    <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
                        {/* Centered System Identity */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-2">MG.</h1>
                            <div className="text-[10px] md:text-xs font-mono text-accent uppercase tracking-[0.3em] opacity-80">
                                System Initialization
                            </div>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-[1px] bg-slate-800 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-accent"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Status Output */}
                        <div className="text-[10px] font-mono text-slate-500 flex justify-between w-full uppercase tracking-widest">
                            <span>Loading Protocol...</span>
                            <span className="text-accent">{Math.round(progress)}%</span>
                        </div>
                    </div>

                    {/* Background Grid - Reusing the aesthetic */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
