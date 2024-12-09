import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Arrow = (props) => {
  const { nodes, materials } = useGLTF('assets/quiz/arrow.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.064}>
          <group
            name="ebf0132a6b024732bd51bd07f5394ebbfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group
                name="Cube001"
                rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
                scale={[100.232, 400.929, 99.913]}>
                <mesh
                  name="Cube001_Material001_0"
                  geometry={nodes.Cube001_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Arrow;
useGLTF.preload('assets/quiz/arrow.glb')