import { useGLTF } from '@react-three/drei';

/**
 * BusModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a bus which will be used for the environment of the scene.
 */


export function BusModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/hcr2_bus.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
      />
      <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.susp} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.metal}
        position={[0.359, 1.281, 1.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.Bus_Wheel}
        position={[-1.088, 0.438, -1.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.Bus_Wheel}
        position={[-1.23, 0.438, -1.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.Bus_Wheel}
        position={[1.088, 0.438, -1.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.Bus_Wheel}
        position={[1.23, 0.438, -1.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.Bus_Wheel}
        position={[-1.088, 0.438, 1.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.Bus_Wheel}
        position={[-1.23, 0.438, 1.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.Bus_Wheel}
        position={[1.088, 0.438, 1.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.Bus_Wheel}
        position={[1.23, 0.438, 1.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.material_0}
        position={[0.426, 1.625, -2.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials.material_0}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/hcr2_bus.glb');