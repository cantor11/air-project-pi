import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Plant = (props) => {
  const { nodes, materials } = useGLTF('assets/quiz/house-plant.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.372}>
          <group name="1ea1ad186e784accaac33be04465b0a2fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode" scale={[5, 6, 5]}>
              <group name="pCylinder1">
                <mesh
                  name="pCylinder1_lambert1_0"
                  geometry={nodes.pCylinder1_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane10">
                <mesh
                  name="pPlane10_lambert1_0"
                  geometry={nodes.pPlane10_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube1">
                <mesh
                  name="pCube1_lambert1_0"
                  geometry={nodes.pCube1_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane11">
                <mesh
                  name="pPlane11_lambert1_0"
                  geometry={nodes.pPlane11_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane12">
                <mesh
                  name="pPlane12_lambert1_0"
                  geometry={nodes.pPlane12_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube2">
                <mesh
                  name="pCube2_lambert1_0"
                  geometry={nodes.pCube2_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane13">
                <mesh
                  name="pPlane13_lambert1_0"
                  geometry={nodes.pPlane13_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube3">
                <mesh
                  name="pCube3_lambert1_0"
                  geometry={nodes.pCube3_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pPlane14"
                position={[-1.108, 0.287, 0.302]}
                rotation={[-0.11, 0.085, -0.521]}>
                <mesh
                  name="pPlane14_lambert1_0"
                  geometry={nodes.pPlane14_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube4">
                <mesh
                  name="pCube4_lambert1_0"
                  geometry={nodes.pCube4_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane15">
                <mesh
                  name="pPlane15_lambert1_0"
                  geometry={nodes.pPlane15_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane16">
                <mesh
                  name="pPlane16_lambert1_0"
                  geometry={nodes.pPlane16_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube5">
                <mesh
                  name="pCube5_lambert1_0"
                  geometry={nodes.pCube5_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane17">
                <mesh
                  name="pPlane17_lambert1_0"
                  geometry={nodes.pPlane17_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube6">
                <mesh
                  name="pCube6_lambert1_0"
                  geometry={nodes.pCube6_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane18">
                <mesh
                  name="pPlane18_lambert1_0"
                  geometry={nodes.pPlane18_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane19">
                <mesh
                  name="pPlane19_lambert1_0"
                  geometry={nodes.pPlane19_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube7">
                <mesh
                  name="pCube7_lambert1_0"
                  geometry={nodes.pCube7_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane20">
                <mesh
                  name="pPlane20_lambert1_0"
                  geometry={nodes.pPlane20_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pPlane21">
                <mesh
                  name="pPlane21_lambert1_0"
                  geometry={nodes.pPlane21_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Plant
useGLTF.preload('assets/quiz/house-plant.glb')  

