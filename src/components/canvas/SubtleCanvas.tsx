"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FaintParticles({ count = 160 }: { count?: number }) {
  const [points, colors] = useMemo(() => {
    const coords = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const green = new THREE.Color("#39FF14");
    const cyan = new THREE.Color("#00F0FF");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      coords[i3] = (Math.random() - 0.5) * 24;
      coords[i3 + 1] = (Math.random() - 0.5) * 24;
      coords[i3 + 2] = (Math.random() - 0.5) * 16;

      const col = Math.random() > 0.6 ? green : cyan;
      cols[i3] = col.r;
      cols[i3 + 1] = col.g;
      cols[i3 + 2] = col.b;
    }
    return [coords, cols];
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.35}
      />
    </points>
  );
}

function SubtleWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -6]} scale={4.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#39FF14"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

export default function SubtleCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black opacity-60">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fog attach="fog" args={["#000000", 6, 18]} />
        <ambientLight intensity={0.2} />
        <FaintParticles />
        <SubtleWireframe />
      </Canvas>
    </div>
  );
}

