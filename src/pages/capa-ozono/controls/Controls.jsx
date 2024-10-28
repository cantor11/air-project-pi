import { FirstPersonControls  } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";

/**
 * Controls component provides orbit controls for a 3D scene using 
 * the FirstPersonControls from the Drei library. It allows users to 
 * interactively rotate, zoom, and pan the camera within the specified 
 * constraints for polar and azimuth angles, focusing on a specific target.
 */

const Controls = () => {
  const [activeLook, setActiveLook] = useState(false);
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (event.button === 0) { 
        setActiveLook(true);
      }
    };

    const handleMouseUp = () => {
      setActiveLook(false);
    };

    gl.domElement.addEventListener('mousedown', handleMouseDown);
    gl.domElement.addEventListener('mouseup', handleMouseUp);


    return () => {
      gl.domElement.removeEventListener('mousedown', handleMouseDown);
      gl.domElement.removeEventListener('mouseup', handleMouseUp);
    };
  }, [gl]);

  return (
    <FirstPersonControls  
        args={[camera, gl.domElement]}
        lookSpeed={0.15}
        movementSpeed={4}      
        activeLook={activeLook}
    />
  );
};

export default Controls;