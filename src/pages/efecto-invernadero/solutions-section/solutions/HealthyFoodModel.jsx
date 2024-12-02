import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

/**
 * HealthyFoodModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/drei` 
 * to visualize an 3d object imported in this proyect.
 * This is a model of many kind of food, we put each one (each Mesh) inside a
 * rigid body to put them inside a physics environment.
 */


export function HealthyFoodModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/healthy_food_prop_pack.glb');

  // Filter all nodes to get the ones that are "Mesh"
  const meshes = Object.values(nodes).filter(node => node.type === 'Mesh');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, Math.PI / 1, -Math.PI / 2]}>
        {meshes.map((meshNode, index) => (
          <RigidBody
            key={index}
            restitution={1.7}
            type="dynamic"
            gravityScale={1}
            mass={100}
            colliders="hull"
          >
            <mesh
              castShadow
              receiveShadow
              geometry={meshNode.geometry}
              material={materials[meshNode.material.name]}
            />
          </RigidBody>
        ))}
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/healthy_food_prop_pack.glb');