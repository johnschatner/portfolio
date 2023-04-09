import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = () => {
  const particles = useRef();
  const count = 20000; // Number of particles
  const gridSize = Math.sqrt(count);

  const { viewport } = useThree();
  const pixelRatio = window.devicePixelRatio;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const gridSize = Math.sqrt(count);

    // Calculate the dimensions of the canvas
    const width = viewport.width / pixelRatio;
    const height = viewport.height / pixelRatio;

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        // Update positions to fill the canvas
        pos[idx] = (i / (gridSize - 2)) * width - width / 2;
        pos[idx + 1] = (j / (gridSize - 1)) * height - height / 2;
        pos[idx + 2] = 0;
      }
    }
    return pos;
  }, [count, viewport, pixelRatio]);

  const vertexShader = `
  uniform float time;
  attribute float waveHeight;
  attribute float opacity;
  varying float vOpacity;
  
  void main() {
    vOpacity = opacity; // set opacity from buffer attribute
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
    gl_PointSize = 2.0;
  }
`;

  const fragmentShader = `
  uniform float time;
  varying float vOpacity;
  
  void main() {
    gl_FragColor = vec4(0.7, 1.0, 1.0, vOpacity);
  }
`;

  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      time: { value: 0 },
      aspect: { value: 1 },
    },
    transparent: true,
  });

  const geometry = new THREE.BufferGeometry().setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  const waveHeights = new Float32Array(count);
  const waveOffsets = new Float32Array(count * 2);
  for (let i = 0, idx = 0; i < count; i++, idx += 2) {
    waveOffsets[idx] = 0.1 + Math.random() * 1.5;
    waveOffsets[idx + 1] = Math.random() * 2 * Math.PI;

    // create waves with random amplitude
    waveHeights[i] = 0.05 + Math.random() * 0.5;
  }

  geometry.setAttribute(
    "waveOffset",
    new THREE.BufferAttribute(waveOffsets, 2)
  );
  geometry.setAttribute(
    "waveHeight",
    new THREE.BufferAttribute(waveHeights, 1)
  );

  const points = new THREE.Points(geometry, material);
  const opacityArray = new Float32Array(count);
  opacityArray.fill(0);
  geometry.setAttribute("opacity", new THREE.BufferAttribute(opacityArray, 1));

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.5;
    const { width, height } = state.viewport;

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        const x = particles.current.geometry.attributes.position.array[idx];
        const y = particles.current.geometry.attributes.position.array[idx + 1];

        const wave1 = 2 * Math.sin(time + x * 0.2) * Math.cos(time + y * 0.8);
        const wave2 =
          1.75 *
          Math.sin(time * 1.5 + x * 0.25) *
          Math.cos(time * 1.5 + y * 0.25);
        const wave3 =
          0.5 *
          Math.sin(time * 0.75 + x * 0.75) *
          Math.cos(time * 0.75 + y * 0.75);

        const waveHeight = (wave1 + wave2 + wave3) * 0.2;

        particles.current.geometry.attributes.position.array[idx + 2] =
          waveHeight * 0.05;

        const opacity = waveHeight < 0 ? 0 : waveHeight * 1;

        particles.current.geometry.attributes.opacity.array[idx / 3] = opacity;
      }
    }

    particles.current.geometry.attributes.position.needsUpdate = true;
    particles.current.geometry.attributes.opacity.needsUpdate = true;

    // update the aspect ratio and size of the material based on the viewport
    if (material.uniforms) {
      // make sure material has been created before updating
      material.uniforms.aspect.value = width / height;
      material.sizeAttenuation = false;
      material.size = Math.min(viewport.width, viewport.height) * 0.0075;
    }
  });

  return <primitive ref={particles} object={points} />;
};

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        camera={{ position: [0, 0, 20], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
        onResize={({ gl, camera }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }}
      >
        <ambientLight />
        <ParticleSystem />
      </Canvas>
    </div>
  );
};

export default Particles;
