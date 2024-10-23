import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Header from "../../components/header/Header";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
//import { Perf } from "r3f-perf"; //performance stats

const Home = () => {
  const cameraSettings = {
    position: [0, 15, 10],
  };

  return (
    <>
    <Header />
      <div className="container">
        <Canvas camera={cameraSettings}>
          <Suspense fallback={null}>
            <Controls />
            <Lights />

            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="white" /> 
            </mesh>

          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Home;
