'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Shield, Award, Globe, Cpu } from 'lucide-react';

const heroWords = ['Complex Enterprises', 'Regulated Industries', 'Global Organizations', 'Future-Ready Businesses'];

function TypewriterText() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const target = heroWords[wordIndex];
        let timeout: NodeJS.Timeout;

        if (!deleting && displayed === target) {
            timeout = setTimeout(() => setDeleting(true), 2800);
        } else if (deleting && displayed === '') {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % heroWords.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayed((d) =>
                    deleting ? d.slice(0, -1) : target.slice(0, d.length + 1)
                );
            }, deleting ? 40 : 80);
        }
        return () => clearTimeout(timeout);
    }, [displayed, deleting, wordIndex]);

    return (
        <span style={{ color: '#60A5FA' }}>
            {displayed}
            <span style={{ borderRight: '3px solid #60A5FA', marginLeft: '2px', animation: 'cursorBlink 0.9s infinite' }}>&nbsp;</span>
        </span>
    );
}

const trustBadges = [
    { icon: Shield, label: 'CMMI Level 5', sublabel: 'Highest Process Maturity' },
    { icon: Award, label: 'ISO 27001:2022', sublabel: 'Information Security' },
    { icon: Globe, label: '6 Countries', sublabel: 'Global Delivery' },
    { icon: Cpu, label: '29+ Years', sublabel: 'Engineering Excellence' },
];

export default function Hero() {
    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    };

    return (
        <section
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(160deg, #071428 0%, #0C1F45 45%, #0F2D5E 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle grid overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(26, 86, 219, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 86, 219, 0.07) 1px, transparent 1px)
        `,
                backgroundSize: '72px 72px',
                pointerEvents: 'none',
            }} />

            {/* Radial glow left */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-15%',
                width: '700px',
                height: '700px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(26,86,219,0.18) 0%, transparent 65%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
            }} />

            {/* Radial glow right */}
            <div style={{
                position: 'absolute',
                bottom: '5%',
                right: '-10%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)',
                filter: 'blur(70px)',
                pointerEvents: 'none',
            }} />

            <div className="container-nous" style={{ position: 'relative', zIndex: 1, paddingTop: '130px', paddingBottom: '80px' }}>

                {/* Badge */}
                <div style={{ marginBottom: '2rem', animation: 'fadeInUp 0.6s ease forwards' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(96,165,250,0.12)',
                        border: '1px solid rgba(96,165,250,0.35)',
                        borderRadius: '100px',
                        padding: '7px 18px',
                    }}>
                        <div style={{ width: '7px', height: '7px', background: '#34D399', borderRadius: '50%' }} />
                        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#BAE6FD', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                            29+ Years · Global Delivery · CMMI Level 5
                        </span>
                    </div>
                </div>

                {/* Main Headline */}
                <div style={{ maxWidth: '860px', animation: 'fadeInUp 0.7s ease 0.1s both' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.15,
                        letterSpacing: '-0.03em',
                        marginBottom: '2rem',
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                    }}>
                        Digital Product Engineering
                        <br />
                        <span style={{
                            color: '#93C5FD',
                            fontStyle: 'italic',
                            fontWeight: 800,
                            marginRight: '0.3em',
                        }}>for</span><TypewriterText />
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
                        color: '#CBD5E1',
                        lineHeight: 1.75,
                        maxWidth: '620px',
                        marginBottom: '2.75rem',
                        fontWeight: 400,
                    }}>
                        From core banking to AI-powered clinical systems — we engineer <strong style={{ color: '#E2E8F0', fontWeight: 600 }}>resilient, scalable digital products</strong> that perform in the world's most demanding environments.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4.5rem', animation: 'fadeInUp 0.7s ease 0.25s both' }}>
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: '#1A56DB',
                                color: '#FFFFFF',
                                padding: '1rem 2.25rem',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '0.9375rem',
                                textDecoration: 'none',
                                transition: 'all 0.22s ease',
                                boxShadow: '0 4px 20px rgba(26,86,219,0.4)',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1648C4';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,86,219,0.55)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#1A56DB';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,86,219,0.4)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Talk to Our Experts
                            <ArrowRight size={17} />
                        </a>
                        <a
                            href="#services"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255,255,255,0.10)',
                                color: '#FFFFFF',
                                padding: '1rem 2.25rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.9375rem',
                                textDecoration: 'none',
                                transition: 'all 0.22s ease',
                                border: '1.5px solid rgba(255,255,255,0.25)',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                            }}
                        >
                            Explore Capabilities
                        </a>
                    </div>
                </div>

                {/* Trust Badges Row */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                        gap: '1rem',
                        maxWidth: '760px',
                        animation: 'fadeInUp 0.7s ease 0.4s both',
                    }}
                >
                    {trustBadges.map((badge) => (
                        <div
                            key={badge.label}
                            style={{
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.14)',
                                borderRadius: '12px',
                                padding: '1.1rem 1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.2s',
                                backdropFilter: 'blur(8px)',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.12)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(96,165,250,0.4)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.14)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '38px',
                                height: '38px',
                                background: 'rgba(26,86,219,0.25)',
                                border: '1px solid rgba(96,165,250,0.3)',
                                borderRadius: '9px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <badge.icon size={18} color="#93C5FD" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#FFFFFF', lineHeight: 1.2 }}>{badge.label}</div>
                                <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>{badge.sublabel}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    animation: 'fadeIn 1s ease 0.9s both',
                }}
                onClick={scrollDown}
            >
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
                <ChevronDown size={18} style={{ animation: 'bounceDown 2s ease infinite' }} />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(7px); opacity: 1; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      ` }} />
        </section>
    );
}
