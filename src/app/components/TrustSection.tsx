'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Award, Globe, Users, CheckCircle, TrendingUp } from 'lucide-react';

const stats = [
    { value: 29, suffix: '+', label: 'Years of Engineering Excellence', icon: TrendingUp },
    { value: 2000, suffix: '+', label: 'Enterprise Applications Delivered', icon: CheckCircle },
    { value: 90, suffix: '%', label: 'Repeat Business Rate', icon: Users },
    { value: 6, suffix: '', label: 'Global Delivery Centers', icon: Globe },
];

const certifications = [
    {
        title: 'CMMI Level 5 (V3.0)',
        desc: 'Appraised across Services, Security, People, and Suppliers domains — the highest level of process maturity.',
        icon: Award,
        badge: 'Highest Level',
        color: '#1A56DB',
    },
    {
        title: 'ISO 27001:2022',
        desc: 'Certified information security management ensuring your data assets are protected at every layer.',
        icon: Shield,
        badge: 'Certified',
        color: '#059669',
    },
    {
        title: 'SOC 2 Type II',
        desc: 'Independently verified controls for security, availability, and confidentiality for enterprise operations.',
        icon: Shield,
        badge: 'Audited',
        color: '#0891B2',
    },
    {
        title: 'ISO 9001:2015',
        desc: 'Quality management system certification demonstrating consistent delivery of client requirements.',
        icon: Award,
        badge: 'Certified',
        color: '#7C3AED',
    },
    {
        title: 'Everest Group PEAK Matrix® Leader',
        desc: 'Recognized as a leader in Quality Engineering Specialist Services for delivery excellence.',
        icon: TrendingUp,
        badge: '2023 Leader',
        color: '#EA580C',
    },
    {
        title: 'Great Place to Work®',
        desc: 'Certified for workplace culture, talent investment, and organizational trust — ensuring stable delivery teams.',
        icon: Users,
        badge: 'Certified',
        color: '#D97706',
    },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1800;
                    const step = target / (duration / 16);
                    let current = 0;
                    const timer = setInterval(() => {
                        current = Math.min(current + step, target);
                        setCount(Math.floor(current));
                        if (current >= target) clearInterval(timer);
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function TrustSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            style={{
                background: 'linear-gradient(160deg, #050E1E 0%, #0A1A3A 50%, #0F2D5E 100%)',
                padding: '6rem 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(26,86,219,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,86,219,0.05) 1px, transparent 1px)
        `,
                backgroundSize: '64px 64px',
            }} />

            <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60A5FA', marginBottom: '0.75rem' }}>
                        Process Maturity & Trust
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-0.025em',
                        marginBottom: '1rem',
                    }}>
                        Industry-Recognized Standards
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                        Our certifications are not checkboxes — they represent the operational discipline behind every engagement.
                    </p>
                </div>

                {/* Stats Row */}
                <div
                    ref={ref}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4rem',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '14px',
                                padding: '2rem 1.5rem',
                                textAlign: 'center',
                                transition: 'all 0.3s',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                                transitionDelay: `${i * 0.1}s`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.08)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(26,86,219,0.4)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: 'rgba(26,86,219,0.2)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                            }}>
                                <stat.icon size={20} color="#60A5FA" />
                            </div>
                            <div style={{
                                fontSize: '2.75rem',
                                fontWeight: 800,
                                color: 'white',
                                letterSpacing: '-0.04em',
                                lineHeight: 1,
                                marginBottom: '0.5rem',
                            }}>
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.4 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {certifications.map((cert, i) => (
                        <div
                            key={cert.title}
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '12px',
                                padding: '1.75rem',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start',
                                transition: 'all 0.3s',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                                transitionDelay: `${0.3 + i * 0.08}s`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}33`;
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: `${cert.color}1A`,
                                border: `1px solid ${cert.color}33`,
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <cert.icon size={20} color={cert.color} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'white' }}>{cert.title}</h3>
                                    <span style={{
                                        fontSize: '0.6875rem',
                                        fontWeight: 600,
                                        background: `${cert.color}22`,
                                        color: cert.color,
                                        border: `1px solid ${cert.color}33`,
                                        padding: '2px 8px',
                                        borderRadius: '100px',
                                        flexShrink: 0,
                                        letterSpacing: '0.04em',
                                        textTransform: 'uppercase',
                                    }}>
                                        {cert.badge}
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6 }}>{cert.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
