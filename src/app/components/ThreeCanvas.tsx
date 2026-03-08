'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Float, OrthographicCamera, Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Blob() {
    const mainRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mainRef.current) {
            mainRef.current.rotation.x = time * 0.1;
            mainRef.current.rotation.y = time * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            {/* Primary Blob */}
            <Sphere ref={mainRef} args={[1, 100, 100]} position={[0, 0, 0]} scale={2.8}>
                <MeshDistortMaterial
                    color="#f6f9fc" // Super light gray to reflect environment clearly
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    envMapIntensity={1}
                />
            </Sphere>

            {/* Orbiting blue accent */}
            <Sphere args={[0.5, 64, 64]} position={[-3, 2, -1]}>
                <MeshDistortMaterial
                    color="#635bff" // Stripe blur
                    attach="material"
                    distort={0.3}
                    speed={2.5}
                    roughness={0}
                    metalness={0.6}
                    transparent
                    opacity={0.8}
                />
            </Sphere>

            {/* Orbiting cyan accent */}
            <Sphere args={[0.6, 64, 64]} position={[3, -2, 1]}>
                <MeshDistortMaterial
                    color="#00d4ff"
                    attach="material"
                    distort={0.4}
                    speed={3}
                    roughness={0.2}
                    metalness={0.7}
                    transparent
                    opacity={0.7}
                />
            </Sphere>

            {/* Subtle purple accent */}
            <Sphere args={[0.4, 64, 64]} position={[1, 3, -2]}>
                <MeshDistortMaterial
                    color="#8b5cf6"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.1}
                    metalness={0.5}
                    transparent
                    opacity={0.6}
                />
            </Sphere>
        </Float>
    );
}

export default function ThreeCanvas() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10" style={{ touchAction: 'none' }}>
            {/* Very soft mixblend or blur to sit nicely behind text or on the side */}
            <div className="absolute top-10 right-0 w-[100%] lg:w-[80%] h-full opacity-60 mix-blend-multiply md:opacity-100 hidden sm:block pointer-events-none lg:-right-[20%]">
                <Canvas camera={{ position: [0, 0, 8], fov: 40 }} gl={{ antialias: true, alpha: true }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
                    <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#635bff" />
                    <directionalLight position={[0, -10, 10]} intensity={2} color="#00d4ff" />
                    <Blob />
                    <Environment preset="city" />
                </Canvas>
            </div>

            {/* Add an abstract ambient gradient glow sphere for mobile where 3D might be too heavy, though canvas will still run */}
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#635BFF] to-[#00D4FF] rounded-full blur-[100px] opacity-10 sm:hidden" />
        </div>
    );
}
