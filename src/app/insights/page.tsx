'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Lightbulb, BookOpen, Rss, TrendingUp, Globe, Cpu, Cloud, Database, BarChart3, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const categories = ['All', 'AI & Automation', 'Cloud', 'Data & Analytics', 'Engineering', 'Industry Trends', 'Company News'];

const insights = [
    {
        category: 'AI & Automation',
        title: 'How Agentic AI is Reshaping Enterprise Workflows in 2025',
        desc: 'Beyond chatbots — autonomous AI agents are now orchestrating end-to-end business processes. We explore the architecture, risks, and enterprise readiness framework.',
        date: 'Feb 18, 2025',
        readTime: '8 min read',
        author: 'Nous Research Team',
        image: '🤖',
        color: '#7C3AED',
        bg: 'rgba(124,58,237,0.08)',
        featured: true,
    },
    {
        category: 'Cloud',
        title: 'Azure vs AWS vs GCP: The 2025 Enterprise Decision Guide',
        desc: 'After deploying workloads across all three hyperscalers for 50+ enterprise clients, we share our real-world performance, cost, and compliance matrix.',
        date: 'Feb 10, 2025',
        readTime: '12 min read',
        author: 'Cloud Practice Team',
        image: '☁️',
        color: '#1A56DB',
        bg: 'rgba(26,86,219,0.08)',
        featured: true,
    },
    {
        category: 'Data & Analytics',
        title: 'The Modern Data Stack in Banking: Snowflake + dbt + Databricks',
        desc: 'How Nous built a regulatory-compliant real-time analytics platform for a UK Tier-1 bank, processing 2M+ transactions daily.',
        date: 'Feb 3, 2025',
        readTime: '6 min read',
        author: 'Data Engineering Team',
        image: '📊',
        color: '#059669',
        bg: 'rgba(5,150,105,0.08)',
        featured: false,
    },
    {
        category: 'Engineering',
        title: 'Zero-Downtime Database Migrations at Scale: A Nous Playbook',
        desc: 'Our battle-tested 7-step framework for migrating production databases in regulated industries without a single minute of downtime.',
        date: 'Jan 27, 2025',
        readTime: '9 min read',
        author: 'Platform Engineering',
        image: '🔧',
        color: '#D97706',
        bg: 'rgba(217,119,6,0.08)',
        featured: false,
    },
    {
        category: 'Industry Trends',
        title: 'Digital Health in 2025: HL7 FHIR, AI Diagnostics & Interoperability',
        desc: 'The healthcare technology landscape is shifting fast. Here\'s what CIOs and CTOs in life sciences need to know about the platforms defining the next decade.',
        date: 'Jan 20, 2025',
        readTime: '7 min read',
        author: 'Healthcare Practice',
        image: '🏥',
        color: '#0891B2',
        bg: 'rgba(8,145,178,0.08)',
        featured: false,
    },
    {
        category: 'Company News',
        title: 'Nous Infosystems Recognized as Great Place to Work® for 19th Year',
        desc: 'We\'re proud to continue our unbroken streak as a certified Great Place to Work® — a testament to our people-first culture across all our global offices.',
        date: 'Jan 12, 2025',
        readTime: '3 min read',
        author: 'Nous Communications',
        image: '🏆',
        color: '#EF4444',
        bg: 'rgba(239,68,68,0.08)',
        featured: false,
    },
];

