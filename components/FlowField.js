"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function Flow() {
  const materialRef = useRef();

  useEffect(() => {
    fetch("/data/vorticity.json")
      .then((res) => res.json())
      .then((data) => {
        const size = data.length;

        const flat = new Float32Array(size * size);
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            flat[i * size + j] = data[i][j];
          }
        }

        const texture = new THREE.DataTexture(
          flat,
          size,
          size,
          THREE.RedFormat,
          THREE.FloatType
        );

        texture.needsUpdate = true;

        if (materialRef.current) {
          materialRef.current.uniforms.u_texture.value = texture;
          materialRef.current.uniforms.u_loaded.value = 1.0;
        }
      })
      .catch((err) => {
        console.error("Error loading vorticity field:", err);
      });
  }, []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value =
        clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10, 256, 256]} />

      <shaderMaterial
        ref={materialRef}
        uniforms={{
          u_time: { value: 0 },
          u_texture: { value: null },
          u_loaded: { value: 0.0 },
        }}

        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}

        fragmentShader={`
          varying vec2 vUv;
          uniform sampler2D u_texture;
          uniform float u_time;
          uniform float u_loaded;

          vec2 velocity(vec2 p) {
            float vx = sin(6.0*p.y + u_time) - cos(6.0*p.x - u_time);
            float vy = cos(6.0*p.x + u_time) - sin(6.0*p.y - u_time);
            return vec2(vx, vy);
          }

          // Diverging colormap (blue ↔ white ↔ red)
          vec3 diverging(float v) {
            float x = 2.0 * v - 1.0; // map [0,1] → [-1,1]

            vec3 blue = vec3(0.1, 0.2, 0.9);
            vec3 white = vec3(1.0, 1.0, 1.0);
            vec3 red = vec3(0.9, 0.2, 0.1);

            if (x < 0.0) {
              return mix(blue, white, x + 1.0);
            } else {
              return mix(white, red, x);
            }
          }

	  // Plasma Color Map
	  vec3 plasma(float x) {
		  return vec3(
		    0.5 + 0.5*sin(3.0 + x*3.0),
		    0.5 + 0.5*sin(1.0 + x*3.0),
		    0.5 + 0.5*sin(5.0 + x*3.0)
		  );
		}

	// Inferno Color map
	vec3 inferno(float x) {
	  return vec3(
	    pow(x, 0.5),
	    pow(x, 1.5),
	    pow(x, 3.0)
	  );
	}

          void main() {

            if (u_loaded < 0.5) {
              gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
              return;
            }

            vec2 uv = vUv;

            float dt = 0.02;

            vec2 vel = velocity(uv);
            vec2 prev = uv - dt * vel;

            prev = mod(prev, 1.0);

            float val = texture2D(u_texture, prev).r;

            // slight diffusion
            val = mix(val, 0.5, 0.02);

            // Apply diverging colormap
            vec3 color = inferno(val);

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function FlowField() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Flow />
    </Canvas>
  );
}
