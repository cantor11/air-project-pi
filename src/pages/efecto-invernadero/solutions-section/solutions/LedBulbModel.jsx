import { useGLTF } from '@react-three/drei';

/**
 * LedBulbModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Led Bulb which will be used for the environment of the scene.
 */

export function LedBulbModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/led_bulb.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Metal}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Blanco}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Difuso}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Metal_2}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Blanco_2}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/led_bulb.glb');