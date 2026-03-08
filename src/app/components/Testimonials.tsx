'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "Nous didn't just implement AI — they rewired how our entire engineering org thinks about product development. We shipped in 8 weeks what would have taken us 18 months.",
        name: 'Sarah Chen',
        role: 'CTO, NovaBanking UK',
        avatar: 'SC',
        color: '#7c5cff',
        industry: 'FinTech',
    },
    {
        quote: "The agentic workflow automation nous built reduced our claims processing from 14 days to 3 hours. This wasn't incremental improvement. It was transformation.",
        name: 'James Okafor',
        role: 'Head of Operations, Global Insurer',
        avatar: 'JO',
        color: '#3ecfff',
        industry: 'Insurance',
    },
    {
        quote: "Their AI-ready cloud infrastructure gave us the scalability to run 200+ concurrent ML models without breaking a sweat. The engineering quality is Apple-level.",
        name: 'Priya Sharma',
        role: 'VP Engineering, HealthTech Unicorn',
        avatar: 'PS',
        color: '#ff5cac',
        industry: 'Healthcare',
    },
    {
        quote: "What impressed us most was how deeply nous understood our domain. They weren't selling generic AI services — they were redesigning our competitive moat.",
        name: 'Marcus Williams',
        role: 'CEO, Retail Analytics Co',
        avatar: 'MW',
        color: '#2ddc8e',
        industry: 'Retail',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [active, setActive] = useState(0);

    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '30%',
                transform: 'translate(-50%, -50%)',
                width: 700, height: 700,
                background: 'radial-gradient(circle, rgba(124,92,255,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container">
                <div ref={ref} style={{ textAlign: 'center', marginBottom: 80 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="tag"
                        style={{ display: 'inline-flex', marginBottom: 24 }}
                    >
                        Client success stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 16 }}
                    >
                        <span className="gradient-text">Outcomes that</span>{' '}
                        <span style={{ color: '#fff' }}>speak</span>
                    </motion.h2>
                </div>

                {/* Featured testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="glass"
                    style={{ padding: '48px 56px', borderRadius: 24, marginBottom: 24, position: 'relative', overflow: 'hidden', borderLeft: `3px solid ${testimonials[active].color}` }}
                    key={active}
                >
                    <div style={{ position: 'absolute', top: 32, right: 40, opacity: 0.05 }}>
                        <Quote size={80} color={testimonials[active].color} />
                    </div>

                    <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={testimonials[active].color} color={testimonials[active].color} />)}
                    </div>

                    <p style={{ fontSize: 22, lineHeight: 1.6, color: '#fff', fontStyle: 'italic', marginBottom: 32, fontWeight: 500, letterSpacing: '-0.01em', maxWidth: 780 }}>
                        &ldquo;{testimonials[active].quote}&rdquo;
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{
                            width: 48, height: 48, borderRadius: '50%',
                            background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}66)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 15, fontWeight: 800, color: '#fff',
                        }}>
                            {testimonials[active].avatar}
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>{testimonials[active].name}</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{testimonials[active].role}</div>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <span style={{
                                fontSize: 11, fontWeight: 700, color: testimonials[active].color,
                                padding: '4px 12px', borderRadius: 100,
                                background: `${testimonials[active].color}15`,
                                border: `1px solid ${testimonials[active].color}30`,
                                textTransform: 'uppercase', letterSpacing: '0.06em',
                            }}>
                                {testimonials[active].industry}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Selector cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                    {testimonials.map((t, i) => (
                        <button
                            key={t.name}
                            onClick={() => setActive(i)}
                            style={{
                                padding: '16px 20px',
                                borderRadius: 14,
                                border: `1px solid ${i === active ? `${t.color}50` : 'rgba(255,255,255,0.07)'}`,
                                background: i === active ? `${t.color}12` : 'rgba(255,255,255,0.02)',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all 0.2s',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${t.color}, ${t.color}66)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 11, fontWeight: 800, color: '#fff',
                                }}>
                                    {t.avatar}
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: i === active ? '#fff' : 'rgba(255,255,255,0.6)' }}>{t.name}</div>
                            </div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
