import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei"

const LedLampOzoneModel = (props) => {
    const { nodes, materials } = useGLTF("assets/quiz/lamp_80_minutes_draft.glb");
    return (
        <group {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="8_Lampobjcleanermaterialmergergles">
              <mesh
                name="Object_2"
                geometry={nodes.Object_2.geometry}
                material={materials.LampEmmision}
              />
              <mesh
                name="Object_3"
                geometry={nodes.Object_3.geometry}
                material={materials.CabelPlastic}
              />
              <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.None} />
              <lineSegments
                name="Object_5"
                geometry={nodes.Object_5.geometry}
                material={materials.PlasticButons}
              />
              <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.plane} />
              <mesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={materials.NoPainingMettal}
              />
              <mesh
                name="Object_9"
                geometry={nodes.Object_9.geometry}
                material={materials.PainingMetal}
              />
              <mesh
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.Plastic}
              />
            </group>
          </group>
        </group>
      </group>
    );
};

export default LedLampOzoneModel;

useGLTF.preload('assets/quiz/lamp_80_minutes_draft.glb')
