import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier';

const PikachuOzonoModel = (props) => {
    const { nodes, materials } = useGLTF("assets/quiz/pikachu_amiibo.glb");
    return (
        <group {...props} dispose={null} scale={0.05}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[0, 0, Math.PI]}>
            <group name="LPpikachuobjcleanermaterialmergergles">
              <mesh
                name="Object_2"
                geometry={nodes.Object_2.geometry}
                material={materials.material_0}
              />
            </group>
          </group>
        </group>
      </group>
    );
};

export default PikachuOzonoModel;

useGLTF.preload('assets/quiz/pikachu_amiibo.glb')