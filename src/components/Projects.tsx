'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
    {
        title: "Moviq",
        description: "Automated payment recovery for the Indian SMB ecosystem. Transforming late fees into healthy cash flow through intelligent WhatsApp & Email orchestration and UPI deep-linking.",
        tags: ["SaaS", "UPI Integration", "WhatsApp API", "Automation"],
        links: [],
        image: "/moviq.png",
        color: "bg-orange-500/10",
        text: "text-orange-400",
        meta: { status: "PRODUCTION", runtime: "NODE.JS", auth: "WHATSAPP_API" }
    },
    {
        title: "KiwiPay",
        description: "The world's smartest Payment Routing Platform. An intelligent 'Omni Portal' engine connecting high-growth businesses to 500+ local methods across 190+ markets with 99.99% uptime.",
        tags: ["Smart Routing", "Omni Engine", "Fintech", "High-Availability"],
        links: [{ name: "Live Site", url: "https://kiwipayment.com" }],
        image: "/kiwipay.png",
        color: "bg-emerald-500/10",
        text: "text-emerald-400",
        meta: { status: "SCALING", engine: "OMNI_ROUTING", uptime: "99.99%" }
    },
    {
        title: "LumeStream",
        description: "A decentralized P2P streaming protocol empowering creators with 100% earnings. Built on a censorship-resistant mesh network with instant stablecoin settlements and non-custodial ownership.",
        tags: ["P2P Mesh", "WebRTC", "Creator Economy", "Stablecoin Settlement"],
        links: [{ name: "Live Site", url: "https://lumestream.io" }],
        image: "/lumestream.png",
        color: "bg-blue-500/10",
        text: "text-blue-400",
        meta: { status: "BETA", p2p: "WEBRTC_MESH", settlement: "USDC" }
    },
    {
        title: "iMeta Blockchain",
        description: "Enterprise-grade crypto payments & autopay infrastructure. Architecting Stripe-like subscription protocols without banks or borders—featuring non-custodial treasury sweeps and institutional controls.",
        tags: ["Autopay", "Treasury Controls", "Non-custodial", "Web3 Infra"],
        links: [{ name: "Live Site", url: "https://imetablockchain.com/" }],
        image: "/imetablockchain.png",
        color: "bg-purple-500/10",
        text: "text-purple-400",
        meta: { status: "ENTERPRISE", infra: "NON-CUSTODIAL", security: "AUDIT_READY" }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-6xl font-serif text-white mb-6 underline decoration-accent/30 decoration-8 underline-offset-8">Selected Chronicles</h2>
                        <p className="text-slate-400 font-sans text-lg italic">A curation of digital products birthed from technical curiosity and user empathy.</p>
                    </div>
                    <div className="text-8xl font-serif text-slate-800/10 select-none hidden lg:block">WORK</div>
                </div>

                <div className="grid lg:grid-cols-2 gap-y-32 gap-x-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`relative group ${i % 2 === 1 ? 'lg:mt-32' : ''}`}
                        >
                            {/* Technical Tooltip */}
                            <div className="absolute -top-20 right-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                <div className="bg-slate-900/90 backdrop-blur-md border border-accent/20 p-3 rounded-lg shadow-2xl font-mono text-[9px] uppercase tracking-wider space-y-1">
                                    {Object.entries(project.meta).map(([key, value]) => (
                                        <div key={key} className="flex justify-between gap-4">
                                            <span className="text-slate-500">{key}:</span>
                                            <span className="text-accent">{value}</span>
                                        </div>
                                    ))}
                                    <div className="pt-1 mt-1 border-t border-slate-800 text-[8px] text-slate-600">MG_SYSTEM_VER_2.0.26</div>
                                </div>
                            </div>

                            <div className="absolute -top-12 -left-4 text-7xl font-serif text-slate-800/20 group-hover:text-accent/20 transition-colors duration-500">
                                0{i + 1}
                            </div>

                            <div className={`aspect-video rounded-3xl ${project.color} overflow-hidden mb-8 border border-slate-800 group-hover:border-accent/30 transition-all duration-500 relative`}>
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        whileHover={{ scale: 1.1, x: 10, y: 5 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-800 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-4xl font-serif text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-6 pt-4">
                                    {project.links.map(link => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            className="text-xs font-bold uppercase tracking-widest text-slate-200 hover:text-accent flex items-center gap-2 transition-colors"
                                        >
                                            {link.name}
                                            <ExternalLink size={12} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
