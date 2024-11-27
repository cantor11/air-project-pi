import { useGLTF } from '@react-three/drei';

/**
 * MioBusModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a bus which will be used for the environment of the scene.
 */


export function MioBusModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/mio_bus.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.standard}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/mio_bus.glb');