import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

/**
 * SunModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of the Sun which will be used for the environment of the scene.
 */

export function SunModel(props) {
  const sunRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/sun.glb');
  const { actions } = useAnimations(animations, sunRef);

  useEffect(() => {
    const action = actions['Take 001'];
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 0.2 // Adjust animation speed
    }

    return () => {
      if (action) action.stop()  // Stop animations when component is not up
    }
  }, [actions]); // Efect executed when available

  return (
    <group ref={sunRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="3a2aaa22fb3d4b329318a980ad1bf6d1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="UnstableStarCore" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="UnstableStarCore_1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.UnstableStarCore_1_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group name="UnstableStarref" rotation={[-Math.PI / 2, 0, 0]} scale={1.01}>
                  <mesh
                    name="UnstableStarref_2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.UnstableStarref_2_0.geometry}
                    material={materials.material_1}
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

useGLTF.preload('/models-3d/sun.glb');