import { Suspense, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { KeyboardControls, Loader } from "@react-three/drei";
import * as THREE from 'three';
import useGreeenhouseStore from "../../stores/greenhouse-store";

import Header from "../../components/header/Header";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Staging from "./staging/Staging";

import AwarenessText from "./world/AwarenessText";
import { EarthModel } from "./world/EarthModel";
import Moon from "./world/Moon";
import { SmokeRing } from "./world/SmokeRing";
import { SunModel } from "./world/SunModel";
import TitleText from "./world/TitleText";
import FrostBall from "./world/FrostBall";
import { SnowBallRocks } from "./world/SnowBallRocks";
import KeyboardListeners from "./world/KeyboardListeners";

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
  const [showAwarenessSection, setShowAwarenessSection] = useState(false);
  // states to handle camera animation
  const [isAnimating, setIsCameraAnimating] = useState(false);
  const targetPosition = useMemo(() => new THREE.Vector3(-600, -140, -150), []);
  const targetLookAt = useMemo(() => new THREE.Vector3(-1000, -300, -300), []);

  const targetPosition2 = useMemo(() => new THREE.Vector3(0, 100, 100), []);
  const targetLookAt2 = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const speed = 0.03;

  const { view, setView } = useGreeenhouseStore(); // Information brought from store

  const handleClickCameraAnimation = () => {
    setView({
      isTitleView: true,
    });
    setIsCameraAnimating(!isAnimating);
  };
  
  // Camera handler using `useThree` and animation with `useFrame`
  const CameraAnimation = () => {
    const { camera } = useThree();
    useFrame(() => {
      if (isAnimating) {
        // Interpolation to the position and orientation
        camera.position.lerp(targetPosition, speed);

        const currentLookAt = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
        currentLookAt.lerp(targetLookAt, speed);
        camera.lookAt(currentLookAt);

        // Stop animation when camera is close enough to the objective
        if (camera.position.distanceTo(targetPosition) < 0.1) {
          camera.position.copy(targetPosition);
          camera.lookAt(targetLookAt);
          setIsCameraAnimating(false);
        }
        setShowAwarenessSection(true); // When camera stops moving, show awareness section
      } else {
        // Interpolation to the position and orientation
        camera.position.lerp(targetPosition2, speed);

        const currentLookAt = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
        currentLookAt.lerp(targetLookAt2, speed);
        camera.lookAt(currentLookAt);

        // Stop animation when camera is close enough to the objective
        if (camera.position.distanceTo(targetPosition2) < 0.1) {
          camera.position.copy(targetPosition2);
          camera.lookAt(targetLookAt2);
          setIsCameraAnimating(false);
        }
        setShowAwarenessSection(false); // When camera stops moving, show main section
      }
    });
    return null;
  };

  const map = useMemo(
    () => [
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
      { name: "escape", keys: ["Escape"] },
    ],
    []
  );

  return (
    <>
      <Header />
      <div className="container">
      <KeyboardControls map={map}>
        <Canvas shadows>
          <CameraAnimation /> {/* Camera animation component */}
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
          <SnowBallRocks position={[-910,-750,-260]} scale={970}/>
          <FrostBall />
          <Moon />

          <TitleText />
          <KeyboardListeners />
        </Canvas>
        {showAwarenessSection ? 
          <>
            <AwarenessText />
            <button style={{ position: 'absolute' , bottom: '10%', left: '10%'}} onClick={handleClickCameraAnimation}>
              Volver
            </button>
          </>
          : <button style={{ position: 'absolute' , bottom: '10%' }} onClick={handleClickCameraAnimation}>Sensibilización </button> }
        <Loader />
        </KeyboardControls>
      </div>
    </>
  );
};

export default GreenhouseEffect;