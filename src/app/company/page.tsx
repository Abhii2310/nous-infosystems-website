'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Globe, Award, Users, Heart, Leaf, Phone, ChevronRight, TrendingUp, Star, Briefcase, Shield, CheckCircle, Building2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const milestones = [
    { year: '1996', title: 'Founded', desc: 'Nous Infosystems established in Hyderabad, India — with a vision for engineering excellence across the subcontinent and beyond.' },
    { year: '2002', title: 'Global Expansion', desc: 'Opened first international office in the United States, serving the banking & finance sector.' },
    { year: '2006', title: 'CMMI Level 5', desc: 'Achieved CMMI Level 5 certification — the highest software process maturity rating globally.' },
    { year: '2012', title: 'UK & Europe', desc: 'Expanded to London, establishing our EMEA headquarters to serve European financial institutions.' },
    { year: '2018', title: 'AI Practice', desc: 'Launched dedicated AI & Automation practice — building agentic AI for regulated industries.' },
    { year: '2025', title: 'Today', desc: '3,200+ engineers, 6 countries, 40+ open roles, and 29 years of unbroken engineering excellence.' },
];

const leadership = [
    { name: 'Narsimha Rao Mannava', role: 'Founder & CEO', avatar: '👨‍💼', desc: '29+ years building Nous into a global engineering powerhouse, with roots across Hyderabad and Bengaluru.' },
    { name: 'Suresh Kumar', role: 'Chief Technology Officer', avatar: '👨‍💻', desc: 'Architect of Nous\'s cloud, AI, and platform engineering strategy.' },
    { name: 'Priya Iyer', role: 'VP, Engineering Excellence', avatar: '👩‍🔬', desc: 'Custodian of Nous\'s CMMI L5 quality processes and delivery standards.' },
    { name: 'James Collins', role: 'MD, UK & Europe', avatar: '👨‍🏢', desc: 'Leading EMEA growth and banking/insurance relationships from London.' },
];

const companyPages = [
    {
        title: 'About Nous',
        desc: 'Our story, mission, values, and 29-year journey of engineering excellence.',
        href: '/company/about',
        icon: '📖',
        color: '#1A56DB',
        bg: 'rgba(26,86,219,0.06)',
    },
    {
        title: 'Technology Partnerships',
        desc: 'Strategic alliances with Microsoft, AWS, Google Cloud, Salesforce, and more.',
        href: '/company/partnerships',
        icon: '🤝',
        color: '#7C3AED',
        bg: 'rgba(124,58,237,0.06)',
    },
    {
        title: 'Life at Nous',
        desc: 'Our culture, people, perks, and what makes Nous a great place to engineer.',
        href: '/life-at-nous',
        icon: '❤️',
        color: '#EF4444',
        bg: 'rgba(239,68,68,0.06)',
    },
    {
        title: 'CSR Initiatives',
        desc: 'Community impact, education initiatives, and green engineering commitments.',
        href: '/company/csr',
        icon: '🌱',
        color: '#059669',
        bg: 'rgba(5,150,105,0.06)',
    },
    {
        title: 'Careers',
        desc: '40+ open roles across engineering, AI, cloud, data, and management.',
        href: '#careers',
        icon: '🚀',
        color: '#D97706',
        bg: 'rgba(217,119,6,0.06)',
    },
    {
        title: 'Contact Us',
        desc: 'Reach our global team — Hyderabad, Bengaluru, London, New York, Sydney.',
        href: '#contact',
        icon: '📞',
        color: '#0891B2',
        bg: 'rgba(8,145,178,0.06)',
    },
];

const stats = [
    { value: '29+', label: 'Years of Excellence', icon: Award },
    { value: '3,200+', label: 'Engineers Worldwide', icon: Users },
    { value: '6', label: 'Countries', icon: Globe },
    { value: 'CMMI L5', label: 'Process Maturity', icon: Shield },
];

