'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function Partners() {
    const partners = [
        { name: 'Microsoft', tier: 'Gold', des: 'Azure AI & Cloud', color: '#00A4EF' },
        { name: 'Google Cloud', tier: 'Premier', des: 'Vertex AI & GCP', color: '#4285F4' },
        { name: 'AWS', tier: 'Select', des: 'SageMaker & Bedrock', color: '#FF9900' },
        { name: 'Salesforce', tier: 'ISV', des: 'Einstein AI', color: '#00A1E0' },
        { name: 'Databricks', tier: 'Technology', des: 'Lakehouse & MLflow', color: '#FF3621' },
        { name: 'Snowflake', tier: 'Elite', des: 'Data Cloud & Cortex', color: '#29B5E8' },
        { name: 'ServiceNow', tier: 'Build', des: 'Now Intelligence', color: '#62D84E' },
        { name: 'OpenAI', tier: 'API', des: 'GPT-4, DALL-E, Whisper', color: '#000000' },
    ];
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Ecosystem</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16, lineHeight: 1 }}>Our Technology Partners</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 56 }}>
                    Certified partnerships with the world&apos;s leading cloud and AI platforms.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
                    {partners.map(p => (
                        <div key={p.name} style={{ padding: '24px', background: '#fff', borderRadius: 14, border: '1px solid rgba(0,0,0,0.07)', display: 'flex', gap: 16, alignItems: 'center' }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1.5px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, color: p.color, flexShrink: 0 }}>
                                {p.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <div style={{ fontSize: 15, fontWeight: 700, color: '#0a0f1e', marginBottom: 2 }}>{p.name}</div>
                                <div style={{ fontSize: 12, color: '#6b7280' }}>{p.des}</div>
                                <span style={{ display: 'inline-block', marginTop: 4, fontSize: 10, padding: '2px 8px', borderRadius: 100, background: `${p.color}12`, color: p.color, fontWeight: 700 }}>{p.tier} partner</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
