import { useGLTF } from '@react-three/drei';

/**
 * RecycleBinModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a recycle bin which will be used for the environment of the scene.
 */

export function RecycleBinModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/recycle_bin.glb');

  return (
    <group {...props} dispose={null} rotation-y={Math.PI/2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_2}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/recycle_bin.glb');