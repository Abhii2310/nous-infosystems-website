'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Heart, Coffee, BookOpen, Globe, Zap, Award, Users, Star, Music, Camera, Leaf, TrendingUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const cultureValues = [
    {
        icon: Zap,
        title: 'Engineer First',
        desc: 'We believe in the power of engineering excellence — every line of code is a craft. We invest deeply in upskilling, internal R&D, and maker culture.',
        color: '#F59E0B',
        bg: 'rgba(245,158,11,0.08)',
    },
    {
        icon: Heart,
        title: 'People at the Core',
        desc: 'Our people aren\'t "resources" — they\'re the company. 19 years as a Great Place to Work® certified company proves our commitment to genuine care.',
        color: '#EF4444',
        bg: 'rgba(239,68,68,0.08)',
    },
    {
        icon: Globe,
        title: 'Global, Yet Personal',
        desc: 'With teams across 6 countries, we celebrate diversity as a strength. An idea hatched in Bengaluru ships into London banking infrastructure — that\'s our scale.',
        color: '#10B981',
        bg: 'rgba(16,185,129,0.08)',
    },
    {
        icon: TrendingUp,
        title: 'Built to Grow',
        desc: 'Fast career progression, internal mobility, mentorship from industry veterans. We build leaders, not just employees.',
        color: '#6366F1',
        bg: 'rgba(99,102,241,0.08)',
    },
    {
        icon: BookOpen,
        title: 'Always Learning',
        desc: 'Annual learning budgets, cloud certification sponsorships, internal academies, and access to global tech conferences — curiosity is rewarded.',
        color: '#1A56DB',
        bg: 'rgba(26,86,219,0.08)',
    },
    {
        icon: Leaf,
        title: 'Purpose-Driven',
        desc: 'From CSR initiatives to green engineering practices, we build products that matter and give back to the world around us.',
        color: '#059669',
        bg: 'rgba(5,150,105,0.08)',
    },
];

const teamTestimonials = [
    {
        name: 'Priya Krishnan',
        role: 'Principal Engineer, AI/ML',
        tenure: '7 years',
        location: 'Bengaluru',
        quote: 'Nous gave me the canvas to build real AI systems at enterprise scale — not PoCs, but production systems serving millions. That\'s rare.',
        avatar: '👩‍💻',
        gradient: 'linear-gradient(135deg, #1A56DB, #7C3AED)',
    },
    {
        name: 'James Okafor',
        role: 'Cloud Architect',
        tenure: '4 years',
        location: 'London',
        quote: 'The cross-geography collaboration is unlike any place I\'ve worked. My ideas from London directly shaped Azure architecture in a US healthcare system.',
        avatar: '👨‍💼',
        gradient: 'linear-gradient(135deg, #059669, #0891B2)',
    },
    {
        name: 'Sneha Mehta',
        role: 'Engineering Manager',
        tenure: '9 years',
        location: 'Bengaluru',
        quote: 'I joined as a fresh grad and became a manager in 5 years. The growth path here is genuine — no glass ceilings, just your own ambition.',
        avatar: '👩‍🏫',
        gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    },
    {
        name: 'Ravi Srinivasan',
        role: 'Data Engineering Lead',
        tenure: '6 years',
        location: 'Hyderabad',
        quote: 'Working on HIPAA, GDPR, and CMMI simultaneously taught me more than any course ever could. The complexity here is the curriculum.',
        avatar: '👨‍🔬',
        gradient: 'linear-gradient(135deg, #7C3AED, #1A56DB)',
    },
];

const lifePerks = [
    { icon: Coffee, label: 'Flexible Hours', sub: 'Hybrid & remote for most roles' },
    { icon: BookOpen, label: 'Learning Budget', sub: '₹80,000 / year per engineer' },
    { icon: Award, label: 'Cloud Certs Paid', sub: 'Azure, AWS, GCP — fully sponsored' },
    { icon: Heart, label: 'Health & Wellness', sub: 'Family coverage + mental health support' },
    { icon: Music, label: 'Great Culture', sub: 'Clubs: Music, Photography, Chess, Gaming' },
    { icon: Star, label: 'ESOPs', sub: 'Equity for senior contributors' },
    { icon: Globe, label: 'Global Mobility', sub: 'Work from UK, US, Australia, or EU' },
    { icon: Camera, label: 'Team Offsites', sub: 'Quarterly team trips & annual retreat' },
    { icon: Users, label: 'Mentorship', sub: '1-on-1 with industry veterans' },
];

