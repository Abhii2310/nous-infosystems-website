'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight } from 'lucide-react';

// ─── Cursor-reactive radial glow ────────────────────────────────
function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { damping: 30, stiffness: 120 });
    const sy = useSpring(my, { damping: 30, stiffness: 120 });

    useEffect(() => {
        const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mx, my]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: sx,
                top: sy,
                transform: 'translate(-50%,-50%)',
                width: 600,
                height: 600,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 2,
                mixBlendMode: 'screen',
            }}
        />
    );
}

// ─── 3D core scene ───────────────────────────────────────────────
function CoreScene() {
    const groupRef = useRef<THREE.Group>(null!);
    const ring1Ref = useRef<THREE.Mesh>(null!);
    const ring2Ref = useRef<THREE.Mesh>(null!);
    const ring3Ref = useRef<THREE.Mesh>(null!);
    const orbRef = useRef<THREE.Mesh>(null!);

    useFrame((s) => {
        const t = s.clock.getElapsedTime();
        if (groupRef.current) groupRef.current.rotation.y = t * 0.06;
        if (ring1Ref.current) { ring1Ref.current.rotation.z = t * 0.3; ring1Ref.current.rotation.x = t * 0.1; }
        if (ring2Ref.current) { ring2Ref.current.rotation.z = -t * 0.2; ring2Ref.current.rotation.y = t * 0.15; }
        if (ring3Ref.current) { ring3Ref.current.rotation.x = t * 0.25; ring3Ref.current.rotation.z = t * 0.08; }
        if (orbRef.current) { orbRef.current.rotation.y = t * 0.15; orbRef.current.rotation.x = t * 0.07; }
    });

    return (
        <group ref={groupRef}>
            {/* Central distorted sphere */}
            <Float speed={1.2} floatIntensity={0.8}>
                <Sphere ref={orbRef} args={[1.5, 128, 128]}>
                    <MeshDistortMaterial
                        color="#c7d2fe"
                        roughness={0.0}
                        metalness={0.6}
                        distort={0.35}
                        speed={2.5}
                        clearcoat={1}
                        clearcoatRoughness={0.0}
                        envMapIntensity={2}
                    />
                </Sphere>

                {/* Inner glowing core */}
                <Sphere args={[0.8, 64, 64]}>
                    <meshBasicMaterial color="#6366f1" transparent opacity={0.15} />
                </Sphere>
            </Float>

            {/* Orbital ring 1 — indigo */}
            <Torus ref={ring1Ref} args={[2.4, 0.015, 16, 200]}>
                <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
            </Torus>
            {/* Orbital ring 2 — cyan tilted */}
            <Torus ref={ring2Ref} args={[3.2, 0.012, 16, 200]} rotation={[Math.PI / 3, 0, 0]}>
                <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
            </Torus>
            {/* Orbital ring 3 — magenta tilted */}
            <Torus ref={ring3Ref} args={[2.0, 0.01, 16, 200]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
                <meshBasicMaterial color="#e879f9" transparent opacity={0.35} />
            </Torus>

            {/* Orbiting satellite spheres */}
            {[
                { angle: 0, r: 2.4, color: '#818cf8', size: 0.09 },
                { angle: Math.PI * 0.6, r: 2.4, color: '#6366f1', size: 0.07 },
                { angle: Math.PI * 1.2, r: 2.4, color: '#a5b4fc', size: 0.11 },
                { angle: Math.PI * 0.4, r: 3.2, color: '#22d3ee', size: 0.08 },
                { angle: Math.PI * 1.5, r: 3.2, color: '#06b6d4', size: 0.06 },
                { angle: Math.PI * 0.9, r: 2.0, color: '#f0abfc', size: 0.07 },
            ].map((sat, i) => (
                <SatelliteSphere key={i} {...sat} speed={0.25 + i * 0.04} offset={i * 1.1} />
            ))}
        </group>
    );
}

function SatelliteSphere({ angle, r, color, size, speed, offset }: { angle: number; r: number; color: string; size: number; speed: number; offset: number }) {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((s) => {
        const t = s.clock.getElapsedTime() * speed + offset;
        ref.current.position.x = Math.cos(t + angle) * r;
        ref.current.position.z = Math.sin(t + angle) * r;
    });
    return (
        <Sphere ref={ref} args={[size, 16, 16]}>
            <meshBasicMaterial color={color} />
        </Sphere>
    );
}

// ─── Floating stat pill ──────────────────────────────────────────
function StatPill({ label, value, sub, color, style }: { label: string; value: string; sub: string; color: string; style?: React.CSSProperties }) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 16,
                padding: '12px 18px',
                display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                ...style,
            }}
        >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0, boxShadow: `0 0 10px ${color}` }} />
            <div>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2, whiteSpace: 'nowrap' }}>{sub}</div>
            </div>
        </motion.div>
    );
}

// ─── Animated word cycle ──────────────────────────────────────────
const words = ['Products', 'Pipelines', 'Agents', 'Systems', 'Decisions'];

function WordCycle() {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
        return () => clearInterval(t);
    }, []);
    return (
        <span style={{ position: 'relative', display: 'inline-block', minWidth: '5ch' }}>
            <motion.span
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #818cf8, #38bdf8, #34d399)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {words[idx]}
            </motion.span>
        </span>
    );
}

