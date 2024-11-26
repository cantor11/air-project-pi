import React, { useRef, useCallback } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Trash1 = (props) => {
    const { nodes, materials } = useGLTF('assets/smog/trash_can.glb')

    // References for each trash mesh
    const rbCylinder596Ref = useRef()
    const rbCube1543Ref = useRef()
    const rbCylinder597Ref1 = useRef()
    const rbCylinder597Ref2 = useRef()

    // Impulse handling for each mesh
    const handleCylinder596 = useCallback(() => {
        rbCylinder596Ref.current.applyImpulse({ x: 20000, y: 50000, z: -30000 }, true)
    }, [])

    const handleCube1543 = useCallback(() => {
        rbCube1543Ref.current.applyImpulse({ x: 20000, y: 50001, z: -30001 }, true)
    }, [])

    const handleCylinder597_1 = useCallback(() => {
        rbCylinder597Ref1.current.applyImpulse({ x: 20000, y: 50002, z: -30002 }, true)
    }, [])

    const handleCylinder597_2 = useCallback(() => {
        rbCylinder597Ref2.current.applyImpulse({ x: 20000, y: 50003, z: -30003 }, true)
    }, [])

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="dd232719934f4d9783a6f11437f06fb2fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="RootNode">
                            <group
                                name="Cylinder596"
                                position={[227.423, 39.945, -1458.221]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={100}>
                                <RigidBody ref={rbCylinder596Ref} collider="hull" onClick={handleCylinder596}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Cylinder596_Material035_0"
                                        geometry={nodes.Cylinder596_Material035_0.geometry}
                                        material={materials['Material.035']}
                                    />
                                </RigidBody>
                            </group>

                            <group
                                name="Cube1543"
                                position={[226.813, 80.642, -1460.109]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={100}>
                                <RigidBody ref={rbCube1543Ref} collider="hull" onClick={handleCube1543}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Cube1543_Material035_0"
                                        geometry={nodes.Cube1543_Material035_0.geometry}
                                        material={materials['Material.035']}
                                    />
                                </RigidBody>
                            </group>

                            <group
                                name="Cylinder597"
                                position={[294.533, 56.51, -1497.877]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={100}>
                                <RigidBody ref={rbCylinder597Ref1} collider="hull" onClick={handleCylinder597_1}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Cylinder597_Material036_0"
                                        geometry={nodes.Cylinder597_Material036_0.geometry}
                                        material={materials['Material.036']}
                                    />
                                </RigidBody>

                                <RigidBody ref={rbCylinder597Ref2} collider="hull" onClick={handleCylinder597_2}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        name="Cylinder597_Material037_0"
                                        geometry={nodes.Cylinder597_Material037_0.geometry}
                                        material={materials['Material.037']}
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

export default Trash1
useGLTF.preload('assets/smog/trash_can.glb')
