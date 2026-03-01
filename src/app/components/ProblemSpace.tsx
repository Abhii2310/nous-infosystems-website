'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Lock, Scale, Zap } from 'lucide-react';

const challenges = [
    {
        icon: TrendingUp,
        title: 'Legacy System Complexity',
        description:
            'Decades of accumulated technical debt slow down innovation cycles and create brittle integrations that resist change.',
        stat: '73%',
        statLabel: 'of enterprises face legacy modernization bottlenecks',
        color: '#1A56DB',
    },
    {
        icon: Lock,
        title: 'Regulatory Compliance',
        description:
            'Banking, insurance, and healthcare operate under constrained regulatory environments that demand precision engineering.',
        stat: '40%',
        statLabel: 'cost overruns linked to compliance rework',
        color: '#0284C7',
    },
    {
        icon: Scale,
        title: 'Scalability Under Pressure',
        description:
            'Business growth demands elastic, cloud-native architectures that can handle surges without sacrificing stability.',
        stat: '3×',
        statLabel: 'faster time-to-market with modern architecture',
        color: '#0891B2',
    },
    {
        icon: Zap,
        title: 'AI & Automation Readiness',
        description:
            'Capturing AI value requires clean data pipelines, mature DevOps practices, and a foundation built for intelligence.',
        stat: '60%',
        statLabel: 'of AI projects fail without data infrastructure',
        color: '#7C3AED',
    },
];

function useIntersection(ref: React.RefObject<Element | null>) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return visible;
}

export default function ProblemSpace() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visible = useIntersection(sectionRef as React.RefObject<Element>);

    return (
        <section
            ref={sectionRef}
            style={{ background: '#F8FAFC', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
        >
            {/* Decorative accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, #1A56DB 40%, #3B82F6 60%, transparent 100%)',
            }} />

            <div className="container-nous">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '2rem',
                    alignItems: 'start',
                    marginBottom: '4rem',
                }}>
                    <div style={{ gridColumn: '1 / 6' }}>
                        <p className="section-label">The Enterprise Challenge</p>
                        <div className="divider" />
                        <h2 style={{
                            fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                            fontWeight: 800,
                            color: '#0A1628',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.15,
                        }}>
                            The complexity enterprises navigate every day
                        </h2>
                    </div>
                    <div style={{ gridColumn: '7 / 13', paddingTop: '2rem' }}>
                        <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.75, fontWeight: 400 }}>
                            Regulated industries don't have the luxury of moving fast and breaking things.
                            They need partners who understand the stakes — and engineer with precision,
                            compliance, and long-term resilience in mind.
                        </p>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {challenges.map((item, i) => (
                        <div
                            key={item.title}
                            className="enterprise-card"
                            style={{
                                padding: '2rem',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                                transition: `all 0.6s ease ${i * 0.12}s`,
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                background: `${item.color}14`,
                                border: `1px solid ${item.color}22`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.25rem',
                            }}>
                                <item.icon size={22} color={item.color} />
                            </div>

                            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A1628', marginBottom: '0.75rem' }}>
                                {item.title}
                            </h3>

                            <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                                {item.description}
                            </p>

                            <div style={{
                                borderTop: '1px solid #F1F5F9',
                                paddingTop: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}>
                                <span style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    color: item.color,
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1,
                                }}>
                                    {item.stat}
                                </span>
                                <span style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.4 }}>
                                    {item.statLabel}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
