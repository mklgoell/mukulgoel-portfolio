'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Magnetic from './Magnetic';

export default function Navbar() {
    const navItems = [
        { name: 'Philosophy', href: '#about' },
        { name: 'Arsenal', href: '#skills' },
        { name: 'Chronicles', href: '#projects' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 mix-blend-difference">
            <div className="flex items-center justify-between pointer-events-none">
                <Magnetic>
                    <motion.a
                        href="#"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white font-serif italic text-2xl pointer-events-auto"
                    >
                        MG.
                    </motion.a>
                </Magnetic>

                <div className="flex flex-col items-end gap-2 pointer-events-auto">
                    {navItems.map((item, i) => (
                        <Magnetic key={item.name}>
                            <motion.a
                                href={item.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-accent transition-colors py-1"
                            >
                                {item.name}
                            </motion.a>
                        </Magnetic>
                    ))}
                    <Magnetic>
                        <motion.a
                            href="mailto:mukulgoel1998@outlook.com"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent border-b border-accent/30 pt-4 hover:border-accent transition-all"
                        >
                            Connect
                        </motion.a>
                    </Magnetic>
                </div>
            </div>
        </nav>
    );
}
