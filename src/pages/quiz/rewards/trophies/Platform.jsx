import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Platform = (props) => {
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
                name="Cube040"
                position={[60.753, 371.369, 2803.801]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[35.49, 95.539, 3.905]}>
                <RigidBody type='fixed'>
                <mesh
                  name="platform"
                  geometry={nodes.Cube040_Material213_0.geometry}
                  material={materials['Material.213']}
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
export default Platform;
useGLTF.preload('assets/quiz/trophies.glb')
