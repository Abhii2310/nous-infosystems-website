'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
const posts = [
    { title: 'How Agentic AI is Reshaping Enterprise Operations', tag: 'Agentic AI', date: 'Mar 5, 2026', read: '8 min', color: '#6366f1' },
    { title: 'Building Production-Ready RAG Systems at Scale', tag: 'Engineering', date: 'Feb 28, 2026', read: '12 min', color: '#3b82f6' },
    { title: 'The Lakehouse Architecture Every Enterprise Needs', tag: 'Data', date: 'Feb 20, 2026', read: '7 min', color: '#06b6d4' },
    { title: 'Why Traditional QA is Dead — and What Replaces It', tag: 'Quality', date: 'Feb 14, 2026', read: '6 min', color: '#14b8a6' },
];
export default function Blog() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Insights</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16, lineHeight: 1 }}>nous Blog</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 56 }}>Deep technical insights from the forefront of enterprise AI.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {posts.map(p => (
                        <div key={p.title} style={{ padding: '28px', background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', transition: 'all 0.2s', borderLeft: `4px solid ${p.color}` }}
                            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: `${p.color}10`, color: p.color, fontWeight: 700 }}>{p.tag}</span>
                                <span style={{ fontSize: 12, color: '#9ca3af' }}>{p.date} · {p.read} read</span>
                            </div>
                            <div style={{ fontSize: 18, fontWeight: 800, color: '#0a0f1e', lineHeight: 1.4 }}>{p.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
