import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

/**
 * EarthModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of the Earth which will be used for the environment of the scene.
 */

export function EarthModel(props) {
  const earthRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/earth.glb');
  const { actions } = useAnimations(animations, earthRef);

  useEffect(() => {
    const action = actions['Take 001']
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 0.04 // Adjust animation speed
    }

    return () => {
      if (action) action.stop()  // Stop animations when component is not up
    }
  }, [actions]); // Efect executed when available

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="3f0d8c1a7c7c45138e5b99b56838fcb9fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Earth_Material_#50_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Earth_Material_#50_0'].geometry}
                    material={materials.Material_50}
                  />
                </group>
                <group name="EarthClouds" rotation={[-Math.PI / 2, -Math.PI / 9, 0]} scale={1.01}>
                  <mesh
                    name="EarthClouds_Material_#62_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['EarthClouds_Material_#62_0'].geometry}
                    material={materials.Material_62}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/earth.glb');