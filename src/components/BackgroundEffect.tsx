'use client';

import { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function BackgroundEffect() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 300 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    // Parallax values for the grid
    const gridX = useTransform(mouseXSpring, [0, 2000], [10, -10]);
    const gridY = useTransform(mouseYSpring, [0, 1000], [10, -10]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#020617]">
            {/* Logic Grid */}
            <motion.div
                className="absolute inset-x-[-10%] inset-y-[-10%] opacity-[0.05]"
                style={{
                    x: gridX,
                    y: gridY,
                    backgroundImage: `radial-gradient(circle, #fbbf24 1.5px, transparent 1.5px)`,
                    backgroundSize: '80px 80px',
                    transform: `perspective(1000px) rotateX(2deg)`,
                }}
            />

            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(800px circle at var(--x) var(--y), rgba(251, 191, 36, 0.05), transparent 80%)`,
                } as any}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(251, 191, 36, 0.05), transparent 80%)`,
                    }}
                />
            </motion.div>
        </div>
    );
}
