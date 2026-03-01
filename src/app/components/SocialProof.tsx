'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Award, TrendingUp, CheckCircle, Star, Zap, Globe } from 'lucide-react';

const partners = [
    {
        name: 'Microsoft',
        tier: 'Gold Partner',
        tierColor: '#F59E0B',
        tierBg: 'rgba(245,158,11,0.12)',
        color: '#00A4EF',
        gradient: 'linear-gradient(135deg, #00A4EF20, #FFB90015)',
        border: 'rgba(0,164,239,0.25)',
        abbr: 'MS',
        desc: 'Azure Cloud & Modern Work',
        highlight: '19-year alliance',
        icon: '🪟',
    },
    {
        name: 'Amazon AWS',
        tier: 'Select Partner',
        tierColor: '#FF9900',
        tierBg: 'rgba(255,153,0,0.12)',
        color: '#FF9900',
        gradient: 'linear-gradient(135deg, #FF990020, #FF990005)',
        border: 'rgba(255,153,0,0.25)',
        abbr: 'aws',
        desc: 'Cloud Infrastructure & AI',
        highlight: 'AWS Select Consulting',
        icon: '☁️',
    },
    {
        name: 'Google Cloud',
        tier: 'Partner',
        tierColor: '#4285F4',
        tierBg: 'rgba(66,133,244,0.12)',
        color: '#4285F4',
        gradient: 'linear-gradient(135deg, #4285F420, #34A85310)',
        border: 'rgba(66,133,244,0.25)',
        abbr: 'GCP',
        desc: 'BigQuery & Vertex AI',
        highlight: 'Vertex AI Specialist',
        icon: '🔍',
    },
    {
        name: 'Salesforce',
        tier: 'Consulting Partner',
        tierColor: '#00A1E0',
        tierBg: 'rgba(0,161,224,0.12)',
        color: '#00A1E0',
        gradient: 'linear-gradient(135deg, #00A1E020, #00A1E005)',
        border: 'rgba(0,161,224,0.25)',
        abbr: 'SF',
        desc: 'CRM & Platform Engineering',
        highlight: 'Sales & Service Cloud',
        icon: '⚡',
    },
    {
        name: 'ServiceNow',
        tier: 'Partner',
        tierColor: '#62D84E',
        tierBg: 'rgba(98,216,78,0.12)',
        color: '#38A169',
        gradient: 'linear-gradient(135deg, #62D84E20, #62D84E05)',
        border: 'rgba(98,216,78,0.25)',
        abbr: 'SN',
        desc: 'IT Service Management',
        highlight: 'ITSM Specialist',
        icon: '🔧',
    },
    {
        name: 'Snowflake',
        tier: 'Partner',
        tierColor: '#29B5E8',
        tierBg: 'rgba(41,181,232,0.12)',
        color: '#29B5E8',
        gradient: 'linear-gradient(135deg, #29B5E820, #29B5E805)',
        border: 'rgba(41,181,232,0.25)',
        abbr: 'SF❄',
        desc: 'Data Cloud Platform',
        highlight: 'Data Migrations Expert',
        icon: '❄️',
    },
    {
        name: 'Databricks',
        tier: 'Partner',
        tierColor: '#FF3621',
        tierBg: 'rgba(255,54,33,0.12)',
        color: '#FF3621',
        gradient: 'linear-gradient(135deg, #FF362120, #FF362105)',
        border: 'rgba(255,54,33,0.25)',
        abbr: 'Db',
        desc: 'Data & AI Lakehouse',
        highlight: 'Lakehouse Architecture',
        icon: '🧱',
    },
    {
        name: 'MuleSoft',
        tier: 'Partner',
        tierColor: '#00B3E6',
        tierBg: 'rgba(0,179,230,0.12)',
        color: '#00B3E6',
        gradient: 'linear-gradient(135deg, #00B3E620, #00B3E605)',
        border: 'rgba(0,179,230,0.25)',
        abbr: 'Mu',
        desc: 'Integration & API Platform',
        highlight: 'API-first Integration',
        icon: '🔗',
    },
];

const ecosystemStats = [
    { value: '8+', label: 'Technology Partners', icon: Globe },
    { value: '19', label: 'Years with Microsoft', icon: Award },
    { value: '40+', label: 'Joint Certifications', icon: CheckCircle },
    { value: '100%', label: 'Cross-Platform Coverage', icon: Star },
];

