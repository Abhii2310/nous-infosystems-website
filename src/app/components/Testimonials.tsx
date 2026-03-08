'use client';

import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';
import { NousOrbitalTimeline } from '@/components/ui/radial-orbital-timeline';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
    return (
        <section style={{ background: '#04050d', padding: '80px 0 0', overflow: 'hidden' }}>
            {/* Section label */}
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '6px 16px', borderRadius: 100,
                        background: 'rgba(124,58,237,0.1)',
                        border: '1px solid rgba(124,58,237,0.25)',
                        fontSize: 11, fontWeight: 800, color: 'rgba(167,139,250,0.9)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
                    }}>
                        Client outcomes
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(36px, 5vw, 72px)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        color: '#fff',
                        lineHeight: 1,
                        marginBottom: 16,
                        display: 'block',
                    }}>
                        What our clients{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #7c3aed, #db2777, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            actually say
                        </span>
                    </h2>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.35)', maxWidth: 480, margin: '0 auto' }}>
                        200+ enterprise clients. Real numbers. No spin.
                    </p>
                </motion.div>
            </div>

            {/* Stagger cards */}
            <StaggerTestimonials />

            {/* Orbital timeline section */}
            <div style={{ paddingTop: 80, paddingBottom: 80 }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '6px 16px', borderRadius: 100,
                            background: 'rgba(6,182,212,0.08)',
                            border: '1px solid rgba(6,182,212,0.2)',
                            fontSize: 11, fontWeight: 800, color: 'rgba(103,232,249,0.9)',
                            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
                        }}>
                            Five service pillars
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4.5vw, 64px)',
                            fontWeight: 900,
                            letterSpacing: '-0.04em',
                            color: '#fff',
                            lineHeight: 1,
                            marginBottom: 12,
                            display: 'block',
                        }}>
                            Click any node to explore
                        </h2>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', maxWidth: 420, margin: '0 auto' }}>
                            An orbital map of our AI capabilities — each pillar interconnected.
                        </p>
                    </motion.div>
                </div>
                <NousOrbitalTimeline />
            </div>
        </section>
    );
}
