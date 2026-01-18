'use client';

import { motion, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const istTime = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }).format(now);
            setTime(istTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Magnetic Button Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        mouseX.set((clientX - centerX) * 0.2);
        mouseY.set((clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#020617]">
            <div className="container px-6 mx-auto relative z-10 w-full">
                <div className="flex flex-col gap-12 max-w-7xl mx-auto">
                    {/* Header: Location & Time */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-wrap items-center gap-6 text-accent uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold"
                    >
                        <div className="h-px w-12 bg-accent opacity-50 hidden sm:block" />
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            Based in Goa
                        </span>
                        <span className="text-slate-500 font-sans tracking-widest">{time} IST</span>
                        <span className="text-slate-500 hidden sm:inline">— Currently Architectural Design</span>
                    </motion.div>

                    <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-end">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="inline-block px-3 py-1 border border-accent/20 bg-accent/5 rounded-full"
                                >
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest leading-none">Senior Engineering</span>
                                </motion.div>
                                <h1
                                    className="text-6xl md:text-9xl font-serif text-white tracking-tight leading-[0.85]"
                                >
                                    <span className="block overflow-hidden pb-4">
                                        {"Mukul".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.2 + (i * 0.05),
                                                    ease: [0.23, 1, 0.32, 1]
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                    <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-slate-500">
                                        {"Goel".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.6 + (i * 0.05),
                                                    ease: [0.23, 1, 0.32, 1]
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                </h1>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-slate-400 font-sans max-w-xl leading-relaxed italic"
                            >
                                Crafting digital products where <span className="text-white">precision meets soul</span>. Full-stack expertise powered by AI-augmented workflows and bespoke architectural design.
                            </motion.p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-20">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="relative flex justify-end"
                            >
                                <motion.div
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ x: mouseX, y: mouseY }}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-colors" />
                                    <a
                                        href="#projects"
                                        aria-label="View chronological list of projects"
                                        className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-accent/30 bg-[#020617] group-hover:border-accent group-hover:scale-105 transition-all duration-500"
                                    >
                                        <div className="text-center">
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">View</p>
                                            <p className="text-xs font-serif italic text-white">Chronicles</p>
                                        </div>
                                        <div className="absolute inset-0 border-2 border-accent border-dashed rounded-full animate-spin-slow opacity-0 group-hover:opacity-30" />
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
