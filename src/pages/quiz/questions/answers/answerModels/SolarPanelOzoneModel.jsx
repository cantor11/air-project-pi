import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei"

const SolarPanelOzoneModel = (props) => {
    const { nodes, materials } = useGLTF("assets/quiz/solar_panel.glb");
    return (
        <group {...props} dispose={null}>
        <group name="Sketchfab_Scene" rotation={[0, Math.PI/2, Math.PI/3]}>
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="87a7100f08c44712a3f44b0ecfd94991fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}>
              <group name="RootNode">
                <group name="foot" position={[0, 100, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="foot_Material_0"
                    geometry={nodes.foot_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group name="foot001" position={[0, 100, 0]} rotation={[-1.576, 0, 0]} scale={100}>
                  <mesh
                    name="foot001_Material_0"
                    geometry={nodes.foot001_Material_0.geometry}
                    material={materials.Material}
                  />
                  <mesh
                    name="foot001_Material002_0"
                    geometry={nodes.foot001_Material002_0.geometry}
                    material={materials['Material.002']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    );
};

export default SolarPanelOzoneModel;

useGLTF.preload('assets/quiz/solar_panel.glb')