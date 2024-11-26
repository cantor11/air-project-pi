import React, { useRef, useMemo, useState, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

/**
 * Factory Component
 * This component renders a 3D factory model using a GLTF file. 
 * It utilizes various textures to enhance the realism of the factory's floor and other elements.
 * The component consists of multiple meshes that represent different parts of the factory,
 * each with specific materials and textures applied to them. Additionally, shadow casting and receiving
 * are set up for realistic lighting effects within the scene.
 */

export default function Factory(props) {
  const { nodes, materials } = useGLTF('/models-3d/factory.glb')
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name='leaves1'
        castShadow
        geometry={nodes.Cube011_Cube036.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves2'
        castShadow
        geometry={nodes.Cube013_Cube038.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves3'
        castShadow
        geometry={nodes.Cube014_Cube025.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves4'
        castShadow
        geometry={nodes.Cube016_Cube040.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves5'
        castShadow
        geometry={nodes.Cube018_Cube042.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves6'
        castShadow
        geometry={nodes.Cube020_Cube044.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='mainRoad'
        geometry={nodes.Cube032_Cube066.geometry}
        material={materials.None}
      />
      <mesh
        name='mainRoad2'
        geometry={nodes.Cube033_Cube067.geometry}
        material={materials.None}
      />
      <mesh
        name='mainRoad3'
        geometry={nodes.Cube038_Cube065.geometry}
        material={materials.None}
      />      
      <mesh
        name='factory'
        geometry={nodes.Plane002_Plane004_1.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='accessories'
        castShadow
        geometry={nodes.Plane002_Plane004_2.geometry}
        material={materials['Material.006']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/factory.glb')