import { useGLTF } from '@react-three/drei';

/**
 * CloudsModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a different cloud which will be used for the environment of the scene.
 */

export function CloudsModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/clouds.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.DEFAULT}
          position={[-228.141, -280.375, -22.734]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/clouds.glb');