'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
    {
        id: 'banking',
        label: 'Banking & Financial Services',
        shortLabel: 'Banking',
        headline: 'Engineering Resilience into Financial Infrastructure',
        description:
            'Core banking modernization, real-time payments, regulatory compliance systems, and fraud detection platforms built for institutions where downtime is not an option.',
        capabilities: [
            'Core Banking Platform Modernization',
            'Real-Time Payments & Open Banking',
            'Risk & Compliance Automation',
            'Digital Onboarding & KYC',
            'Data & Financial Analytics',
        ],
        metrics: [{ value: '99.99%', label: 'Uptime SLAs maintained' }, { value: '40%', label: 'Faster compliance delivery' }, { value: '200+', label: 'Banking applications delivered' }],
        accent: '#1A56DB',
        bg: 'rgba(26,86,219,0.05)',
        case: 'How we helped a Tier-1 UK bank modernize their core ledger system with zero downtime.',
    },
    {
        id: 'insurance',
        label: 'Insurance',
        shortLabel: 'Insurance',
        headline: 'Transforming the Insurance Value Chain',
        description:
            'From policy administration modernization to claims automation and InsurTech platforms — we deliver systems that are both regulator-friendly and customer-centric.',
        capabilities: [
            'Policy Administration Modernization',
            'Claims Processing Automation',
            'Underwriting Intelligence Platforms',
            'Regulatory Reporting Systems',
            'InsurTech Platform Engineering',
        ],
        metrics: [{ value: '60%', label: 'Faster claims processing' }, { value: '35%', label: 'Reduction in policy admin cost' }, { value: '15+', label: 'Insurance platforms delivered' }],
        accent: '#0891B2',
        bg: 'rgba(8,145,178,0.05)',
        case: 'How we rebuilt a legacy claims management system for a global insurer, reducing cycle time by 60%.',
    },
    {
        id: 'healthcare',
        label: 'Healthcare & Life Sciences',
        shortLabel: 'Healthcare',
        headline: 'Digital Innovation for Healthcare Delivery',
        description:
            'We understand FDA compliance, HIPAA regulations, and interoperability standards — and build healthcare platforms that are as reliable as the care they enable.',
        capabilities: [
            'EHR / EMR Integration & Development',
            'Clinical Decision Support Systems',
            'HIPAA-Compliant Data Platforms',
            'Patient Engagement Applications',
            'Healthcare Analytics & AI',
        ],
        metrics: [{ value: 'HIPAA', label: 'Compliant by design' }, { value: '50+', label: 'Healthcare app deployments' }, { value: '25%', label: 'Reduction in manual clinical errors' }],
        accent: '#059669',
        bg: 'rgba(5,150,105,0.05)',
        case: 'Designing a HIPAA-compliant clinical data exchange platform used across 300+ hospitals.',
    },
    {
        id: 'retail',
        label: 'Retail',
        shortLabel: 'Retail',
        headline: 'Commerce Platforms Built for Scale',
        description:
            'Omnichannel commerce, supply chain intelligence, and customer loyalty systems that create seamless experiences and operational resilience for global retailers.',
        capabilities: [
            'Omnichannel Commerce Engineering',
            'Supply Chain Visibility Platforms',
            'Customer Data & Loyalty Systems',
            'Headless CMS & Experience Platforms',
            'Retail Analytics & Forecasting',
        ],
        metrics: [{ value: '3×', label: 'Faster time-to-market' }, { value: '45%', label: 'Improvement in supply chain visibility' }, { value: '100+', label: 'Retail technology deployments' }],
        accent: '#DC2626',
        bg: 'rgba(220,38,38,0.04)',
        case: 'Building an omnichannel platform for a European fashion brand handling 1M+ daily transactions.',
    },
    {
        id: 'logistics',
        label: 'Travel & Logistics',
        shortLabel: 'Logistics',
        headline: 'Engineering Intelligent Logistics Platforms',
        description:
            'Real-time fleet management, route optimization, freight tracking, and traveler experience platforms engineered for global complexity and 24/7 reliability.',
        capabilities: [
            'Fleet Management & IOT Integration',
            'Route Optimization Engines',
            'Freight & Shipment Tracking Platforms',
            'Travel Booking & Experience Systems',
            'Logistics Data & Predictive Analytics',
        ],
        metrics: [{ value: '20%', label: 'Reduction in fuel costs via optimization' }, { value: '99.9%', label: 'Platform availability' }, { value: '80+', label: 'Logistics systems in production' }],
        accent: '#7C3AED',
        bg: 'rgba(124,58,237,0.05)',
        case: 'Developing a real-time shipment tracking platform serving 500K+ daily shipments for a global 3PL.',
    },
];

