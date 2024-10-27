import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Factory from "./world/Factory";
import Header from "../../components/header/Header";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";

const Ozono = () => {
  const cameraSettings = {
    position: [0, 5, 10],
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
         <Canvas camera={cameraSettings}>
           <Controls />
           <Lights />
           <Factory />
         </Canvas>
        </KeyboardControls>
      </div>
    </>
  );
};

export default Ozono;