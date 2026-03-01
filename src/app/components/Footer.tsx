'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Mail, Phone, Globe } from 'lucide-react';

const footerLinks = {
    Services: [
        { label: 'Digital Product Engineering', href: '#services' },
        { label: 'Digital Application Services', href: '#services' },
        { label: 'Quality Engineering', href: '#services' },
        { label: 'Infrastructure Management', href: '#services' },
    ],
    Competencies: [
        { label: 'AI & Automation', href: '#competencies' },
        { label: 'Cloud (Azure, AWS, GCP)', href: '#competencies' },
        { label: 'Data & Analytics', href: '#competencies' },
        { label: 'Salesforce', href: '#competencies' },
    ],
    Insights: [
        { label: 'AI & Engineering Blog', href: '/insights' },
        { label: 'Case Studies', href: '/proof/case-studies' },
        { label: 'Industry Reports', href: '/insights' },
        { label: 'Tech Deep Dives', href: '/insights' },
    ],
    Company: [
        { label: 'About Nous', href: '/company' },
        { label: 'Partnerships', href: '/company/partnerships' },
        { label: 'Life at Nous', href: '/life-at-nous' },
        { label: 'CSR Initiatives', href: '/company/csr' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact Us', href: '#contact' },
    ],
};

const offices = [
    { city: 'Hyderabad', country: 'India (HQ)', flag: '🇮🇳' },
    { city: 'Bengaluru', country: 'India', flag: '🇮🇳' },
    { city: 'New York', country: 'United States', flag: '🇺🇸' },
    { city: 'London', country: 'United Kingdom', flag: '🇬🇧' },
    { city: 'Frankfurt', country: 'Germany', flag: '🇩🇪' },
    { city: 'Toronto', country: 'Canada', flag: '🇨🇦' },
    { city: 'Belgrade', country: 'Serbia', flag: '🇷🇸' },
];

// Nous-style SVG logo for footer (white version)
function NousLogoWhite() {
    return (
        <svg width="120" height="42" viewBox="0 0 120 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="26" fontFamily="'Inter', Arial, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1" fill="#FFFFFF">NOUS</text>
            <text x="96" y="13" fontFamily="Arial" fontSize="8" fill="#FFFFFF">®</text>
            <rect x="0" y="30" width="108" height="2" fill="#CC2222" />
            <text x="0" y="41" fontFamily="'Inter', Arial, sans-serif" fontWeight="500" fontSize="9" letterSpacing="2.8" fill="#94A3B8">INFOSYSTEMS</text>
        </svg>
    );
}

export default function Footer() {
    return (
        <footer style={{
            background: '#050E1E',
            color: '#CBD5E1',
            borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
            {/* Top Strip – Global Offices */}
            <div style={{
                background: '#0A1628',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                padding: '1.75rem 0',
            }}>
                <div className="container-nous">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '0.625rem' }}>
                                Global Delivery Presence
                            </p>
                            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                                {offices.map((o) => (
                                    <span key={o.city} style={{ fontSize: '0.875rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <span>{o.flag}</span>
                                        <span style={{ fontWeight: 500, color: '#CBD5E1' }}>{o.city}</span>
                                        <span style={{ color: '#475569', fontSize: '0.8rem' }}>· {o.country}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="mailto:info@nousinfosystems.com" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: '#94A3B8',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                            >
                                <Mail size={15} />
                                info@nousinfosystems.com
                            </a>
                            <a href="https://www.nousinfosystems.com" target="_blank" rel="noopener noreferrer" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: '#94A3B8',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                            >
                                <Globe size={15} />
                                nousinfosystems.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div style={{ padding: '4rem 0 3rem' }}>
                <div className="container-nous">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: '2.5rem' }}>

                        {/* Brand Column */}
                        <div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <NousLogoWhite />
                            </div>
                            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '240px' }}>
                                29+ years of digital product engineering excellence for complex enterprises across regulated industries worldwide.
                            </p>

                            {/* Social Links — ALL REAL URLS */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                                    Follow Us
                                </p>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <a
                                        href="https://www.linkedin.com/company/nousinfosystems/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Nous Infosystems on LinkedIn"
                                        title="LinkedIn"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '9px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                            textDecoration: 'none',
                                            color: '#94A3B8',
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = '#0A66C2';
                                            el.style.borderColor = '#0A66C2';
                                            el.style.color = 'white';
                                            el.style.transform = 'translateY(-2px)';
                                            el.style.boxShadow = '0 4px 16px rgba(10,102,194,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = 'rgba(255,255,255,0.06)';
                                            el.style.borderColor = 'rgba(255,255,255,0.1)';
                                            el.style.color = '#94A3B8';
                                            el.style.transform = 'translateY(0)';
                                            el.style.boxShadow = 'none';
                                        }}
                                    >
                                        <Linkedin size={17} />
                                    </a>

                                    <a
                                        href="https://x.com/nousinfosystems"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Nous Infosystems on X (Twitter)"
                                        title="X / Twitter"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '9px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                            textDecoration: 'none',
                                            color: '#94A3B8',
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = '#000000';
                                            el.style.borderColor = '#333';
                                            el.style.color = 'white';
                                            el.style.transform = 'translateY(-2px)';
                                            el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = 'rgba(255,255,255,0.06)';
                                            el.style.borderColor = 'rgba(255,255,255,0.1)';
                                            el.style.color = '#94A3B8';
                                            el.style.transform = 'translateY(0)';
                                            el.style.boxShadow = 'none';
                                        }}
                                    >
                                        <Twitter size={17} />
                                    </a>

                                    <a
                                        href="https://www.facebook.com/NousInfosystems"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Nous Infosystems on Facebook"
                                        title="Facebook"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '9px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                            textDecoration: 'none',
                                            color: '#94A3B8',
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = '#1877F2';
                                            el.style.borderColor = '#1877F2';
                                            el.style.color = 'white';
                                            el.style.transform = 'translateY(-2px)';
                                            el.style.boxShadow = '0 4px 16px rgba(24,119,242,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = 'rgba(255,255,255,0.06)';
                                            el.style.borderColor = 'rgba(255,255,255,0.1)';
                                            el.style.color = '#94A3B8';
                                            el.style.transform = 'translateY(0)';
                                            el.style.boxShadow = 'none';
                                        }}
                                    >
                                        <Facebook size={17} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Nav Link Columns */}
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <div key={section}>
                                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
                                    {section}
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                    {links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={(link as any).target || '_self'}
                                            rel={(link as any).target === '_blank' ? 'noopener noreferrer' : undefined}
                                            style={{ fontSize: '0.875rem', color: '#64748B', textDecoration: 'none', transition: 'color 0.15s', lineHeight: 1.5 }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = '#CBD5E1'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications Strip */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.125rem 0', background: '#040C18' }}>
                <div className="container-nous">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {[
                            'CMMI Level 5 (V3.0)',
                            'ISO 27001:2022',
                            'ISO 9001:2015',
                            'SOC 2 Type II',
                            'Everest Group PEAK Matrix® Leader',
                            'Great Place to Work®',
                        ].map((cert) => (
                            <span key={cert} style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500, letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ color: '#22C55E', fontWeight: 700 }}>✓</span>
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ padding: '1.25rem 0' }}>
                <div className="container-nous">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <p style={{ fontSize: '0.8125rem', color: '#334155' }}>
                            © {new Date().getFullYear()} Nous Infosystems Limited. All rights reserved. · Leveraging Intellect<sup>®</sup>
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            {[
                                { l: 'Privacy Policy', h: 'https://www.nousinfosystems.com' },
                                { l: 'Terms of Use', h: 'https://www.nousinfosystems.com' },
                                { l: 'Cookie Policy', h: 'https://www.nousinfosystems.com' },
                                { l: 'Accessibility', h: 'https://www.nousinfosystems.com' },
                            ].map(({ l, h }) => (
                                <a
                                    key={l}
                                    href={h}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '0.8125rem', color: '#334155', textDecoration: 'none', transition: 'color 0.15s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#94A3B8'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
                                >
                                    {l}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
