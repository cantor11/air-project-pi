import { useGLTF } from '@react-three/drei';

/**
 * MinecraftCowModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Minecraft cow which will be used for the environment of the scene.
 */

export function MinecraftCowModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/minecraft_cow.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0,  Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cow_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[0, 0, -5]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/minecraft_cow.glb');