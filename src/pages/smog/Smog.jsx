import { Canvas, useFrame } from "@react-three/fiber";
import SmogControls from "./controls/SmogControls";
import SmogLights from "./lights/SmogLights";
import Header from "../../components/header/Header";
import { Loader, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";
import MiniCity from "./world/MiniCity";
import SkylineCity from "./world/SkylineCity";
import Moon from "./world/Moon";

const MiniCityScene = () => {
  const miniCityRef = useRef(null);

  useFrame((state, delta) => {
    miniCityRef.current.rotation.y += 0.2 * delta;
  });

  return (
    <group ref={miniCityRef}>
      <Center position={[0, 150, 0]}>
        <mesh ref={miniCityRef} scale={[0.1, 0.1, 0.1]}>
          <MiniCity />
          <Moon />
        </mesh>
      </Center>
    </group>
  );
};

const SkylineCityScene = () => {
  return (
    <group>
        <mesh scale={[0.1, 0.1, 0.1]}>
          <SkylineCity />
        </mesh>
    </group>
  );
};

const Smog = () => {
  const cameraSettings = {
    position: [0, 600, 0],
    rotation: [0, 0, 0],
    near: 0.1, 
    far: 2000,
  };

  return (
    <>
      <Header />
      <div className="container">
        <Canvas camera={cameraSettings}>
          <Suspense fallback={null}>
            <SmogControls />
            <SmogLights />
            <MiniCityScene />
            <SkylineCityScene />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Smog;
