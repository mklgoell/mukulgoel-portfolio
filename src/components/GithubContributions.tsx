'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const theme = {
    dark: [
        '#1e293b', // Level 0 (slate-800)
        '#451a03', // Level 1 (amber-950)
        '#92400e', // Level 2 (amber-800)
        '#d97706', // Level 3 (amber-600)
        '#fbbf24', // Level 4 (amber-400 - accent)
    ],
};

export default function GithubContributions() {
    return (
        <section className="py-20 border-t border-slate-900 bg-slate-950/30 relative overflow-hidden">
            {/* Background noise/effect could go here if needed to match other sections */}
            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-serif text-white">
                                Building in <span className="text-accent italic">Public</span>
                            </h3>
                            <p className="text-slate-400 max-w-lg leading-relaxed">
                                My contributions to the open-source ecosystem. Consistency is the key to mastery.
                            </p>
                        </div>
                        <a
                            href="https://github.com/mklgoell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                        >
                            @mklgoell
                        </a>
                    </div>

                    <div className="p-8 md:p-12 border border-slate-800/60 rounded-3xl bg-slate-900/20 hover:border-accent/20 transition-colors duration-500 backdrop-blur-sm">
                        <div className="flex justify-center overflow-x-auto">
                            <GitHubCalendar
                                username="mklgoell"
                                colorScheme="dark"
                                theme={theme}
                                fontSize={12}
                                blockSize={13}
                                blockMargin={4}
                                labels={{
                                    totalCount: '{{count}} contributions in the last year',
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
