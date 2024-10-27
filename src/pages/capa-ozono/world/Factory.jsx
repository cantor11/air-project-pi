import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Factory(props) {
  const { nodes, materials } = useGLTF('/models-3d/factory.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_Cube036.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Cube038.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014_Cube025.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Cube040.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018_Cube042.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020_Cube044.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032_Cube066.geometry}
        material={materials.None}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033_Cube067.geometry}
        material={materials.None}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038_Cube065.geometry}
        material={materials.None}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_Plane004_1.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_Plane004_2.geometry}
        material={materials['Material.006']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/factory.glb')