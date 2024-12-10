import { OrbitControls, FirstPersonControls } from "@react-three/drei";

/**
 * Controls component provides orbit controls for a 3D scene using 
 * the OrbitControls from the Drei library. It allows users to 
 * interactively rotate, zoom, and pan the camera within the specified 
 * constraints for polar and azimuth angles, and for zoom and pan, focusing on a specific target.
 */

const Controls = () => {
  
  return (
    <OrbitControls
      maxPolarAngle={Math.PI * 0.48}
      minPolarAngle={Math.PI * 0.46}
      maxAzimuthAngle={Math.PI * 0.54}
      minAzimuthAngle={Math.PI * 0.46}
      target={[-1, -0.1, 0]}
      screenSpacePanning={true}
      maxDistance={20}
      reverseOrbit={false} 
      enableZoom={false}
      enablePan={false}
      enableDamping={true} // Enable smooth damping
      dampingFactor={0.01} // Damping intensity
    />
  );
};

export default Controls;