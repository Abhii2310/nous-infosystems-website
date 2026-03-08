'use client';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
export default function Contact() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8f9fc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: 700, margin: '0 auto', padding: '100px 32px 64px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6366f1', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginBottom: 48 }}>
                    <ArrowLeft size={16} /> Back to home
                </Link>
                <span style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 100, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', fontSize: 12, fontWeight: 700, color: '#6366f1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>Get in touch</span>
                <h1 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#0a0f1e', marginBottom: 16, lineHeight: 1 }}>Let&apos;s Talk</h1>
                <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 48 }}>
                    Ready to start your AI transformation? Our team responds within 4 hours.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginBottom: 40 }}>
                    {[
                        { icon: Mail, label: 'Email us', value: 'hello@nous.ai', href: 'mailto:hello@nous.ai', color: '#6366f1' },
                        { icon: Phone, label: 'Call us', value: '+91 80 4567 8900', href: 'tel:+918045678900', color: '#3b82f6' },
                        { icon: MapPin, label: 'Headquarters', value: 'Bangalore, India', href: '#', color: '#06b6d4' },
                        { icon: MessageCircle, label: 'Sales', value: 'sales@nous.ai', href: 'mailto:sales@nous.ai', color: '#14b8a6' },
                    ].map(({ icon: Icon, label, value, href, color }) => (
                        <a key={label} href={href} style={{
                            display: 'flex', alignItems: 'center', gap: 14,
                            padding: '20px', background: '#fff', borderRadius: 14,
                            border: '1px solid rgba(0,0,0,0.07)', textDecoration: 'none',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.2s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ width: 42, height: 42, borderRadius: 10, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Icon size={20} color={color} />
                            </div>
                            <div>
                                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{label}</div>
                                <div style={{ fontSize: 14, fontWeight: 600, color: '#0a0f1e' }}>{value}</div>
                            </div>
                        </a>
                    ))}
                </div>
                <a href="mailto:hello@nous.ai" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    padding: '16px 36px', borderRadius: 100, textDecoration: 'none',
                    background: 'linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4)',
                    color: '#fff', fontWeight: 700, fontSize: 16,
                    boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
                    transition: 'all 0.2s',
                }}>
                    Send us a message <Mail size={18} />
                </a>
            </div>
        </main>
    );
}
