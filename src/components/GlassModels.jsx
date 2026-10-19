import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Torus, Sphere } from "@react-three/drei";

// ========== OPTION 1: Geometric Duo (Current) ==========
export const GeometricDuo = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={meshRef} scale={2}>
          <dodecahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            roughness={0.1}
            chromaticAberration={0.02}
            anisotropy={0.2}
            distortion={0.3}
            distortionScale={0.3}
            temporalDistortion={0.3}
            color="#888888"
            resolution={512}
            opacity={0.6}
          />
        </mesh>

        <mesh position={[2, 1, -1]} scale={0.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            roughness={0.15}
            chromaticAberration={0.02}
            color="#999999"
            resolution={512}
            opacity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
};

// ========== OPTION 2: Crystal Cluster ==========
export const CrystalCluster = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
        {/* Center crystal */}
        <mesh position={[0, 0, 0]} scale={1.5}>
          <octahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={2}
            roughness={0.05}
            chromaticAberration={0.03}
            distortion={0.4}
            color="#aaaaaa"
            resolution={512}
            opacity={0.7}
          />
        </mesh>

        {/* Surrounding smaller crystals */}
        {[...Array(4)].map((_, i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = Math.cos(angle) * 1.5;
          const z = Math.sin(angle) * 1.5;
          return (
            <mesh key={i} position={[x, 0, z]} scale={0.6} rotation={[0, angle, 0]}>
              <octahedronGeometry args={[1, 0]} />
              <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={1}
                roughness={0.1}
                color="#999999"
                resolution={256}
                opacity={0.5}
              />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
};

// ========== OPTION 3: Floating Spheres ==========
export const FloatingSpheres = () => {
  return (
    <group>
      {/* Large main sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={2.5}
            roughness={0}
            chromaticAberration={0.04}
            anisotropy={0.5}
            distortion={0.5}
            distortionScale={0.4}
            color="#888888"
            resolution={512}
            opacity={0.6}
          />
        </Sphere>
      </Float>

      {/* Medium sphere */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Sphere args={[0.8, 32, 32]} position={[2.5, 1, -1]}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            roughness={0.05}
            chromaticAberration={0.03}
            color="#999999"
            resolution={256}
            opacity={0.5}
          />
        </Sphere>
      </Float>

      {/* Small sphere */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.7}>
        <Sphere args={[0.5, 32, 32]} position={[-1.8, -0.5, 0.5]}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            roughness={0.1}
            color="#aaaaaa"
            resolution={256}
            opacity={0.4}
          />
        </Sphere>
      </Float>
    </group>
  );
};

// ========== OPTION 4: Torus Ring ==========
export const TorusRing = () => {
  const torusRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.15;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y = -t * 0.3;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        {/* Torus */}
        <mesh ref={torusRef} scale={1.5}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={1.5}
            roughness={0.05}
            chromaticAberration={0.03}
            distortion={0.3}
            color="#888888"
            resolution={512}
            opacity={0.6}
          />
        </mesh>

        {/* Center sphere */}
        <mesh ref={sphereRef} scale={0.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            roughness={0.1}
            chromaticAberration={0.02}
            color="#999999"
            resolution={256}
            opacity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
};

// ========== OPTION 5: Abstract Sculpture ==========
export const AbstractSculpture = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Vertical elongated shape */}
        <mesh position={[0, 0, 0]} scale={[1, 2, 1]}>
          <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={1.5}
            roughness={0.08}
            chromaticAberration={0.03}
            distortion={0.4}
            color="#888888"
            resolution={512}
            opacity={0.65}
          />
        </mesh>

        {/* Horizontal crossing shape */}
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.8, 1.5, 0.8]}>
          <capsuleGeometry args={[0.4, 1.2, 4, 8]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.2}
            roughness={0.1}
            chromaticAberration={0.02}
            color="#999999"
            resolution={256}
            opacity={0.55}
          />
        </mesh>
      </Float>
    </group>
  );
};

// ========== OPTION 6: Minimal Single Shape ==========
export const MinimalSingle = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.05;
      meshRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        {/* Black Wireframe aesthetic for Swiss Minimalist */}
        <meshBasicMaterial 
            color="#000000" 
            wireframe={true}
            transparent={true}
            opacity={0.15}
        />
        {/* Inner solid glass for depth */}
        <mesh scale={0.99}>
            <icosahedronGeometry args={[1, 1]} />
             <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={0.5}
                roughness={0}
                chromaticAberration={0.05}
                anisotropy={0.1}
                color="#f0f0f0"
                resolution={512}
                opacity={0.2}
            />
        </mesh>
      </mesh>
    </Float>
  );
};

// ========== OPTION 7: DNA Helix ==========
export const DNAHelix = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        {[...Array(10)].map((_, i) => {
          const y = (i - 5) * 0.5;
          const angle = i * 0.5;
          return (
            <group key={i} position={[0, y, 0]} rotation={[0, angle, 0]}>
              <mesh position={[1, 0, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshBasicMaterial color="#000000" wireframe />
              </mesh>
              <mesh position={[-1, 0, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshBasicMaterial color="#000000" wireframe />
              </mesh>
              <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.1, 2, 0.1]}>
                 <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
                 <meshBasicMaterial color="#000000" transparent opacity={0.2} />
              </mesh>
            </group>
          );
        })}
      </Float>
    </group>
  );
};

// ========== OPTION 8: Glass Planet ==========
export const GlassPlanet = () => {
    const planetRef = useRef();
    const ringRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (planetRef.current) planetRef.current.rotation.y = t * 0.1;
        if (ringRef.current) ringRef.current.rotation.z = t * 0.05;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
            <mesh ref={planetRef}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="#000000" wireframe transparent opacity={0.1} />
            </mesh>
            <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
                <torusGeometry args={[2.2, 0.05, 16, 100]} />
                <meshBasicMaterial color="#000000" />
            </mesh>
            <mesh rotation={[Math.PI / 2.2, 0, 0]}>
                <torusGeometry args={[2.3, 0.02, 16, 100]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.5} />
            </mesh>
        </Float>
    );
};

// ========== OPTION 9: HyperCube (Tesseract) ==========
export const HyperCube = () => {
    const innerRef = useRef();
    const outerRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (innerRef.current) {
            innerRef.current.rotation.x = t * 0.2;
            innerRef.current.rotation.y = t * 0.3;
        }
        if (outerRef.current) {
            outerRef.current.rotation.x = -t * 0.1;
            outerRef.current.rotation.y = -t * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
            {/* Outer Cube */}
            <mesh ref={outerRef} scale={2}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="#000000" wireframe />
            </mesh>
            
            {/* Inner Cube */}
            <mesh ref={innerRef} scale={1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="#000000" wireframe transparent opacity={0.5} />
            </mesh>

            {/* Connecting Lines (Simulated Tesseract Edges) */}
            {[
                [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
                [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]
            ].map((pos, i) => (
                <mesh key={i} position={[pos[0]*0.75, pos[1]*0.75, pos[2]*0.75]}>
                    <boxGeometry args={[0.05, 0.05, 0.05]} />
                    <meshBasicMaterial color="#000000" />
                </mesh>
            ))}
        </Float>
    );
};
