import React, { useCallback, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

/**
 * `MiniCity` Component
 *
 * This component renders a 3D model of a city that serves as the base of the 3D scene 
 * focused on air pollution and smog. The city model is loaded from a `.glb` file 
 * and converted into JSX for easy integration within the React application.
 *
 * The component uses `@react-three/drei` to handle loading the GLTF model and animations.
 * The model's main animation sequence, labeled "Scene," is started on component mount 
 * and stopped on unmount.
 *
 * Props can be passed to customize the model's behavior or styling within the scene.
 */

const MiniCity = (props) => {
    const group = useRef()
    const rbCar1Ref = useRef();
    const rbCar2Ref = useRef();
    const rbCar3Ref = useRef();
    const rbCar4Ref = useRef();
    const rbCar5Ref = useRef();
    const rbCar6Ref = useRef();
    
    const handleCar1 = useCallback(() => {
      rbCar1Ref.current.applyTorqueImpulse({ x: 0, y: 90000, z: -40000 }, true);
    }, []);
    
    const handleCar2 = useCallback(() => {
      rbCar2Ref.current.applyTorqueImpulse({ x: 0, y: 90001, z: -40001 }, true);
    }, []);
    
    const handleCar3 = useCallback(() => {
      rbCar3Ref.current.applyTorqueImpulse({ x: 0, y: 90002, z: -40002 }, true);
    }, []);
    
    const handleCar4 = useCallback(() => {
      rbCar4Ref.current.applyTorqueImpulse({ x: 0, y: 90003, z: -40003 }, true);
    }, []);
    
    const handleCar5 = useCallback(() => {
      rbCar5Ref.current.applyTorqueImpulse({ x: 0, y: 90004, z: -40004 }, true);
    }, []);
    
    const handleCar6 = useCallback(() => {
      rbCar6Ref.current.applyTorqueImpulse({ x: 0, y: 90005, z: -40005 }, true);
    }, []);

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
                <group name="RootNode">
                  <group
                    name="Building003"
                    position={[-1941.616, 0, -3233.158]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building003_DefaultMaterial_0"
                        geometry={nodes.Building003_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building003_DefaultMaterialEmission_0"
                        geometry={nodes.Building003_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building004"
                    position={[2011.175, 0, -1003.378]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building004_DefaultMaterial_0"
                        geometry={nodes.Building004_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building004_DefaultMaterialEmission_0"
                        geometry={nodes.Building004_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building005"
                    position={[-1678.787, 0, -578.744]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building005_DefaultMaterialEmission_0"
                        geometry={nodes.Building005_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building005_DefaultMaterial_0"
                        geometry={nodes.Building005_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building015"
                    position={[2046.505, 0, -598.731]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building015_DefaultMaterialEmission_0"
                        geometry={nodes.Building015_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building015_DefaultMaterial_0"
                        geometry={nodes.Building015_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building015_SpecialMaterialEmission_0"
                        geometry={nodes.Building015_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building018"
                    position={[-1800.505, 0, 145.943]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh
                        name="Building018_DefaultMaterialEmission_0"
                        geometry={nodes.Building018_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building018_DefaultMaterial_0"
                        geometry={nodes.Building018_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building019"
                    position={[1535.641, 1143.003, -2060.517]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building019_DefaultMaterial_0"
                        geometry={nodes.Building019_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building019_DefaultMaterialEmission_0"
                        geometry={nodes.Building019_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building020"
                    position={[2059.253, 1143.003, -1264.758]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building020_DefaultMaterialEmission_0"
                        geometry={nodes.Building020_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building020_DefaultMaterial_0"
                        geometry={nodes.Building020_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building021"
                    position={[-1788.263, 8.867, -2135.591]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building021_DefaultMaterial_0"
                        geometry={nodes.Building021_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building021_DefaultMaterialEmission_0"
                        geometry={nodes.Building021_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building022"
                    position={[1615.978, 0, -3013.862]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building022_DefaultMaterial_0"
                        geometry={nodes.Building022_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building022_DefaultMaterialEmission_0"
                        geometry={nodes.Building022_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building024"
                    position={[1685.915, 0, 449.949]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building024_DefaultMaterialEmission_0"
                        geometry={nodes.Building024_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building024_DefaultMaterial_0"
                        geometry={nodes.Building024_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building025"
                    position={[-1582.35, 1143.003, -3618.488]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building025_DefaultMaterialEmission_0"
                        geometry={nodes.Building025_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building025_DefaultMaterial_0"
                        geometry={nodes.Building025_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building029"
                    position={[371.969, 0, -3568.375]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building029_DefaultMaterial_0"
                        geometry={nodes.Building029_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building029_DefaultMaterialEmission_0"
                        geometry={nodes.Building029_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building030"
                    position={[-579.367, 0, -2089.543]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building030_DefaultMaterial_0"
                        geometry={nodes.Building030_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building030_DefaultMaterialEmission_0"
                        geometry={nodes.Building030_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building031"
                    position={[-341.169, 0, -3559.348]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building031_DefaultMaterial_0"
                        geometry={nodes.Building031_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh castShadow
                        name="Building031_DefaultMaterialEmission_0"
                        geometry={nodes.Building031_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building_Skull001"
                    position={[0, 0, 433.912]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull001_DefaultMaterial_0"
                        geometry={nodes.Building_Skull001_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull001_SpecialMaterialEmission_0"
                        geometry={nodes.Building_Skull001_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull001_DefaultMaterialEmission_0"
                        geometry={nodes.Building_Skull001_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building_Skull002"
                    position={[0, 0, -194.512]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull002_DefaultMaterial_0"
                        geometry={nodes.Building_Skull002_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull002_SpecialMaterialEmission_0"
                        geometry={nodes.Building_Skull002_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull002_DefaultMaterialEmission_0"
                        geometry={nodes.Building_Skull002_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building_Skull003"
                    position={[0, 0, -345.606]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull003_DefaultMaterial_0"
                        geometry={nodes.Building_Skull003_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull003_SpecialMaterialEmission_0"
                        geometry={nodes.Building_Skull003_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building_Skull004"
                    position={[0, 0, -957.599]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull004_DefaultMaterial_0"
                        geometry={nodes.Building_Skull004_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull004_SpecialMaterialEmission_0"
                        geometry={nodes.Building_Skull004_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull004_DefaultMaterialEmission_0"
                        geometry={nodes.Building_Skull004_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building_Skull005"
                    position={[0, 0, -1842.685]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull005_DefaultMaterial_0"
                        geometry={nodes.Building_Skull005_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull005_SpecialMaterialEmission_0"
                        geometry={nodes.Building_Skull005_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull005_DefaultMaterialEmission_0"
                        geometry={nodes.Building_Skull005_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building_Skull006"
                    position={[-72.381, 0, -993.171]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull006_DefaultMaterial_0"
                        geometry={nodes.Building_Skull006_DefaultMaterial_0.geometry}
                        material={materials.DefaultMaterial}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull006_DefaultMaterialEmission_0"
                        geometry={nodes.Building_Skull006_DefaultMaterialEmission_0.geometry}
                        material={materials.DefaultMaterialEmission}
                      />
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh receiveShadow
                        name="Building_Skull006_SpecialMaterialEmission_0"
                        geometry={nodes.Building_Skull006_SpecialMaterialEmission_0.geometry}
                        material={materials.SpecialMaterialEmission}
                      />
                    </RigidBody>
                  </group>
                  <group
                    name="Building"
                    position={[496.832, 0, 53.496]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed'>
                    <mesh castShadow receiveShadow
                      name="Building_DefaultMaterial_0"
                      geometry={nodes.Building_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                    <RigidBody type='fixed'>
                    <mesh castShadow receiveShadow
                      name="Building_SpecialMaterialEmission_0"
                      geometry={nodes.Building_SpecialMaterialEmission_0.geometry}
                      material={materials.SpecialMaterialEmission}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Car_Blue"
                    position={[104.528, 7.162, 572.483]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody ref={rbCar1Ref}>
                    <mesh onClick={handleCar1}
                      name="Car_Blue_DefaultMaterial_0"
                      geometry={nodes.Car_Blue_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
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
                    <RigidBody ref={rbCar2Ref}>
                    <mesh onClick={handleCar2}
                      name="Car_Yellow_DefaultMaterial_0"
                      geometry={nodes.Car_Yellow_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Car_Yellow"
                    position={[564.918, 7.162, 1000.931]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={100}>
                    <RigidBody ref={rbCar3Ref}>
                    <mesh onClick={handleCar3}
                      name="Car_Yellow_DefaultMaterial_0"
                      geometry={nodes.Car_Yellow_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Car_Green"
                    position={[100.918, 7.162, 993.931]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={100}>
                    <RigidBody ref={rbCar4Ref}>
                    <mesh onClick={handleCar4}
                      name="Car_Green_DefaultMaterial_0"
                      geometry={nodes.Car_Green_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Car_Red"
                    position={[-270.563, 7.162, 990.65]}
                    rotation={[-Math.PI / 2, 0, Math.PI/1000]}
                    scale={100}>
                    <RigidBody ref={rbCar5Ref}>
                    <mesh onClick={handleCar5}
                      name="Car_Red_DefaultMaterial_0"
                      geometry={nodes.Car_Red_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Car_Blue"
                    position={[-175.528, 7.162, 572.483]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody ref={rbCar6Ref}>
                    <mesh onClick={handleCar6}
                      name="Car_Blue_DefaultMaterial_0"
                      geometry={nodes.Car_Blue_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="City_Ground"
                    position={[0, 0, -1414.051]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed'>
                    <mesh receiveShadow
                      name="City_Ground_DefaultMaterial_0"
                      geometry={nodes.City_Ground_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Tree"
                    position={[-1365.089, 7.315, -1318.565]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                      <RigidBody type='fixed' colliders='hull'>
                    <mesh
                      name="Tree_DefaultMaterial_0"
                      geometry={nodes.Tree_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Tree001"
                    position={[-1614.292, 7.315, -1120.047]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed' colliders='hull'>
                    <mesh
                      name="Tree001_DefaultMaterial_0"
                      geometry={nodes.Tree001_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Tree002"
                    position={[-1896.293, 7.315, -1314.341]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed' colliders='hull'>
                    <mesh
                      name="Tree002_DefaultMaterial_0"
                      geometry={nodes.Tree002_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Tree003"
                    position={[-2150.412, 7.315, -1090.719]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed' colliders='hull'>
                    <mesh
                      name="Tree003_DefaultMaterial_0"
                      geometry={nodes.Tree003_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Tree004"
                    position={[651.773, 7.315, -314.806]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed' colliders='hull'>
                    <mesh
                      name="Tree004_DefaultMaterial_0"
                      geometry={nodes.Tree004_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
                  </group>
                  <group
                    name="Tree005"
                    position={[651.773, 7.315, 271.07]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <RigidBody type='fixed' colliders='hull'>
                    <mesh
                      name="Tree005_DefaultMaterial_0"
                      geometry={nodes.Tree005_DefaultMaterial_0.geometry}
                      material={materials.DefaultMaterial}
                    />
                    </RigidBody>
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