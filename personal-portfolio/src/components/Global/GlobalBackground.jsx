import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default GlobalBackground;
