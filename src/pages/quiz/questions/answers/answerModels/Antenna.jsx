import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Antenna = (props) => {
    const { nodes, materials } = useGLTF('assets/quiz/antenna.glb')
    return (
      <group {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="_22" scale={[4, 3.5, 4]}>
                  <group name="cube_0" position={[0.373, 0, 0.31]}>
                    <mesh
                      name="Object_5"
                      geometry={nodes.Object_5.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_1" position={[0.5, 0.254, 0.5]} rotation={[Math.PI / 8, 0, 0]}>
                    <mesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_2" position={[0.5, 0.347, 0.607]}>
                    <mesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_3" position={[0.5, 0.347, 0.607]}>
                    <mesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="hexadecagon_4"
                    position={[0.5, 1.11, 0.468]}
                    rotation={[0, 0, -Math.PI / 4]}>
                    <mesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group
                    name="hexadecagon_5"
                    position={[0.5, 1.11, 0.468]}
                    rotation={[0, 0, -Math.PI / 8]}>
                    <mesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="hexadecagon_6" position={[0.5, 1.11, 0.468]}>
                    <mesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group
                    name="hexadecagon_7"
                    position={[0.5, 1.11, 0.468]}
                    rotation={[0, 0, Math.PI / 8]}>
                    <mesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group
                    name="hexadecagon_8"
                    position={[0.5, 1.11, 0.468]}
                    rotation={[0, 0, Math.PI / 4]}>
                    <mesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group
                    name="hexadecagon_9"
                    position={[0.5, 1.11, 0.468]}
                    rotation={[0, 0, -Math.PI / 8]}>
                    <mesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="hexadecagon_10" position={[0.5, 1.11, 0.468]}>
                    <mesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group
                    name="hexadecagon_11"
                    position={[0.5, 1.11, 0.468]}
                    rotation={[0, 0, Math.PI / 8]}>
                    <mesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_12" position={[0.373, 0, 0.484]}>
                    <mesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_13" position={[0.373, 0, 0.484]}>
                    <mesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_14" position={[0.373, 0, 0.484]}>
                    <mesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_15" position={[0.373, 0, 0.484]}>
                    <mesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_16" position={[0.5, 0.571, 0.081]}>
                    <mesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_17" position={[0.373, 0, 0.373]}>
                    <mesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials.material_1}
                    />
                  </group>
                  <group name="cube_18" position={[0.373, 0, 0.373]}>
                    <mesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.material_2}
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

export default Antenna
useGLTF.preload('assets/quiz/antenna.glb')