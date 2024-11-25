import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Header from "../../components/header/Header";
import { Loader } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import HomeText from "./world/HomeText";
import { EarthModel } from "./world/EarthModel";
import { SunModel } from "./world/SunModel";
import Staging from "./staging/Staging";

//import { Perf } from "r3f-perf"; //performance stats

/**
 * Home Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize the section for the specific enviromental problem "greenhouse effect"
 * with an introduction. It incorporates a `Header` for navigation and utilizes 
 * `Suspense` for lazy loading of components like `Controls` and `Lights`. 
 * The scene aims to enhance user engagement and understanding of this specific topic.
 */

const HomeEfecInv = () => {
  const cameraSettings = useMemo(() => (
    {
      position: [0, 100, 100],
    }
  ), []); 

  return (
    <>
    <Header />
      <div className="container">
        <Canvas camera={cameraSettings} shadows>
          <Suspense fallback={null}>
            <Controls />
            <Lights />
          </Suspense>
          <Staging />
          <EarthModel position={[-1000,-300,-300]} scale={100} receiveShadow/>
          <SunModel position={[460, 150, -50]} scale={30}/>
          <HomeText />
          <mesh position={[-200, -60,-100]} castShadow>
            <sphereGeometry args={[20, 32, 32]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default HomeEfecInv;