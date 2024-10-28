import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Factory from "./world/Factory";
import Header from "../../components/header/Header";
import "./Ozono.css"
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import IntroductionText from "./world/IntroductionText";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import SmokeScenario from "./world/SmokeScenario";

const Ozono = () => {
  const cameraSettings = {
    position: [-15, 2, 2],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "escape", keys: ["Escape"] },
    ],
    []
  );

  return (
    <>
    <Header />
      <div className="container">
        <KeyboardControls map={map}>
         <Canvas shadows camera={cameraSettings}>
           <Controls />
           <Lights />
           <Factory />
           <SmokeScenario/>
           <IntroductionText/>
         </Canvas>
        </KeyboardControls>
      </div>
    </>
  );
};

export default Ozono;