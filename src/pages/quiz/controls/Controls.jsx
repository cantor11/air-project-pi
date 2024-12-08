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
      target={[-1, -0.1, 0]}
      panSpeed={0.1}
      screenSpacePanning={true}
      OrbitControls maxDistance={20}
    />
  );
};

const Controlss = () => {
  
  return (
    <FirstPersonControls 
      lookSpeed={0.3}
      movementSpeed={3}
      activeLook={true}
    />
  );
};

export default Controls;