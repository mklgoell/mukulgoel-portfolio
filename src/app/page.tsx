'use client';

import { useState } from 'react';
import { motion, useMotionValue } from "framer-motion";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GithubContributions from "@/components/GithubContributions";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const magneticButtonX = useMotionValue(0);
  const magneticButtonY = useMotionValue(0);

  const handleCopy = () => {
    navigator.clipboard.writeText('mukul@mukulgoel.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMagneticMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    magneticButtonX.set((clientX - centerX) * 0.3);
    magneticButtonY.set((clientY - centerY) * 0.3);
  };

  const handleMagneticLeave = () => {
    magneticButtonX.set(0);
    magneticButtonY.set(0);
  };

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <section id="about" className="py-32 relative overflow-hidden scroll-mt-32">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-20 items-start">
            <div className="lg:sticky lg:top-32 mb-12 lg:mb-0">
              <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-8">The <br />Philosophy</h2>
              <div className="space-y-6 text-slate-400 font-sans leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Originally from <span className="text-white italic font-serif">Jhansi</span>, my journey into engineering was fueled by a curiosity for how digital
                  worlds are built. I strive to strike a balance between <span className="text-accent italic">technical rigor</span> and
                  <span className="text-white"> creative intuition</span>.
                </motion.p>
                <div className="pt-8">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">My Toolkit</div>
                  <p className="text-sm text-slate-300">Next.js • Flutter • SaaS • Product Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-900 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-serif text-white mb-6">01. Academic Foundation</h3>
                <div className="space-y-4 text-slate-400 text-lg leading-relaxed font-sans">
                  <div className="border-l-2 border-slate-800 pl-4 py-1">
                    <p className="text-white font-medium">Master of Computer Applications (MCA)</p>
                    <p className="text-sm">ITM University, Gwalior • 2018 — 2021</p>
                  </div>
                  <div className="border-l-2 border-slate-800 pl-4 py-1">
                    <p className="text-white font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-sm">Makhanlal Chaturvedi University, Bhopal • 2015 — 2018</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-900 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-serif text-white mb-6">02. The Professional Arc</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-4">
                  With <span className="text-white">5+ years</span> of deep-diving into mobile architecture, I've delivered high-impact products
                  spanning fintech, logistics, and decentralized finance. My work is anchored in <span className="text-white">Flutter</span> mastery,
                  integrating complex third-party APIs (Stripe, PayPal, AMEX) and optimizing for bare-metal performance.
                </p>
                <div className="border-l-2 border-accent/20 pl-4 py-1">
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Current Expedition</p>
                  <p className="text-white">
                    Transitioned from <span className="text-slate-400 italic">EightyFive Technologies</span> to
                    {' '}
                    <a href="https://imetatech.io" target="_blank" className="text-accent hover:underline font-medium italic">iMetaTech.io</a>
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-900 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-serif text-white mb-6">03. Current Focus & Impact</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Leading the charge at <a href="https://imetatech.io" target="_blank" className="text-white hover:text-accent underline decoration-accent/30">iMeta Technologies</a>,
                  I architect <span className="text-white">KiwiPay</span>'s global rails and build <span className="text-white">LumeStream</span>'s decentralized protocol.
                  Simultaneously, I am personally developing <span className="text-white italic">Moviq</span>—an automated payment recovery platform
                  designed to empower Indian SMBs through intelligent WhatsApp orchestration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <GithubContributions />

      <footer className="py-32 border-t border-slate-900 bg-slate-950/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mb-24">
            <h2 className="text-5xl md:text-8xl font-serif italic text-white leading-tight mb-12">
              Let's architect the <br />
              <span className="text-accent not-italic">next big protocol.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <motion.div
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                style={{ x: magneticButtonX, y: magneticButtonY }}
                className="relative"
              >
                <a
                  href="mailto:mukul@mukulgoel.dev"
                  className="group relative inline-flex px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-2">
                    Talk to Me <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
              </motion.div>
              <button
                onClick={handleCopy}
                className={`transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold pt-5 ${copied ? 'text-accent' : 'text-slate-500 hover:text-white'}`}
              >
                {copied ? '✓ Email Copied to Clipboard' : 'Copy Email — mukul@mukulgoel.dev'}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-20 border-t border-slate-900 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Mukul Goel<span className="text-accent">.</span></h3>
              <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>

            <div className="flex items-center gap-8">
              <a href="https://linkedin.com/in/mukul--goel/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">LinkedIn</a>
              <a href="https://github.com/mklgoell" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
