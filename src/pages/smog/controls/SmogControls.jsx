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
      maxPolarAngle={Math.PI * 0.35}
      minPolarAngle={Math.PI * 0.35}
      maxAzimuthAngle={Math.PI * 0.03}
      minAzimuthAngle={-Math.PI * 0.03}
      enableDamping={true}
      dampingFactor={0.2}
      rotateSpeed={0.1}
      maxDistance={580}
      minDistance={520}
      enablePan={false}
      target={[0, 0, 0]}
    />
  );
};

export default SmogControls;