// ─── Main Hero ───────────────────────────────────────────────────
export default function Hero() {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            background: '#04050d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            <CursorGlow />

            {/* Subtle grid pattern */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                pointerEvents: 'none',
            }} />

            {/* Ambient light blobs */}
            <div style={{ position: 'absolute', top: '15%', left: '5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 1 }} />

            {/* === MAIN LAYOUT === */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1400, margin: '0 auto', padding: '120px 48px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'center', minHeight: '100vh' }}>

                {/* Left — TYPOGRAPHY */}
                <div style={{ paddingRight: 40 }}>
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 40 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>
                            <motion.div
                                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
                            />
                            <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(165,180,252,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                System live — 2,841 agents running
                            </span>
                        </div>
                    </motion.div>

                    {/* Headline — editorial stacked */}
                    <div style={{ overflow: 'hidden', marginBottom: 12 }}>
                        <motion.div
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span style={{
                                display: 'block',
                                fontSize: 'clamp(64px, 7.5vw, 112px)',
                                fontWeight: 900,
                                letterSpacing: '-0.055em',
                                lineHeight: 0.9,
                                color: '#fff',
                            }}>
                                Build
                            </span>
                        </motion.div>
                    </div>

                    <div style={{ overflow: 'hidden', marginBottom: 12 }}>
                        <motion.div
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span style={{
                                display: 'block',
                                fontSize: 'clamp(64px, 7.5vw, 112px)',
                                fontWeight: 900,
                                letterSpacing: '-0.055em',
                                lineHeight: 0.9,
                                background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 45%, #06b6d4 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                Intelligence
                            </span>
                        </motion.div>
                    </div>

                    <div style={{ overflow: 'hidden', marginBottom: 12 }}>
                        <motion.div
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span style={{
                                display: 'block',
                                fontSize: 'clamp(64px, 7.5vw, 112px)',
                                fontWeight: 900,
                                letterSpacing: '-0.055em',
                                lineHeight: 0.9,
                                color: 'rgba(255,255,255,0.2)',
                            }}>
                                Into
                            </span>
                        </motion.div>
                    </div>

                    {/* Cycling word line */}
                    <div style={{ overflow: 'hidden', marginBottom: 48 }}>
                        <motion.div
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span style={{
                                display: 'block',
                                fontSize: 'clamp(64px, 7.5vw, 112px)',
                                fontWeight: 900,
                                letterSpacing: '-0.055em',
                                lineHeight: 0.9,
                            }}>
                                <WordCycle />
                            </span>
                        </motion.div>
                    </div>

                    {/* Subline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.55 }}
                        style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 400, marginBottom: 40, fontWeight: 400 }}
                    >
                        The enterprise AI operating system. Five pillars. One platform. Infinite leverage.
                    </motion.p>

                    {/* Single CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 20 }}
                    >
                        <a href="#contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '16px 32px', borderRadius: 100,
                            background: 'linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4)',
                            color: '#fff', textDecoration: 'none',
                            fontWeight: 700, fontSize: 15,
                            boxShadow: '0 0 40px rgba(99,102,241,0.4), 0 4px 20px rgba(0,0,0,0.3)',
                            transition: 'all 0.3s',
                            border: 'none',
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(99,102,241,0.6), 0 8px 32px rgba(0,0,0,0.4)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.4), 0 4px 20px rgba(0,0,0,0.3)'; }}
                        >
                            Start Building <ArrowRight size={16} />
                        </a>

                        {/* Scroller arrow cue */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)' }}>
                            <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.15)' }} />
                            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>scroll to explore</span>
                        </div>
                    </motion.div>

                    {/* Metric strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        style={{ display: 'flex', gap: 32, marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)' }}
                    >
                        {[
                            { v: '200+', l: 'enterprise clients' },
                            { v: '99.9%', l: 'uptime SLA' },
                            { v: '10×', l: 'faster delivery' },
                        ].map(({ v, l }) => (
                            <div key={l}>
                                <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.05em', color: '#fff' }}>{v}</div>
                                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 3, fontWeight: 500 }}>{l}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right — 3D CANVAS + FLOATING PILLS */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', height: 580 }}
                >
                    {/* 3D WebGL */}
                    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} gl={{ antialias: true, alpha: true }}>
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[4, 6, 4]} intensity={4} color="#6366f1" />
                        <directionalLight position={[-4, -2, -4]} intensity={3} color="#06b6d4" />
                        <pointLight position={[0, 0, 4]} intensity={3} color="#e879f9" />
                        <CoreScene />
                    </Canvas>

                    {/* Floating pills */}
                    <StatPill value="2,841" sub="AI agents active" color="#6366f1" style={{ top: '12%', right: '-2%' }} label="" />
                    <StatPill value="12ms" sub="p99 latency" color="#06b6d4" style={{ bottom: '22%', right: '-5%' }} label="" />
                    <StatPill value="3.2B" sub="tokens / day" color="#e879f9" style={{ top: '42%', left: '-4%' }} label="" />
                    <StatPill value="99.9%" sub="uptime SLA" color="#22c55e" style={{ bottom: '10%', left: '8%' }} label="" />
                </motion.div>
            </div>

            {/* Bottom gradient transition to white */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
                background: 'linear-gradient(to top, #ffffff 0%, rgba(4,5,13,0) 100%)',
                pointerEvents: 'none', zIndex: 8,
            }} />
        </section>
    );
}
