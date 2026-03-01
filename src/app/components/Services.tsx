'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2, Layers, FlaskConical, Server } from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Digital Product Engineering',
        subtitle: 'End-to-End Product Development',
        description:
            'We architect, build, and scale enterprise-grade digital products — from initial product discovery through production launch and ongoing evolution. Covering mobile, web, API, and embedded systems.',
        points: ['Product Discovery & Architecture', 'Full-Stack Platform Engineering', 'ISV & SaaS Modernization', 'API-First Design & Integration'],
        color: '#1A56DB',
        bgColor: 'rgba(26,86,219,0.06)',
        borderColor: 'rgba(26,86,219,0.15)',
    },
    {
        icon: Layers,
        title: 'Digital Application Services',
        subtitle: 'Modernization & Transformation',
        description:
            'Re-platform, refactor, or rebuild mission-critical legacy applications on modern cloud-native stacks without disrupting business continuity.',
        points: ['Legacy Application Modernization', 'Microservices Architecture', 'Cloud-Native Migration', 'ERP & CRM Customization'],
        color: '#0284C7',
        bgColor: 'rgba(2,132,199,0.06)',
        borderColor: 'rgba(2,132,199,0.15)',
    },
    {
        icon: FlaskConical,
        title: 'Quality Engineering',
        subtitle: 'Powered by Testree™',
        description:
            'Our specialized QA brand Testree delivers structured, automation-first quality assurance that aligns with enterprise compliance requirements and reduces release risk.',
        points: ['Test Strategy & Automation', 'Performance & Security Testing', 'Regulatory Compliance QA', 'Continuous Quality in CI/CD'],
        color: '#059669',
        bgColor: 'rgba(5,150,105,0.06)',
        borderColor: 'rgba(5,150,105,0.15)',
    },
    {
        icon: Server,
        title: 'Infrastructure Management',
        subtitle: 'Predictive & Resilient Operations',
        description:
            'From cloud automation to ServiceNow integration, we manage enterprise infrastructure with predictive monitoring, security controls, and SLA-driven reliability.',
        points: ['Cloud Automation & FinOps', 'Managed Hybrid Infrastructure', 'ServiceNow Implementation', 'Predictive Monitoring & AIOps'],
        color: '#7C3AED',
        bgColor: 'rgba(124,58,237,0.06)',
        borderColor: 'rgba(124,58,237,0.15)',
    },
];

function useIntersection(ref: React.RefObject<Element | null>) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return visible;
}

export default function Services() {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useIntersection(ref as React.RefObject<Element>);
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="services" ref={ref} style={{ padding: '6rem 0', background: 'white' }}>
            <div className="container-nous">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p className="section-label">What We Do</p>
                    <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
                    <h2 style={{
                        fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                        fontWeight: 800,
                        color: '#0A1628',
                        letterSpacing: '-0.025em',
                        marginBottom: '1rem',
                    }}>
                        Services Built for Enterprise Scale
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                        Every engagement is structured around delivery excellence, regulatory awareness, and measurable outcomes.
                    </p>
                </div>

                {/* Service Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: hovered === i ? service.bgColor : 'white',
                                border: `1px solid ${hovered === i ? service.borderColor : '#E2E8F0'}`,
                                borderRadius: '14px',
                                padding: '2rem',
                                cursor: 'default',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hovered === i ? 'translateY(-4px)' : visible ? 'translateY(0)' : 'translateY(32px)',
                                opacity: visible ? 1 : 0,
                                transitionDelay: `${i * 0.1}s`,
                                boxShadow: hovered === i ? `0 20px 60px ${service.color}12, 0 4px 20px rgba(0,0,0,0.06)` : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '12px',
                                background: service.bgColor,
                                border: `1px solid ${service.borderColor}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                transition: 'all 0.3s',
                                transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                            }}>
                                <service.icon size={24} color={service.color} />
                            </div>

                            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: service.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem' }}>
                                {service.subtitle}
                            </p>
                            <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#0A1628', marginBottom: '1rem', lineHeight: 1.25 }}>
                                {service.title}
                            </h3>
                            <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                                {service.description}
                            </p>

                            {/* Points */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                                {service.points.map((pt) => (
                                    <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: service.color,
                                            flexShrink: 0,
                                        }} />
                                        <span style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500 }}>{pt}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href="#contact"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: service.color,
                                    textDecoration: 'none',
                                    transition: 'gap 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.gap = '10px'}
                                onMouseLeave={(e) => e.currentTarget.style.gap = '6px'}
                            >
                                Explore Service <ArrowRight size={15} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
