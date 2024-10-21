import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
//import { Perf } from "r3f-perf"; //performance stats

const Home = () => {
  const cameraSettings = {
    position: [0, 15, 15],
  };

  return (
    <>
      <Canvas camera={cameraSettings}>
        <Suspense fallback={null}>
          <Controls />
          <Lights />

          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" /> 
          </mesh>

        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
