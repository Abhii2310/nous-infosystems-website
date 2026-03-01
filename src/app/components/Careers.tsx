'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, MapPin, Clock, Zap, Heart, Globe, Code2, Users, TrendingUp, Coffee, Star, ChevronRight, Mail } from 'lucide-react';

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target: number, inView: boolean, duration = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
        };
        requestAnimationFrame(step);
    }, [inView, target, duration]);
    return count;
}

// ── 3D Tilt card hook ─────────────────────────────────────────────────────
function useTilt(ref: React.RefObject<HTMLDivElement | null>) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
            el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.02)`;
        };
        const handleLeave = () => {
            el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
        };
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);
        return () => { el.removeEventListener('mousemove', handleMove); el.removeEventListener('mouseleave', handleLeave); };
    }, [ref]);
}

// ── Data ──────────────────────────────────────────────────────────────────
const openRoles = [
    { title: 'Senior Full Stack Engineer', team: 'Digital Engineering', location: 'Hyderabad / Bengaluru / Remote', type: 'Full-time', tags: ['React', 'Node.js', 'AWS'], hot: true },
    { title: 'AI/ML Engineer – LLM Platforms', team: 'AI & Automation', location: 'Bengaluru / Hybrid', type: 'Full-time', tags: ['Python', 'LangChain', 'Azure OpenAI'], hot: true },
    { title: 'Cloud Architect (Azure)', team: 'Cloud Practice', location: 'London / Remote', type: 'Full-time', tags: ['Azure', 'Terraform', 'DevOps'], hot: false },
    { title: 'QA Automation Lead (Testree)', team: 'Quality Engineering', location: 'Hyderabad / Bengaluru', type: 'Full-time', tags: ['Selenium', 'Cypress', 'CI/CD'], hot: false },
    { title: 'Data Engineer – Snowflake', team: 'Data & Analytics', location: 'Belgrade / Remote', type: 'Full-time', tags: ['Snowflake', 'dbt', 'Spark'], hot: true },
    { title: 'Product Manager – Fintech', team: 'Banking & FS', location: 'New York / Hybrid', type: 'Full-time', tags: ['Fintech', 'Agile', 'BFSI'], hot: false },
];

const perks = [
    { icon: Globe, title: 'Work From Anywhere', desc: 'Hybrid & fully remote options across 6 countries', color: '#1A56DB' },
    { icon: TrendingUp, title: 'Fast Career Growth', desc: 'Clear progression paths with mentorship from industry leaders', color: '#7C3AED' },
    { icon: Heart, title: 'Health & Wellbeing', desc: 'Comprehensive health coverage + mental wellness programs', color: '#DC2626' },
    { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Work with AI, cloud & modern enterprise stacks daily', color: '#D97706' },
    { icon: Coffee, title: 'Great Culture', desc: '19 years as a Great Place to Work® certified company', color: '#059669' },
    { icon: Star, title: 'Recognition & Rewards', desc: 'Competitive salaries + performance bonuses + ESOPs', color: '#EA580C' },
];

const cultureStats = [
    { number: 3200, suffix: '+', label: 'Innovative Minds', icon: Users },
    { number: 92, suffix: '%', label: 'Employee Satisfaction', icon: Heart },
    { number: 29, suffix: '+', label: 'Years of Culture', icon: Star },
    { number: 6, suffix: '', label: 'Global Offices', icon: Globe },
];

// ── Individual job card with tilt ────────────────────────────────────────
function JobCard({ role, index, inView }: { role: typeof openRoles[0]; index: number; inView: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    useTilt(ref);

    return (
        <div
            ref={ref}
            style={{
                background: 'white',
                border: '1.5px solid #E2E8F0',
                borderRadius: '16px',
                padding: '1.75rem',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
                opacity: inView ? 1 : 0,
                transitionDelay: `${index * 0.08}s`,
                transitionProperty: 'opacity, transform, border-color, box-shadow',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                willChange: 'transform',
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = '#1A56DB';
                el.style.boxShadow = '0 20px 60px rgba(26,86,219,0.12), 0 4px 16px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = '#E2E8F0';
                el.style.boxShadow = 'none';
            }}
        >
            {/* HOT badge */}
            {role.hot && (
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'linear-gradient(135deg, #FF6B35, #FF3CAC)',
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                }}>
                    🔥 Urgent
                </div>
            )}

            {/* Shimmer top line */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #1A56DB, #7C3AED, #3B82F6)',
                opacity: 0,
                transition: 'opacity 0.3s',
            }} className="job-card-line" />

            <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>{role.team}</span>
            </div>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A1628', marginBottom: '1rem', lineHeight: 1.3, paddingRight: role.hot ? '80px' : '0' }}>
                {role.title}
            </h3>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: '#64748B' }}>
                    <MapPin size={13} /> {role.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: '#64748B' }}>
                    <Clock size={13} /> {role.type}
                </span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {role.tags.map(tag => (
                    <span key={tag} style={{
                        background: '#EFF6FF',
                        color: '#1A56DB',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        border: '1px solid #BFDBFE',
                    }}>{tag}</span>
                ))}
            </div>

            <a
                href="https://www.nousinfosystems.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#1A56DB',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'gap 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                onMouseLeave={(e) => e.currentTarget.style.gap = '6px'}
            >
                Apply Now <ArrowRight size={14} />
            </a>
        </div>
    );
}

// ── Perk card ─────────────────────────────────────────────────────────────
function PerkCard({ perk, index, inView }: { perk: typeof perks[0]; index: number; inView: boolean }) {
    const [hovered, setHovered] = useState(false);
    const Icon = perk.icon;
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                padding: '2rem 1.75rem',
                borderRadius: '16px',
                border: `1.5px solid ${hovered ? perk.color + '44' : '#F1F5F9'}`,
                background: hovered ? `linear-gradient(135deg, ${perk.color}08, ${perk.color}04)` : 'white',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                transform: inView ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(24px)',
                opacity: inView ? 1 : 0,
                transitionDelay: `${index * 0.07}s`,
                boxShadow: hovered ? `0 20px 50px ${perk.color}14` : 'none',
            }}
        >
            <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `linear-gradient(135deg, ${perk.color}18, ${perk.color}10)`,
                border: `1.5px solid ${perk.color}22`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                transition: 'transform 0.3s',
                transform: hovered ? 'scale(1.12) rotate(-4deg)' : 'scale(1)',
            }}>
                <Icon size={24} color={perk.color} />
            </div>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', color: '#0A1628', marginBottom: '0.5rem' }}>{perk.title}</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65 }}>{perk.desc}</p>
        </div>
    );
}

// ── Main Careers Component ────────────────────────────────────────────────
export default function Careers() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const jobsRef = useRef<HTMLDivElement>(null);
    const perksRef = useRef<HTMLDivElement>(null);

    const [heroInView, setHeroInView] = useState(false);
    const [statsInView, setStatsInView] = useState(false);
    const [jobsInView, setJobsInView] = useState(false);
    const [perksInView, setPerksInView] = useState(false);

    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Engineering', 'AI & Cloud', 'Data', 'Management'];

    useEffect(() => {
        const makeObserver = (setter: (v: boolean) => void) =>
            new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.1 });

        const o1 = makeObserver(setHeroInView); if (sectionRef.current) o1.observe(sectionRef.current);
        const o2 = makeObserver(setStatsInView); if (statsRef.current) o2.observe(statsRef.current);
        const o3 = makeObserver(setJobsInView); if (jobsRef.current) o3.observe(jobsRef.current);
        const o4 = makeObserver(setPerksInView); if (perksRef.current) o4.observe(perksRef.current);
        return () => { o1.disconnect(); o2.disconnect(); o3.disconnect(); o4.disconnect(); };
    }, []);

    const c0 = useCounter(cultureStats[0].number, statsInView);
    const c1 = useCounter(cultureStats[1].number, statsInView);
    const c2 = useCounter(cultureStats[2].number, statsInView);
    const c3 = useCounter(cultureStats[3].number, statsInView);
    const counters = [c0, c1, c2, c3];

    const filteredRoles = activeFilter === 'All' ? openRoles : openRoles.filter(r =>
        r.team.toLowerCase().includes(activeFilter.toLowerCase()) ||
        r.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
    );

    return (
        <section id="careers" style={{ background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>

            {/* ── Careers Hero Banner ── */}
            <div
                ref={sectionRef}
                style={{
                    background: 'linear-gradient(135deg, #050E1E 0%, #0A1628 40%, #0F2D5E 70%, #1A3A7A 100%)',
                    padding: '7rem 0 6rem',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Animated mesh gradient orbs */}
                {[
                    { top: '-20%', left: '-10%', size: '600px', color: 'rgba(26,86,219,0.2)', delay: '0s' },
                    { top: '30%', right: '-15%', size: '500px', color: 'rgba(124,58,237,0.15)', delay: '3s' },
                    { bottom: '-20%', left: '30%', size: '400px', color: 'rgba(59,130,246,0.15)', delay: '6s' },
                ].map((orb, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        top: orb.top,
                        left: orb.left,
                        right: (orb as any).right,
                        bottom: (orb as any).bottom,
                        width: orb.size,
                        height: orb.size,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
                        filter: 'blur(60px)',
                        animation: `floatOrb 12s ease-in-out infinite`,
                        animationDelay: orb.delay,
                        pointerEvents: 'none',
                    }} />
                ))}

                {/* Particle dots grid */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none',
                }} />

                <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        {/* Left: Copy */}
                        <div>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)',
                                borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem',
                                opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s ease',
                            }}>
                                <div style={{ width: '6px', height: '6px', background: '#A78BFA', borderRadius: '50%' }} />
                                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C4B5FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                    We're Hiring — 40+ Open Roles
                                </span>
                            </div>

                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                                fontWeight: 900,
                                color: '#FFFFFF',
                                lineHeight: 1.06,
                                letterSpacing: '-0.035em',
                                marginBottom: '1.25rem',
                                opacity: heroInView ? 1 : 0,
                                transform: heroInView ? 'translateY(0)' : 'translateY(24px)',
                                transition: 'all 0.7s ease 0.1s',
                            }}>
                                Build the Future.<br />
                                <span style={{
                                    background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #34D399 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Built in India
                                </span><br />
                                to the World.
                            </h2>

                            <p style={{
                                fontSize: '1.125rem',
                                color: '#94A3B8',
                                lineHeight: 1.75,
                                maxWidth: '500px',
                                marginBottom: '2.5rem',
                                opacity: heroInView ? 1 : 0,
                                transform: heroInView ? 'translateY(0)' : 'translateY(24px)',
                                transition: 'all 0.7s ease 0.2s',
                            }}>
                                Join <strong style={{ color: '#E2E8F0' }}>3,200+ engineers</strong> solving the most complex enterprise challenges across banking, healthcare, and beyond. Engineering excellence is our culture, not just a promise.
                            </p>

                            <div style={{
                                display: 'flex', gap: '1rem', flexWrap: 'wrap',
                                opacity: heroInView ? 1 : 0,
                                transform: heroInView ? 'translateY(0)' : 'translateY(24px)',
                                transition: 'all 0.7s ease 0.3s',
                            }}>
                                <a
                                    href="https://www.nousinfosystems.com/careers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        background: 'linear-gradient(135deg, #7C3AED, #1A56DB)',
                                        color: 'white', padding: '0.9375rem 2rem',
                                        borderRadius: '10px', fontWeight: 700, fontSize: '0.9375rem',
                                        textDecoration: 'none', transition: 'all 0.25s',
                                        boxShadow: '0 8px 30px rgba(124,58,237,0.4)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 16px 50px rgba(124,58,237,0.55)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.4)';
                                    }}
                                >
                                    <Code2 size={18} />
                                    Explore Open Roles
                                </a>
                                <a
                                    href="https://www.nousinfosystems.com/careers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        background: 'rgba(255,255,255,0.08)', color: '#E2E8F0',
                                        padding: '0.9375rem 2rem', borderRadius: '10px', fontWeight: 600,
                                        fontSize: '0.9375rem', textDecoration: 'none',
                                        border: '1.5px solid rgba(255,255,255,0.18)', transition: 'all 0.25s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                                    }}
                                >
                                    Life at Nous →
                                </a>
                            </div>
                        </div>

                        {/* Right: Floating culture cards */}
                        <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {[
                                { title: 'CMMI Level 5', sub: 'Process Excellence', icon: '🏆', color: '#F59E0B', top: '5%', left: '10%', delay: '0s' },
                                { title: 'Great Place to Work®', sub: '19 Years Running', icon: '❤️', color: '#EC4899', top: '5%', right: '5%', delay: '1.5s' },
                                { title: '40+ Open Roles', sub: 'Hiring Actively', icon: '🚀', color: '#7C3AED', bottom: '5%', left: '5%', delay: '3s' },
                                { title: '3,200+ Engineers', sub: 'Global Team', icon: '🌍', color: '#10B981', bottom: '5%', right: '5%', delay: '4.5s' },
                            ].map((card, i) => (
                                <div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        top: card.top,
                                        left: (card as any).left,
                                        right: (card as any).right,
                                        bottom: (card as any).bottom,
                                        background: 'rgba(255,255,255,0.06)',
                                        border: `1px solid ${card.color}30`,
                                        borderRadius: '16px',
                                        padding: '1.25rem 1.5rem',
                                        backdropFilter: 'blur(12px)',
                                        animation: `floatCard 6s ease-in-out infinite`,
                                        animationDelay: card.delay,
                                        minWidth: '170px',
                                    }}
                                >
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.375rem' }}>{card.icon}</div>
                                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.9rem' }}>{card.title}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{card.sub}</div>
                                </div>
                            ))}

                            {/* Central glowing orb */}
                            <div style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(26,86,219,0.2) 50%, transparent 70%)',
                                filter: 'blur(20px)',
                                animation: 'pulseGlow 4s ease-in-out infinite',
                            }} />
                            <div style={{
                                position: 'absolute',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7C3AED, #1A56DB)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 60px rgba(124,58,237,0.6)',
                                animation: 'spinSlow 20s linear infinite',
                            }}>
                                <span style={{ fontSize: '2rem' }}>⚡</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Culture Stats ── */}
            <div ref={statsRef} style={{ background: 'white', borderBottom: '1px solid #F1F5F9', padding: '3rem 0' }}>
                <div className="container-nous">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {cultureStats.map((stat, i) => {
                            const Icon = stat.icon;
                            const colors = ['#1A56DB', '#7C3AED', '#DC2626', '#059669'];
                            return (
                                <div key={stat.label} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '52px', height: '52px', borderRadius: '14px',
                                        background: colors[i] + '12', border: `1.5px solid ${colors[i]}22`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1rem',
                                    }}>
                                        <Icon size={24} color={colors[i]} />
                                    </div>
                                    <div style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                                        fontWeight: 900,
                                        letterSpacing: '-0.04em',
                                        color: colors[i],
                                        lineHeight: 1,
                                        marginBottom: '0.25rem',
                                    }}>
                                        {counters[i]}{stat.suffix}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Why Join Nous — Perks ── */}
            <div ref={perksRef} style={{ padding: '6rem 0', background: '#F8FAFC' }}>
                <div className="container-nous">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <p className="section-label">Why Nous</p>
                        <div className="divider" style={{ margin: '0.75rem auto 1.25rem' }} />
                        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#0A1628', letterSpacing: '-0.03em' }}>
                            Where Engineers
                            <span style={{
                                background: 'linear-gradient(135deg, #7C3AED, #1A56DB)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}> Thrive</span>
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#64748B', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
                            We invest in people as much as we invest in technology.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {perks.map((perk, i) => <PerkCard key={perk.title} perk={perk} index={i} inView={perksInView} />)}
                    </div>
                </div>
            </div>

            {/* ── Open Positions ── */}
            <div ref={jobsRef} style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container-nous">
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <div>
                            <p className="section-label">Open Positions</p>
                            <div className="divider" />
                            <h2 style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', fontWeight: 900, color: '#0A1628', letterSpacing: '-0.03em' }}>
                                Find Your Next Role
                            </h2>
                        </div>
                        <a
                            href="https://www.nousinfosystems.com/careers"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: 'linear-gradient(135deg, #7C3AED, #1A56DB)',
                                color: 'white', padding: '0.75rem 1.5rem',
                                borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem',
                                textDecoration: 'none', transition: 'all 0.2s',
                                boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.45)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.3)';
                            }}
                        >
                            See All 40+ Roles <ChevronRight size={16} />
                        </a>
                    </div>

                    {/* Filter Tabs */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '100px',
                                    border: `1.5px solid ${activeFilter === f ? '#1A56DB' : '#E2E8F0'}`,
                                    background: activeFilter === f ? '#1A56DB' : 'white',
                                    color: activeFilter === f ? 'white' : '#64748B',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Job Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
                        {(filteredRoles.length > 0 ? filteredRoles : openRoles).map((role, i) => (
                            <JobCard key={role.title} role={role} index={i} inView={jobsInView} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom CTA Banner ── */}
            <div style={{
                background: 'linear-gradient(135deg, #050E1E 0%, #0F2D5E 100%)',
                padding: '5rem 0',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(rgba(124,58,237,0.12) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    pointerEvents: 'none',
                }} />
                <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{
                            width: '68px', height: '68px', borderRadius: '18px',
                            background: 'linear-gradient(135deg, rgba(26,86,219,0.3), rgba(124,58,237,0.3))',
                            border: '1.5px solid rgba(96,165,250,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1rem',
                            boxShadow: '0 0 30px rgba(96,165,250,0.25)',
                        }}>
                            <Mail size={32} color="#60A5FA" />
                        </div>
                        <div style={{ fontSize: '2.25rem' }}>🚀</div>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                        Don't see the right fit?
                    </h3>
                    <p style={{ color: '#94A3B8', fontSize: '1.0625rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                        Send us your profile. We're always looking for exceptional talent to join our engineering teams.
                    </p>
                    <a
                        href="mailto:careers@nousinfosystems.com"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'white', color: '#0A1628',
                            padding: '1rem 2.25rem', borderRadius: '10px',
                            fontWeight: 800, fontSize: '0.9375rem',
                            textDecoration: 'none', transition: 'all 0.25s',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                        }}
                    >
                        Drop Us Your Resume <ArrowRight size={17} />
                    </a>
                </div>
            </div>

        </section>
    );
}
