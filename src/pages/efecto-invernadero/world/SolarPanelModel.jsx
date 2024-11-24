import { useGLTF } from '@react-three/drei';

/**
 * SolarPanelModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Solar Panel which will be used for the environment of the scene.
 */

export function SolarPanelModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/solar_panel.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SolarPanel_SolarPanel_0.geometry}
        material={materials.SolarPanel}
        position={[0, 12.206, 35.525]}
        rotation={[-Math.PI / 4, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/solar_panel.glb');