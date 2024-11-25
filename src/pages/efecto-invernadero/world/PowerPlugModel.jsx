import { useGLTF } from '@react-three/drei';

/**
 * PowerPlugModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is an animated model of a Power Plug which will be used for the environment of the scene.
 */

export function PowerPlugModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/power_plug.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.018, 0]} rotation={[-Math.PI / 2, -0.262, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Black_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Aluminum}
          position={[0.008, 0.005, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Aluminum}
        />
      </group>
      <group position={[0.06, 0, -0.019]} rotation={[0, -1.309, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Black_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Copper}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Black_Plastic}
        position={[0, 0, -0.02]}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/power_plug.glb');