import { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

/**
 * BombermanFire Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is an animated model of a fire which will be used for the environment of the scene.
 */

export function BombermanFire(props) {
  const bombFireRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/bomberman_fire.glb');
  const { actions } = useAnimations(animations, bombFireRef);
  
  useEffect(() => {
    const action = actions['Armature|idle']
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 8 // Adjust animation speed
    }

    return () => {
      if (action) action.stop()  // Stop animations when component is not up
    }
  }, [actions]);  // Efect executed when available

  // We clone the material for this instance
  const customMaterial = useMemo(
    () => materials.Fire.clone()
    , []
  );

  customMaterial.transparent = true;
  customMaterial.opacity = 0.3;

  return (
    <group ref={bombFireRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="firefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="flame" />
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={customMaterial}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Object_8" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/bomberman_fire.glb');
