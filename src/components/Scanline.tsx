'use client';

import { motion } from 'framer-motion';

export default function Scanline() {
    return (
        <motion.div
            initial={{ top: '-100%' }}
            animate={{ top: '100%' }}
            transition={{
                duration: 3,
                ease: "linear",
                repeat: 0
            }}
            className="fixed left-0 right-0 h-[1px] bg-accent/20 z-[10000] pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        />
    );
}
