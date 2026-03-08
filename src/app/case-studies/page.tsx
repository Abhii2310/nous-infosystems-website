'use client';
import Link from 'next/link';
import { ArrowLeft, FileText, Clock, TrendingUp } from 'lucide-react';
const studies = [
    { co: 'NovaBanking UK', industry: 'FinTech', result: '8-week AI product launch', metric: '18mo → 8wk', color: '#6366f1' },
    { co: 'Global Insurance Corp', industry: 'Insurance', result: 'Claims automation', metric: '14 days → 3 hours', color: '#3b82f6' },
    { co: 'HealthUnity', industry: 'Healthcare', result: 'MLOps at scale', metric: '200+ models in prod', color: '#06b6d4' },
    { co: 'RetailIQ', industry: 'Retail', result: 'AI-native personalization', metric: '10× conversion lift', color: '#14b8a6' },
];
export default function CaseStudies() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Results</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16, lineHeight: 1 }}>Client Case Studies</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 56 }}>Real transformations. Measurable outcomes. Zero fluff.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {studies.map(s => (
                        <div key={s.co} style={{ padding: '28px', background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: 24, alignItems: 'center' }}>
                            <div style={{ width: 56, height: 56, borderRadius: 14, background: `${s.color}10`, border: `1px solid ${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <FileText size={24} color={s.color} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: `${s.color}10`, color: s.color, fontWeight: 700 }}>{s.industry}</span>
                                </div>
                                <div style={{ fontSize: 18, fontWeight: 800, color: '#0a0f1e', marginBottom: 4 }}>{s.co}</div>
                                <div style={{ fontSize: 14, color: '#6b7280' }}>{s.result}</div>
                            </div>
                            <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: s.color, marginBottom: 4 }}>
                                    <TrendingUp size={14} />
                                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Outcome</span>
                                </div>
                                <div style={{ fontSize: 16, fontWeight: 900, color: '#0a0f1e', letterSpacing: '-0.02em' }}>{s.metric}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
