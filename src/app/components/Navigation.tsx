'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [
    { label: 'Products', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Customers', href: '#testimonials' },
    { label: 'Company', href: '#company' },
];

// ─── Premium N logo mark ─────────────────────────────────────────
function NousLogo() {
    return (
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: 34, height: 34 }}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <defs>
                        <linearGradient id="logoGrad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient id="logoGradInner" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                    </defs>
                    {/* Rounded square bg */}
                    <rect width="34" height="34" rx="9" fill="url(#logoGrad)" />
                    {/* Inner subtle highlight */}
                    <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
                    {/* N letterform */}
                    <path
                        d="M9 25V9L25 25V9"
                        stroke="white"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
                {/* Glow dot */}
                <div style={{
                    position: 'absolute', top: -2, right: -2,
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#06b6d4',
                    boxShadow: '0 0 6px #06b6d4, 0 0 12px rgba(6,182,212,0.5)',
                    border: '1.5px solid #fff',
                }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontSize: 17, fontWeight: 900, color: '#0a0f1e', letterSpacing: '-0.05em' }}>nous</span>
                <span style={{ fontSize: 8.5, fontWeight: 700, color: '#6366f1', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 1 }}>infosystems</span>
            </div>
        </Link>
    );
}

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', h, { passive: true });
        return () => window.removeEventListener('scroll', h);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            }}
        >
            <div style={{
                maxWidth: 1280,
                margin: '0 auto',
                padding: scrolled ? '0 32px' : '12px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 60,
                background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
                backdropFilter: scrolled ? 'blur(24px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
                transition: 'all 0.4s ease',
            }}>
                <NousLogo />

                {/* Desktop nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden md:flex">
                    {links.map((l) => (
                        <Link key={l.label} href={l.href} style={{
                            padding: '8px 16px', fontSize: 14, fontWeight: 500,
                            color: '#6b7280', textDecoration: 'none', borderRadius: 8,
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#0a0f1e')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                        >{l.label}</Link>
                    ))}
                </nav>

                {/* CTA right */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden md:flex">
                    <Link href="#" style={{ fontSize: 14, fontWeight: 500, color: '#6b7280', textDecoration: 'none', padding: '8px 14px', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#0a0f1e')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                    >Sign in</Link>
                    <Link href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 14, borderRadius: 10, gap: 6 }}>
                        Start building <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button onClick={() => setOpen(!open)} className="md:hidden"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 8, color: '#0a0f1e' }}>
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '8px 0 20px' }}>
                        {links.map((l) => (
                            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
                                style={{ display: 'block', padding: '14px 32px', fontSize: 16, fontWeight: 500, color: '#0a0f1e', textDecoration: 'none' }}>
                                {l.label}
                            </Link>
                        ))}
                        <div style={{ padding: '12px 32px 0' }}>
                            <Link href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 12 }}>
                                Start building free
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
