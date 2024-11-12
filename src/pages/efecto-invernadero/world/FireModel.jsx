import { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

/**
 * FireModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is an animated model of a fire which will be used for the environment of the scene.
 */

export function FireModel(props) {
  const fireRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/fire.glb');
  const { actions } = useAnimations(animations, fireRef);

  useEffect(() => {
    const action = actions['Take 001']
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 0.9 // Adjust animation speed
    }

    return () => {
      if (action) action.stop()  // Stop animations when component is not up
    }
  }, [actions]);  // Efect executed when available

  // We clone the material for this instance
  const customMaterial = useMemo(
    () => materials.fire3lambert1.clone()
    , []
  );

  customMaterial.transparent = true;
  customMaterial.opacity = 0.3;

  return (
    <group ref={fireRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="562a047e15904e1db8aa0c0e2df6e95dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="fire3Group20972" position={0} scale={1}>
                  <mesh
                    name="0"
                    /* castShadow
                    receiveShadow */
                    geometry={nodes['0'].geometry}
                    material={customMaterial}
                    morphTargetDictionary={nodes['0'].morphTargetDictionary}
                    morphTargetInfluences={nodes['0'].morphTargetInfluences}
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

useGLTF.preload('/models-3d/fire.glb');