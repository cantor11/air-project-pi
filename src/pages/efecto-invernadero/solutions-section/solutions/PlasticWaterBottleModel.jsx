import { useGLTF } from '@react-three/drei';

/**
 * PlasticWaterBottleModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Plastic water bottle which will be used for the environment of the scene.
 */


export function PlasticWaterBottleModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/plastic_water_bottle.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments geometry={nodes.Object_2.geometry} material={materials.Material} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.plastic_007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/plastic_water_bottle.glb');