import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

/**
 * RainModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an animated 3d object imported in this proyect.
 * This is a cloud with water falling from it, with lightnings, but we will use
 * only the water animation, which will be used for the environment of the scene.
 */

export function RainModel(props) {
  const rainRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/rain.glb');
  const { actions } = useAnimations(animations, rainRef);

  useEffect(() => {
    const action = actions['Take 001']
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 1 // Adjust animation speed
    }

    return () => {
      if (action) action.stop()  // Stop animations when component is not up
    }
  }, [actions]); // Efect executed when available

  return (
    <group ref={rainRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="d6b0f1d10362459aaa4037ecd1e26b74fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="rain" rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
                  <group name="Plane001" position={[-41.64, -29.682, 189.936]} scale={0.553}>
                    <group name="Object_6" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane001_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane001_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane002" position={[-3.743, 3.479, 151.178]} scale={0.874}>
                    <group name="Object_9" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane002_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane002_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane003" position={[26.075, -22.578, 189.936]} scale={0.553}>
                    <group name="Object_12" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane003_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane003_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane004" position={[52.081, 3.236, 227.46]} scale={0.087}>
                    <group name="Object_15" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane004_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane004_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane005" position={[21.97, 15.286, 227.46]} scale={0.087}>
                    <group name="Object_18" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane005_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane005_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane006" position={[53.896, 38.917, 189.936]} scale={0.553}>
                    <group name="Object_21" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane006_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane006_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane007" position={[-45.329, 25.829, 227.46]} scale={0.087}>
                    <group name="Object_24" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane007_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane007_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane008" position={[-88.613, 43.056, 227.46]} scale={0.087}>
                    <group name="Object_27" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane008_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane008_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane009" position={[-29.138, -73.944, 227.46]} scale={0.087}>
                    <group name="Object_30" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane009_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane009_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane010" position={[60.82, -80.959, 117.467]} scale={1.019}>
                    <group name="Object_33" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane010_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane010_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane011" position={[23.838, -61.692, 117.467]} scale={1.019}>
                    <group name="Object_36" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane011_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane011_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane012" position={[73.988, 49.857, 227.46]} scale={0.087}>
                    <group name="Object_39" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane012_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane012_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane013" position={[23.03, 11.901, 151.178]} scale={0.874}>
                    <group name="Object_42" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane013_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane013_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane014" position={[-67.649, -9.197, 151.178]} scale={0.874}>
                    <group name="Object_45" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane014_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane014_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane015" position={[42.46, 6.658, 117.467]} scale={1.019}>
                    <group name="Object_48" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane015_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane015_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="cloud_101" position={[-51.834, 68.146, 235.5]}>
                    {/* <mesh
                      name="cloud_101_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_101_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    /> */}
                  </group>
                  <group name="cloud_102" position={[-53.051, -53.173, 235.5]}>
                    {/* <mesh
                      name="cloud_102_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_102_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    /> */}
                  </group>
                  <group name="cloud_104" position={[18.951, 6.735, 235.5]}>
                    {/* <mesh
                      name="cloud_104_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_104_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    /> */}
                  </group>
                  <group name="cloud_103" position={[48.493, -55.927, 222.566]}>
                    {/* <mesh
                      name="cloud_103_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_103_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    /> */}
                  </group>
                  <group name="lightning1" position={[-22.632, 0, 216.902]} scale={0.01}>
                    {/* <mesh
                      name="lightning1_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['lightning1_11_-_Default_0'].geometry}
                      material={materials['11_-_Default']}
                    /> */}
                  </group>
                  <group name="lightning2" position={[29.345, 0, 219.171]} scale={0.01}>
                    {/* <mesh
                      name="lightning2_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['lightning2_11_-_Default_0'].geometry}
                      material={materials['11_-_Default']}
                    /> */}
                  </group>
                  <group
                    name="Plane016"
                    position={[24.79, -42.791, 189.936]}
                    rotation={[0, 0, 1.658]}
                    scale={0.553}>
                    <group name="Object_63" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane016_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane016_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane017"
                    position={[-11.548, -7.929, 151.178]}
                    rotation={[0, 0, 1.658]}
                    scale={0.874}>
                    <group name="Object_66" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane017_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane017_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane018"
                    position={[11.811, 24.047, 189.936]}
                    rotation={[0, 0, 1.658]}
                    scale={0.553}>
                    <group name="Object_69" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane018_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane018_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane019"
                    position={[-16.171, 47.704, 227.46]}
                    rotation={[0, 0, 1.658]}
                    scale={0.087}>
                    <group name="Object_72" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane019_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane019_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane020"
                    position={[-25.551, 16.657, 227.46]}
                    rotation={[0, 0, 1.658]}
                    scale={0.087}>
                    <group name="Object_75" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane020_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane020_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane021"
                    position={[-51.875, 46.403, 189.936]}
                    rotation={[0, 0, 1.658]}
                    scale={0.553}>
                    <group name="Object_78" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane021_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane021_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane022"
                    position={[-30.189, -51.304, 227.46]}
                    rotation={[0, 0, 1.658]}
                    scale={0.087}>
                    <group name="Object_81" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane022_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane022_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane023"
                    position={[-43.577, -95.925, 227.46]}
                    rotation={[0, 0, 1.658]}
                    scale={0.087}>
                    <group name="Object_84" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane023_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane023_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane024"
                    position={[67.794, -26.479, 227.46]}
                    rotation={[0, 0, 1.658]}
                    scale={0.087}>
                    <group name="Object_87" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane024_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane024_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane025"
                    position={[66.942, 63.748, 117.467]}
                    rotation={[0, 0, 1.658]}
                    scale={1.019}>
                    <group name="Object_90" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane025_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane025_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane026"
                    position={[50.972, 25.228, 117.467]}
                    rotation={[0, 0, 1.658]}
                    scale={1.019}>
                    <group name="Object_93" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane026_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane026_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane027"
                    position={[-64.524, 65.465, 227.46]}
                    rotation={[0, 0, 1.658]}
                    scale={0.087}>
                    <group name="Object_96" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane027_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane027_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane028"
                    position={[-22.272, 18.009, 151.178]}
                    rotation={[0, 0, 1.658]}
                    scale={0.874}>
                    <group name="Object_99" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane028_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane028_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane029"
                    position={[6.649, -70.486, 151.178]}
                    rotation={[0, 0, 1.658]}
                    scale={0.874}>
                    <group name="Object_102" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane029_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane029_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane030"
                    position={[-18.741, 37.822, 117.467]}
                    rotation={[0, 0, 1.658]}
                    scale={1.019}>
                    <group name="Object_105" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane030_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane030_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane031"
                    position={[-32.218, 49.478, 189.936]}
                    rotation={[0, 0, -1.484]}
                    scale={0.553}>
                    <group name="Object_108" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane031_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane031_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane032"
                    position={[4.119, 14.615, 151.178]}
                    rotation={[0, 0, -1.484]}
                    scale={0.874}>
                    <group name="Object_111" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane032_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane032_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane033"
                    position={[-19.24, -17.36, 189.936]}
                    rotation={[0, 0, -1.484]}
                    scale={0.553}>
                    <group name="Object_114" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane033_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane033_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane034"
                    position={[8.743, -41.018, 227.46]}
                    rotation={[0, 0, -1.484]}
                    scale={0.087}>
                    <group name="Object_117" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane034_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane034_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane035"
                    position={[18.123, -9.971, 227.46]}
                    rotation={[0, 0, -1.484]}
                    scale={0.087}>
                    <group name="Object_120" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane035_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane035_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane036"
                    position={[44.447, -39.717, 189.936]}
                    rotation={[0, 0, -1.484]}
                    scale={0.553}>
                    <group name="Object_123" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane036_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane036_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane037"
                    position={[22.761, 57.991, 227.46]}
                    rotation={[0, 0, -1.484]}
                    scale={0.087}>
                    <group name="Object_126" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane037_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane037_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane038"
                    position={[36.149, 102.611, 227.46]}
                    rotation={[0, 0, -1.484]}
                    scale={0.087}>
                    <group name="Object_129" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane038_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane038_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane039"
                    position={[-75.222, 33.165, 227.46]}
                    rotation={[0, 0, -1.484]}
                    scale={0.087}>
                    <group name="Object_132" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane039_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane039_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane040"
                    position={[-74.37, -57.062, 117.467]}
                    rotation={[0, 0, -1.484]}
                    scale={1.019}>
                    <group name="Object_135" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane040_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane040_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane041"
                    position={[-58.4, -18.541, 117.467]}
                    rotation={[0, 0, -1.484]}
                    scale={1.019}>
                    <group name="Object_138" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane041_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane041_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane042"
                    position={[57.096, -58.778, 227.46]}
                    rotation={[0, 0, -1.484]}
                    scale={0.087}>
                    <group name="Object_141" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane042_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane042_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane043"
                    position={[14.844, -11.322, 151.178]}
                    rotation={[0, 0, -1.484]}
                    scale={0.874}>
                    <group name="Object_144" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane043_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane043_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane044"
                    position={[-14.077, 77.173, 151.178]}
                    rotation={[0, 0, -1.484]}
                    scale={0.874}>
                    <group name="Object_147" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane044_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane044_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane045"
                    position={[11.313, -31.135, 117.467]}
                    rotation={[0, 0, -1.484]}
                    scale={1.019}>
                    <group name="Object_150" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane045_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane045_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
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

useGLTF.preload('/models-3d/rain.glb');