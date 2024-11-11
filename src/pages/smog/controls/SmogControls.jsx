import { OrbitControls } from "@react-three/drei";

/**
 * Controls component provides orbit controls for a 3D scene using 
 * the OrbitControls from the Drei library. It allows users to 
 * interactively rotate, zoom, and pan the camera within the specified 
 * constraints for polar and azimuth angles, focusing on a specific target.
 */

const SmogControls = () => {
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 0.35} // Max upward tilt
      //minPolarAngle={Math.PI * 0.35} // Min downward tilt
      maxAzimuthAngle={Math.PI * 0.03} // Max horizontal rotation
      minAzimuthAngle={-Math.PI * 0.03} // Min horizontal rotation
      enableDamping={true} // Enable smooth damping
      dampingFactor={0.2} // Damping intensity
      rotateSpeed={0.1} // Rotation speed
      //maxDistance={580} // Max distance from target
      //minDistance={520} // Min distance from target
      enablePan={false} // Disable panning
      target={[0, 0, 0]} // Camera target position
    />
  );
};

export default SmogControls;