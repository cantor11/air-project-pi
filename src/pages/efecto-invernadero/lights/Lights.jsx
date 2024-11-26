import { useEffect, useRef } from "react";
import { Object3D } from "three";
//import { useHelper } from "@react-three/drei";

/**
 * Lights component defines the lighting setup for the 3D scene.
 * It adds spot light to the scene to provide ilumination focusing on a target.
 */


const Lights = () => {
  const spotLightRef = useRef();
  const targetRef = useRef();
  //useHelper(spotLightRef, SpotLightHelper, 0, "green");

  useEffect(() => {
    if (spotLightRef.current && targetRef.current) {
      // Asign second's light target
      spotLightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <>
      <spotLight
        castShadow={true}
        color={"lightyellow"}
        position={[27, 8, 10]}
        intensity={5000000}
        angle={Math.PI / 5}
        distance={1000}
      />
      <spotLight
        ref={spotLightRef}
        castShadow={true}
        color={"lightyellow"}
        position={[0, 500, -300]}
        intensity={5000000*(10**0)}
        angle={Math.PI / 5}
        distance={1100}
      />
      <group ref={targetRef} position={[-1300, 0, -300]} />
    </>
  )
};

export default Lights;