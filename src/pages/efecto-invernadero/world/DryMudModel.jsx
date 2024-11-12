import { useGLTF } from '@react-three/drei';

/**
 * DryMudModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a dry rock which will be used for the environment of the scene.
 */

export function DryMudModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/dry_mud.glb');
  
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          receiveShadow
          geometry={nodes.Sphere_Material_0.geometry}
          material={materials.Material}
          position={[-0.017, 0, -0.489]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/dry_mud.glb');