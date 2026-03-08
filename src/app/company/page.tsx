'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CompanyPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navigation />

            <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00f0ff] to-[#9d00ff] opacity-[0.05] blur-[100px] pointer-events-none" />

                <div className="container-custom relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                            The Collective
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[3rem] sm:text-[5rem] font-black tracking-tighter"
                    >
                        WE ARE <span className="neon-gradient-text">NOUS</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-6 max-w-2xl text-xl text-gray-400 font-medium"
                    >
                        A collective of abstract thinkers, AI researchers, and automation engineers. We don't build software; we engineer autonomous intelligence.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 px-4 relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Box 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 flex flex-col justify-center h-[500px]"
                    >
                        <h2 className="text-4xl font-black tracking-tighter mb-4">THE MISSION</h2>
                        <p className="text-gray-400 text-lg">
                            To eradicate manual computation. Our workflows are designed to take the human out of the loop, deploying pure agentic logic at scale.
                        </p>
                    </motion.div>
                    {/* Box 2 (Image Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel h-[500px] overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <h3 className="text-2xl font-bold tracking-widest uppercase">Silicon Valley</h3>
                            <p className="text-[#00f0ff] uppercase tracking-widest text-xs mt-2">Headquarters</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
