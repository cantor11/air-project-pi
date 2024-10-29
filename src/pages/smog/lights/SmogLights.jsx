import { PointLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";

/**
 * Lights component defines the lighting setup for the 3D scene.
 * It adds ambient light to the scene to provide basic illumination.
 */

const SmogLights = () => {
  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 1, "purple");

  return (
    <>
    <ambientLight intensity={0.33} />

    <pointLight
    ref={pointLightRef}
    color="#ffffff" // White light for a moon-like glow
    intensity={30} // Adjust intensity as needed
    distance={1200} // How far the light reaches
    decay={0.3} // Controls the rate at which the light diminishes
    position={[-530, 300, -310]} // Centered on the moon's position
    shadow-mapSize={[920, 920]}
    shadow-camera-far={50}
    castShadow
    />

    

    </>
  )

};

export default SmogLights;