export default function Industries() {
    const [activeIndustry, setActiveIndustry] = useState(0);
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

    const active = industries[activeIndustry];

    return (
        <section
            id="industries"
            ref={ref}
            style={{ padding: '6rem 0', background: '#F8FAFC', position: 'relative' }}
        >
            <div className="container-nous">
                {/* Header */}
                <div style={{ marginBottom: '3.5rem' }}>
                    <p className="section-label">Industries We Serve</p>
                    <div className="divider" />
                    <h2 style={{
                        fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                        fontWeight: 800,
                        color: '#0A1628',
                        letterSpacing: '-0.025em',
                        maxWidth: '560px',
                        marginBottom: '1rem',
                    }}>
                        Deep Domain Expertise Across Regulated Industries
                    </h2>
                </div>

                {/* Industry Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '2.5rem',
                    flexWrap: 'wrap',
                }}>
                    {industries.map((ind, i) => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveIndustry(i)}
                            style={{
                                padding: '0.625rem 1.25rem',
                                borderRadius: '100px',
                                border: activeIndustry === i ? `2px solid ${ind.accent}` : '2px solid #E2E8F0',
                                background: activeIndustry === i ? ind.bg : 'white',
                                color: activeIndustry === i ? ind.accent : '#64748B',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontFamily: 'Inter, sans-serif',
                            }}
                        >
                            {ind.shortLabel}
                        </button>
                    ))}
                </div>

                {/* Active Industry Panel */}
                <div
                    key={active.id}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3rem',
                        background: 'white',
                        borderRadius: '16px',
                        border: `1px solid ${active.accent}22`,
                        padding: '3rem',
                        boxShadow: `0 20px 60px ${active.accent}0A, 0 4px 20px rgba(0,0,0,0.04)`,
                        animation: 'fadeIn 0.35s ease',
                    }}
                >
                    {/* Left */}
                    <div>
                        <div style={{
                            display: 'inline-block',
                            background: `${active.accent}14`,
                            color: active.accent,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '4px 12px',
                            borderRadius: '100px',
                            border: `1px solid ${active.accent}22`,
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                        }}>
                            {active.label}
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A1628', marginBottom: '1rem', lineHeight: 1.2 }}>
                            {active.headline}
                        </h3>
                        <p style={{ color: '#64748B', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1rem' }}>
                            {active.description}
                        </p>

                        {/* Capabilities */}
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A1628', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                            Core Capabilities
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                            {active.capabilities.map((cap) => (
                                <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${active.accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: active.accent }} />
                                    </div>
                                    <span style={{ fontSize: '0.9375rem', color: '#475569', fontWeight: 500 }}>{cap}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="btn-primary" style={{ background: active.accent, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Discuss Your Project <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Right */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {/* Metrics */}
                        <div>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A1628', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                                Delivery Impact
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {active.metrics.map((m) => (
                                    <div key={m.label} style={{
                                        background: `${active.accent}08`,
                                        border: `1px solid ${active.accent}18`,
                                        borderRadius: '10px',
                                        padding: '1.25rem 1rem',
                                        textAlign: 'center',
                                    }}>
                                        <div style={{ fontSize: '1.75rem', fontWeight: 800, color: active.accent, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.375rem' }}>
                                            {m.value}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: 1.4 }}>{m.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Case study preview */}
                        <div style={{
                            background: 'linear-gradient(135deg, #0A1628, #0F2D5E)',
                            borderRadius: '12px',
                            padding: '2rem',
                            flex: 1,
                        }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                                Case Study Spotlight
                            </p>
                            <p style={{ color: '#CBD5E1', lineHeight: 1.7, fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
                                {active.case}
                            </p>
                            <a href="#" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: '#93C5FD',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                            }}>
                                Read Full Case Study <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @media (max-width: 768px) {
            .industry-panel {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
            </div>
        </section>
    );
}
