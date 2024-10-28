import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const MiniCity = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(
      'assets/smog/mini-city.glb'
    )
    const { actions } = useAnimations(animations, group)
    
    // animation play
    useEffect(() => {
      actions["Scene"].play();
      return () => actions["Scene"].stop();
    }, [actions])

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="f24d49609aed4057bf28a9aa3eafbe31fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode" castShadow>
                  <group
                    name="Building003"
                    position={[-1941.616, 0, -3233.158]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building003_DefaultMaterial_0"
                      geometry={nodes.Building003_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building003_DefaultMaterialEmission_0"
                      geometry={nodes.Building003_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building004"
                    position={[2011.175, 0, -1003.378]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building004_DefaultMaterial_0"
                      geometry={nodes.Building004_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building004_DefaultMaterialEmission_0"
                      geometry={nodes.Building004_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building005"
                    position={[-1678.787, 0, -578.744]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building005_DefaultMaterialEmission_0"
                      geometry={nodes.Building005_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building005_DefaultMaterial_0"
                      geometry={nodes.Building005_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Building015"
                    position={[2046.505, 0, -598.731]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building015_DefaultMaterialEmission_0"
                      geometry={nodes.Building015_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building015_DefaultMaterial_0"
                      geometry={nodes.Building015_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building015_SpecialMaterialEmission_0"
                      geometry={nodes.Building015_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building018"
                    position={[-1800.505, 0, 145.943]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building018_DefaultMaterialEmission_0"
                      geometry={nodes.Building018_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building018_DefaultMaterial_0"
                      geometry={nodes.Building018_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Building019"
                    position={[1535.641, 1143.003, -2060.517]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building019_DefaultMaterial_0"
                      geometry={nodes.Building019_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building019_DefaultMaterialEmission_0"
                      geometry={nodes.Building019_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building020"
                    position={[2059.253, 1143.003, -1264.758]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building020_DefaultMaterialEmission_0"
                      geometry={nodes.Building020_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building020_DefaultMaterial_0"
                      geometry={nodes.Building020_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Building021"
                    position={[-1788.263, 8.867, -2135.591]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building021_DefaultMaterial_0"
                      geometry={nodes.Building021_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building021_DefaultMaterialEmission_0"
                      geometry={nodes.Building021_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building022"
                    position={[1615.978, 0, -3013.862]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building022_DefaultMaterial_0"
                      geometry={nodes.Building022_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building022_DefaultMaterialEmission_0"
                      geometry={nodes.Building022_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building024"
                    position={[1685.915, 0, 449.949]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building024_DefaultMaterialEmission_0"
                      geometry={nodes.Building024_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building024_DefaultMaterial_0"
                      geometry={nodes.Building024_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Building025"
                    position={[-1582.35, 1143.003, -3618.488]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building025_DefaultMaterialEmission_0"
                      geometry={nodes.Building025_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building025_DefaultMaterial_0"
                      geometry={nodes.Building025_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Building029"
                    position={[371.969, 0, -3568.375]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building029_DefaultMaterial_0"
                      geometry={nodes.Building029_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building029_DefaultMaterialEmission_0"
                      geometry={nodes.Building029_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building030"
                    position={[-579.367, 0, -2089.543]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building030_DefaultMaterial_0"
                      geometry={nodes.Building030_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building030_DefaultMaterialEmission_0"
                      geometry={nodes.Building030_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building031"
                    position={[-341.169, 0, -3559.348]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building031_DefaultMaterial_0"
                      geometry={nodes.Building031_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building031_DefaultMaterialEmission_0"
                      geometry={nodes.Building031_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull000"
                    position={[-33.55, 0, -2663.884]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull000_DefaultMaterialEmission_0"
                      geometry={nodes.Building_Skull000_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building_Skull000_DefaultMaterial_0"
                      geometry={nodes.Building_Skull000_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull000_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull000_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull001"
                    position={[0, 0, 433.912]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull001_DefaultMaterial_0"
                      geometry={nodes.Building_Skull001_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull001_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull001_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                    <mesh
                      name="Building_Skull001_DefaultMaterialEmission_0"
                      geometry={nodes.Building_Skull001_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull002"
                    position={[0, 0, -194.512]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull002_DefaultMaterial_0"
                      geometry={nodes.Building_Skull002_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull002_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull002_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                    <mesh
                      name="Building_Skull002_DefaultMaterialEmission_0"
                      geometry={nodes.Building_Skull002_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull003"
                    position={[0, 0, -345.606]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull003_DefaultMaterial_0"
                      geometry={nodes.Building_Skull003_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull003_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull003_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull004"
                    position={[0, 0, -957.599]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull004_DefaultMaterial_0"
                      geometry={nodes.Building_Skull004_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull004_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull004_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                    <mesh
                      name="Building_Skull004_DefaultMaterialEmission_0"
                      geometry={nodes.Building_Skull004_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull005"
                    position={[0, 0, -1842.685]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull005_DefaultMaterial_0"
                      geometry={nodes.Building_Skull005_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull005_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull005_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                    <mesh
                      name="Building_Skull005_DefaultMaterialEmission_0"
                      geometry={nodes.Building_Skull005_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building_Skull006"
                    position={[-72.381, 0, -993.171]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_Skull006_DefaultMaterial_0"
                      geometry={nodes.Building_Skull006_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_Skull006_DefaultMaterialEmission_0"
                      geometry={nodes.Building_Skull006_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                    <mesh
                      name="Building_Skull006_SpecialMaterialEmission_0"
                      geometry={nodes.Building_Skull006_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                  </group>
                  <group
                    name="Building"
                    position={[496.832, 0, 53.496]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Building_DefaultMaterial_0"
                      geometry={nodes.Building_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Building_SpecialMaterialEmission_0"
                      geometry={nodes.Building_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                  </group>
                  <group
                    name="Car_Blue"
                    position={[104.528, 7.162, 572.483]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Car_Blue_DefaultMaterial_0"
                      geometry={nodes.Car_Blue_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Car_Green"
                    position={[-579.463, 7.162, -2077.809]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={100}>
                    <mesh
                      name="Car_Green_DefaultMaterial_0"
                      geometry={nodes.Car_Green_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Car_Green_DefaultMaterialEmission_0"
                      geometry={nodes.Car_Green_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Car_Red"
                    position={[292.563, 7.162, 988.65]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={100}>
                    <mesh
                      name="Car_Red_DefaultMaterial_0"
                      geometry={nodes.Car_Red_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Car_Red_DefaultMaterialEmission_0"
                      geometry={nodes.Car_Red_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Car_Yellow"
                    position={[-75.918, 7.162, 993.931]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={100}>
                    <mesh
                      name="Car_Yellow_DefaultMaterial_0"
                      geometry={nodes.Car_Yellow_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="City_Ground"
                    position={[0, 0, -1414.051]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="City_Ground_DefaultMaterial_0"
                      geometry={nodes.City_Ground_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Tree"
                    position={[-1365.089, 7.315, -1318.565]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Tree_DefaultMaterial_0"
                      geometry={nodes.Tree_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Tree001"
                    position={[-1614.292, 7.315, -1120.047]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Tree001_DefaultMaterial_0"
                      geometry={nodes.Tree001_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Tree002"
                    position={[-1916.293, 7.315, -1314.341]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Tree002_DefaultMaterial_0"
                      geometry={nodes.Tree002_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Tree003"
                    position={[-2239.412, 7.315, -1132.719]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Tree003_DefaultMaterial_0"
                      geometry={nodes.Tree003_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Tree004"
                    position={[651.773, 7.315, -314.806]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Tree004_DefaultMaterial_0"
                      geometry={nodes.Tree004_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Tree005"
                    position={[651.773, 7.315, 271.07]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Tree005_DefaultMaterial_0"
                      geometry={nodes.Tree005_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                  </group>
                  <group
                    name="Lamp_Post"
                    position={[1155.309, 7.436, -1224.119]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Lamp_Post_DefaultMaterial_0"
                      geometry={nodes.Lamp_Post_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Lamp_Post_DefaultMaterialEmission_0"
                      geometry={nodes.Lamp_Post_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Lamp_Post001"
                    position={[-1139.722, 7.436, -1224.119]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Lamp_Post001_DefaultMaterial_0"
                      geometry={nodes.Lamp_Post001_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Lamp_Post001_DefaultMaterialEmission_0"
                      geometry={nodes.Lamp_Post001_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Lamp_Post002"
                    position={[1155.309, 7.436, 662.206]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Lamp_Post002_DefaultMaterial_0"
                      geometry={nodes.Lamp_Post002_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Lamp_Post002_DefaultMaterialEmission_0"
                      geometry={nodes.Lamp_Post002_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Lamp_Post003"
                    position={[-1139.722, 7.436, 662.206]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Lamp_Post003_DefaultMaterial_0"
                      geometry={nodes.Lamp_Post003_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Lamp_Post003_DefaultMaterialEmission_0"
                      geometry={nodes.Lamp_Post003_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Lamp_Post004"
                    position={[1155.309, 7.436, -3292.127]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Lamp_Post004_DefaultMaterial_0"
                      geometry={nodes.Lamp_Post004_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Lamp_Post004_DefaultMaterialEmission_0"
                      geometry={nodes.Lamp_Post004_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
                    />
                  </group>
                  <group
                    name="Lamp_Post005"
                    position={[-1139.722, 7.436, -3292.127]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Lamp_Post005_DefaultMaterial_0"
                      geometry={nodes.Lamp_Post005_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    <mesh
                      name="Lamp_Post005_DefaultMaterialEmission_0"
                      geometry={nodes.Lamp_Post005_DefaultMaterialEmission_0.geometry}
                      material={materials.DefaultMaterialEmission}
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
  
export default MiniCity;
useGLTF.preload('assets/smog/mini-city.glb')