const offices = [
    { city: 'Hyderabad', country: 'India 🇮🇳', role: 'Global HQ & Engineering Hub', team: '2,500+ engineers', highlight: 'CMMI L5 Delivery Centre', emoji: '🏙️', color: '#1A56DB' },
    { city: 'Bengaluru', country: 'India 🇮🇳', role: 'Tech Innovation Hub', team: '700+ engineers', highlight: 'AI & Cloud Centre', emoji: '🏙️', color: '#7C3AED' },
    { city: 'London', country: 'UK 🇬🇧', role: 'EMEA Headquarters', team: 'Financial Services', highlight: 'Banking & Insurance Hub', emoji: '🏛️', color: '#059669' },
    { city: 'New York', country: 'USA 🇺🇸', role: 'Americas Office', team: 'Healthcare & Finance', highlight: 'US Delivery Centre', emoji: '🗽', color: '#D97706' },
];

const impactNumbers = [
    { value: '3,200+', label: 'Nous Engineers', icon: Users },
    { value: '19', label: 'Years Great Place to Work®', icon: Award },
    { value: '6', label: 'Countries', icon: Globe },
    { value: '92%', label: 'Employee Satisfaction', icon: Heart },
];

export default function LifeAtNousPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [visible, setVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => setActiveTestimonial(i => (i + 1) % teamTestimonials.length), 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const t = teamTestimonials[activeTestimonial];

    return (
        <div style={{ fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
            {/* ─── HERO ─── */}
            <section
                ref={heroRef}
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(160deg, #050E1E 0%, #0C1F45 50%, #1A0A3C 100%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden', padding: '8rem 0 6rem',
                }}
            >
                {/* Grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />
                {/* Floating orbs */}
                <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', animation: 'floatOrb 9s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', bottom: '0', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.15) 0%, transparent 65%)', filter: 'blur(50px)', pointerEvents: 'none', animation: 'floatOrb 12s ease-in-out infinite reverse' }} />

                <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* Left content */}
                        <div>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.35)',
                                borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem',
                            }}>
                                <Heart size={13} color="#FCA5A5" fill="rgba(252,165,165,0.5)" />
                                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FCA5A5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Life at Nous</span>
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFFFFF',
                                letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem',
                            }}>
                                Where Engineers{' '}
                                <span style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    Don't Just Work —
                                </span>
                                <br />They{' '}
                                <span style={{ background: 'linear-gradient(135deg, #34D399 0%, #60A5FA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    Thrive.
                                </span>
                            </h1>

                            <p style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94A3B8',
                                lineHeight: 1.75, maxWidth: '520px', marginBottom: '2.5rem',
                            }}>
                                3,200+ engineers across 6 countries. 19 years of Great Place to Work® recognition. A culture built on trust, growth, and solving the world's hardest enterprise engineering challenges.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <a href="#careers" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    background: 'linear-gradient(135deg, #7C3AED, #1A56DB)',
                                    color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '10px',
                                    fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
                                    transition: 'all 0.2s', boxShadow: '0 8px 30px rgba(124,58,237,0.4)',
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(124,58,237,0.5)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.4)'; }}
                                >
                                    Explore Open Roles <ArrowRight size={16} />
                                </a>
                                <a href="#culture" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    background: 'rgba(255,255,255,0.08)', color: '#E2E8F0',
                                    padding: '1rem 2rem', borderRadius: '10px', fontWeight: 600,
                                    fontSize: '0.9375rem', textDecoration: 'none',
                                    border: '1.5px solid rgba(255,255,255,0.2)', transition: 'all 0.2s',
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                                >
                                    Our Culture <ChevronDown size={15} />
                                </a>
                            </div>
                        </div>

                        {/* Right — Impact stat grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {impactNumbers.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <div key={s.label} style={{
                                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '16px', padding: '1.75rem', textAlign: 'center',
                                        backdropFilter: 'blur(10px)', transition: 'all 0.3s',
                                        animation: `fadeInUp 0.6s ease ${i * 0.1 + 0.3}s both`,
                                    }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(124,58,237,0.15)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.4)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                                    >
                                        <Icon size={22} color="#A78BFA" style={{ marginBottom: '0.75rem' }} />
                                        <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                                        <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '6px', lineHeight: 1.3 }}>{s.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CULTURE VALUES ─── */}
            <section id="culture" style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container-nous">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26,86,219,0.08)', border: '1px solid rgba(26,86,219,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1rem' }}>
                            <Star size={12} color="#1A56DB" fill="#1A56DB" />
                            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1A56DB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Culture</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0A1628', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
                            Six Values. One Culture.
                        </h2>
                        <p style={{ fontSize: '1.0625rem', color: '#64748B', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                            These aren't corporate posters — they're the principles that guide every decision, every promotion, every product we build.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                        {cultureValues.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div
                                    key={v.title}
                                    style={{
                                        background: 'white', border: '1.5px solid #E2E8F0',
                                        borderRadius: '16px', padding: '2rem',
                                        transition: 'all 0.3s ease', cursor: 'default',
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = v.color + '60';
                                        el.style.boxShadow = `0 20px 60px ${v.color}12, 0 4px 20px rgba(0,0,0,0.06)`;
                                        el.style.transform = 'translateY(-5px)';
                                        el.style.background = v.bg;
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = '#E2E8F0';
                                        el.style.boxShadow = 'none';
                                        el.style.transform = 'translateY(0)';
                                        el.style.background = 'white';
                                    }}
                                >
                                    <div style={{
                                        width: '52px', height: '52px', borderRadius: '14px',
                                        background: v.bg, border: `1.5px solid ${v.color}25`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '1.25rem', transition: 'transform 0.3s',
                                    }}>
                                        <Icon size={24} color={v.color} />
                                    </div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A1628', marginBottom: '0.625rem' }}>{v.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.75 }}>{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #050E1E 0%, #0C1F45 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1rem' }}>
                            <Users size={12} color="#A78BFA" />
                            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#A78BFA', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Voices from Nous</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.025em' }}>
                            Real Stories from Real Engineers
                        </h2>
                    </div>

                    {/* Active testimonial */}
                    <div style={{ maxWidth: '760px', margin: '0 auto 3rem', textAlign: 'center' }}>
                        <div style={{
                            fontSize: '4rem', marginBottom: '1.25rem',
                            filter: 'drop-shadow(0 0 20px rgba(167,139,250,0.4))',
                            display: 'inline-block', transition: 'all 0.4s ease',
                        }}>
                            {t.avatar}
                        </div>

                        <blockquote style={{
                            fontSize: 'clamp(1.0625rem, 2vw, 1.3125rem)',
                            fontStyle: 'italic', color: '#E2E8F0', lineHeight: 1.75,
                            marginBottom: '1.75rem', fontWeight: 400,
                        }}>
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>

                        <div style={{ display: 'inline-block' }}>
                            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFFFFF' }}>{t.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '2px' }}>{t.role} · {t.location} · {t.tenure}</div>
                        </div>
                    </div>

                    {/* Testimonial dots */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '3rem' }}>
                        {teamTestimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                style={{
                                    width: i === activeTestimonial ? '28px' : '10px',
                                    height: '10px', borderRadius: '5px',
                                    background: i === activeTestimonial ? '#A78BFA' : 'rgba(255,255,255,0.25)',
                                    border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>

                    {/* All testimonials mini-cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
                        {teamTestimonials.map((t2, i) => (
                            <div
                                key={t2.name}
                                onClick={() => setActiveTestimonial(i)}
                                style={{
                                    background: activeTestimonial === i ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)',
                                    border: `1.5px solid ${activeTestimonial === i ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.08)'}`,
                                    borderRadius: '14px', padding: '1.375rem', cursor: 'pointer',
                                    transition: 'all 0.3s', backdropFilter: 'blur(10px)',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(124,58,237,0.12)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = activeTestimonial === i ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)'; }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.875rem' }}>
                                    <div style={{ fontSize: '1.875rem' }}>{t2.avatar}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF' }}>{t2.name}</div>
                                        <div style={{ fontSize: '0.775rem', color: '#94A3B8' }}>{t2.role}</div>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'inline-block', background: 'rgba(167,139,250,0.15)',
                                    color: '#C4B5FD', fontSize: '0.7rem', fontWeight: 600,
                                    padding: '3px 8px', borderRadius: '100px', border: '1px solid rgba(167,139,250,0.25)',
                                }}>
                                    📍 {t2.location} · {t2.tenure}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PERKS ─── */}
            <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
                <div className="container-nous">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1rem' }}>
                            <Heart size={12} color="#059669" fill="rgba(5,150,105,0.3)" />
                            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#059669', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Benefits & Perks</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0A1628', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
                            Everything You Need to Do Your Best Work
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.125rem' }}>
                        {lifePerks.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.label} style={{
                                    background: 'white', border: '1.5px solid #E2E8F0',
                                    borderRadius: '14px', padding: '1.5rem',
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    transition: 'all 0.25s ease',
                                }}
                                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#1A56DB40'; el.style.boxShadow = '0 12px 40px rgba(26,86,219,0.08)'; el.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; }}
                                >
                                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(26,86,219,0.08)', border: '1px solid rgba(26,86,219,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={20} color="#1A56DB" />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0A1628', marginBottom: '2px' }}>{p.label}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{p.sub}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── OFFICES ─── */}
            <section ref={sectionRef} style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container-nous">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26,86,219,0.08)', border: '1px solid rgba(26,86,219,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1rem' }}>
                            <Globe size={12} color="#1A56DB" />
                            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1A56DB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Offices</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0A1628', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
                            A Global Presence with a Local Heart
                        </h2>
                        <p style={{ fontSize: '1.0625rem', color: '#64748B', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                            Wherever you are in the world, there&apos;s a Nous team nearby — building the same great products, solving the same hard problems.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                        {offices.map((o, i) => (
                            <div
                                key={o.city}
                                style={{
                                    background: `linear-gradient(135deg, ${o.color}08, ${o.color}03)`,
                                    border: `1.5px solid ${o.color}25`,
                                    borderRadius: '18px', padding: '2rem',
                                    transition: 'all 0.3s ease',
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                                    transitionDelay: `${i * 0.1}s`,
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLDivElement;
                                    el.style.borderColor = o.color + '55';
                                    el.style.boxShadow = `0 20px 60px ${o.color}14`;
                                    el.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLDivElement;
                                    el.style.borderColor = o.color + '25';
                                    el.style.boxShadow = 'none';
                                    el.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{o.emoji}</div>
                                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#0A1628', marginBottom: '2px' }}>{o.city}</div>
                                <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginBottom: '1rem' }}>{o.country}</div>
                                <div style={{ height: '2px', background: `linear-gradient(90deg, ${o.color}, ${o.color}40)`, borderRadius: '2px', marginBottom: '1rem', width: '40px' }} />
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>{o.role}</div>
                                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.75rem' }}>{o.team}</div>
                                <span style={{
                                    display: 'inline-block', background: `${o.color}12`, color: o.color,
                                    fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px',
                                    borderRadius: '100px', border: `1px solid ${o.color}25`,
                                    letterSpacing: '0.04em',
                                }}>
                                    {o.highlight}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── JOIN CTA ─── */}
            <section style={{
                padding: '6rem 0',
                background: 'linear-gradient(135deg, #1A56DB 0%, #7C3AED 100%)',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div className="container-nous" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🚀</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                        Ready to Build the Future?
                    </h2>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2.5rem' }}>
                        Join 3,200+ engineers who are solving the world's most complex enterprise challenges. 40+ open roles and growing.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#careers" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'white', color: '#1A56DB',
                            padding: '1rem 2.25rem', borderRadius: '10px',
                            fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                            transition: 'all 0.2s', boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,0,0,0.3)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'; }}
                        >
                            View Open Roles <ArrowRight size={16} />
                        </a>
                        <Link href="/" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(255,255,255,0.15)', color: '#FFFFFF',
                            padding: '1rem 2.25rem', borderRadius: '10px', fontWeight: 600,
                            fontSize: '1rem', textDecoration: 'none',
                            border: '1.5px solid rgba(255,255,255,0.3)', transition: 'all 0.2s',
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
