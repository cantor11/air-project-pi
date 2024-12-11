import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei"

const SprayOzoneModel = (props) => {
    const { nodes, materials } = useGLTF("assets/quiz/Spray.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Spray_Body.geometry}
          material={materials['Spray Body']}
          rotation={[Math.PI, -0.873, Math.PI]}
          scale={0.587}
        />
        <mesh
          geometry={nodes.Spray_Color.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI, -0.873, Math.PI]}
          scale={0.587}
        />
        <mesh
          geometry={nodes.Spray_Head.geometry}
          material={materials['Spray Head']}
          rotation={[Math.PI, -0.873, Math.PI]}
          scale={0.587}
        />
        <mesh
          geometry={nodes.Inkjet.geometry}
          material={materials.Inkjet}
          rotation={[Math.PI, -0.873, Math.PI]}
          scale={0.587}
        />
      </group>
    );
};

export default SprayOzoneModel;

useGLTF.preload('assets/quiz/Spray.glb')
