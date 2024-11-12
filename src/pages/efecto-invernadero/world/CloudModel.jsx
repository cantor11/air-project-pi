import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

/**
 * CloudModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a cloud which will be used for the environment of the scene.
 */

export function CloudModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/cloud.glb');

  // We clone the material for this instance
  const customMaterial = useMemo(
    () => materials.Cloud.clone()
    , []
  );

  customMaterial.transparent = true;
  customMaterial.opacity = 0.08;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={customMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/cloud.glb');