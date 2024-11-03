
/**
 * Lights component defines the lighting setup for the 3D scene.
 * It adds spot light to the scene to provide illumination focusing on a target.
 */

import { useRef } from "react";

const Lights = () => {
  const spotLightRef = useRef();

  return (
    <>
      <spotLight
        ref={spotLightRef}
        castShadow={true}
        color={"lightyellow"}
        position={[27, 8, 10]}
        intensity={5000000}
        angle={Math.PI / 6}
        distance={1000}
      />
    </>
  )
};

export default Lights;