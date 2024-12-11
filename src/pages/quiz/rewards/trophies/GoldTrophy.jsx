import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const GoldTrophy = (props) => {
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
                name="gold"
                position={[70.289, 382.827, 2864.189]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[24.189, 24.189, 7.142]}>
                <RigidBody restitution={0.4}>
                <mesh
                  name="Cube051_Material265_0"
                  geometry={nodes.Cube051_Material265_0.geometry}
                  material={materials['Material.265']}
                />
                <mesh
                  name="Cube051_Material201_0"
                  geometry={nodes.Cube051_Material201_0.geometry}
                  material={materials['Material.201']}
                />
                <mesh
                  name="Cube051_Material181_0"
                  geometry={nodes.Cube051_Material181_0.geometry}
                  material={materials['Material.181']}
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
export default GoldTrophy;
useGLTF.preload('assets/quiz/trophies.glb')