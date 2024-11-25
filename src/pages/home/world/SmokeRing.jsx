import { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

/**
 * SmokeRing Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an animated 3d object imported in this proyect.
 * This is a cloud ring which will be used as smoke, and its opacity can be
 * modified.
 */

export function SmokeRing({ opacity = 1, ...props }) {
  const smokeRingRef = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/cloud_ring.glb')
  const { actions } = useAnimations(animations, smokeRingRef)

  // We clone the material for this instance
  const customMaterial = useMemo(
    () => materials.Cloud.clone()
    , []
  )

  customMaterial.transparent = true
  customMaterial.opacity = opacity

  useEffect(() => {
    const action = actions['Animation']
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 0.3 // Adjust animation speed
    }

    return () => {
      if (action) action.stop()  // Stop animations when component is not up
    }
  }, [actions])  // Efect executed when available

  return (
    <group ref={smokeRingRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cloud_GN001_2">
                {/* <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={customMaterial}
                /> */}
              </group>
              <group name="Cloud_GN002_3" rotation={[0, -0.016, 0]}>
                {/* <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={customMaterial}
                /> */}
              </group>
              <group name="Cloud_GN003_4" rotation={[0, -0.031, 0]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={customMaterial}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/cloud_ring.glb')