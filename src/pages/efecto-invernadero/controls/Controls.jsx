import { OrbitControls } from "@react-three/drei";

/**
 * Controls component provides orbit controls for a 3D scene using 
 * the OrbitControls from the Drei library. It allows users to 
 * interactively rotate, zoom, and pan the camera within the specified 
 * constraints for polar and azimuth angles, and for zoom and pan, focusing on a specific target.
 */

const Controls = () => {
  
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 0.4}
      minPolarAngle={Math.PI * 0.3}
      maxAzimuthAngle={Math.PI * 0.1}
      minAzimuthAngle={-Math.PI * 0.1}
      target={[0, 0, 0]}
      enableZoom={false}
      enablePan={false}
    />
  );
};

export default Controls;
