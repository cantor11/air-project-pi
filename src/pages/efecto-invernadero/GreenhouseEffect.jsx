import { Suspense, useCallback, useEffect, useMemo } from "react";
import { Html, KeyboardControls, Loader } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import useGreeenhouseStore from "../../stores/greenhouse-store";

import Header from "../../components/header/Header";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Staging from "./staging/Staging";

import { EarthModel } from "./world/EarthModel";
import MoonModel from "./world/MoonModel";
import { SunModel } from "./world/SunModel";

import AwarenessAnimations from "./world/AwarenessAnimations";
import AwarenessText from "./world/AwarenessText";
import SolutionsAnimations from "./world/SolutionsAnimations";
import SolutionsText from "./world/SolutionsText";
import TitleText from "./world/TitleText";

import AwarenessKeyboardListeners from "./world/AwarenessKeyboardListeners";
import CameraPositioning from "./world/CameraPositioning";
import SolutionsKeyboardListeners from "./world/SolutionsKeyboardListeners";

//import { Perf } from "r3f-perf"; //performance stats

/**
 * GreenhouseEffect Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize the section for the specific enviromental problem "greenhouse effect"
 * with an introduction, an Awareness section and a Solutions section, in which the user can better know the
 * effects, consequences and reasons of the problem. In adition, incorporates KeyControls
 * to do some functionalities when pressing specific keys with the keyboard.
 * It incorporates a `Header` for navigation and utilizes * `Suspense` for lazy loading
 * of components like `Controls` and `Lights`.
 * The scene aims to enhance user engagement and understanding of this specific topic.
 * In addition, this component uses a 'CameraPositioning' component which will let
 * the user change the view to focus on different content in the page.
 * Every time this component is shown, it will show the Title view first,
 * to do that it will use a store made from Zustand
 */

const GreenhouseEffect = () => {
  const { view, setView } = useGreeenhouseStore(); // Information brought from store

  // Function to change camera position and lookAt to Awareness section view or Solutions section
  const handleClickCameraAnimation = useCallback((mostrarSensibilizacion) => {
    setView({
      isTitleView: true,
      isAwarenessSectionView: mostrarSensibilizacion,
      isSolutionsSectionView: !mostrarSensibilizacion
    });
  }, [view]);

  // Keys for keyboard events
  const map = useMemo(
    () => [
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
      { name: "esc", keys: ["Escape"] },
    ],
    []
  );

  // When the component is shown, set it to show the Title view first
  useEffect(() => {
    setView({
      isTitleView: true,
      isAwarenessSectionView: false,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <KeyboardControls map={map}>
          <Canvas shadows>
            <CameraPositioning /> {/* Component to handle camera positioning from one section to another */}
            <Suspense fallback={null}>
              <Controls />
              <Lights />
            </Suspense>
            <Staging />

            <EarthModel position={[-1000,-300,-300]} scale={100} receiveShadow/>
            <SunModel position={[460, 150, -50]} scale={30}/>
            <MoonModel />

            {view.isAwarenessSectionView ? // If we are in Awareness section, activate Awareness Keyboard Events and Animations
            <>
              <AwarenessKeyboardListeners /> {/* Handle Keyboard events */}
              <AwarenessAnimations /> {/* Handle animations for Awareness Section */}
            </>
            :
            view.isSolutionsSectionView ? // If we are in Solutions section, activate Solutions Keyboard Events and Animations
            <>
              <SolutionsKeyboardListeners /> {/* Handle Keyboard events */}
              <SolutionsAnimations /> {/* Handle animations for Solutions Section */}
            </>
            :
            <>
              <TitleText /> {/* Show title or introduction in main view */}
              <Html center position={[-100,-170,0]} > {/* Implementing 3D Html element */}
                <button onClick={() => handleClickCameraAnimation(true)}> Sensibilización </button>
              </Html>
              <Html center position={[100,-170,0]} > {/* Implementing 3D Html element */}
                <button onClick={() => handleClickCameraAnimation(false)}> Soluciones </button>
              </Html>
            </>}
          </Canvas>
          {view.isAwarenessSectionView ? <AwarenessText /> : null} {/* If we are in Awareness section, show the corresponding text */}
          {view.isSolutionsSectionView ? <SolutionsText /> : null} {/* If we are in Solutions section, show the corresponding text */}
          <Loader />
        </KeyboardControls>
      </div>
    </>
  );
};

export default GreenhouseEffect;