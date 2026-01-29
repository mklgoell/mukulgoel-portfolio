'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden">
            {/* Immersive background elements match-linked to layout */}
            <div className="noise-overlay" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <h1 className="text-8xl md:text-[12rem] font-serif italic text-white/10 select-none leading-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-[0.2em]">
                            System <span className="text-accent italic">Failure</span>
                        </h2>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-slate-400 font-sans tracking-widest uppercase text-xs md:text-sm max-w-md mx-auto leading-loose"
                >
                    The requested protocol could not be initialized. <br />
                    Target destination is either classified or non-existent.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-12"
                >
                    <Magnetic>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Reinitialize Core
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scanned Line visual */}
            <div className="absolute bottom-10 left-10 text-[10px] font-mono text-slate-800 space-y-1 text-left hidden md:block">
                <div>SYSTEM_VERSION: 2.0.26</div>
                <div>ERROR_CODE: 0x404_PAGE_NOT_FOUND</div>
                <div>LOCATION: REMOTE_VOID</div>
            </div>
        </main>
    );
}
