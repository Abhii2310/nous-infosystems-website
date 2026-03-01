'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function FinalCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={ref}
            style={{
                padding: '7rem 0',
                background: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-200px',
                right: '-200px',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(26,86,219,0.05) 0%, transparent 70%)',
                filter: 'blur(60px)',
            }} />

            <div className="container-nous" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '5rem',
                    alignItems: 'center',
                }}>
                    {/* Left */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-40px)',
                        transition: 'all 0.7s ease',
                    }}>
                        <p className="section-label" style={{ marginBottom: '0.75rem' }}>Get in Touch</p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            color: '#0A1628',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                        }}>
                            Start a Conversation<br />
                            <span className="gradient-text">With Our Engineering Team</span>
                        </h2>

                        <p style={{ color: '#64748B', lineHeight: 1.75, fontSize: '1.0625rem', marginBottom: '2.5rem', maxWidth: '420px' }}>
                            Whether you're modernizing legacy infrastructure, building a new digital product, or exploring AI capabilities — we'll help you think through it clearly and honestly.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'No generic pitch decks — we listen first',
                                'Engineering-led conversations, not sales',
                                'Honest assessment of fit and feasibility',
                                'Response within 24 business hours',
                            ].map((point) => (
                                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <ChevronRight size={16} color="#1A56DB" />
                                    <span style={{ color: '#475569', fontSize: '0.9375rem', fontWeight: 500 }}>{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div
                        style={{
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(40px)',
                            transition: 'all 0.7s ease 0.15s',
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A1628', marginBottom: '0.5rem' }}>
                            Request a Discovery Call
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: '#94A3B8', marginBottom: '2rem' }}>
                            Typically 30 minutes · Engineering leadership attends
                        </p>

                        <form
                            onSubmit={(e) => { e.preventDefault(); alert('Thank you! Our team will reach out within 24 business hours.'); }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {[
                                    { id: 'first', label: 'First Name', type: 'text', placeholder: 'John', required: true },
                                    { id: 'last', label: 'Last Name', type: 'text', placeholder: 'Smith', required: true },
                                ].map((field) => (
                                    <div key={field.id}>
                                        <label htmlFor={`contact-${field.id}`} style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>
                                            {field.label}
                                        </label>
                                        <input
                                            id={`contact-${field.id}`}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            required={field.required}
                                            style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E2E8F0', borderRadius: '8px', background: 'white', fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif', color: '#0A1628', outline: 'none', transition: 'border-color 0.15s' }}
                                            onFocus={(e) => e.target.style.borderColor = '#1A56DB'}
                                            onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                        />
                                    </div>
                                ))}
                            </div>

                            {[
                                { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john.smith@company.com', required: true },
                                { id: 'company', label: 'Company', type: 'text', placeholder: 'Your Organization', required: true },
                            ].map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={`contact-${field.id}`} style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>
                                        {field.label}
                                    </label>
                                    <input
                                        id={`contact-${field.id}`}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E2E8F0', borderRadius: '8px', background: 'white', fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif', color: '#0A1628', outline: 'none', transition: 'border-color 0.15s' }}
                                        onFocus={(e) => e.target.style.borderColor = '#1A56DB'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="contact-interest" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>
                                    Area of Interest
                                </label>
                                <select
                                    id="contact-interest"
                                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E2E8F0', borderRadius: '8px', background: 'white', fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif', color: '#0A1628', outline: 'none', cursor: 'pointer' }}
                                    onFocus={(e) => e.target.style.borderColor = '#1A56DB'}
                                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                >
                                    <option value="">Select a service area</option>
                                    <option>Digital Product Engineering</option>
                                    <option>AI & Automation</option>
                                    <option>Cloud Transformation</option>
                                    <option>Quality Engineering</option>
                                    <option>Infrastructure Management</option>
                                    <option>Data & Analytics</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>
                                    Brief Context <span style={{ color: '#94A3B8', fontWeight: 400 }}>(optional)</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    placeholder="Describe your challenge or initiative in a few sentences..."
                                    rows={3}
                                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E2E8F0', borderRadius: '8px', background: 'white', fontSize: '0.9375rem', fontFamily: 'Inter, sans-serif', color: '#0A1628', outline: 'none', resize: 'vertical', transition: 'border-color 0.15s' }}
                                    onFocus={(e) => e.target.style.borderColor = '#1A56DB'}
                                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ width: '100%', justifyContent: 'center', padding: '0.9375rem', fontSize: '1rem' }}
                            >
                                Request Discovery Call
                                <ArrowRight size={17} />
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
                                No commitment. Engineering-first conversation.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
