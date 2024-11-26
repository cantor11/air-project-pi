import React, { useRef, useCallback } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Trash2 = (props) => {
    const { nodes, materials } = useGLTF('assets/smog/trash_container.glb')

    // References for each trash mesh
    const rbObject001Ref = useRef()
    const rbCylinder005Ref = useRef()
    const rbBox003Ref = useRef()

    // Impulse handling for each mesh
    const handleObject001 = useCallback(() => {
        rbObject001Ref.current.applyImpulse({ x: 20000, y: 60000, z: -30000 }, true)
    }, [])

    const handleCylinder005 = useCallback(() => {
        rbCylinder005Ref.current.applyImpulse({ x: 20000, y: 60001, z: -30001 }, true)
    }, [])

    const handleBox003 = useCallback(() => {
        rbBox003Ref.current.applyImpulse({ x: 20000, y: 60002, z: -30002 }, true)
    }, [])

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="a90ecb0d8cd445e98e557d75ebf357d2fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="RootNode">
                            <group
                                name="Object001"
                                position={[-2.687, 140.561, -60.416]}
                                rotation={[-1.799, 0.054, 2.913]}
                                scale={[-1, 1, 1]}>
                                <RigidBody ref={rbObject001Ref} colliders="hull" onClick={handleObject001}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Object001_Material_#21_0"
                                        geometry={nodes['Object001_Material_#21_0'].geometry}
                                        material={materials.Material_21}
                                    />
                                </RigidBody>
                            </group>

                            <group
                                name="Cylinder005"
                                position={[146.747, 0, -20.591]}
                                rotation={[-1.452, -0.348, 2.187]}
                                scale={[0.733, 0.699, 0.912]}>
                                <RigidBody ref={rbCylinder005Ref} colliders="hull" onClick={handleCylinder005}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Cylinder005_Material_#42_0"
                                        geometry={nodes['Cylinder005_Material_#42_0'].geometry}
                                        material={materials.Material_42}
                                    />
                                </RigidBody>
                            </group>

                            <group
                                name="Box003"
                                position={[-62.819, 3.158, 97.165]}
                                rotation={[-0.821, -0.298, -0.808]}>
                                <RigidBody ref={rbBox003Ref} colliders="hull" onClick={handleBox003}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Box003_Material_#22_0"
                                        geometry={nodes['Box003_Material_#22_0'].geometry}
                                        material={materials.Material_22}
                                    />
                                </RigidBody>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Trash2
useGLTF.preload('assets/smog/trash_container.glb')