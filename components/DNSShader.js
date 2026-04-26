"use client";

import { Canvas } from "@react-three/fiber";

export default function DNSShader() {
  return (
    <Canvas className="absolute inset-0">
      <mesh>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#001122" />
      </mesh>
    </Canvas>
  );
}
