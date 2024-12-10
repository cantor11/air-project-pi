import { useGLTF } from '@react-three/drei';

/**
 * CerealSansModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Cereal which will be used for the environment of the scene.
 */


export function CerealSansModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/cereal_sans_bran_marshmarrows.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cereal_Sans_Bran_Marshmarrows_Materi��l051_0'].geometry}
          material={materials['Materil.051']}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[104.251, 28.536, 143.585]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/cereal_sans_bran_marshmarrows.glb');