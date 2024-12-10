import React, { useRef, useCallback } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Trash3 = (props) => {
  const { nodes, materials } = useGLTF('assets/smog/trashes.glb')

  // Reference for the trash mesh
  const rbTrashRef = useRef()

  // Impulse handling for the trash mesh
  const handleTrash = useCallback(() => {
    rbTrashRef.current.applyImpulse({ x: 30000, y: 90000, z: 30000 }, true)
  }, [])

  return (
    <group {...props} dispose={null}>
      <RigidBody ref={rbTrashRef} collider="trimesh" onClick={handleTrash}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </RigidBody>
    </group>
  )
}

export default Trash3
useGLTF.preload('assets/smog/trashes.glb')