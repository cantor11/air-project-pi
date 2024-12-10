import { useGLTF } from '@react-three/drei';

/**
 * SolarPanelModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a Solar Panel which will be used for the environment of the scene.
 */

export function SolarPanelModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/cartoon_low_poly_solar_panel.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Environment1_0.geometry}
          material={materials['Environment.1']}
          position={[0, 0, 49.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_003_Environment2_0.geometry}
          material={materials['Environment.2']}
          position={[0, 0, 52.126]}
        />
      </group>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Environment_0.geometry}
        material={materials.Environment}
        position={[0, -100.287, 0]}
      /> */}
    </group>
  )
}

useGLTF.preload('/models-3d/cartoon_low_poly_solar_panel.glb');