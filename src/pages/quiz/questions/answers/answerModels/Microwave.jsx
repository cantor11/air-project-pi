import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Microwave = (props) => {
    const { nodes, materials } = useGLTF('assets/quiz/microwave.glb')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
          <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[10, 10, 10]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Microwaves_02_RGB_texture_0.geometry}
              material={materials.RGB_texture}
              rotation={[Math.PI, 0, Math.PI]}
            />
          </group>
        </group>
      </group>
    )
  }

export default Microwave
useGLTF.preload('assets/quiz/microwave.glb')