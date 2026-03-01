'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Cpu, Cloud, Database, BarChart3, Building2, Heart, ShoppingBag, Plane, Layers, Shield, FileText, BookOpen, Users, Globe, Briefcase, Leaf, Phone, Lightbulb, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

const navItems = [
    {
        label: 'Services',
        id: 'services',
        color: '#1A56DB',
        children: [
            { label: 'Digital Product Engineering', desc: 'End-to-end product development for enterprises', href: '/services/digital-product-engineering', icon: Cpu },
            { label: 'Digital Application Services', desc: 'Modernization & custom application development', href: '/services/digital-application-services', icon: Layers },
            { label: 'Quality Engineering', desc: 'Comprehensive QA & test automation (Testree)', href: '/services/quality-engineering', icon: CheckCircle },
            { label: 'Infrastructure Management', desc: 'Cloud automation, managed services & monitoring', href: '/services/infrastructure-management', icon: Cloud },
        ],
    },
    {
        label: 'Competencies',
        id: 'competencies',
        color: '#7C3AED',
        children: [
            { label: 'AI & Automation', desc: 'Generative AI, Agentic AI & intelligent automation', href: '/competencies/ai-automation', icon: Cpu },
            { label: 'Cloud (Azure, AWS, GCP)', desc: 'Multi-cloud architecture & DevOps', href: '/competencies/cloud', icon: Cloud },
            { label: 'Data & Analytics', desc: 'Modern data platforms & advanced analytics', href: '/competencies/data-analytics', icon: Database },
            { label: 'Salesforce', desc: 'CRM, Sales Cloud & platform engineering', href: '/competencies/salesforce', icon: BarChart3 },
        ],
    },
    {
        label: 'Industries',
        id: 'industries',
        color: '#059669',
        children: [
            { label: 'Banking & Financial Services', desc: 'Compliance-driven digital banking solutions', href: '/industries/banking', icon: Building2 },
            { label: 'Insurance', desc: 'Core system transformation & analytics', href: '/industries/insurance', icon: Shield },
            { label: 'Healthcare & Life Sciences', desc: 'Digital health & regulatory compliance', href: '/industries/healthcare', icon: Heart },
            { label: 'Retail', desc: 'Supply chain & customer experience', href: '/industries/retail', icon: ShoppingBag },
            { label: 'Travel & Logistics', desc: 'End-to-end logistics platform engineering', href: '/industries/travel-logistics', icon: Plane },
        ],
    },
    {
        label: 'Proof',
        id: 'proof',
        color: '#D97706',
        children: [
            { label: 'Case Studies', desc: 'Real-world delivery outcomes across industries', href: '/proof/case-studies', icon: FileText },
            { label: 'Certifications & Compliance', desc: 'CMMI L5, ISO 27001, SOC2 Type II', href: '/proof/certifications', icon: Star },
        ],
    },
    {
        label: 'Insights',
        id: 'insights',
        color: '#0891B2',
        href: '/insights',
        children: [],
    },
    {
        label: 'Company',
        id: 'company',
        color: '#DC2626',
        children: [
            { label: 'About Nous', desc: '29 years of engineering excellence & our mission', href: '/company/about', icon: BookOpen },
            { label: 'Partnerships', desc: 'Strategic technology alliances & ecosystem', href: '/company/partnerships', icon: Globe },
            { label: 'Life at Nous', desc: 'Culture, people & what makes us different', href: '/life-at-nous', icon: Users },
            { label: 'CSR Initiatives', desc: 'Our commitment to community & sustainability', href: '/company/csr', icon: Leaf },
            { label: 'Careers', desc: '40+ open roles across technology & business', href: '#careers', icon: Briefcase },
            { label: 'Contact Us', desc: 'Get in touch with our global team', href: '#contact', icon: Phone },
        ],
    },
];

