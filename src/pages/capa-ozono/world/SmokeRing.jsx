import { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

/**
 * SmokeRing Component
 * This component represents a 3D smoke ring modeled using a GLTF file.
 * It utilizes React hooks to manage animations and customize the material properties.
 * The component allows for adjustable opacity and provides an animated effect that simulates 
 * the motion of smoke rising.
 */
export function SmokeRing({ opacity = 1, ...props }) {
  const smokeRingRef = useRef(); // Reference to the smoke ring mesh
  const { nodes, materials, animations } = useGLTF('/models-3d/cloud_ring.glb'); // Load the 3D model
  const { actions } = useAnimations(animations, smokeRingRef); // Manage animations for the model

  // Create a custom material based on the loaded material
  const customMaterial = useMemo(() => materials.Cloud.clone(), []);

  // Set the material properties for transparency and opacity
  customMaterial.transparent = true;
  customMaterial.opacity = opacity;

  // Effect to handle the animation playback
  useEffect(() => {
    const action = actions['Animation']; // Get the animation action
    if (action) {
      action.reset().play(); // Reset and play the animation
      action.timeScale = 10; // Slow down the animation
    }

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      if (action) action.stop();
    };
  }, [actions]);

  return (
    <group ref={smokeRingRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cloud_GN001_2">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry} // Use geometry from the GLTF model
                  material={customMaterial} // Apply the custom material
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF model for better performance
useGLTF.preload('/models-3d/cloud_ring.glb');