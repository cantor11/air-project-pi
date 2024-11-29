import { Canvas } from "@react-three/fiber";
import SmogControls from "./controls/SmogControls";
import SmogLights from "./lights/SmogLights";
import Header from "../../components/header/Header";
import { Loader } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef, useCallback } from "react";
import SmogStaging from "./staging/SmogStaging";
import IntroText from "./world/IntroText";
import "./Smog.css";
import AwarenessText from "./world/AwarenessText";
import CityScene from "./world/CityScene";
import SmogSolutions from "./world/SmogSolutions";
import { Physics } from "@react-three/rapier";
import SmogPostProcessing from "./postprocessing/SmogPostProcessing";
import SmogSound from "./world/SmogSound";
// import { Perf } from "r3f-perf";

/**
 * `Smog` Component
 *
 * The main component for the smog 3D scene. It sets up the canvas, initializes
 * camera settings, and includes various subcomponents for scene elements, lighting, 
 * and controls. It also features a fade-in transition effect and a loading overlay.
 *
 * A delay in `isLoaded` is used to trigger a fade-out transition for smoother scene entry.
 */

const Smog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 250, 490]);
  const [freeNavigation, setFreeNavigation] = useState(false);
  const cameraRef = useRef();
  const audioRef = useRef(null); // Ref para el audio
  const [isPlaying, setIsPlaying] = useState(false);

  const cameraSettings = {
    position: cameraPosition,
    rotation: [0, 0, 0],
    near: 0.1,
    far: 2500,
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 600); // Delays the fade-out effect
  }, []);

  const handlePointerMove = useCallback(() => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.play(); 
      audioRef.current.setVolume(2); 
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <>
      <Header />
      <div className="smog-container">
        <div className={`transition-overlay ${isLoaded ? "fade-out" : ""}`}></div>
        <Canvas
          shadows
          camera={cameraSettings}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
          onPointerMove={handlePointerMove}
        >
          {/*<Perf position={"top-left"} />*/}
          <Suspense fallback={null}>
            <SmogControls freeNavigation={freeNavigation} />
            <SmogLights />
            <SmogStaging />
            <SmogPostProcessing />
            <Physics gravity={[0, -50, 0]}>
              <IntroText cameraRef={cameraRef} setCameraPosition={setCameraPosition} />
              <AwarenessText
                cameraRef={cameraRef}
                setCameraPosition={setCameraPosition}
                setFreeNavigation={setFreeNavigation}
              />
              <SmogSolutions />
              <CityScene />
            </Physics>
            <SmogSound ref={audioRef} />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Smog;