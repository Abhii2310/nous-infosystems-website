'use client';
import Link from 'next/link';
import { ArrowLeft, GitMerge } from 'lucide-react';
export default function WorkflowAutomation() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 640, padding: '64px 32px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <GitMerge size={28} color="#06b6d4" />
                </div>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)', fontSize: 12, fontWeight: 700, color: '#06b6d4', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Service</span>
                <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16 }}>Agentic Workflow Automation</h1>
                <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7, marginBottom: 32 }}>
                    Autonomous AI agents that orchestrate complex, multi-step business workflows end-to-end. From procurement to customer service — we design agents that think, act, and learn.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
                    {['Multi-Agent Systems', 'Process Mining', 'RPA + AI', 'Orchestration Layer', 'Human-in-Loop'].map(t => (
                        <span key={t} style={{ padding: '6px 14px', borderRadius: 8, background: '#fff', border: '1px solid rgba(0,0,0,0.08)', fontSize: 13, fontWeight: 600, color: '#374151' }}>{t}</span>
                    ))}
                </div>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
            </div>
        </main>
    );
}
