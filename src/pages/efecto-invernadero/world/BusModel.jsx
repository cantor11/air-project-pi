import { useGLTF } from '@react-three/drei';

/**
 * BusModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of a bus which will be used for the environment of the scene.
 */


export function BusModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/paz_bus.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 1.391]}>
          <mesh
            geometry={nodes.Cube_0.geometry}
            material={materials.maincolor}
          />
          <mesh
            geometry={nodes.Cube_1.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={materials.secondcolor}
          />
          <mesh
            geometry={nodes.Cube_3.geometry}
            material={materials.gray}
          />
          <mesh
            geometry={nodes.Cube_4.geometry}
            material={materials.orange}
          />
          <mesh
            geometry={nodes.Cube_5.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.Cube_6.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[-1.205, -2.863, 0.538]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.521, 0.521, 0.154]}>
          <mesh
            geometry={nodes['��������������001_0'].geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes['��������������001_1'].geometry}
            material={materials.gray}
          />
        </group>
        <group
          position={[-1.205, 1.594, 0.538]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.521, 0.521, 0.154]}>
          <mesh
            geometry={nodes['��������������002_0'].geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes['��������������002_1'].geometry}
            material={materials.gray}
          />
        </group>
        <group
          position={[1.19, 1.594, 0.538]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.521, 0.521, 0.154]}>
          <mesh
            geometry={nodes['��������������003_0'].geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes['��������������003_1'].geometry}
            material={materials.gray}
          />
        </group>
        <group
          position={[1.19, -2.863, 0.538]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.521, 0.521, 0.154]}>
          <mesh
            geometry={nodes['��������������004_0'].geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes['��������������004_1'].geometry}
            material={materials.gray}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/paz_bus.glb');