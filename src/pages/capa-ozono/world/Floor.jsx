import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
  const PATH = useMemo(() => "materials/floor-factory/brick_villa_floor_", []);
  
  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg",
  })
  
    return (
      <group {...props} dispose={null}>
        <RigidBody type="static">
        <mesh name='MainFloor' rotation-x={Math.PI * 1.5} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />  
          <meshStandardMaterial color={"black"}/>
        </mesh>
        </RigidBody>
        <mesh name='shadowFloor' receiveShadow rotation-x={Math.PI * 1.5} position={[0, 0.39, 0]}>
          <planeGeometry args={[30, 30]} />  
          <shadowMaterial opacity={0.5}/>
        </mesh>
        <mesh receiveShadow rotation-x={Math.PI * 0.5} position={[-10.5, 0.38, 5.25]}>
          <boxGeometry args={[4, 2, 0.1]}/>
          <meshStandardMaterial 
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
          />
        </mesh>
        <mesh receiveShadow rotation-x={Math.PI * 0.5} position={[-13.5, 0.38, 0]}>
          <boxGeometry args={[2, 32, 0.1]}/>
          <meshStandardMaterial 
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
          />
        </mesh>
        <mesh receiveShadow rotation-x={Math.PI * 0.5} position={[16, 0.38, 0]}>
          <boxGeometry args={[2, 32, 0.1]}/>
          <meshStandardMaterial 
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
          />
        </mesh>
        <mesh receiveShadow rotation-x={Math.PI * 0.5} position={[0, 0.38, 15]}>
          <boxGeometry args={[30, 2, 0.1]}/>
          <meshStandardMaterial 
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
          />
        </mesh>
        <mesh receiveShadow rotation-x={Math.PI * 0.5} position={[0, 0.38, -15]}>
          <boxGeometry args={[30, 2, 0.1]}/>
          <meshStandardMaterial 
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
          />
        </mesh>
      </group>
    );
  };
  
  export default Floor;