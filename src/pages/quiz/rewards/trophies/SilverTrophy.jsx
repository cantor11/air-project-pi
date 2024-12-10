import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const SilverTrophy = (props) => {
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
                name="silver"
                position={[70.289, 382.827, 2803.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[19.508, 19.508, 5.76]}>
                <RigidBody restitution={0.4}>
                <mesh
                  name="Cube052_Material267_0"
                  geometry={nodes.Cube052_Material267_0.geometry}
                  material={materials['Material.267']}
                />
                <mesh
                  name="Cube052_Material266_0"
                  geometry={nodes.Cube052_Material266_0.geometry}
                  material={materials['Material.266']}
                />
                <mesh
                  name="Cube052_Material268_0"
                  geometry={nodes.Cube052_Material268_0.geometry}
                  material={materials['Material.268']}
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
export default SilverTrophy;
useGLTF.preload('assets/quiz/trophies.glb')