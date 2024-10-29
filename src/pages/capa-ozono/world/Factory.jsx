import React, { useRef, useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Factory(props) {
  const { nodes, materials } = useGLTF('/models-3d/factory.glb')

  const PATH = useMemo(() => "materials/floor-factory/brick_villa_floor_", []);
  
  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg",
  })

  console.log(floorTexture);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube011_Cube036.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        geometry={nodes.Cube013_Cube038.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        geometry={nodes.Cube014_Cube025.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        geometry={nodes.Cube016_Cube040.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        geometry={nodes.Cube018_Cube042.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        geometry={nodes.Cube020_Cube044.geometry}
        material={materials['Material.001']}
      />
      <mesh
        geometry={nodes.Cube032_Cube066.geometry}
        material={materials.None}
      />
      <mesh
        geometry={nodes.Cube033_Cube067.geometry}
        material={materials.None}
      />
      <mesh
        geometry={nodes.Cube038_Cube065.geometry}
        material={materials.None}
      />
      <mesh
        geometry={nodes.Plane002_Plane004_1.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        geometry={nodes.Plane002_Plane004_2.geometry}
        material={materials['Material.006']}
      />
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
      <mesh receiveShadow rotation-x={Math.PI * 1.5} position={[0, 0.39, 0]}>
        <planeGeometry args={[30, 30]} />  
        <shadowMaterial opacity={0.5}/>
      </mesh>
      <mesh rotation-x={Math.PI * 1.5} position={[0, 0.2, 0]}>
        <planeGeometry args={[100, 100]} />  
        <meshStandardMaterial color={"black"}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models-3d/factory.glb')