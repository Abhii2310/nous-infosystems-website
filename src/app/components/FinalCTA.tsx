'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

const contactOptions = [
    {
        icon: MessageCircle,
        title: 'Book a Discovery Call',
        desc: '45 min with our principal AI architects — zero sales pitch',
        cta: 'Schedule now',
        href: 'mailto:hello@nous.ai',
        color: '#6366f1',
        primary: true,
    },
    {
        icon: Mail,
        title: 'Talk to Sales',
        desc: 'Enterprise pricing, custom scopes, partnership enquiries',
        cta: 'Contact sales',
        href: 'mailto:sales@nous.ai',
        color: '#06b6d4',
        primary: false,
    },
];

export default function FinalCTA() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <>
            {/* ── Big final CTA ── */}
            <section
                id="contact"
                style={{
                    padding: '140px 0',
                    background: 'linear-gradient(160deg, #0a0f1e 0%, #131b35 50%, #0c1628 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Layered background blobs */}
                <div style={{ position: 'absolute', top: '-15%', left: '5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-20%', right: '0%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.14), transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(139,92,246,0.08), transparent 60%)', pointerEvents: 'none' }} />

                {/* Grid texture */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                    pointerEvents: 'none',
                }} />

                {/* Animated ring */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', border: '1px solid rgba(99,102,241,0.08)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(99,102,241,0.12)', pointerEvents: 'none' }} />

                <div className="container" ref={ref} style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ textAlign: 'center', marginBottom: 72 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                padding: '6px 16px', borderRadius: 100,
                                background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
                                fontSize: 12, fontWeight: 700, color: '#a5b4fc',
                                letterSpacing: '0.07em', textTransform: 'uppercase',
                                marginBottom: 32,
                            }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 8px #6366f1' }} />
                                Start today
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                fontSize: 'clamp(52px, 8vw, 100px)',
                                fontWeight: 900,
                                letterSpacing: '-0.05em',
                                lineHeight: 0.92,
                                color: '#fff',
                                marginBottom: 28,
                            }}
                        >
                            Start Building
                            <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 40%, #06b6d4 80%, #14b8a6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                the Future.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto 56px', lineHeight: 1.7, fontWeight: 400 }}
                        >
                            Join 200+ enterprises already building AI-native operations with Nous.
                        </motion.p>

                        {/* CTA cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}
                        >
                            {contactOptions.map((opt) => {
                                const Icon = opt.icon;
                                return (
                                    <a key={opt.title} href={opt.href} style={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                                        gap: 12, padding: '28px 32px', borderRadius: 20, width: 280,
                                        background: opt.primary
                                            ? 'rgba(99,102,241,0.12)'
                                            : 'rgba(255,255,255,0.04)',
                                        border: `1.5px solid ${opt.primary ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.1)'}`,
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(12px)',
                                        boxShadow: opt.primary ? '0 8px 40px rgba(99,102,241,0.15)' : 'none',
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = `0 20px 60px rgba(${opt.primary ? '99,102,241' : '6,182,212'},0.25)`;
                                            e.currentTarget.style.borderColor = opt.primary ? 'rgba(99,102,241,0.6)' : 'rgba(6,182,212,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = opt.primary ? '0 8px 40px rgba(99,102,241,0.15)' : 'none';
                                            e.currentTarget.style.borderColor = opt.primary ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.1)';
                                        }}
                                    >
                                        <div style={{
                                            width: 44, height: 44, borderRadius: 12,
                                            background: `${opt.color}22`, border: `1px solid ${opt.color}44`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <Icon size={20} color={opt.color} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{opt.title}</div>
                                            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{opt.desc}</div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: opt.color, fontSize: 14, fontWeight: 600, marginTop: 4 }}>
                                            {opt.cta} <ArrowRight size={14} />
                                        </div>
                                    </a>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Small trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                        {[
                            { icon: '🔒', text: 'SOC 2 Type II' },
                            { icon: '🌍', text: '30+ countries' },
                            { icon: '⚡', text: '99.9% uptime SLA' },
                            { icon: '🤝', text: 'Dedicated success manager' },
                            { icon: '📞', text: '24/7 priority support' },
                        ].map((b) => (
                            <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ fontSize: 16 }}>{b.icon}</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{b.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
