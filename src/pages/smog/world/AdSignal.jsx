import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const AdSignal = (props) => {
    const { nodes, materials } = useGLTF('assets/smog/ad-signal.glb')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.014}>
          <group position={[0, 0, 1.29]}>
            <mesh
              geometry={nodes.Billboard_Billboard_Mat_1_0.geometry}
              material={materials.Billboard_Mat_1}
            />
            <mesh
              geometry={nodes.Billboard_Billboard_Mat_2_0.geometry}
              material={materials.Billboard_Mat_2}
            />
            <mesh
              geometry={nodes.Billboard_Billboard_Texture_0.geometry}
              material={materials.Billboard_Texture}
            />
          </group>
        </group>
      </group>
    )
  }
  
export default AdSignal
useGLTF.preload('assets/smog/ad-signal.glb')