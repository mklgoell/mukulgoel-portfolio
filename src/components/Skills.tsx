'use client';

import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: "The Forge (Main Stack)",
        items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "RESTful APIs"],
        description: "Architecting scalable web ecosystems from the ground up."
    },
    {
        category: "Native Pulse (Mobile)",
        items: ["Flutter", "Dart", "Android", "iOS", "Firebase", "State Management", "Mobile UI/UX"],
        description: "Crafting fluid mobile experiences for a world on the move."
    },
    {
        category: "The Lab (Infrastructure)",
        items: ["Git / GitLab", "Web3Dart", "Non-custodial Ops", "Treasury Controls", "AI Workflows"],
        description: "Maintaining rigorous standards for audit-ready execution."
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-slate-950/30">
            <div className="container px-6 mx-auto">
                <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-20">
                    <div>
                        <h2 className="text-5xl font-serif text-white sticky top-32">The Craft <br /><span className="text-accent italic">Arsenal</span></h2>
                    </div>

                    <div className="space-y-24">
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="max-w-2xl"
                            >
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 underline decoration-accent/20 underline-offset-4">
                                    {group.category}
                                </h3>
                                <p className="text-xl text-slate-300 font-serif italic mb-6">
                                    {group.description}
                                </p>
                                <div className="flex flex-wrap gap-x-8 gap-y-4">
                                    {group.items.map(skill => (
                                        <span
                                            key={skill}
                                            className="text-slate-500 font-sans hover:text-white transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
