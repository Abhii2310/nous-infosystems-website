'use client';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Code2, Video, FileText } from 'lucide-react';
const resources = [
    { icon: FileText, title: 'Case Studies', href: '/case-studies', desc: 'Real outcomes from real clients across 5 industries', color: '#6366f1' },
    { icon: Code2, title: 'Documentation', href: '/docs', desc: 'API references, integration guides, and platform docs', color: '#3b82f6' },
    { icon: Video, title: 'Webinars', href: '/webinars', desc: 'Live and on-demand sessions with our AI architects', color: '#06b6d4' },
    { icon: BookOpen, title: 'API Reference', href: '/api-reference', desc: 'Full RESTful and SDK documentation for the nous platform', color: '#14b8a6' },
];
export default function Resources() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 700, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Learn</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16, lineHeight: 1 }}>Resources</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 56 }}>Everything you need to accelerate your AI journey.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {resources.map(r => {
                        const Icon = r.icon;
                        return (
                            <Link key={r.title} href={r.href} style={{
                                display: 'flex', gap: 18, padding: '24px', background: '#fff',
                                borderRadius: 14, border: '1px solid rgba(0,0,0,0.07)', textDecoration: 'none',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.2s',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${r.color}35`; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.07)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${r.color}10`, border: `1px solid ${r.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={22} color={r.color} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 17, fontWeight: 700, color: '#0a0f1e', marginBottom: 4 }}>{r.title}</div>
                                    <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.5 }}>{r.desc}</div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
