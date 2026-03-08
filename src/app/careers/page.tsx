'use client';
import Link from 'next/link';
import { ArrowLeft, Briefcase, MapPin, Zap } from 'lucide-react';
const roles = [
    { title: 'Principal AI Architect', team: 'Engineering', location: 'Bangalore / Remote', type: 'Full-time', color: '#6366f1' },
    { title: 'Senior ML Engineer', team: 'Data & AI', location: 'Mumbai / Remote', type: 'Full-time', color: '#3b82f6' },
    { title: 'LLM Product Designer', team: 'Product', location: 'Remote', type: 'Full-time', color: '#06b6d4' },
    { title: 'Agentic Systems Engineer', team: 'Automation', location: 'Hyderabad / Remote', type: 'Full-time', color: '#14b8a6' },
    { title: 'Enterprise Solutions Architect', team: 'Customer Success', location: 'Bangalore', type: 'Full-time', color: '#8b5cf6' },
];
export default function Careers() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>We are hiring</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16, lineHeight: 1 }}>Build the Future of AI</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 56, maxWidth: 520 }}>
                    Join a team of world-class engineers solving the hardest problems in enterprise AI.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {roles.map(r => (
                        <a key={r.title} href="mailto:careers@nous.ai" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '24px 28px', background: '#fff', borderRadius: 16,
                            border: '1px solid rgba(0,0,0,0.07)', textDecoration: 'none',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.2s',
                            cursor: 'pointer',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = `${r.color}35`; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.08)`; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${r.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Briefcase size={18} color={r.color} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: '#0a0f1e', marginBottom: 4 }}>{r.title}</div>
                                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                        <span style={{ fontSize: 12, color: '#6b7280' }}>{r.team}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9ca3af' }}><MapPin size={11} />{r.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 100, background: `${r.color}10`, color: r.color, fontWeight: 700 }}>{r.type}</span>
                                <Zap size={16} color={r.color} />
                            </div>
                        </a>
                    ))}
                </div>
                <p style={{ marginTop: 40, fontSize: 14, color: '#9ca3af', textAlign: 'center' }}>
                    Don&apos;t see your role? Email us at{' '}
                    <a href="mailto:careers@nous.ai" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600 }}>careers@nous.ai</a>
                </p>
            </div>
        </main>
    );
}
