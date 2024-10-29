import { Canvas, useFrame } from "@react-three/fiber";
import SmogControls from "./controls/SmogControls";
import SmogLights from "./lights/SmogLights";
import Header from "../../components/header/Header";
import { Loader, Center } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import MiniCity from "./world/MiniCity";
import SkylineCity from "./world/SkylineCity";
import Moon from "./world/Moon";
import SmogStaging from "./staging/SmogStaging";
import IntroText from "./world/IntroText";
import "./Smog.css";

/**
 * `MiniCityScene` Component
 *
 * This component defines and organizes the 3D elements of the smog scene, including
 * a rotating `MiniCity`, a background `SkylineCity`, and the Moon. 
 * 
 * Both `miniCityRef` and `skylineRef` references are used to apply rotation to 
 * the respective city components over time, creating a dynamic effect.
 */

const MiniCityScene = () => {
  const miniCityRef = useRef(null);
  const skylineRef = useRef(null);

  useFrame((state, delta) => {
    miniCityRef.current.rotation.y += 0.03 * delta; // Rotates the mini city on the y-axis
  });

  useFrame((state, delta) => {
    skylineRef.current.rotation.y += 0.04 * delta; // Rotates the skyline city on the y-axis
  });

  return (
    <>
    <group>
      <Center ref={miniCityRef} position={[0, 160, 0]}>
        <mesh position={[0, 0, -50]} scale={[0.1, 0.1, 0.1]}>
          <MiniCity />
        </mesh>
        <mesh ref={skylineRef} position={[0, 0, -200]} scale={[25, 40, 25]}>
          <SkylineCity />
        </mesh>
      </Center>
      <mesh position={[-550, 330, -320]} scale={[30, 30, 30]}>
        <Moon />
      </mesh>
      <mesh receiveShadow position={[0, -9.5, 0]} scale={[110, 1, 110]}>
        <cylinderGeometry args={[10, 10, 0.1, 32]} /> 
        <meshStandardMaterial color="black" receiveShadow  />
      </mesh>
    </group>
    </>
  );
};

/**
 * `Smog` Component
 *
 * The main component for the smog 3D scene. It sets up the canvas, initializes
 * camera settings, and includes various subcomponents for scene elements, lighting, 
 * and controls. It also features a fade-in transition effect and a loading overlay.
 *
 * A delay in `isLoaded` is used to trigger a fade-out transition for smoother scene entry.
 */
const Smog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cameraSettings = {
    position: [0, 550, 0],
    rotation: [-Math.PI / 6, Math.PI / 4, 0],
    near: 0.1, 
    far: 2000,
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 600); // Delays the fade-out effect
  }, [])

  return (
    <>
      <Header />
      <div className="canvas-container">
        <div className={`transition-overlay ${isLoaded ? "fade-out" : ""}`}></div>
        <Canvas shadows camera={cameraSettings}>
          <Suspense fallback={null}>
            <SmogControls />
            <SmogLights />
            <SmogStaging />  
            <IntroText />        
            <MiniCityScene />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Smog;