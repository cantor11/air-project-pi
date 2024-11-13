import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { MeshBasicMaterial } from "three"

const Lungs = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/smog/lungs.glb')
  const { actions } = useAnimations(animations, group)

  const basicMaterial = new MeshBasicMaterial({ color: '#616161', flatShading: true, wireframe: false,  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="9344d3fda0e2430aa5008dbb222db7e7fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Pulmones_RAW001"
                  position={[0, 3955.666, 0]}
                  rotation={[-1.471, 0, 0]}
                  scale={29.019}>
                  <mesh
                    name="Pulmones_RAW001_mtl1002_0"
                    geometry={nodes.Pulmones_RAW001_mtl1002_0.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW001_mtl1002_0001"
                    geometry={nodes.Pulmones_RAW001_mtl1002_0001.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW001_mtl1002_0002"
                    geometry={nodes.Pulmones_RAW001_mtl1002_0002.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW001_mtl1002_0003"
                    geometry={nodes.Pulmones_RAW001_mtl1002_0003.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW001_mtl1002_0004"
                    geometry={nodes.Pulmones_RAW001_mtl1002_0004.geometry}
                    material={basicMaterial}
                  />
                </group>
                <group
                  name="Pulmones_RAW002"
                  position={[0, 3955.666, 0]}
                  rotation={[-1.471, 0, 0]}
                  scale={29.019}>
                  <mesh
                    name="Pulmones_RAW002_mtl1003_0"
                    geometry={nodes.Pulmones_RAW002_mtl1003_0.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW002_mtl1003_0001"
                    geometry={nodes.Pulmones_RAW002_mtl1003_0001.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW002_mtl1003_0002"
                    geometry={nodes.Pulmones_RAW002_mtl1003_0002.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW002_mtl1003_0003"
                    geometry={nodes.Pulmones_RAW002_mtl1003_0003.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW002_mtl1003_0004"
                    geometry={nodes.Pulmones_RAW002_mtl1003_0004.geometry}
                    material={basicMaterial}
                  />
                  <mesh
                    name="Pulmones_RAW002_mtl1003_0005"
                    geometry={nodes.Pulmones_RAW002_mtl1003_0005.geometry}
                    material={basicMaterial}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Lungs;
useGLTF.preload('assets/smog/lungs.glb')