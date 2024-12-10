import { useGLTF } from '@react-three/drei';

/**
 * SpiralBulbModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is an animated model of a Spiral Bulb which will be used for the environment of the scene.
 */


export function SpiralBulbModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/spiral_bulb.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.spiral_bulb_bulb_mat_0.geometry}
          material={materials['bulb_mat.']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={192.648}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/spiral_bulb.glb');