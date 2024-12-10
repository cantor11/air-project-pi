import { useGLTF } from '@react-three/drei';

/**
 * BmxBikeModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a bike which will be used for the environment of the scene.
 */


export function BmxBikeModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/bmx_bike.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Seat_0.geometry}
          material={materials.Seat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Silver_0.geometry}
          material={materials.Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Tire_Side_0.geometry}
          material={materials.Tire_Side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Tire_Tread_0.geometry}
          material={materials.Tire_Tread}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Rim_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Peg_0.geometry}
          material={materials.material_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_pedals_0.geometry}
          material={materials.pedals}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Pad_0.geometry}
          material={materials.material_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Frame_0.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Handles_0.geometry}
          material={materials.Handles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_Chain_0.geometry}
          material={materials.Chain}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/bmx_bike.glb');