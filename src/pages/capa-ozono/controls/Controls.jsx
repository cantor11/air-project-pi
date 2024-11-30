import { OrbitControls } from "@react-three/drei";


/**
 * Controls Component
 * This component integrates Pointer Lock controls into the 3D scene,
 * allowing users to navigate through the environment using their mouse
 * while hiding the cursor. This is particularly useful for immersive
 * experiences, such as walking through a 3D space without interface
 * distractions.


const Controls = () => {
  return (
    <FirstPersonControls   
      lookSpeed={0.2}
      lookVertical={false}
      
    />
  );
};
 */

const Controls = () => {
  
  return (
    <OrbitControls
      target={[1, 2, 0]}
      maxPolarAngle={Math.PI / 2}  
      minPolarAngle={0} 
      minDistance={12}
      panSpeed={0.1}
      screenSpacePanning={true}
      OrbitControls maxDistance={20}
    />
  );
};

export default Controls;