const caseStudies = [
    {
        industry: 'Banking',
        color: '#1A56DB',
        bg: 'rgba(26,86,219,0.06)',
        bgHover: 'rgba(26,86,219,0.10)',
        title: 'Core Banking Modernization for a UK Tier-1 Bank',
        desc: 'Migrated a monolithic core ledger to event-driven microservices — achieving zero-downtime cutover for 4M+ customer accounts.',
        metrics: ['0 downtime', '60% faster settlement', 'ISO 27001 compliant'],
        tech: ['Azure', 'Kafka', 'Spring Boot'],
    },
    {
        industry: 'Insurance',
        color: '#0891B2',
        bg: 'rgba(8,145,178,0.06)',
        bgHover: 'rgba(8,145,178,0.10)',
        title: 'Claims Automation Platform for Global Insurer',
        desc: 'Built an ML-powered claims triage system that reduced claims processing cycle from 14 days to 3 days across 8 markets.',
        metrics: ['78% faster claims', '$12M annual savings', '99.98% uptime'],
        tech: ['AWS', 'Python ML', 'Snowflake'],
    },
    {
        industry: 'Healthcare',
        color: '#059669',
        bg: 'rgba(5,150,105,0.06)',
        bgHover: 'rgba(5,150,105,0.10)',
        title: 'HIPAA-Compliant Clinical Data Exchange',
        desc: 'Designed and deployed a HL7 FHIR-compliant patient data platform serving 300+ hospital systems across the US.',
        metrics: ['300+ hospitals', 'Full HIPAA compliance', '40M+ records managed'],
        tech: ['GCP', 'HL7 FHIR', 'BigQuery'],
    },
];

