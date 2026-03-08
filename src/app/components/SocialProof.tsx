'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Real brand SVG logos ────────────────────────────────────────
const BrandLogos: Record<string, React.FC<{ size?: number }>> = {
    Microsoft: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 23 23" fill="none">
            <rect x="0" y="0" width="11" height="11" fill="#f25022" />
            <rect x="12" y="0" width="11" height="11" fill="#7fba00" />
            <rect x="0" y="12" width="11" height="11" fill="#00a4ef" />
            <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
        </svg>
    ),
    Google: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.654 33.655 29.28 37 24 37c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
    ),
    AWS: ({ size = 28 }) => (
        <svg width={size * 1.6} height={size} viewBox="0 0 80 48" fill="none">
            <text x="0" y="34" fontSize="32" fontWeight="900" fill="#FF9900" fontFamily="Arial">aws</text>
        </svg>
    ),
    Salesforce: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="50" ry="50" fill="#00A1E0" />
            <text x="50" y="64" textAnchor="middle" fontSize="40" fontWeight="900" fill="white" fontFamily="Arial">sf</text>
        </svg>
    ),
    Databricks: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#FF3621" />
            <polygon points="50,20 80,36 80,68 50,84 20,68 20,36" fill="#FF6B50" opacity="0.6" />
            <text x="50" y="60" textAnchor="middle" fontSize="26" fontWeight="900" fill="white" fontFamily="Arial">Db</text>
        </svg>
    ),
    Snowflake: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <text x="50" y="68" textAnchor="middle" fontSize="52" fill="#29B5E8">❄</text>
        </svg>
    ),
    ServiceNow: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#62D84E" />
            <text x="50" y="64" textAnchor="middle" fontSize="30" fontWeight="900" fill="white" fontFamily="Arial">Now</text>
        </svg>
    ),
    MuleSoft: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#00B3E6" />
            <text x="50" y="64" textAnchor="middle" fontSize="32" fontWeight="900" fill="white" fontFamily="Arial">MS</text>
        </svg>
    ),
    OpenAI: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#0a0a0a" />
            <text x="50" y="64" textAnchor="middle" fontSize="28" fontWeight="700" fill="white" fontFamily="Arial">⬡</text>
        </svg>
    ),
    Azure: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
            <defs>
                <linearGradient id="azGrad" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0072c6" />
                    <stop offset="100%" stopColor="#00b4ff" />
                </linearGradient>
            </defs>
            <path d="M33.338 6.404L5.993 71.641l24.71-.001L55.03 23.658zm1.27 16.716L8.58 89.596h54.06L33.608 23.12z" fill="url(#azGrad)" />
            <path d="M57.642 14.404L37.11 72.22l19.252.001L90 89.596H44.948l-6.36 17.404h57.404z" fill="#0072c6" opacity="0.8" />
        </svg>
    ),
};

const partners = [
    { name: 'Microsoft', logo: 'Microsoft', tagline: 'Azure partner' },
    { name: 'Google Cloud', logo: 'Google', tagline: 'Premier partner' },
    { name: 'AWS', logo: 'AWS', tagline: 'Select partner' },
    { name: 'Salesforce', logo: 'Salesforce', tagline: 'ISV partner' },
    { name: 'Databricks', logo: 'Databricks', tagline: 'Technology partner' },
    { name: 'Snowflake', logo: 'Snowflake', tagline: 'Elite partner' },
    { name: 'ServiceNow', logo: 'ServiceNow', tagline: 'Build partner' },
    { name: 'OpenAI', logo: 'OpenAI', tagline: 'API partner' },
    { name: 'Azure', logo: 'Azure', tagline: 'Gold partner' },
];

