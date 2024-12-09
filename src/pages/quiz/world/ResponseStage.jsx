import { useMemo } from 'react';
import { RigidBody } from '@react-three/rapier'

/**
 * ResponseStage Component
 * 
 * This functional React component sets up some 3D objects using `@react-three/fiber`
 * to visualize 3d objects made by hand.
 * Also, it uses `@react-three/rapier` to incorporate a Rigid Body for Physics.
 * This sets up a Rectangle made by hand using plane objects for its faces.
 * Some faces are transparent so the user can see through and see what is inside.
 * This will be used as a Stage to put some models inside for the Quiz section,
 * so the user can see models, animations.
 * Also, sets up some rectangles to be used as platforms to put some models to
 * represent the answers the user can choose.
 */


const ResponseStage = (props) => {
  // Custom transparent material
  const transparentMaterial = useMemo(() => 
    <meshStandardMaterial
      color={"gray"}
      transparent={true}
      opacity={0.5}
      depthWrite={false} // Improve transparency
    />
  , []);

  return (
    <RigidBody type="fixed" name="rbFloor" position={[-19,-7,0]}>
      <group scale={0.03}>
        <mesh {...props}>
          <boxGeometry args={[300, 20, 520]} />
          <meshStandardMaterial color={"white"} />
        </mesh>

        {/* Stage Walls */}
        <mesh {...props} position={[0, 30, -250]}>
          <boxGeometry args={[300, 50, 30]} />
          {transparentMaterial}
        </mesh>
        <mesh {...props} position={[0, 30, 250]}>
          <boxGeometry args={[300, 50, 30]} />
          {transparentMaterial}
        </mesh>
        <mesh {...props} position={[-140, 30, 0]}>
          <boxGeometry args={[30, 50, 520]} />
          {transparentMaterial}
        </mesh>
        <mesh {...props} position={[140, 30, 0]}>
          <boxGeometry args={[30, 50, 520]} />
          {transparentMaterial}
        </mesh>

        {/* Answers Platforms */}
        <mesh {...props} position={[0, 300, 500]}>
          <boxGeometry args={[200, 20, 200]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
        <mesh {...props} position={[0, 0, 500]}>
          <boxGeometry args={[200, 20, 200]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
        <mesh {...props} position={[0, 300, -500]}>
          <boxGeometry args={[200, 20, 200]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
        <mesh {...props} position={[0, 0, -500]}>
          <boxGeometry args={[200, 20, 200]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </group >
    </RigidBody>
  );
};

export default ResponseStage;