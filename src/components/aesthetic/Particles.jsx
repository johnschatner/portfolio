import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = () => {
  const particles = useRef();
  const count = 10000; // Number of particles
  const gridSize = Math.sqrt(count);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const gridSize = Math.sqrt(count);

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        pos[idx] = (i - gridSize / 2) * 1.0;
        pos[idx + 1] = (j - gridSize / 2) * 1.0;
        pos[idx + 2] = 0;
      }
    }
    return pos;
  }, [count]);

  const vertexShader = `
  uniform float time;
  attribute float waveHeight;
  varying float vOpacity;

  void main() {
    vOpacity = waveHeight; // set opacity based on wave height
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 1.0;
  }
`;

  const fragmentShader = `
  uniform float time;
  varying float vOpacity;

  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
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

  const geometry = new THREE.BufferGeometry().setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  const waveHeights = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    // create opacity clusters
    if (i < 5000) {
      waveHeights[i] = 0.0;
    } else if (i < 7500) {
      waveHeights[i] = 1.0;
    } else {
      waveHeights[i] = 0.5;
    }
  }
  geometry.setAttribute(
    "waveHeight",
    new THREE.BufferAttribute(waveHeights, 1)
  );

  const points = new THREE.Points(geometry, material);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.current.rotation.y = time * 0.001;

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        const x = particles.current.geometry.attributes.position.array[idx];
        const y = particles.current.geometry.attributes.position.array[idx + 1];

        const wave1 = 2 * Math.sin(time + x * 0.5) * Math.cos(time + y * 0.5);
        const wave2 =
          1.5 *
          Math.sin(time * 1.5 + x * 0.25) *
          Math.cos(time * 1.5 + y * 0.25);
        const wave3 =
          Math.sin(time * 0.75 + x * 0.75) * Math.cos(time * 0.75 + y * 0.75);

        particles.current.geometry.attributes.position.array[idx + 2] =
          wave1 + wave2 + wave3;

        // calculate wave height and adjust range (0.0-1.0)
        particles.current.geometry.attributes.waveHeight.array[idx / 3] =
          (wave1 + wave2 + wave3) * 0.1 + 0.5;
      }
    }

    particles.current.geometry.attributes.waveHeight.needsUpdate = true;
    particles.current.geometry.attributes.position.needsUpdate = true;
    particles.current.material.uniforms.time.value = time;
  });

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
