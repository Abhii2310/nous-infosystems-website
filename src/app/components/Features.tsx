'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Database, GitMerge, ShieldCheck, Cloud } from 'lucide-react';

const pillars = [
    { icon: Box, title: 'AI Product Engineering', sub: 'LLM-integrated apps, RAG, AI-first UX', color: '#6366f1', bg: 'rgba(99,102,241,0.07)' },
    { icon: Database, title: 'AI Data Engineering', sub: 'Pipelines, lakehouses, real-time analytics', color: '#3b82f6', bg: 'rgba(59,130,246,0.07)' },
    { icon: GitMerge, title: 'Agentic Automation', sub: 'Autonomous agents, multi-step workflows', color: '#06b6d4', bg: 'rgba(6,182,212,0.07)' },
    { icon: ShieldCheck, title: 'AI Quality Engineering', sub: 'Predictive testing, zero-defect CI/CD', color: '#14b8a6', bg: 'rgba(20,184,166,0.07)' },
    { icon: Cloud, title: 'AI-ready Infrastructure', sub: 'MLOps, GPU clusters, multi-cloud', color: '#8b5cf6', bg: 'rgba(139,92,246,0.07)' },
];

export default function Features() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="features" className="section" style={{ background: '#f8f9fc', position: 'relative', overflow: 'hidden' }}>
            {/* Top divider */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }} />

            {/* Decorative ring */}
            <div style={{
                position: 'absolute', top: '50%', right: '-300px', transform: 'translateY(-50%)',
                width: 700, height: 700, borderRadius: '50%',
                border: '1px solid rgba(99,102,241,0.07)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '50%', right: '-200px', transform: 'translateY(-50%)',
                width: 500, height: 500, borderRadius: '50%',
                border: '1px solid rgba(59,130,246,0.09)',
                pointerEvents: 'none',
            }} />

            <div className="container">
                <div ref={ref} style={{ maxWidth: 640, marginBottom: 72 }}>
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="tag"
                        style={{ marginBottom: 20, display: 'inline-flex' }}
                    >
                        Five pillars
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="display-lg"
                        style={{ color: '#0a0f1e', marginBottom: 16 }}
                    >
                        The complete AI{' '}
                        <span className="grad-text">operating stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="body-lg"
                    >
                        One platform. Five transformational pillars. We embed AI into every layer of your enterprise.
                    </motion.p>
                </div>

                {/* Bento grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: 20 }}>
                    {pillars.map((p, i) => {
                        const Icon = p.icon;
                        const isWide = i === 0 || i === 4;
                        return (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    gridColumn: isWide ? 'span 2' : 'span 1',
                                    background: '#ffffff',
                                    borderRadius: 20,
                                    padding: '36px 36px 40px',
                                    border: `1px solid ${hovered === i ? p.color + '30' : 'rgba(0,0,0,0.07)'}`,
                                    boxShadow: hovered === i ? `0 20px 60px rgba(0,0,0,0.09), 0 0 0 1px ${p.color}22` : '0 2px 12px rgba(0,0,0,0.04)',
                                    cursor: 'default',
                                    transition: 'all 0.3s ease',
                                    transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Gradient blob on hover */}
                                <div style={{
                                    position: 'absolute', top: -60, right: -60,
                                    width: 200, height: 200, borderRadius: '50%',
                                    background: `radial-gradient(circle, ${p.color}14, transparent 70%)`,
                                    opacity: hovered === i ? 1 : 0,
                                    transition: 'opacity 0.4s',
                                    pointerEvents: 'none',
                                }} />

                                {/* Icon */}
                                <div style={{
                                    width: 52, height: 52, borderRadius: 14,
                                    background: p.bg,
                                    border: `1px solid ${p.color}25`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: 20,
                                    transition: 'transform 0.3s',
                                    transform: hovered === i ? 'scale(1.08)' : 'scale(1)',
                                }}>
                                    <Icon size={22} color={p.color} strokeWidth={2} />
                                </div>

                                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0a0f1e', letterSpacing: '-0.025em', marginBottom: 8 }}>
                                    {p.title}
                                </h3>
                                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>
                                    {p.sub}
                                </p>

                                {/* Color accent bottom line */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                                    background: `linear-gradient(90deg, ${p.color}, transparent)`,
                                    opacity: hovered === i ? 1 : 0,
                                    transition: 'opacity 0.3s',
                                    borderRadius: '0 0 20px 20px',
                                }} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
