'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CTABlob() {
    const mainRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mainRef.current) {
            mainRef.current.rotation.x = time * 0.1;
            mainRef.current.rotation.y = time * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
            <Sphere ref={mainRef} args={[1, 64, 64]} scale={2}>
                <MeshDistortMaterial
                    color="#0a2540" // Stripe dark blue
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                    clearcoat={1}
                />
            </Sphere>

            {/* Orbiting accent */}
            <Sphere args={[0.5, 32, 32]} position={[2, 1, 1]}>
                <MeshDistortMaterial
                    color="#635bcc"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0}
                    metalness={0.5}
                />
            </Sphere>
        </Float>
    );
}

export default function ThreeCanvasCTA() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-[15%] w-[80%] md:w-[60%] h-[120%] -translate-y-1/2 opacity-30 md:opacity-50">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00d4ff" />
                    <directionalLight position={[-10, -10, -5]} intensity={1} color="#635bff" />
                    <CTABlob />
                    <Environment preset="city" />
                </Canvas>
            </div>
        </div>
    );
}
