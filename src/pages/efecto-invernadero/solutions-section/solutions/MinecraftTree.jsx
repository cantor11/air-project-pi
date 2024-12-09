import { useGLTF } from '@react-three/drei';

/**
 * MinecraftTreeModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Minecraft tree which will be used for the environment of the scene.
 */


export function MinecraftTreeModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/minecraft_tree.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Oak_Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Oak_Log}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/minecraft_tree.glb');