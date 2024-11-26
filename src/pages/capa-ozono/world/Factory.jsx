import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

/**
 * Factory Component
 * This component renders a 3D factory model using a GLTF file. 
 * It utilizes various textures to enhance the realism of the factory's floor and other elements.
 * The component consists of multiple meshes that represent different parts of the factory,
 * each with specific materials and textures applied to them. Additionally, shadow casting and receiving
 * are set up for realistic lighting effects within the scene.
 */

export default function Factory(props) {
  const { nodes, materials } = useGLTF('/models-3d/factory.glb')
  const leaves1Ref = useRef();
  const leaves3Ref = useRef();
  const leaves5Ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const sway = Math.sin(time * 2) * 0.02; // Oscilación suave
    const bounce = Math.cos(time * 1.5) * 0.000002; // Movimiento vertical leve

    // Movimiento de las hojas
    if (leaves1Ref.current) {
      leaves1Ref.current.rotation.z = sway;
      leaves1Ref.current.position.y += bounce;
    }
    if (leaves3Ref.current) {
      leaves3Ref.current.rotation.z = -sway/2;
      leaves3Ref.current.position.y -= bounce;
    }
    if (leaves5Ref.current) {
      leaves5Ref.current.rotation.z = sway;
      leaves5Ref.current.position.y += bounce;
    }
  });

  const rbPhysicsLeaves1 = useRef();
  const rbPhysicsLeaves2 = useRef();

  const handleLeaves1 = useCallback(() => {
    rbPhysicsLeaves1.current.applyImpulse({ x: 0, y: 100, z: -20 }, true)
  }, []);
  
  const handleLeaves2 = useCallback(() => {
    rbPhysicsLeaves2.current.applyImpulse({ x: 0, y: 100, z: 20 }, true)
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        name='leaves1'
        ref={leaves1Ref}
        castShadow
        geometry={nodes.Cube011_Cube036.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves3'
        ref={leaves3Ref}
        castShadow
        geometry={nodes.Cube014_Cube025.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='leaves5'
        castShadow
        ref={leaves5Ref}
        geometry={nodes.Cube018_Cube042.geometry}
        material={materials['Material.001']}
      />
      <RigidBody 
        ref={rbPhysicsLeaves1}
        colliders="hull"
        gravityScale={20}
        restitution={0.7}
      >
        <mesh
          onClick={handleLeaves1}
          position={[-17.5, 2.5, -2]}
          name='physicsLeaves1'
          castShadow
          geometry={nodes.Cube016_Cube040.geometry}
          material={materials['Material.001']}
        />
      </RigidBody>
      <RigidBody 
        ref={rbPhysicsLeaves2}
        colliders="hull"
        gravityScale={20}
        restitution={0.7}
      >
        <mesh
          onClick={handleLeaves2}
          position={[0, 2.5, 3]}
          name='physicsLeaves2'
          castShadow
          geometry={nodes.Cube013_Cube038.geometry}
          material={materials['Material.001']}
        />
      </RigidBody>
      <mesh
        name='mainRoad'
        geometry={nodes.Cube032_Cube066.geometry}
        material={materials.None}
      />
      <mesh
        name='mainRoad2'
        geometry={nodes.Cube033_Cube067.geometry}
        material={materials.None}
      />
      <mesh
        name='mainRoad3'
        geometry={nodes.Cube038_Cube065.geometry}
        material={materials.None}
      />  
      <RigidBody type="fixed" colliders="trimesh">
      <mesh
        name='factory'
        geometry={nodes.Plane002_Plane004_1.geometry}
        material={materials['Material.001']}
      />
      </RigidBody> 
      <mesh
        name='accessories'
        castShadow
        geometry={nodes.Plane002_Plane004_2.geometry}
        material={materials['Material.006']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/factory.glb')