import { useGLTF } from '@react-three/drei';

/**
 * BucketModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a bucket which will be used for the environment of the scene.
 */


export function BucketModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/ice_bucket.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fastener_left_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handle_left_back_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screw_02_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handle_left_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handle_right_back_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screw_01_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screw_04_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fastener_right_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handle_right_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screw_03_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bucket_low_lambert1_0.geometry}
          material={materials.lambert1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/ice_bucket.glb');