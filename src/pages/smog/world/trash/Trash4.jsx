import React, { useRef, useCallback } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Trash4 = (props) => {
  const { nodes, materials } = useGLTF('assets/smog/trash_bag.glb')

  // Reference for the trash bag mesh
  const rbTrash4Ref = useRef()

  // Impulse handling for the trash bag mesh
  const handleTrash4 = useCallback(() => {
    rbTrash4Ref.current.applyImpulse({ x: 30000, y: 90000, z: 20000 }, true)
  }, [])

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <RigidBody ref={rbTrash4Ref} collider="trimesh" onClick={handleTrash4}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Trash_Bag}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </RigidBody>
        </group>
      </group>
    </group>
  )
}

export default Trash4
useGLTF.preload('assets/smog/trash_bag.glb')