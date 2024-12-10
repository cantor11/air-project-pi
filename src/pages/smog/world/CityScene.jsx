import MiniCity from "./MiniCity";
import SkylineCity from "./SkylineCity";
import Moon from "./Moon";
import { useRef } from 'react';
import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

/**
 * `MiniCityScene` Component
 *
 * This component defines and organizes the 3D elements of the smog scene, including
 * a rotating `MiniCity`, a background `SkylineCity`, and the Moon. 
 * 
 * Both `miniCityRef` and `skylineRef` references are used to apply rotation to 
 * the respective city components over time, creating a dynamic effect.
 */

const CityScene = () => {
    const miniCityRef = useRef(null);
    const skylineRef = useRef(null);
  
    //useFrame((state, delta) => {
    //  miniCityRef.current.rotation.y += 0.03 * delta; // Rotates the mini city on the y-axis
    //});
  
    useFrame((state, delta) => {
      skylineRef.current.rotation.y += 0.04 * delta; // Rotates the skyline city on the y-axis
    });
  
    return (
      <>
      <group>
        <Center ref={miniCityRef} position={[0, 160, 0]}>
          <mesh position={[0, 0, -50]} scale={[0.1, 0.1, 0.1]}>
            <MiniCity />
          </mesh>
          <mesh ref={skylineRef} position={[0, 0, -200]} scale={[25, 40, 25]}>
            <SkylineCity />
          </mesh>
        </Center>
        <mesh position={[-550, 330, -320]} scale={[30, 30, 30]}>
          <Moon />
        </mesh>
        <RigidBody type='fixed'>
        <mesh receiveShadow position={[0, -9.5, 0]} scale={[110, 1, 110]}>
          <cylinderGeometry args={[10, 10, 0.1, 32]} /> 
          <meshBasicMaterial color="black" receiveShadow  />
        </mesh>
        </RigidBody>
      </group>
      </>
    );
  };

export default CityScene