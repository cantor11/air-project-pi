import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three';

const SkylineCity = (props) => {
    const { nodes, materials } = useGLTF('assets/smog/skyline-city.glb')
    return (
      <group {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="ea95d5a7aca545e281206bbe0bc3f3e8fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group name="SkylineCutoutLarge" position={[0, 0, -4360.995]} scale={500}>
                  <mesh 
                    name="SkylineCutoutLarge_lambert2_0"
                    geometry={nodes.SkylineCutoutLarge_lambert2_0.geometry}
                    material={new MeshBasicMaterial({ color: 'black' })}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }
  
export default SkylineCity;
useGLTF.preload('assets/smog/skyline-city.glb')