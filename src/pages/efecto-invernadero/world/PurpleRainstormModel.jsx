import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

/**
 * PurpleRainstormModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an animated 3d object imported in this proyect.
 * This is a cloud with water falling from it, with lightnings,
 * which will be used for the environment of the scene.
 */

export function PurpleRainstormModel(props) {
  const rainRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/purple_lightning_rainstorm.glb');
  const { actions } = useAnimations(animations, rainRef);

  useEffect(() => {
    const action = actions['Animation'];
    if (action) {
      action.reset().play()  // Start animation
      action.timeScale = 4 // Adjust animation speed
    }

    return () => {
      if (action) {
        action.stop()  // Stop animations when component is not up
      }
    }
  }, [actions]); // Efect executed when available
  
  return (
    <group ref={rainRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane001_0" position={[-41.64, 186.009, 29.682]} scale={0.553}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane002_1" position={[-3.743, 144.973, -3.479]} scale={0.874}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane003_2" position={[26.075, 186.009, 22.578]} scale={0.553}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane004_3" position={[52.081, 226.846, -3.236]} scale={0.087}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane005_4" position={[21.97, 226.846, -15.286]} scale={0.087}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane006_5" position={[53.896, 186.009, -38.917]} scale={0.553}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane007_6" position={[-45.329, 226.846, -25.829]} scale={0.087}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane009_7" position={[-29.138, 226.846, 73.944]} scale={0.087}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane010_8" position={[60.82, 110.227, 49.776]} scale={1.019}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="lightning1_9" position={[-22.632, 216.902, 0]} scale={0.01}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials['11_-_Default']}
                />
              </group>
              <group name="lightning2_10" position={[29.345, 219.171, 0]} scale={0.01}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials['11_-_Default']}
                />
              </group>
              <group
                name="Plane011_11"
                position={[-72.897, 168.41, -6.641]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.553}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane012_12"
                position={[-22.651, 127.374, -3.292]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.874}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane013_13"
                position={[-19.992, 168.41, 36.218]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.553}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane014_14"
                position={[16.65, 209.247, 36.354]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane015_15"
                position={[3.879, 209.247, 6.541]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane016_16"
                position={[43.165, 168.41, 12.407]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.553}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane017_17"
                position={[-36.253, 209.247, -48.502]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane018_18"
                position={[-54.678, 209.247, -91.289]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane019_19"
                position={[-95.355, 209.247, 33.498]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane020_20"
                position={[-36.705, 92.629, 102.068]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={1.019}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane021_21"
                position={[14.206, 212.759, 49.563]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.553}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane022_22"
                position={[17.555, 171.724, -0.682]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.874}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane023_23"
                position={[57.065, 212.759, -3.342]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.553}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane024_24"
                position={[57.201, 253.597, -39.984]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane025_25"
                position={[27.388, 253.597, -27.213]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane026_26"
                position={[33.254, 212.759, -66.499]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.553}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane027_27"
                position={[-27.655, 253.597, 12.919]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane028_28"
                position={[-70.442, 253.597, 31.345]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane029_29"
                position={[54.345, 253.597, 72.021]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane031_30"
                position={[29.918, 164.998, -38.097]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane032_31"
                position={[-7.979, 123.963, -4.936]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.874}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane033_32"
                position={[-37.797, 164.998, -30.992]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane034_33"
                position={[-63.803, 205.835, -5.179]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane035_34"
                position={[-33.692, 205.835, 6.872]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane036_35"
                position={[-65.618, 164.998, 30.503]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane037_36"
                position={[33.607, 205.835, 17.415]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane038_37"
                position={[76.891, 205.835, 34.641]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane039_38"
                position={[17.416, 205.835, -82.358]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane040_39"
                position={[-72.542, 89.217, -89.374]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={1.019}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane041_40"
                position={[-55.848, 190.374, -28.434]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.553}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane042_41"
                position={[-22.688, 149.339, 9.463]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.874}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane043_42"
                position={[-48.744, 190.374, 39.281]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.553}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane044_43"
                position={[-22.931, 231.211, 65.287]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.087}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane045_44"
                position={[-10.88, 231.211, 35.176]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.087}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane046_45"
                position={[12.751, 190.374, 67.103]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.553}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane047_46"
                position={[-0.337, 231.211, -32.123]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.087}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane048_47"
                position={[16.889, 231.211, -75.407]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.087}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane051_48"
                position={[64.875, 142.613, -5.032]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane052_49"
                position={[33.312, 101.577, 34.206]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.874}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane053_50"
                position={[-0.577, 142.613, 13.723]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane054_51"
                position={[-21.706, 183.45, 43.66]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane055_52"
                position={[10.04, 183.45, 50.299]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane056_53"
                position={[-17.298, 142.613, 79.115]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane057_54"
                position={[78.147, 183.45, 48.996]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane059_55"
                position={[44.877, 183.45, -46.45]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane060_56"
                position={[-44.933, 66.832, -37.738]}
                rotation={[Math.PI, -0.175, Math.PI]}
                scale={1.019}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane061_57"
                position={[-22.607, 168.41, -49.095]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane062_58"
                position={[-25.956, 127.374, 1.151]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.874}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane063_59"
                position={[-65.466, 168.41, 3.81]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane064_60"
                position={[-65.602, 209.247, 40.452]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane065_61"
                position={[-35.789, 209.247, 27.682]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane066_62"
                position={[-41.655, 168.41, 66.967]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane067_63"
                position={[19.253, 209.247, -12.45]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane068_64"
                position={[62.041, 209.247, -30.876]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane069_65"
                position={[-62.746, 209.247, -71.552]}
                rotation={[Math.PI, -Math.PI / 4, Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane071_66"
                position={[71.05, 168.41, 12.609]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane072_67"
                position={[20.804, 127.374, 9.26]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.874}>
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane073_68"
                position={[18.145, 168.41, -30.25]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane074_69"
                position={[-18.497, 209.247, -30.386]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane075_70"
                position={[-5.726, 209.247, -0.573]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane076_71"
                position={[-45.012, 168.41, -6.439]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.553}>
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane077_72"
                position={[34.406, 209.247, 54.47]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane079_73"
                position={[93.508, 209.247, -27.53]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane080_74"
                position={[34.858, 92.629, -96.1]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={1.019}>
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane028001_76"
                position={[-70.442, 253.597, 31.345]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group name="Plane009001_77" position={[-29.138, 226.846, 73.944]} scale={0.087}>
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane028002_78"
                position={[-70.442, 253.597, 31.345]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.087}>
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane044001_79"
                position={[-22.931, 231.211, 65.287]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.087}>
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane078_85"
                position={[52.831, 209.247, 66.074]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials['16_-_Default']}
                />
              </group>
              <group
                name="Plane078001_86"
                position={[52.831, 209.247, 66.074]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={0.087}>
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials['16_-_Default']}
                />
              </group>

              {/* <group name="cloud_1_80" position={[1.303, 5.776, 1.719]}>
                <mesh
                  name="Object_162"
                  //castShadow
                  //receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="cloud2_81" position={[0.598, 5.77, -0.393]}>
                <mesh
                  name="Object_164"
                  //castShadow
                  //receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="cloud3_82" position={[-1.14, 5.702, -2.08]}>
                <mesh
                  name="Object_166"
                  //castShadow
                  //receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="cloud4_83" position={[-1.442, 5.989, 1.335]}>
                <mesh
                  name="Object_168"
                  //castShadow
                  //receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="cloud5_84" position={[0.52, 5.317, -2.312]}>
                <mesh
                  name="Object_170"
                  //castShadow
                  //receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials['Material.001']}
                />
              </group> */}

              <group name="cloud_1_80">
              </group>
              <group name="cloud2_81">
              </group>
              <group name="cloud3_82">
              </group>
              <group name="cloud4_83">
              </group>
              <group name="cloud5_84">
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/purple_lightning_rainstorm.glb');