function NousLogo({ scrolled }: { scrolled: boolean }) {
    return (
        <svg width="130" height="44" viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="28" fontFamily="'Inter', Arial, sans-serif" fontWeight="900" fontSize="26" letterSpacing="1" fill={scrolled ? '#1A3A6E' : '#FFFFFF'}>NOUS</text>
            <text x="103" y="14" fontFamily="Arial" fontSize="9" fill={scrolled ? '#1A3A6E' : '#FFFFFF'}>®</text>
            <rect x="0" y="32" width="115" height="2" fill="#CC0000" />
            <text x="0" y="43" fontFamily="'Inter', Arial, sans-serif" fontWeight="500" fontSize="9.5" letterSpacing="3.2" fill={scrolled ? '#1A3A6E' : 'rgba(255,255,255,0.75)'}>INFOSYSTEMS</text>
        </svg>
    );
}

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const navTextColor = scrolled ? '#1A2A4A' : '#FFFFFF';
    const navHoverBg = scrolled ? 'rgba(26,86,219,0.08)' : 'rgba(255,255,255,0.12)';
    const navActiveBg = scrolled ? 'rgba(26,86,219,0.1)' : 'rgba(255,255,255,0.18)';
    const navActiveColor = scrolled ? '#1A56DB' : '#FFFFFF';

    return (
        <nav
            ref={menuRef}
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(5,14,30,0.88)',
                backdropFilter: 'blur(20px)',
                borderBottom: scrolled ? '1px solid rgba(226,232,240,0.9)' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 4px 30px rgba(0,0,0,0.3)',
            }}
        >
            <div className="container-nous">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <NousLogo scrolled={scrolled} />
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden lg:flex">
                        {navItems.map((item) => (
                            <div key={item.label} style={{ position: 'relative' }}>
                                {item.children.length === 0 ? (
                                    // Simple link (Insights)
                                    <Link
                                        href={item.href || '#'}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '4px',
                                            padding: '8px 14px', borderRadius: '6px',
                                            color: navTextColor, fontWeight: 500,
                                            fontSize: '0.9375rem', cursor: 'pointer',
                                            transition: 'all 0.15s', fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '-0.01em', textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = navHoverBg; e.currentTarget.style.color = scrolled ? '#1A56DB' : '#FFFFFF'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = navTextColor; }}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '4px',
                                            padding: '8px 14px', borderRadius: '6px',
                                            border: 'none',
                                            background: activeMenu === item.label ? navActiveBg : 'transparent',
                                            color: activeMenu === item.label ? navActiveColor : navTextColor,
                                            fontWeight: 500, fontSize: '0.9375rem', cursor: 'pointer',
                                            transition: 'all 0.15s', fontFamily: 'Inter, sans-serif',
                                            letterSpacing: '-0.01em',
                                        }}
                                        onMouseEnter={(e) => { if (activeMenu !== item.label) e.currentTarget.style.background = navHoverBg; }}
                                        onMouseLeave={(e) => { if (activeMenu !== item.label) e.currentTarget.style.background = 'transparent'; }}
                                    >
                                        {item.label}
                                        <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeMenu === item.label ? 'rotate(180deg)' : 'none', opacity: 0.75 }} />
                                    </button>
                                )}

                                {/* Mega Dropdown */}
                                {item.children.length > 0 && activeMenu === item.label && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 8px)',
                                            left: item.label === 'Company' ? 'auto' : '50%',
                                            right: item.label === 'Company' ? '0' : 'auto',
                                            transform: item.label === 'Company' ? 'none' : 'translateX(-50%)',
                                            minWidth: item.children.length >= 5 ? '480px' : '360px',
                                            background: 'white',
                                            borderRadius: '16px',
                                            border: '1px solid #E2E8F0',
                                            boxShadow: '0 24px 80px rgba(0,0,0,0.16), 0 4px 20px rgba(0,0,0,0.06)',
                                            padding: '0.625rem',
                                            animation: 'dropdownFadeIn 0.18s ease',
                                            zIndex: 100,
                                        }}
                                    >
                                        {/* Color accent top bar */}
                                        <div style={{ height: '3px', background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`, borderRadius: '3px 3px 0 0', margin: '-0.625rem -0.625rem 0.625rem', }} />

                                        {/* Items grid — 2-col for 4+ children */}
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: item.children.length >= 4 ? '1fr 1fr' : '1fr',
                                            gap: '2px',
                                        }}>
                                            {item.children.map((child) => {
                                                const Icon = child.icon;
                                                const isHash = child.href.startsWith('#');
                                                const commonStyle = {
                                                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                                                    padding: '0.75rem 0.875rem', borderRadius: '10px',
                                                    textDecoration: 'none', transition: 'all 0.15s', cursor: 'pointer',
                                                };
                                                const content = (
                                                    <>
                                                        <div style={{
                                                            width: '34px', height: '34px', borderRadius: '8px',
                                                            background: `${item.color}12`, border: `1px solid ${item.color}20`,
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                                        }}>
                                                            <Icon size={16} color={item.color} />
                                                        </div>
                                                        <div>
                                                            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#0A1628', marginBottom: '2px', lineHeight: 1.3 }}>
                                                                {child.label}
                                                            </div>
                                                            <div style={{ fontSize: '0.775rem', color: '#64748B', lineHeight: 1.4 }}>{child.desc}</div>
                                                        </div>
                                                    </>
                                                );
                                                return isHash ? (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        style={{ ...commonStyle } as React.CSSProperties}
                                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${item.color}08`; }}
                                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                                                        onClick={() => setActiveMenu(null)}
                                                    >{content}</a>
                                                ) : (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        style={{ ...commonStyle } as React.CSSProperties}
                                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${item.color}08`; }}
                                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                                                        onClick={() => setActiveMenu(null)}
                                                    >{content}</Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="hidden lg:flex">
                        <a
                            href="#careers"
                            style={{
                                fontSize: '0.875rem', fontWeight: 600,
                                color: scrolled ? '#1A2A4A' : '#FFFFFF',
                                textDecoration: 'none', transition: 'all 0.2s',
                                padding: '6px 14px', borderRadius: '6px',
                                border: scrolled ? '1.5px solid #E2E8F0' : '1.5px solid rgba(255,255,255,0.28)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = scrolled ? 'rgba(26,86,219,0.08)' : 'rgba(255,255,255,0.15)';
                                e.currentTarget.style.borderColor = scrolled ? '#1A56DB' : 'rgba(255,255,255,0.55)';
                                e.currentTarget.style.color = scrolled ? '#1A56DB' : '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = scrolled ? '#E2E8F0' : 'rgba(255,255,255,0.28)';
                                e.currentTarget.style.color = scrolled ? '#1A2A4A' : '#FFFFFF';
                            }}
                        >
                            Careers
                        </a>
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: '#1A56DB', color: 'white',
                                padding: '0.625rem 1.25rem', borderRadius: '7px',
                                fontWeight: 600, fontSize: '0.875rem',
                                textDecoration: 'none', transition: 'all 0.2s',
                                boxShadow: '0 2px 12px rgba(26,86,219,0.35)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1648C4';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,86,219,0.5)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#1A56DB';
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,86,219,0.35)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Talk to Our Experts
                            <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? '#0A1628' : 'white', display: 'flex', alignItems: 'center', padding: '4px' }}
                        className="lg:hidden"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{ background: 'white', borderTop: '1px solid #E2E8F0', padding: '0.75rem 0 1.5rem', maxHeight: '85vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                    <div className="container-nous">
                        {navItems.map((item) => (
                            <div key={item.label} style={{ marginBottom: '0.125rem' }}>
                                {item.children.length === 0 ? (
                                    <Link
                                        href={item.href || '#'}
                                        style={{ display: 'block', padding: '0.75rem 0', fontWeight: 700, fontSize: '0.9375rem', color: '#0A1628', textDecoration: 'none', borderBottom: '1px solid #F1F5F9' }}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', fontWeight: 700, fontSize: '0.9375rem', color: '#0A1628', background: 'none', border: 'none', borderBottom: '1px solid #F1F5F9', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                                        >
                                            {item.label}
                                            <ChevronDown size={16} style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: item.color }} />
                                        </button>
                                        {mobileExpanded === item.label && (
                                            <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.5rem' }}>
                                                {item.children.map((child) => {
                                                    const Icon = child.icon;
                                                    const isHash = child.href.startsWith('#');
                                                    const content = (
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0' }}>
                                                            <Icon size={14} color={item.color} />
                                                            <span style={{ fontSize: '0.875rem', color: '#475569' }}>{child.label}</span>
                                                        </div>
                                                    );
                                                    return isHash ? (
                                                        <a key={child.label} href={child.href} style={{ display: 'block', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>{content}</a>
                                                    ) : (
                                                        <Link key={child.label} href={child.href} style={{ display: 'block', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>{content}</Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#careers" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1.5px solid #E2E8F0', color: '#1A2A4A', padding: '0.875rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }} onClick={() => setMobileOpen(false)}>Careers</a>
                            <a href="#contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#1A56DB', color: 'white', padding: '0.875rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }} onClick={() => setMobileOpen(false)}>
                                Talk to Our Experts <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes dropdownFadeIn {
                    from { opacity: 0; transform: translateY(-8px) translateX(-50%); }
                    to { opacity: 1; transform: translateY(0) translateX(-50%); }
                }
            ` }} />
        </nav>
    );
}
