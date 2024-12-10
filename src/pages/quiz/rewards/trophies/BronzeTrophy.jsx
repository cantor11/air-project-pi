import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const BronzeTrophy = (props) => {
  const { nodes, materials } = useGLTF('assets/quiz/trophies.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={4.5}>
          <group
            name="aafefebc44394b12a81165b7e3cb63f4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group
                name="bronze"
                position={[70.289, 382.827, 2750.79]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[16.789, 16.789, 4.957]}>
                <RigidBody restitution={0.4}>
                <mesh
                  name="Cube053_Material270_0"
                  geometry={nodes.Cube053_Material270_0.geometry}
                  material={materials['Material.270']}
                />
                <mesh
                  name="Cube053_Material269_0"
                  geometry={nodes.Cube053_Material269_0.geometry}
                  material={materials['Material.269']}
                />
                <mesh
                  name="Cube053_Material271_0"
                  geometry={nodes.Cube053_Material271_0.geometry}
                  material={materials['Material.271']}
                />
                </RigidBody>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default BronzeTrophy;
useGLTF.preload('assets/quiz/trophies.glb')