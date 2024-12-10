import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Factory = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('assets/quiz/factory-smog.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} scale={[2, 3, 2]}>
                <group name="Factory_0" position={[0, -1.699, 0]}>
                  <mesh
                    scale={[1, 0.4, 1]}
                    name="Object_4"
                    geometry={nodes.Object_4.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory001_2" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory002_3" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory003_4" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory004_5" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory005_6" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory006_7" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory007_8" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory008_9" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory009_10" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory010_11" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory011_12" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory012_13" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_30"
                    geometry={nodes.Object_30.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory013_14" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_32"
                    geometry={nodes.Object_32.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory014_15" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_34"
                    geometry={nodes.Object_34.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory015_16" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_36"
                    geometry={nodes.Object_36.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory016_17" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory017_18" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory018_19" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_42"
                    geometry={nodes.Object_42.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory019_20" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_44"
                    geometry={nodes.Object_44.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory020_21" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_46"
                    geometry={nodes.Object_46.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory021_22" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_48"
                    geometry={nodes.Object_48.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory022_23" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_50"
                    geometry={nodes.Object_50.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory023_24" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_52"
                    geometry={nodes.Object_52.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory024_25" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_54"
                    geometry={nodes.Object_54.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory025_26" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_56"
                    geometry={nodes.Object_56.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory026_27" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_58"
                    geometry={nodes.Object_58.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory027_28" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_60"
                    geometry={nodes.Object_60.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory028_29" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_62"
                    geometry={nodes.Object_62.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="Factory029_30" position={[0, -1.687, 0]}>
                  <mesh
                    name="Object_64"
                    geometry={nodes.Object_64.geometry}
                    material={materials.Material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }

export default Factory
useGLTF.preload('assets/quiz/factory-smog.glb')