import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh, Group } from "three";

function NeonTorus() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
  });
  return (
    <mesh ref={ref} position={[2.2, 0.4, -1]} scale={1.1}>
      <torusKnotGeometry args={[1, 0.32, 180, 24]} />
      <MeshDistortMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        roughness={0.15}
        metalness={0.9}
        distort={0.25}
        speed={1.4}
      />
    </mesh>
  );
}

function FloatingOrb({ pos, color, scale = 1 }: { pos: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh position={pos} scale={scale}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Group3D() {
  const g = useRef<Group>(null);
  useFrame((state) => {
    if (!g.current) return;
    const t = state.clock.elapsedTime;
    g.current.rotation.y = Math.sin(t * 0.3) * 0.25;
  });
  return (
    <group ref={g}>
      <NeonTorus />
      <FloatingOrb pos={[-2.4, 1.1, 0.5]} color="#a855f7" scale={0.7} />
      <FloatingOrb pos={[-1.6, -1.1, 1.2]} color="#22d3ee" scale={0.5} />
      <FloatingOrb pos={[3, -1.4, 0.4]} color="#ec4899" scale={0.6} />
      <Sparkles count={80} size={3} scale={[8, 5, 4]} speed={0.4} color="#22d3ee" />
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-5, -2, 3]} intensity={1.5} color="#a855f7" />
      <Group3D />
      <Environment preset="night" />
    </Canvas>
  );
}