// ─── Marquee ticker ──────────────────────────────────────────────
function Marquee() {
    const items = [...partners, ...partners]; // double for seamless loop
    return (
        <div style={{ overflow: 'hidden', position: 'relative' }}>
            {/* fade edges */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', gap: 16, width: 'max-content' }}
            >
                {items.map((p, i) => {
                    const Logo = BrandLogos[p.logo];
                    return (
                        <div key={`${p.name}-${i}`} style={{
                            display: 'flex', alignItems: 'center', gap: 12,
                            padding: '12px 24px', borderRadius: 14,
                            background: '#fafbff',
                            border: '1px solid rgba(0,0,0,0.07)',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        }}>
                            {Logo && <Logo size={22} />}
                            <div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: '#0a0f1e' }}>{p.name}</div>
                                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>{p.tagline}</div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

// ─── Animated network diagram SVG ────────────────────────────────
function NetworkDiagram() {
    const [phase, setPhase] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setPhase((p) => (p + 1) % 7), 1600);
        return () => clearInterval(t);
    }, []);

    const nodes = [
        { cx: 120, cy: 120, label: 'Ingest', color: '#6366f1' },
        { cx: 320, cy: 80, label: 'Process', color: '#3b82f6' },
        { cx: 520, cy: 140, label: 'AI Agent', color: '#06b6d4' },
        { cx: 320, cy: 240, label: 'Enrich', color: '#14b8a6' },
        { cx: 120, cy: 280, label: 'Monitor', color: '#8b5cf6' },
        { cx: 520, cy: 300, label: 'Deploy', color: '#e879f9' },
    ];
    const edges = [[0, 1], [1, 2], [1, 3], [2, 5], [3, 4], [3, 5], [0, 4]];

    return (
        <div style={{ position: 'relative', width: '100%', height: 380 }}>
            <svg viewBox="0 0 640 380" style={{ width: '100%', height: '100%' }}>
                <defs>
                    <linearGradient id="edgeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                    </linearGradient>
                    <filter id="nodeGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {edges.map(([a, b], i) => {
                    const na = nodes[a], nb = nodes[b];
                    const active = i === phase;
                    return (
                        <line key={i}
                            x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
                            stroke={active ? 'url(#edgeGrad2)' : 'rgba(99,102,241,0.1)'}
                            strokeWidth={active ? 2 : 1}
                            style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
                        />
                    );
                })}

                {edges.map(([a, b], i) => {
                    if (i !== phase) return null;
                    const na = nodes[a], nb = nodes[b];
                    return (
                        <circle key={`dot-${i}`} r="5" fill="#6366f1" filter="url(#nodeGlow)">
                            <animateMotion dur="1.6s" repeatCount="indefinite">
                                <mpath href={`#netpath-${i}`} />
                            </animateMotion>
                        </circle>
                    );
                })}

                {edges.map(([a, b], i) => {
                    const na = nodes[a], nb = nodes[b];
                    return <path key={`path-${i}`} id={`netpath-${i}`} d={`M${na.cx},${na.cy} L${nb.cx},${nb.cy}`} fill="none" />;
                })}

                {nodes.map((n, i) => (
                    <g key={i}>
                        {/* Outer glow ring */}
                        <circle cx={n.cx} cy={n.cy} r={34} fill={n.color} opacity="0.04" />
                        <circle cx={n.cx} cy={n.cy} r={26} fill="white" stroke={n.color} strokeWidth="1.5" style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))' }} />
                        <circle cx={n.cx} cy={n.cy} r={9} fill={n.color} />
                        <text x={n.cx} y={n.cy + 44} textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">{n.label}</text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

// ─── Mini dashboard mockup ────────────────────────────────────────
function DashboardMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
                background: '#fff',
                borderRadius: 20,
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.10)',
                overflow: 'hidden',
                maxWidth: 480,
            }}
        >
            {/* Titlebar */}
            <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 8, background: '#fafafa' }}>
                {['#ff5f57', '#ffbd2e', '#28ca41'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
                <div style={{ flex: 1, height: 22, background: '#f0f2f8', borderRadius: 6, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>nous.ai / dashboard</span>
                </div>
            </div>

            <div style={{ padding: 24 }}>
                {/* Stat row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
                    {[
                        { label: 'Agents running', value: '2,841', color: '#6366f1', delta: '+12%' },
                        { label: 'Avg latency', value: '12ms', color: '#06b6d4', delta: '-3ms' },
                        { label: 'Uptime', value: '99.9%', color: '#22c55e', delta: 'SLA met' },
                    ].map(s => (
                        <div key={s.label} style={{ background: '#f8f9fc', borderRadius: 12, padding: '12px 14px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.04em', color: s.color }}>{s.value}</div>
                            <div style={{ fontSize: 10, color: '#22c55e', fontWeight: 600, marginTop: 3 }}>{s.delta}</div>
                        </div>
                    ))}
                </div>

                {/* Sparkline chart */}
                <div style={{ display: 'flex', gap: 3, height: 56, alignItems: 'flex-end', marginBottom: 20 }}>
                    {[35, 60, 45, 80, 55, 95, 70, 88, 60, 100, 75, 92].map((h, i) => (
                        <motion.div key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.04 }}
                            style={{ flex: 1, borderRadius: 4, background: `linear-gradient(to top, #6366f1${i % 2 === 0 ? 'ff' : '88'}, #06b6d433)` }}
                        />
                    ))}
                </div>

                {/* Progress list */}
                {[
                    { name: 'AI Product Engineering', pct: 98, color: '#6366f1' },
                    { name: 'Agentic Automation', pct: 94, color: '#06b6d4' },
                    { name: 'Data Engineering', pct: 87, color: '#3b82f6' },
                    { name: 'Quality Engineering', pct: 91, color: '#14b8a6' },
                ].map(r => (
                    <div key={r.name} style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{r.name}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: r.color }}>{r.pct}%</span>
                        </div>
                        <div style={{ height: 5, background: '#f0f2f8', borderRadius: 3, overflow: 'hidden' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${r.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                                style={{ height: '100%', background: r.color, borderRadius: 3 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ─── Stat counter ────────────────────────────────────────────────
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = to / 60;
        const t = setInterval(() => {
            start += step;
            if (start >= to) { setVal(to); clearInterval(t); }
            else setVal(Math.floor(start));
        }, 16);
        return () => clearInterval(t);
    }, [inView, to]);
    return <span ref={ref}>{val}{suffix}</span>;
}

export default function SocialProof() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <>
            {/* ── Marquee logo bar ─────────────────────────────────── */}
            <section style={{ padding: '40px 0 48px', background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#9ca3af', letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                        Trusted by the world's leading technology ecosystem
                    </p>
                </div>
                <Marquee />
            </section>

            {/* ── Animated metrics strip ───────────────────────────── */}
            <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%)', borderTop: '1px solid rgba(99,102,241,0.08)', borderBottom: '1px solid rgba(99,102,241,0.08)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
                        {[
                            { value: 200, suffix: '+', label: 'Enterprise clients', sub: 'across 30 countries', color: '#6366f1' },
                            { value: 2.4, suffix: 'B', label: 'Value delivered', sub: 'in measurable ROI', color: '#3b82f6', prefix: '$' },
                            { value: 99, suffix: '.9%', label: 'Uptime SLA', sub: 'guaranteed contractually', color: '#06b6d4' },
                            { value: 10, suffix: '×', label: 'Faster to AI', sub: 'vs traditional consulting', color: '#14b8a6' },
                        ].map((m) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    textAlign: 'center', padding: '28px 20px',
                                    background: '#fff', borderRadius: 16,
                                    border: `1px solid ${m.color}18`,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                }}
                            >
                                <div style={{
                                    fontSize: 'clamp(36px,4vw,52px)', fontWeight: 900,
                                    letterSpacing: '-0.05em', color: m.color, lineHeight: 1,
                                    marginBottom: 8,
                                }}>
                                    {m.prefix}<CountUp to={m.value} suffix={m.suffix} />
                                </div>
                                <div style={{ fontSize: 15, fontWeight: 700, color: '#0a0f1e', marginBottom: 4 }}>{m.label}</div>
                                <div style={{ fontSize: 12, color: '#9ca3af' }}>{m.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Network diagram + text ───────────────────────────── */}
            <section ref={ref} className="section" style={{ background: '#f8f9fc', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                                className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}
                            >
                                How it works
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
                                className="display-md" style={{ color: '#0a0f1e', marginBottom: 16 }}
                            >
                                AI that connects{' '}
                                <span className="grad-text">every layer</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
                                className="body-lg" style={{ marginBottom: 32 }}
                            >
                                Autonomous agents traverse your enterprise stack — ingesting, processing, and deploying intelligence across every business layer in real time.
                            </motion.p>

                            {/* Feature bullets */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {[
                                    { dot: '#6366f1', text: 'Sub-50ms inter-agent communication latency' },
                                    { dot: '#06b6d4', text: 'End-to-end observability across all AI pipelines' },
                                    { dot: '#22c55e', text: 'Auto-scaling agents with zero cold-start overhead' },
                                ].map((item) => (
                                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.dot, flexShrink: 0, boxShadow: `0 0 8px ${item.dot}` }} />
                                        <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <NetworkDiagram />
                        </motion.div>
                    </div>

                    {/* ── Dashboard mockup ────────────────────────────── */}
                    <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
                        <DashboardMockup />
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>Live visibility</span>
                            <h2 className="display-md" style={{ color: '#0a0f1e', marginBottom: 16 }}>
                                Real-time AI{' '}
                                <span className="grad-text">command center</span>
                            </h2>
                            <p className="body-lg" style={{ marginBottom: 24 }}>
                                Monitor every agent, latency metric, and deployment across your entire AI stack — from one beautifully unified interface.
                            </p>
                            {/* Mini spec list */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                {[
                                    ['12ms', 'p99 latency'],
                                    ['99.9%', 'uptime SLA'],
                                    ['2,841', 'agents active'],
                                    ['Real-time', 'alerting'],
                                ].map(([v, l]) => (
                                    <div key={l} style={{ padding: '14px 16px', borderRadius: 12, background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}>
                                        <div style={{ fontSize: 20, fontWeight: 900, color: '#6366f1', letterSpacing: '-0.04em' }}>{v}</div>
                                        <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
