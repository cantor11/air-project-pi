import { PointerLockControls  } from "@react-three/drei";

/**
 * Controls component provides orbit controls for a 3D scene using 
 * the FirstPersonControls from the Drei library. It allows users to 
 * interactively rotate, zoom, and pan the camera within the specified 
 * constraints for polar and azimuth angles, focusing on a specific target.
 */

const Controls = () => {
  return (
    <PointerLockControls    
    />
  );
};

export default Controls;