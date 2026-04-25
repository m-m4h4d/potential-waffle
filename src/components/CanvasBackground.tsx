'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './CanvasBackground.module.css';

// Move impure function outside the component to satisfy purity rules
const generateParticles = (count: number) => {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 5 * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  return pos;
};

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  // Memoize the stable result of the generation
  const positions = useMemo(() => generateParticles(5000), []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = time / 15;
      ref.current.rotation.y = time / 20;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#6366f1"
        transparent
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </points>
  );
}

export default function CanvasBackground() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: false }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}
