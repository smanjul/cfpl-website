"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Tube } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Create a swirling 3D curve
function createVortexCurve(offset = 0) {
  const points = [];
  for (let i = 0; i < 200; i++) {
    const t = i * 0.05;

    const x = Math.sin(t + offset) * 1.5;
    const y = Math.cos(t * 1.2 + offset) * 1.5;
    const z = t * 0.1;

    points.push(new THREE.Vector3(x, y, z));
  }
  return new THREE.CatmullRomCurve3(points);
}

function Vortex({ offset }) {
  const ref = useRef();
  const curve = createVortexCurve(offset);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={ref}>
      <Tube args={[curve, 200, 0.05, 16, false]}>
        <meshStandardMaterial
          color={"#ff5500"}
          emissive={"#ff2200"}
          emissiveIntensity={1.5}
        />
      </Tube>
    </mesh>
  );
}

export default function VortexTubes() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} />

      {/* Multiple vortex tubes */}
      <Vortex offset={0} />
      <Vortex offset={2} />
      <Vortex offset={4} />
    </Canvas>
  );
}