export default function InsightsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const filtered = insights.filter(i =>
        (activeCategory === 'All' || i.category === activeCategory) &&
        (searchTerm === '' || i.title.toLowerCase().includes(searchTerm.toLowerCase()) || i.desc.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const featured = filtered.filter(i => i.featured);
    const rest = filtered.filter(i => !i.featured);

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
                    <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

                    <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '1.25rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '100px', padding: '5px 14px' }}>
                                <Lightbulb size={13} color="#60A5FA" />
                                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Nous Insights</span>
                            </div>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.625rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '1.125rem' }}>
                            Engineering Intelligence,{' '}
                            <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Shared Openly</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 1.75vw, 1.1875rem)', color: '#94A3B8', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2.5rem' }}>
                            Perspectives, playbooks, and research from Nous engineers — on AI, cloud, data, and the future of enterprise technology.
                        </p>

                        {/* Search */}
                        <div style={{ position: 'relative', maxWidth: '420px' }}>
                            <Search size={16} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                            <input
                                type="text"
                                placeholder="Search insights..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem',
                                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '10px', color: '#FFFFFF', fontSize: '0.9375rem',
                                    outline: 'none', fontFamily: 'Inter, sans-serif',
                                    boxSizing: 'border-box',
                                }}
                                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                            />
                        </div>
                    </div>
                </section>

                {/* Category Filters */}
                <section style={{ background: 'white', borderBottom: '1px solid #F1F5F9', padding: '1.25rem 0', position: 'sticky', top: '72px', zIndex: 50 }}>
                    <div className="container-nous">
                        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '7px 16px', borderRadius: '100px',
                                        border: `1.5px solid ${activeCategory === cat ? '#1A56DB' : '#E2E8F0'}`,
                                        background: activeCategory === cat ? '#1A56DB' : 'white',
                                        color: activeCategory === cat ? 'white' : '#64748B',
                                        fontWeight: activeCategory === cat ? 700 : 500,
                                        fontSize: '0.8125rem', cursor: 'pointer',
                                        transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section ref={ref} style={{ padding: '4rem 0 6rem', background: '#F8FAFC' }}>
                    <div className="container-nous">
                        {/* Featured */}
                        {featured.length > 0 && (
                            <div style={{ marginBottom: '3.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                    <TrendingUp size={16} color="#1A56DB" />
                                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#1A56DB', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Featured</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '1.5rem' }}>
                                    {featured.map((post, i) => (
                                        <article key={post.title} style={{
                                            background: 'white', borderRadius: '18px',
                                            border: `1.5px solid ${post.color}25`,
                                            overflow: 'hidden', transition: 'all 0.3s ease',
                                            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
                                            transitionDelay: `${i * 0.1}s`,
                                        }}
                                            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = `0 24px 70px ${post.color}14`; el.style.borderColor = post.color + '44'; }}
                                            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; el.style.borderColor = post.color + '25'; }}
                                        >
                                            <div style={{ height: '200px', background: `linear-gradient(135deg, ${post.color}15, ${post.color}05)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', borderBottom: `1px solid ${post.color}15` }}>
                                                {post.image}
                                            </div>
                                            <div style={{ padding: '1.75rem' }}>
                                                <span style={{ display: 'inline-block', background: post.bg, color: post.color, fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '100px', marginBottom: '1rem', border: `1px solid ${post.color}22`, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{post.category}</span>
                                                <h2 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#0A1628', lineHeight: 1.35, marginBottom: '0.75rem' }}>{post.title}</h2>
                                                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.75, marginBottom: '1.25rem' }}>{post.desc}</p>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                                                    <div style={{ fontSize: '0.775rem', color: '#94A3B8' }}>{post.date} · {post.readTime}</div>
                                                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.875rem', fontWeight: 600, color: post.color, textDecoration: 'none', transition: 'gap 0.2s' }}
                                                        onMouseEnter={(e) => e.currentTarget.style.gap = '10px'}
                                                        onMouseLeave={(e) => e.currentTarget.style.gap = '5px'}
                                                    >
                                                        Read More <ArrowRight size={14} />
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rest */}
                        {rest.length > 0 && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.25rem' }}>
                                {rest.map((post, i) => (
                                    <article key={post.title} style={{
                                        background: 'white', borderRadius: '16px',
                                        border: '1.5px solid #E2E8F0', overflow: 'hidden',
                                        transition: 'all 0.3s ease', padding: '1.5rem',
                                        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
                                        transitionDelay: `${i * 0.07}s`,
                                    }}
                                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = `0 16px 50px ${post.color}10`; el.style.borderColor = post.color + '35'; }}
                                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; el.style.borderColor = '#E2E8F0'; }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                            <div style={{ fontSize: '2.25rem' }}>{post.image}</div>
                                            <span style={{ display: 'inline-block', background: post.bg, color: post.color, fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px', border: `1px solid ${post.color}22`, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{post.category}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A1628', lineHeight: 1.35, marginBottom: '0.625rem' }}>{post.title}</h3>
                                        <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.7, marginBottom: '1.125rem' }}>{post.desc}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{post.date} · {post.readTime}</span>
                                            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.825rem', fontWeight: 600, color: post.color, textDecoration: 'none' }}>Read <ChevronRight size={13} /></a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}

                        {filtered.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#94A3B8' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                                <div style={{ fontWeight: 600, fontSize: '1.125rem', color: '#475569' }}>No results found</div>
                                <div style={{ marginTop: '0.5rem' }}>Try adjusting your search or changing the category filter.</div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
