import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import {
  GeometricDuo,
  CrystalCluster,
  FloatingSpheres,
  TorusRing,
  AbstractSculpture,
  MinimalSingle
} from "./GlassModels";

// ========================================
// 🎨 CHOOSE YOUR 3D MODEL HERE:
// ========================================
// Options:
// 1. GeometricDuo - Two geometric shapes (dodecahedron + icosahedron)
// 2. CrystalCluster - Center crystal with 4 surrounding smaller crystals
// 3. FloatingSpheres - Three floating glass spheres of different sizes
// 4. TorusRing - Torus ring with a sphere in the center
// 5. AbstractSculpture - Abstract crossed capsule shapes
// 6. MinimalSingle - Single large icosahedron (most minimal)

const SELECTED_MODEL = GlassPlanet; // 👈 Change this to switch models

export const CanvasContainer = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3} 
          maxPolarAngle={Math.PI / 1.4} 
          minPolarAngle={Math.PI / 2.6} 
        />
        
        {/* Soft lighting for glass effect */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#cccccc" />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />

        <Suspense fallback={null}>
           <SELECTED_MODEL />
        </Suspense>
      </Canvas>
    </div>
  );
};
