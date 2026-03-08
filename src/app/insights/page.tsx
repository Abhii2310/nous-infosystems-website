'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const intelligenceFeed = [
    { id: 1, tag: "RESEARCH", title: "Quantum Multi-Agent Swarms in Production" },
    { id: 2, tag: "RELEASE", title: "v4.0 Neural Engine Pipeline" },
    { id: 3, tag: "AUTOMATION", title: "Zero-Latency Infinite Workflows" },
    { id: 4, tag: "SECURITY", title: "Post-Quantum Cryptography for AI States" }
];

export default function InsightsPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navigation />

            <section className="relative pt-40 pb-20 px-4">
                <div className="container-custom relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-[3rem] sm:text-[5rem] font-black tracking-tighter">
                            INTELLIGENCE <span className="neon-gradient-text">FEED</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-lg mx-auto font-medium">
                            Transmissions from the edge of autonomous computing and AI research.
                        </p>
                    </motion.div>

                    {/* Minimal Feed List */}
                    <div className="w-full max-w-4xl flex flex-col gap-4">
                        {intelligenceFeed.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group w-full glass-panel flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 cursor-pointer hover:border-[#00f0ff]/30 transition-colors"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="text-[#9d00ff] text-xs font-bold tracking-[0.2em]">{item.tag}</span>
                                    <h2 className="text-2xl font-bold group-hover:text-[#00f0ff] transition-colors">{item.title}</h2>
                                </div>
                                <div className="mt-4 sm:mt-0 text-sm font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#00f0ff] transition-colors" />
                                    Read Data
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