export default function CompanyPage() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <Navigation />
            <div style={{ paddingTop: '72px', fontFamily: 'Inter, sans-serif' }}>
                {/* Hero */}
                <section style={{
                    padding: '5rem 0 4rem',
                    background: 'linear-gradient(160deg, #050E1E 0%, #0C1F45 60%, #071428 100%)',
                    position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,86,219,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
                    <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.25rem' }}>
                            <Building2 size={13} color="#60A5FA" />
                            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Company</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.625rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '1.125rem', maxWidth: '760px' }}>
                            29 Years of{' '}
                            <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Engineering Excellence</span>
                            ,<br />Built in India
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 1.75vw, 1.1875rem)', color: '#94A3B8', lineHeight: 1.75, maxWidth: '560px' }}>
                            Nous Infosystems is a global technology company helping the world's most complex enterprises solve their hardest engineering challenges — from day one to deployment and beyond.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginTop: '3rem', maxWidth: '700px' }}>
                            {stats.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.25rem', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
                                        <Icon size={20} color="#60A5FA" style={{ marginBottom: '0.5rem' }} />
                                        <div style={{ fontSize: '1.625rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em' }}>{s.value}</div>
                                        <div style={{ fontSize: '0.775rem', color: '#94A3B8', marginTop: '4px' }}>{s.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Company Navigation Cards */}
                <section style={{ padding: '5rem 0', background: 'white' }}>
                    <div className="container-nous">
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0A1628', letterSpacing: '-0.025em', marginBottom: '0.875rem' }}>Everything About Nous</h2>
                            <p style={{ fontSize: '1.0625rem', color: '#64748B', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>Navigate our company sections — from our culture and story to how we give back to communities.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
                            {companyPages.map((p) => {
                                const isHash = p.href.startsWith('#');
                                const CardContent = (
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.75rem', background: 'white', border: '1.5px solid #E2E8F0', borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%', boxSizing: 'border-box' }}
                                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = p.color + '50'; el.style.boxShadow = `0 16px 50px ${p.color}12`; el.style.transform = 'translateY(-4px)'; el.style.background = p.bg; }}
                                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; el.style.background = 'white'; }}
                                    >
                                        <div style={{ fontSize: '2.25rem', flexShrink: 0 }}>{p.icon}</div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#0A1628', marginBottom: '0.375rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                {p.title}
                                                <ChevronRight size={15} color={p.color} />
                                            </div>
                                            <div style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65 }}>{p.desc}</div>
                                        </div>
                                    </div>
                                );
                                return isHash ? (
                                    <a key={p.title} href={p.href} style={{ textDecoration: 'none', display: 'block' }}>{CardContent}</a>
                                ) : (
                                    <Link key={p.title} href={p.href} style={{ textDecoration: 'none', display: 'block' }}>{CardContent}</Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #050E1E 0%, #0C1F45 100%)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,86,219,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                    <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1rem' }}>
                                <TrendingUp size={13} color="#60A5FA" />
                                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Journey</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.025em' }}>
                                29 Years in the Making
                            </h2>
                        </div>

                        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                            {/* Center line */}
                            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(96,165,250,0.2)', transform: 'translateX(-50%)' }} />
                            {milestones.map((m, i) => (
                                <div
                                    key={m.year}
                                    ref={i === 0 ? ref : undefined}
                                    style={{
                                        display: 'flex', alignItems: 'center',
                                        gap: '2rem', marginBottom: '2.5rem',
                                        flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                                        opacity: visible ? 1 : 0,
                                        transform: visible ? 'translateX(0)' : `translateX(${i % 2 === 0 ? '-30px' : '30px'})`,
                                        transition: `all 0.5s ease ${i * 0.1}s`,
                                    }}
                                >
                                    <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                                        <div style={{ fontWeight: 800, fontSize: '2rem', color: '#60A5FA', letterSpacing: '-0.03em', lineHeight: 1 }}>{m.year}</div>
                                        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginTop: '4px', marginBottom: '6px' }}>{m.title}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.65 }}>{m.desc}</div>
                                    </div>
                                    {/* Center dot */}
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#1A56DB', border: '3px solid #60A5FA', flexShrink: 0, boxShadow: '0 0 20px rgba(96,165,250,0.5)' }} />
                                    <div style={{ flex: 1 }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section style={{ padding: '6rem 0', background: 'white' }}>
                    <div className="container-nous">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0A1628', letterSpacing: '-0.025em', marginBottom: '1rem' }}>Leadership Team</h2>
                            <p style={{ fontSize: '1.0625rem', color: '#64748B', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>The people who built Nous — and continue to lead it forward.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
                            {leadership.map((l) => (
                                <div key={l.name} style={{ background: 'white', border: '1.5px solid #E2E8F0', borderRadius: '16px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#1A56DB40'; el.style.boxShadow = '0 16px 50px rgba(26,86,219,0.08)'; el.style.transform = 'translateY(-4px)'; }}
                                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; }}
                                >
                                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{l.avatar}</div>
                                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0A1628', marginBottom: '4px' }}>{l.name}</div>
                                    <div style={{ fontSize: '0.825rem', color: '#1A56DB', fontWeight: 600, marginBottom: '0.75rem' }}>{l.role}</div>
                                    <div style={{ fontSize: '0.8375rem', color: '#64748B', lineHeight: 1.65 }}>{l.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1A56DB 0%, #7C3AED 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                    <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.025em', marginBottom: '1rem' }}>Ready to Partner with Nous?</h2>
                        <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>Let's build something exceptional together — from proof of concept to global scale.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#1A56DB', padding: '0.875rem 2rem', borderRadius: '10px', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.25)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.18)'; }}
                            >
                                Talk to Our Experts <ArrowRight size={15} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