export default function SocialProof() {
    const ref = useRef<HTMLDivElement>(null);
    const partnersRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [partnersVisible, setPartnersVisible] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const [hoveredCase, setHoveredCase] = useState<number | null>(null);
    const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

    useEffect(() => {
        const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setPartnersVisible(true); }, { threshold: 0.1 });
        const obs3 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs1.observe(ref.current);
        if (partnersRef.current) obs2.observe(partnersRef.current);
        if (statsRef.current) obs3.observe(statsRef.current);
        return () => { obs1.disconnect(); obs2.disconnect(); obs3.disconnect(); };
    }, []);

    return (
        <>
            {/* ─── Technology Alliance Partners ─── */}
            <section
                ref={partnersRef}
                style={{
                    padding: '6rem 0',
                    background: 'linear-gradient(160deg, #050E1E 0%, #0C1F45 60%, #071428 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background grid */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(26,86,219,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.06) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />
                {/* Glow orbs */}
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

                <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(26,86,219,0.15)', border: '1px solid rgba(96,165,250,0.3)',
                            borderRadius: '100px', padding: '6px 16px', marginBottom: '1.25rem',
                        }}>
                            <Zap size={13} color="#60A5FA" />
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#93C5FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Technology Ecosystem</span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                            fontWeight: 800, color: '#FFFFFF',
                            letterSpacing: '-0.03em', lineHeight: 1.15,
                            marginBottom: '1rem',
                        }}>
                            Powered by the World's{' '}
                            <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Leading Platforms</span>
                        </h2>
                        <p style={{ fontSize: '1.0625rem', color: '#94A3B8', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                            Strategic alliances with the world's top technology companies — enabling us to deliver cutting-edge enterprise solutions at scale.
                        </p>
                    </div>

                    {/* Ecosystem Stats Strip */}
                    <div
                        ref={statsRef}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: '1rem',
                            marginBottom: '3.5rem',
                        }}
                    >
                        {ecosystemStats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '14px',
                                        padding: '1.25rem',
                                        textAlign: 'center',
                                        transition: 'all 0.4s ease',
                                        opacity: statsVisible ? 1 : 0,
                                        transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transitionDelay: `${i * 0.08}s`,
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <Icon size={20} color="#60A5FA" style={{ marginBottom: '0.5rem' }} />
                                    <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.03em' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Partner Cards — premium dark cards with hover glow */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: '1.25rem',
                        marginBottom: '3rem',
                    }}>
                        {partners.map((p, i) => (
                            <div
                                key={p.name}
                                onMouseEnter={() => setHoveredPartner(i)}
                                onMouseLeave={() => setHoveredPartner(null)}
                                style={{
                                    background: hoveredPartner === i ? p.gradient : 'rgba(255,255,255,0.04)',
                                    border: `1.5px solid ${hoveredPartner === i ? p.color + '60' : 'rgba(255,255,255,0.08)'}`,
                                    borderRadius: '16px',
                                    padding: '1.5rem',
                                    cursor: 'default',
                                    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                                    transform: partnersVisible ? (hoveredPartner === i ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(24px)',
                                    opacity: partnersVisible ? 1 : 0,
                                    transitionDelay: `${i * 0.06}s`,
                                    boxShadow: hoveredPartner === i ? `0 20px 60px ${p.color}18, 0 0 0 1px ${p.color}20` : 'none',
                                    backdropFilter: 'blur(10px)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Glow corner effect */}
                                {hoveredPartner === i && (
                                    <div style={{
                                        position: 'absolute', top: 0, right: 0,
                                        width: '100px', height: '100px',
                                        background: `radial-gradient(circle at top right, ${p.color}25, transparent 70%)`,
                                        pointerEvents: 'none',
                                    }} />
                                )}

                                {/* Logo & Name row */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '52px', height: '52px', borderRadius: '12px',
                                        background: `${p.color}18`, border: `1.5px solid ${p.color}35`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.625rem', flexShrink: 0,
                                        transition: 'all 0.3s',
                                        transform: hoveredPartner === i ? 'scale(1.08) rotate(-3deg)' : 'scale(1)',
                                    }}>
                                        {p.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '4px' }}>{p.name}</div>
                                        <div style={{ fontSize: '0.775rem', color: '#94A3B8' }}>{p.desc}</div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '0.875rem' }} />

                                {/* Tier badge & highlight */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                                    <span style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                        background: p.tierBg, color: p.tierColor,
                                        fontSize: '0.7rem', fontWeight: 700,
                                        padding: '4px 10px', borderRadius: '100px',
                                        border: `1px solid ${p.tierColor}30`,
                                        letterSpacing: '0.04em', textTransform: 'uppercase',
                                    }}>
                                        <Star size={9} fill="currentColor" />
                                        {p.tier}
                                    </span>
                                    <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>{p.highlight}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                            href="/company/partnerships"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(255,255,255,0.08)', color: '#E2E8F0',
                                padding: '0.75rem 1.75rem', borderRadius: '10px',
                                border: '1px solid rgba(255,255,255,0.15)', fontWeight: 600,
                                fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(26,86,219,0.2)'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.4)'; e.currentTarget.style.color = '#FFFFFF'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#E2E8F0'; }}
                        >
                            Explore All Technology Partnerships <ArrowRight size={15} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── Case Studies ─── */}
            <section ref={ref} style={{ padding: '6rem 0', background: '#F8FAFC' }}>
                <div className="container-nous">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(26,86,219,0.08)', border: '1px solid rgba(26,86,219,0.2)',
                                borderRadius: '100px', padding: '5px 14px', marginBottom: '1rem',
                            }}>
                                <TrendingUp size={12} color="#1A56DB" />
                                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1A56DB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Delivery Proof</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)', fontWeight: 800, color: '#0A1628', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                                Engineering Outcomes<br />That Speak for Themselves
                            </h2>
                        </div>
                        <a
                            href="/proof/case-studies"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: '#1A56DB', fontWeight: 600, fontSize: '0.875rem',
                                textDecoration: 'none', padding: '0.5rem 1.125rem',
                                border: '1.5px solid rgba(26,86,219,0.2)', borderRadius: '8px',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(26,86,219,0.06)'; e.currentTarget.style.borderColor = '#1A56DB'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(26,86,219,0.2)'; }}
                        >
                            View All Case Studies <ExternalLink size={14} />
                        </a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {caseStudies.map((cs, i) => (
                            <div
                                key={cs.title}
                                onMouseEnter={() => setHoveredCase(i)}
                                onMouseLeave={() => setHoveredCase(null)}
                                style={{
                                    background: 'white',
                                    border: `1.5px solid ${hoveredCase === i ? cs.color + '44' : cs.color + '18'}`,
                                    borderRadius: '16px', overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? (hoveredCase === i ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(28px)',
                                    transitionDelay: visible ? '0s' : `${i * 0.15}s`,
                                    cursor: 'pointer',
                                    boxShadow: hoveredCase === i ? `0 24px 70px ${cs.color}14, 0 4px 20px rgba(0,0,0,0.07)` : '0 2px 12px rgba(0,0,0,0.04)',
                                }}
                            >
                                {/* Colored top bar — expands on hover */}
                                <div style={{ height: hoveredCase === i ? '6px' : '4px', background: `linear-gradient(90deg, ${cs.color}, ${cs.color}66)`, transition: 'height 0.2s' }} />

                                <div style={{ padding: '1.75rem 2rem' }}>
                                    <span style={{
                                        display: 'inline-block', background: cs.bg, color: cs.color,
                                        fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px',
                                        borderRadius: '100px', textTransform: 'uppercase',
                                        letterSpacing: '0.06em', marginBottom: '1rem',
                                        border: `1px solid ${cs.color}22`,
                                    }}>
                                        {cs.industry}
                                    </span>

                                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A1628', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                                        {cs.title}
                                    </h3>

                                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                                        {cs.desc}
                                    </p>

                                    {/* Technology tags */}
                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                                        {cs.tech.map((t) => (
                                            <span key={t} style={{
                                                fontSize: '0.72rem', fontWeight: 600, color: '#64748B',
                                                background: '#F1F5F9', padding: '3px 8px',
                                                borderRadius: '6px', border: '1px solid #E2E8F0',
                                            }}>{t}</span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderTop: '1px solid #F1F5F9', paddingTop: '1.125rem', marginBottom: '1.125rem' }}>
                                        {cs.metrics.map((m) => (
                                            <span key={m} style={{
                                                fontSize: '0.775rem', fontWeight: 600, color: cs.color,
                                                background: cs.bg, padding: '4px 10px',
                                                borderRadius: '100px', border: `1px solid ${cs.color}22`,
                                                display: 'flex', alignItems: 'center', gap: '4px',
                                            }}>
                                                <CheckCircle size={11} />
                                                {m}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href="/proof/case-studies"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                                            fontSize: '0.875rem', fontWeight: 600, color: cs.color,
                                            textDecoration: 'none', transition: 'gap 0.2s',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.gap = '10px'}
                                        onMouseLeave={(e) => e.currentTarget.style.gap = '5px'}
                                    >
                                        Read Full Case Study <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
