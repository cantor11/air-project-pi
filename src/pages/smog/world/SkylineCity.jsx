import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three';

/**
 * `SkylineCity` Component
 *
 * This component renders a 3D city skyline cutout, used as part of a scene related to 
 * air pollution and environmental issues. The model is loaded from a `.glb` file 
 * and structured as a group hierarchy that is pre-scaled and positioned for optimal 
 * visualization in the 3D environment.
 *
 * The skyline is given a basic black material using Three.js's `MeshBasicMaterial`, 
 * making it non-reflective and simple in appearance, suited for background or silhouette effects.
 * This material configuration helps focus the viewer’s attention on other elements of the scene.
 */
const SkylineCity = (props) => {
    const { nodes, materials } = useGLTF('assets/smog/skyline-city.glb')
    return (
      <group {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="ea95d5a7aca545e281206bbe0bc3f3e8fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group name="SkylineCutoutLarge" position={[0, 0, -4360.995]} scale={500}>
                  <mesh 
                    name="SkylineCutoutLarge_lambert2_0"
                    geometry={nodes.SkylineCutoutLarge_lambert2_0.geometry}
                    material={new MeshBasicMaterial({ color: 'black' })} // Sets a basic black color for simplicity
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }
  
export default SkylineCity;
useGLTF.preload('assets/smog/skyline-city.glb') // Preloads the model for optimized performance