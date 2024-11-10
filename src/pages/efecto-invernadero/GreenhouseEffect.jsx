import { Suspense, useCallback, useMemo } from "react";
import { Canvas } from '@react-three/fiber';
import { Html, KeyboardControls, Loader } from "@react-three/drei";
import useGreeenhouseStore from "../../stores/greenhouse-store";

import Header from "../../components/header/Header";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Staging from "./staging/Staging";

import AwarenessText from "./world/AwarenessText";
import { EarthModel } from "./world/EarthModel";
import MoonModel from "./world/MoonModel";
import { SmokeRing } from "./world/SmokeRing";
import { SunModel } from "./world/SunModel";
import TitleText from "./world/TitleText";
import AwarenessAnimations from "./world/AwarenessAnimations";

import KeyboardListeners from "./world/KeyboardListeners";
import CameraPositioning from "./world/CameraPositioning";

//import { Perf } from "r3f-perf"; //performance stats

/**
 * GreenhouseEffect Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize the section for the specific enviromental problem "greenhouse effect"
 * with an introduction and an Awareness section, in which the user can better know the
 * effects, consequences and reasons of the problem. In adition, incorporates KeyControls
 * to do some functionalities when pressing specific keys with the keyboard.
 * It incorporates a `Header` for navigation and utilizes * `Suspense` for lazy loading
 * of components like `Controls` and `Lights`.
 * The scene aims to enhance user engagement and understanding of this specific topic.
 */

const GreenhouseEffect = () => {
  const { view, setView } = useGreeenhouseStore(); // Information brought from store

  // Function to change camera position and lookAt to Awareness section view
  const handleClickCameraAnimation = useCallback(() => {
    setView({
      isTitleView: true,
      isAwarenessSectionView: true,
    });
  }, [view]);

  // Keys for keyboard events
  const map = useMemo(
    () => [
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <>
      <Header />
      <div className="container">
        <KeyboardControls map={map}>
          <Canvas shadows>
            <CameraPositioning />
            <Suspense fallback={null}>
              <Controls />
              <Lights />
            </Suspense>
            <Staging />

            <EarthModel position={[-1000,-300,-300]} scale={100} receiveShadow/>
            <SmokeRing position={[-1000,-220,-300]} scale={100} rotation-x={Math.PI}/>
            <SmokeRing position={[-1000,-40,-300]} scale={90} />
            <SmokeRing position={[-1000,-300,-300]} scale={100} rotation-y={Math.PI/2}/>
            <SunModel position={[460, 150, -50]} scale={30}/>
            <MoonModel />

            {view.isAwarenessSectionView ? // If we are in Awareness section, activate Keyboard Events and Awareness animations
            <>
              <KeyboardListeners /> {/* Handle Keyboard events */}
              <AwarenessAnimations /> {/* Handle animations for Awareness Section */}
            </>
            :
            <>
              <TitleText /> {/* Show title or introduction in main view */}
              <Html center position={[0,-170,0]} > {/* Implementing 3D Html element */}
                <button onClick={handleClickCameraAnimation}> Sensibilización </button>
              </Html>
            </>}
          </Canvas>
          {view.isAwarenessSectionView ? <AwarenessText /> : null}
          <Loader />
        </KeyboardControls>
      </div>
    </>
  );
};

export default GreenhouseEffect;