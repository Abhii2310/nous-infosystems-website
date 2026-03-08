'use client';
import Link from 'next/link';

const cols = [
    {
        title: 'Services',
        links: [
            { label: 'AI Product Engineering', href: '/services/ai-product-engineering' },
            { label: 'AI Data Engineering', href: '/services/ai-data-engineering' },
            { label: 'Workflow Automation', href: '/services/workflow-automation' },
            { label: 'Quality Engineering', href: '/services/quality-engineering' },
            { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Partners', href: '/partners' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Documentation', href: '/resources' },
            { label: 'Webinars', href: '/resources' },
            { label: 'API Reference', href: '/resources' },
        ],
    },
];

const socials = [
    { label: 'Twitter', href: 'https://twitter.com/nousinfosystems' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/nous-infosystems' },
];

export default function Footer() {
    return (
        <footer style={{ background: '#0a0f1e', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '64px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56, marginBottom: 56 }}>

                    {/* Brand column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
                            <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
                                <defs>
                                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="50%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                                <rect width="34" height="34" rx="9" fill="url(#footerLogoGrad)" />
                                <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                                <path d="M9 25V9L25 25V9" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                                <span style={{ fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: '-0.05em' }}>nous</span>
                                <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(99,102,241,0.8)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 2 }}>infosystems</span>
                            </div>
                        </div>

                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
                            The enterprise AI transformation company. We make organizations AI-native — faster, smarter, and more competitive.
                        </p>

                        {/* Social links — Twitter and LinkedIn only */}
                        <div style={{ display: 'flex', gap: 8 }}>
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    style={{
                                        padding: '7px 14px', borderRadius: 8,
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        fontSize: 12, fontWeight: 600,
                                        color: 'rgba(255,255,255,0.45)',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    {cols.map((col) => (
                        <div key={col.title}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 16 }}>
                                {col.title}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {col.links.map((link) => (
                                    <Link key={link.label} href={link.href}
                                        style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 450 }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    paddingTop: 24,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: 16,
                }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', fontWeight: 400 }}>
                        © {new Date().getFullYear()} Nous Infosystems Pvt. Ltd. All rights reserved.
                    </span>
                    <div style={{ display: 'flex', gap: 24 }}>
                        {['Privacy Policy', 'Terms of Service', 'Security'].map((l) => (
                            <a key={l} href="#"
                                style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                            >
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
