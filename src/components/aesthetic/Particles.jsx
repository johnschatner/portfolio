import React, { useRef, useMemo, useState, useEffect, useContext } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Stats from "stats.js";
import { PortfolioContext } from "../main/PortfolioContext";

const ParticleSystem = () => {
  const particles = useRef();
  const count = 7400; // Number of particles
  const particleSpacing = 1;
  const gridSize = Math.sqrt(count * 1.69);
  const {
    THEME,
    BACKGROUND,
    targetOpacity,
    currentOpacity,
    setCurrentOpacity,
    isHovering,
  } = useContext(PortfolioContext);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const transitionSpeed = 0.01;

  const [particleColor, setParticleColor] = useState({
    r: 0.8,
    g: 1.0,
    b: 1.0,
  });

  const updateParticleColor = () => {
    if (THEME === "dark") {
      setParticleColor({ r: 0.8, g: 1.0, b: 1.0 }); // Set color to black
    } else {
      console.log("Set to white");
      setParticleColor({ r: 0, g: 0, b: 0 }); // Set color to original color
    }
  };

  useEffect(() => {
    updateParticleColor(); // Update the color initially
  }, [THEME]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.particleColor.value.set(
        particleColor.r,
        particleColor.g,
        particleColor.b
      );
    }
  }, [particleColor]);

  const { viewport } = useThree();
  const pixelRatio = window.devicePixelRatio;

  const positions = useRef(new Float32Array(count * 3));

  useEffect(() => {
    const updatePositions = () => {
      const width = (viewport.width / pixelRatio) * particleSpacing;
      const height = (viewport.height / pixelRatio) * particleSpacing;

      for (let i = 0, idx = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++, idx += 3) {
          positions.current[idx] = (i / (gridSize - 2)) * width - width / 2;
          positions.current[idx + 1] =
            (j / (gridSize - 1)) * height - height / 2;
          positions.current[idx + 2] = 0;
        }
      }
    };

    updatePositions();

    const handleResize = () => {
      updatePositions();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewport, pixelRatio, gridSize, particleSpacing]);

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
  uniform vec3 particleColor;
  varying float vOpacity;
  
  void main() {
    gl_FragColor = vec4(particleColor, vOpacity);
  }
`;

  const waveHeights = new Float32Array(count);
  const waveOffsets = new Float32Array(count * 2);
  for (let i = 0, idx = 0; i < count; i++, idx += 2) {
    waveOffsets[idx] = 0.1 + Math.random() * 1.5;
    waveOffsets[idx + 1] = Math.random() * 2 * Math.PI;

    // create waves with random amplitude
    waveHeights[i] = 0.05 + Math.random() * 0.5;
  }
  const opacityArray = new Float32Array(count);
  opacityArray.fill(0);

  const materialRef = useRef(null);
  const geometryRef = useRef(null);

  const material = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        time: { value: 0 },
        aspect: { value: 1 },
        particleColor: {
          value: new THREE.Vector3(
            particleColor.r,
            particleColor.g,
            particleColor.b
          ),
        },
      },
      transparent: true,
    });

    materialRef.current = material;
    return material;
  }, []);

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.BufferAttribute(positions.current, 3)
    );

    geometry.setAttribute(
      "waveOffset",
      new THREE.BufferAttribute(waveOffsets, 2)
    );
    geometry.setAttribute(
      "waveHeight",
      new THREE.BufferAttribute(waveHeights, 1)
    );
    geometry.setAttribute(
      "opacity",
      new THREE.BufferAttribute(opacityArray, 1)
    );

    geometryRef.current = geometry;
    return geometry;
  }, []);

  const points = new THREE.Points(geometry, material);

  // Easing function for smooth transitions
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.2;
    const { width, height } = state.viewport;
    const opacityTransitionSpeed = 0.01;

    // Update the transitionProgress based on the hovering status
    const newTransitionProgress = isHovering
      ? Math.min(transitionProgress + transitionSpeed, 1)
      : Math.max(transitionProgress - transitionSpeed, 0);
    setTransitionProgress(newTransitionProgress);

    // Calculate eased progress for smoother transitions
    const easedProgress = easeInOutCubic(newTransitionProgress);

    // Calculate the new currentOpacity values by gradually approaching targetOpacity
    const newCurrentOpacity = currentOpacity.map((value, idx) => {
      const diff = targetOpacity[idx] - value;
      const delta =
        Math.sign(diff) * Math.min(Math.abs(diff), opacityTransitionSpeed);
      return value + delta;
    });

    setCurrentOpacity(newCurrentOpacity);

    for (let i = 0, idx = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++, idx += 3) {
        particles.current.geometry.attributes.position.array[idx] =
          positions.current[idx];
        particles.current.geometry.attributes.position.array[idx + 2] =
          positions.current[idx + 1];

        const x = particles.current.geometry.attributes.position.array[idx];
        const y = particles.current.geometry.attributes.position.array[idx + 1];

        const wave1 = 4 * Math.sin(time + x * 0.2) * Math.cos(time + y * 0.8);
        const wave2 =
          3.5 *
          Math.sin(time * 1.5 + x * 0.25) *
          Math.cos(time * 1.5 + y * 0.25);
        const wave3 =
          4 *
          Math.sin(time * 0.75 + x * 0.75) *
          Math.cos(time * 0.75 + y * 0.75);

        const waveHeight = (wave1 + wave2 + wave3) * 0.2;

        if (!isHovering) {
          particles.current.geometry.attributes.position.array[idx + 2] =
            waveHeight * -3;
        }

        // Calculate the new wave height for hovering
        const hoverWave1 =
          -10 * Math.cos(time + x * 0.1) * Math.cos(time + y * 0.4);
        const hoverWave2 =
          -4 * Math.cos(time * 1.5 + x * 0.5) * Math.cos(time * 1.5 + y * 0.5);
        const hoverWave3 =
          -10 *
          Math.cos(time * 0.75 + x * 0.75) *
          Math.sin(time * 0.75 + y * 0.75);
        const hoverWaveHeight = (hoverWave1 + hoverWave2 + hoverWave3) * 0.2;

        // Interpolate between the original wave height and the new wave height when hovering using the eased progress
        const finalWaveHeight =
          (1 - easedProgress) * waveHeight + easedProgress * hoverWaveHeight;
        particles.current.geometry.attributes.position.array[idx + 2] =
          finalWaveHeight * -2;

        const opacity = waveHeight < 0 ? 0.05 : waveHeight * BACKGROUND;

        particles.current.geometry.attributes.opacity.array[idx / 3] =
          opacity * newCurrentOpacity[idx / 3];
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
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0); // Show FPS panel (0: fps, 1: ms, 2: mb, 3+: custom)
    document.body.appendChild(stats.dom);

    const animate = () => {
      stats.begin();
      stats.end();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      document.body.removeChild(stats.dom);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        camera={{ position: [0, 0, 14], fov: 75 }}
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
