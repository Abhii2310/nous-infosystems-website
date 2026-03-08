'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    { quote: "Nous shipped what would have taken us 18 months — inside 8 weeks. Extraordinary engineers, extraordinary outcomes.", name: 'Sarah Chen', role: 'CTO · NovaBanking UK', avatar: 'SC', color: '#6366f1', industry: 'FinTech' },
    { quote: "Claims processing went from 14 days to 3 hours. Not incremental improvement — total transformation.", name: 'James Okafor', role: 'Head of Ops · Global Insurer', avatar: 'JO', color: '#06b6d4', industry: 'Insurance' },
    { quote: "Apple-level engineering quality. Our MLOps infrastructure is now exquisitely scalable for 200+ concurrent models.", name: 'Priya Sharma', role: 'VP Engineering · HealthUnity', avatar: 'PS', color: '#e879f9', industry: 'Healthcare' },
    { quote: "We didn't get generic AI consulting. Nous redesigned our competitive moat. Worth every penny.", name: 'Marcus Williams', role: 'CEO · RetailIQ', avatar: 'MW', color: '#14b8a6', industry: 'Retail' },
];

const steps = [
    { num: '01', title: 'Discovery', desc: '2 weeks', color: '#6366f1' },
    { num: '02', title: 'Architecture', desc: '3 weeks', color: '#3b82f6' },
    { num: '03', title: 'Implementation', desc: '8–24 weeks', color: '#06b6d4' },
    { num: '04', title: 'Operationalize', desc: 'Ongoing', color: '#14b8a6' },
];

export default function Competencies() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [active, setActive] = useState(0);

    return (
        <>
            {/* How it works — visual timeline */}
            <section id="how-it-works" className="section" style={{ background: '#ffffff', overflow: 'hidden' }}>
                <div className="container" ref={ref}>
                    <div style={{ textAlign: 'center', marginBottom: 72 }}>
                        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="tag" style={{ display: 'inline-flex', marginBottom: 20 }}>
                            Our process
                        </motion.span>
                        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="display-lg" style={{ color: '#0a0f1e' }}>
                            From idea to{' '}
                            <span className="grad-text">AI-native</span>
                        </motion.h2>
                    </div>

                    {/* Timeline card row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, position: 'relative' }}>
                        {/* Connector line */}
                        <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4, #14b8a6)' }} />

                        {steps.map((s, i) => (
                            <motion.div
                                key={s.num}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.15 + i * 0.1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                            >
                                <div style={{
                                    width: 72, height: 72, borderRadius: '50%',
                                    background: '#fff',
                                    border: `2px solid ${s.color}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 18, fontWeight: 900, color: s.color,
                                    boxShadow: `0 4px 20px ${s.color}25`,
                                    marginBottom: 20, position: 'relative', zIndex: 2,
                                }}>
                                    {s.num}
                                </div>
                                <div style={{ fontSize: 17, fontWeight: 800, color: '#0a0f1e', marginBottom: 6 }}>{s.title}</div>
                                <div style={{ fontSize: 12, fontWeight: 600, color: s.color, padding: '4px 12px', borderRadius: 100, background: `${s.color}10`, border: `1px solid ${s.color}25` }}>
                                    {s.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="section" style={{ background: '#f8f9fc', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 64 }}>
                        <span className="tag" style={{ display: 'inline-flex', marginBottom: 20 }}>Customer stories</span>
                        <h2 className="display-lg" style={{ color: '#0a0f1e' }}>
                            Outcomes that{' '}
                            <span className="grad-text">speak</span>
                        </h2>
                    </div>

                    {/* Featured quote */}
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            background: '#fff',
                            borderRadius: 24,
                            padding: '44px 52px',
                            border: `1px solid ${testimonials[active].color}22`,
                            boxShadow: `0 20px 60px rgba(0,0,0,0.07), 0 0 0 1px ${testimonials[active].color}15`,
                            marginBottom: 20,
                            position: 'relative',
                            overflow: 'hidden',
                            borderLeft: `4px solid ${testimonials[active].color}`,
                        }}
                    >
                        <div style={{ position: 'absolute', top: 28, right: 36, opacity: 0.05 }}>
                            <Quote size={72} color={testimonials[active].color} />
                        </div>

                        <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={testimonials[active].color} color={testimonials[active].color} />)}
                        </div>

                        <p style={{ fontSize: 22, lineHeight: 1.55, color: '#0a0f1e', fontWeight: 600, letterSpacing: '-0.015em', marginBottom: 32, maxWidth: 700 }}>
                            &ldquo;{testimonials[active].quote}&rdquo;
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: '#fff' }}>
                                    {testimonials[active].avatar}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: 15, color: '#0a0f1e' }}>{testimonials[active].name}</div>
                                    <div style={{ fontSize: 13, color: '#6b7280' }}>{testimonials[active].role}</div>
                                </div>
                            </div>
                            <span style={{ fontSize: 11, fontWeight: 700, color: testimonials[active].color, padding: '5px 14px', borderRadius: 100, background: `${testimonials[active].color}10`, border: `1px solid ${testimonials[active].color}25`, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                {testimonials[active].industry}
                            </span>
                        </div>
                    </motion.div>

                    {/* Selector pills */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                        {testimonials.map((t, i) => (
                            <button
                                key={t.name}
                                onClick={() => setActive(i)}
                                style={{
                                    padding: '14px 18px', borderRadius: 14, textAlign: 'left',
                                    background: i === active ? '#fff' : 'transparent',
                                    border: `1.5px solid ${i === active ? `${t.color}35` : 'rgba(0,0,0,0.07)'}`,
                                    boxShadow: i === active ? `0 4px 20px rgba(0,0,0,0.06)` : 'none',
                                    cursor: 'pointer', transition: 'all 0.2s',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#fff' }}>{t.avatar}</div>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: i === active ? '#0a0f1e' : '#6b7280' }}>{t.name}</span>
                                </div>
                                <div style={{ fontSize: 11, color: '#9ca3af' }}>{t.industry}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
