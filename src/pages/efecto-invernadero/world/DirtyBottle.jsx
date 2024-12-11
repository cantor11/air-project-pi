import { useGLTF } from '@react-three/drei';

/**
 * DirtyBottleModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a dirty water bottle which will be used for the environment of the scene.
 */

export function DirtyBottleModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/dirty_bottle.glb');

  return (
    <group {...props} dispose={null} rotation-x={-Math.PI/2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Beat_Water_Bottle_WaterBottle1_0.geometry}
        material={materials.WaterBottle1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle_Cap_BottleCap_0.geometry}
        material={materials.BottleCap}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/dirty_bottle.glb');