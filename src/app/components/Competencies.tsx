'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, Cloud, BarChart3, ArrowRight } from 'lucide-react';

const competencies = [
    {
        icon: Brain,
        title: 'AI & Automation',
        headline: 'Intelligence-Driven Enterprise Transformation',
        description: 'From Generative AI and Agentic AI deployments to ML-powered process automation — we help enterprises build AI capabilities that generate measurable operational advantage.',
        areas: [
            { name: 'Generative AI', desc: 'LLM fine-tuning, RAG architectures, and enterprise co-pilots' },
            { name: 'Agentic AI', desc: 'Autonomous agents for complex multi-step business workflows' },
            { name: 'Intelligent Automation', desc: 'RPA, intelligent document processing, and workflow orchestration' },
            { name: 'ML & Data Science', desc: 'Predictive models, recommendation engines, and analytics AI' },
        ],
        color: '#7C3AED',
        gradient: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(91,33,182,0.04) 100%)',
    },
    {
        icon: Cloud,
        title: 'Cloud',
        headline: 'Cloud Transformation at Enterprise Scale',
        description: 'Multi-cloud strategy, migration execution, cloud-native development, and FinOps optimization — across Azure, AWS, Google Cloud, and Salesforce.',
        areas: [
            { name: 'Azure', desc: 'Enterprise cloud architecture and Microsoft ecosystem integration' },
            { name: 'AWS', desc: 'Scalable cloud infrastructure and managed services on Amazon' },
            { name: 'Google Cloud', desc: 'Data-driven transformation on GCP with BigQuery and Vertex AI' },
            { name: 'Salesforce', desc: 'CRM platform engineering, integrations, and custom development' },
        ],
        color: '#0284C7',
        gradient: 'linear-gradient(135deg, rgba(2,132,199,0.08) 0%, rgba(3,105,161,0.04) 100%)',
    },
    {
        icon: BarChart3,
        title: 'Data & Analytics',
        headline: 'Data Engineering for Smarter Decisions',
        description: 'Modern data platforms, real-time analytics pipelines, and advanced visualization — turning enterprise data into strategic intelligence.',
        areas: [
            { name: 'Modern Data Platforms', desc: 'Data lakes, warehouses, mesh architectures, and pipelines' },
            { name: 'Advanced Analytics', desc: 'Statistical modeling, predictive analytics, and forecasting' },
            { name: 'Data Visualization', desc: 'Executive dashboards, BI platforms, and self-service analytics' },
            { name: 'Data Governance', desc: 'Master data management, lineage, and compliance frameworks' },
        ],
        color: '#059669',
        gradient: 'linear-gradient(135deg, rgba(5,150,105,0.08) 0%, rgba(4,120,87,0.04) 100%)',
    },
];

export default function Competencies() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section style={{ padding: '6rem 0', background: 'white' }}>
            <div className="container-nous" ref={ref}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <p className="section-label">Technology Competencies</p>
                        <div className="divider" />
                        <h2 style={{
                            fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                            fontWeight: 800,
                            color: '#0A1628',
                            letterSpacing: '-0.025em',
                            maxWidth: '480px',
                        }}>
                            The Capabilities That Drive Outcomes
                        </h2>
                    </div>
                    <div style={{ maxWidth: '360px' }}>
                        <p style={{ color: '#64748B', lineHeight: 1.75, fontSize: '1rem' }}>
                            Our competency centers bring together specialized talent, proven methodologies, and modern toolchains — purpose-built for enterprise challenges.
                        </p>
                    </div>
                </div>

                {/* Competency Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {competencies.map((comp, i) => (
                        <div
                            key={comp.title}
                            onClick={() => setActive(active === i ? null : i)}
                            style={{
                                background: active === i ? comp.gradient : 'white',
                                border: `1px solid ${active === i ? comp.color + '33' : '#E2E8F0'}`,
                                borderRadius: '14px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                                transitionDelay: `${i * 0.12}s`,
                                boxShadow: active === i ? `0 20px 60px ${comp.color}0E` : 'none',
                            }}
                        >
                            {/* Header row */}
                            <div style={{
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                justifyContent: 'space-between',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '12px',
                                        background: `${comp.color}14`,
                                        border: `1px solid ${comp.color}22`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <comp.icon size={24} color={comp.color} />
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            color: comp.color,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            marginBottom: '2px',
                                        }}>
                                            Competency
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A1628' }}>
                                            {comp.title}
                                        </h3>
                                    </div>
                                </div>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: active === i ? comp.color : '#F1F5F9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.25s',
                                    transform: active === i ? 'rotate(90deg)' : 'rotate(0)',
                                }}>
                                    <ArrowRight size={16} color={active === i ? 'white' : '#94A3B8'} />
                                </div>
                            </div>

                            {/* Expanded content */}
                            {active === i && (
                                <div style={{
                                    padding: '0 2rem 2rem',
                                    animation: 'fadeIn 0.3s ease',
                                }}>
                                    <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1rem' }}>
                                        {comp.description}
                                    </p>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                        gap: '1rem',
                                    }}>
                                        {comp.areas.map((area) => (
                                            <div
                                                key={area.name}
                                                style={{
                                                    background: `${comp.color}0A`,
                                                    border: `1px solid ${comp.color}18`,
                                                    borderRadius: '10px',
                                                    padding: '1.25rem',
                                                }}
                                            >
                                                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0A1628', marginBottom: '0.375rem' }}>
                                                    {area.name}
                                                </div>
                                                <div style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
                                                    {area.desc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
