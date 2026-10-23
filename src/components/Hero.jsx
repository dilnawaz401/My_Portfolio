import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useMemo, useRef } from 'react';

function NeuralCore() {
  const groupRef = useRef();
  const ringRef = useRef();

  const nodes = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        angle: (index / 16) * Math.PI * 2,
        radius: 1.95 + (index % 3) * 0.5,
        lift: Math.sin(index * 1.5) * 0.85,
      })),
    []
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.32;
    groupRef.current.rotation.x = state.pointer.y * 0.22;
    groupRef.current.rotation.z = state.pointer.x * 0.18;
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.16;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.7} rotationIntensity={1.4} floatIntensity={1.2}>
        <mesh scale={1.8}>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshPhysicalMaterial
            color="#83d8ff"
            emissive="#4f46e5"
            emissiveIntensity={1.7}
            transparent
            opacity={0.48}
            transmission={0.9}
            roughness={0.12}
            metalness={0.3}
            thickness={1.2}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.6} floatIntensity={1.15}>
        <mesh scale={1.42}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.5} wireframe />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={0.9}>
        <mesh scale={0.72}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#c4b5fd" emissive="#a78bfa" emissiveIntensity={2.4} />
        </mesh>
      </Float>

      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.65, 0.012, 12, 96]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.42} />
        </mesh>
        <mesh rotation={[Math.PI / 2.7, 0.5, 0]}>
          <torusGeometry args={[3.15, 0.01, 12, 96]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.3} />
        </mesh>
      </group>

      {nodes.map((node, index) => {
        const x = Math.cos(node.angle) * node.radius;
        const z = Math.sin(node.angle) * node.radius;
        return (
          <Float key={index} speed={1.5 + (index % 4) * 0.3} floatIntensity={0.6}>
            <group position={[x, node.lift, z]}>
              <mesh>
                <sphereGeometry args={[0.075, 16, 16]} />
                <meshStandardMaterial emissive="#9ae6ff" color="#a5f3fc" emissiveIntensity={2.8} />
              </mesh>
              <mesh>
                <torusGeometry args={[0.7, 0.015, 12, 48]} />
                <meshBasicMaterial color="#67e8f9" transparent opacity={0.35} />
              </mesh>
            </group>
          </Float>
        );
      })}

      <Sparkles count={140} scale={[8, 8, 8]} color="#9ddcff" size={2.4} speed={0.4} />
      <Sparkles count={60} scale={[5, 5, 5]} color="#c4b5fd" size={4} speed={0.7} />
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const targetX = Math.sin(time * 0.16) * 0.9 + state.pointer.x * 1.05;
    const targetY = Math.sin(time * 0.22) * 0.45 + state.pointer.y * 0.7;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.045;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.045;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const HeroScene = () => {
  return (
    <div className="hero-scene" aria-label="3D neural network scene">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5.4], fov: 42 }}>
        <color attach="background" args={['#040818']} />
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 3, 4]} intensity={20} color="#60a5fa" />
        <pointLight position={[-4, -2, 3]} intensity={11} color="#c084fc" />
        <spotLight position={[0, 5, 5]} intensity={13} angle={0.45} penumbra={1} color="#67e8f9" />
        <NeuralCore />
        <CameraRig />
      </Canvas>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Aspiring AI/ML Engineer</span>
          <h1>
            Building Intelligence.
            <span>Engineering the Future.</span>
          </h1>
          <h2>Dilnawaz Ansari</h2>
          <p className="hero-subtitle">Aspiring AI/ML Engineer | Generative AI | Intelligent Systems</p>
          <p className="hero-description">
            I build intelligent applications using machine learning, natural language processing, and modern AI technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Connect
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <HeroScene />
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span>Scroll</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
};

export default Hero;
