import { PointerLockControls  } from "@react-three/drei";

/**
 * Controls Component
 * This component integrates Pointer Lock controls into the 3D scene,
 * allowing users to navigate through the environment using their mouse
 * while hiding the cursor. This is particularly useful for immersive
 * experiences, such as walking through a 3D space without interface
 * distractions.
 */

const Controls = () => {
  return (
    <PointerLockControls    
    />
  );
};

export default Controls;