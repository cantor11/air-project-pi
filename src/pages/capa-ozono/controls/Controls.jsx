import { OrbitControls } from "@react-three/drei";

/**
 * Controls component provides orbit controls for a 3D scene using 
 * the OrbitControls from the Drei library. It allows users to 
 * interactively rotate, zoom, and pan the camera within the specified 
 * constraints for polar and azimuth angles, focusing on a specific target.
 */

const Controls = () => {
  
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 0.4}
      minPolarAngle={Math.PI * 0.3}
      maxAzimuthAngle={Math.PI * 0.25}
      minAzimuthAngle={-Math.PI * 0.25}
      target={[0, 0, 0]}
    />
  );
};

export default Controls;
