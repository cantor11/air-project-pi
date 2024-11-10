import { useGLTF } from '@react-three/drei'

/**
 * StoneSphere Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a rock which will be used for the environment of the scene.
 */

export function StoneSphere(props) {
  const { nodes, materials } = useGLTF('/models-3d/stone_sphere.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials['default']}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/stone_sphere.glb')