'use client';
import Link from 'next/link';
import { ArrowLeft, Users, Globe, Award, TrendingUp } from 'lucide-react';
export default function About() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Company</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 20, lineHeight: 1 }}>About Nous Infosystems</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 56, maxWidth: 580 }}>
                    We are a venture-backed AI transformation company dedicated to making enterprises AI-native — faster, smarter, and more competitive.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, marginBottom: 56 }}>
                    {[
                        { icon: Globe, title: '30+ Countries', sub: 'Global enterprise clients', color: '#6366f1' },
                        { icon: Users, title: '500+ Engineers', sub: 'AI specialists and architects', color: '#3b82f6' },
                        { icon: Award, title: 'Founded 2018', sub: 'Headquartered in Bangalore, India', color: '#06b6d4' },
                        { icon: TrendingUp, title: '$2.4B+ ROI', sub: 'Delivered to clients', color: '#14b8a6' },
                    ].map(({ icon: Icon, title, sub, color }) => (
                        <div key={title} style={{ padding: '24px', background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}12`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                                <Icon size={22} color={color} />
                            </div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: '#0a0f1e', marginBottom: 4 }}>{title}</div>
                            <div style={{ fontSize: 14, color: '#6b7280' }}>{sub}</div>
                        </div>
                    ))}
                </div>
                <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8 }}>
                    Nous Infosystems was founded with a singular mission: to democratize enterprise AI. We partner with Fortune 500 companies,
                    global banks, healthcare systems, and fast-growing scale-ups to embed intelligence into every layer of their technology stack.
                    Our team of 500+ AI engineers, architects, and data scientists work across five transformational pillars to deliver
                    measurable business outcomes — not just technology deployments.
                </p>
            </div>
        </main>
    );
}
