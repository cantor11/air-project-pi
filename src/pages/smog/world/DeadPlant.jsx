import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const DeadPlant = (props) => {
  const { nodes, materials } = useGLTF('assets/smog/dead_plant.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="22083d23d52d402680d94357b58c7242fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Cylinder002" rotation={[-Math.PI, 0, 0]}>
                <mesh
                  opacity={1}
                  transparent={false}
                  roughness={0.5}
                  metalness={0.1}
                  receiveShadow
                  name="Cylinder002_default_0"
                  geometry={nodes.Cylinder002_default_0.geometry}
                  material={materials['default']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default DeadPlant;
useGLTF.preload('assets/smog/dead_plant.glb')