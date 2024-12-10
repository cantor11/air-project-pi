import { useGLTF } from '@react-three/drei'

/**
 * SnowBallRocks Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a snow ball with rocks which will be used for the
 * environment of the scene in colding simulation.
 */

export function SnowBallRocks(props) {
  const { nodes, materials } = useGLTF('/models-3d/snow_ball_rocks.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          receiveShadow
          geometry={nodes.NodeMesh0__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 50, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.NodeMesh1__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 50, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/snow_ball_rocks.glb');