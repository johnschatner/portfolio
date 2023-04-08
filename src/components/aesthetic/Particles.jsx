import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = () => {
  const particles = useRef();
  const count = 10000; // Number of particles

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const gridSize = Math.sqrt(count);

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        pos[idx] = (i - gridSize / 2) * 1.5;
        pos[idx + 1] = (j - gridSize / 2) * 1.5;
        pos[idx + 2] = 0;
      }
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.current.rotation.y = time * 0.001;

    const gridSize = Math.sqrt(count);

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        const x = particles.current.geometry.attributes.position.array[idx];
        const y = particles.current.geometry.attributes.position.array[idx + 1];

        particles.current.geometry.attributes.position.array[idx + 2] =
          2 * Math.sin(time + x * 0.5) * Math.cos(time + y * 0.5);
      }
    }

    particles.current.geometry.attributes.position.needsUpdate = true;
    particles.current.material.uniforms.time.value = time;
  });

  const geometry = new THREE.BufferGeometry().setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  const vertexShader = `
  varying float vOpacity;

  void main() {
    vOpacity = position.x + 50.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 1.0;
  }
`;

  const fragmentShader = `
  uniform float time;
  varying float vOpacity;

  void main() {
    float opacity = abs(sin((time + vOpacity) * 0.5));
    gl_FragColor = vec4(1.0, 1.0, 1.0, opacity);
  }
`;

  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      time: { value: 0 },
    },
    transparent: true,
  });

  const points = new THREE.Points(geometry, material);

  return <primitive ref={particles} object={points} />;
};

const Particles = () => {
  return (
    <Canvas
      style={{ background: "black" }}
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      <ambientLight />
      <ParticleSystem />
    </Canvas>
  );
};

export default Particles;
