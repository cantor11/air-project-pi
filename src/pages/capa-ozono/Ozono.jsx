import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Factory from "./world/Factory";
import Header from "../../components/header/Header";
import "./Ozono.css";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import IntroductionText from "./world/IntroductionText";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import SmokeScenario from "./world/SmokeScenario";
import Staging from "./world/Staging";
import SensitizationText from "./world/SensitizationText";
import { Physics } from "@react-three/rapier";
import Floor from "./world/Floor";
import Interactions from "./world/Interactions";
import SolutionText from "./world/SolutionText";

/**
 * This component defines a 3D webpage layout focusing on environmental issues, specifically air pollution
 * and smog, using React Three Fiber. It renders a scene with elements like factory buildings, smog, 
 * and introductory text to highlight the air pollution problem.
 * 
 * Components included:
 * - Header: Displays a header at the top of the page.
 * - KeyboardControls: Handles user keyboard interactions for navigation.
 * - Canvas: Sets up the 3D rendering environment with specific lighting, controls, and scenarios.
 */

const Ozono = () => {
  // Sets initial camera position to emphasize elements in the scene
  const cameraSettings = {
    position: [-17, 3, 0],
    rotation: [0, -Math.PI/2, 0],
  };

  // Configures keyboard controls for user navigation within the scene
  const map = useMemo(
    () => [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "back", keys: ["ArrowDown", "KeyS"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "escape", keys: ["Escape"] },
    ], 
    []
  );

  return (
    <>
      <Header /> {/* Renders the page header */}
      <div className="ozone-container">
        {/* Initializes keyboard controls for 3D navigation */}
        <KeyboardControls map = {map}>
          {/* Canvas for the 3D scene with shadows and camera settings */}
          <Canvas shadows camera={cameraSettings}>
            <Suspense fallback={null}> {/* Loads complex elements with a fallback */}
              <Controls /> {/* Enables user camera control */}
              <Lights /> {/* Adds lighting to the scene */}
            </Suspense>
            <Physics gravity={[0, -9.8, 0]}>
            <Factory /> {/* 3D model of a factory, representing industrial pollution */}
              <Floor />
            </Physics>
            <SmokeScenario />  {/*Scenario simulating smoke/smog effects */}
            <IntroductionText /> {/* Introductory text describing the air pollution issue */}
            <SensitizationText />
            <Interactions />
            <SolutionText />
            <Staging /> {/* Background and environment settings */}
          </Canvas>
          <Loader /> {/* Shows a loading indicator while the scene loads */}
        </KeyboardControls>
      </div>
    </>
  );
};

export default Ozono;
