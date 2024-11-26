import { useMemo } from 'react';
import { RigidBody } from '@react-three/rapier'

/**
 * SolutionsStage Component
 * 
 * This functional React component sets up some 3D objects using `@react-three/fiber`
 * to visualize 3d objects made by hand.
 * Also, it uses `@react-three/rapier` to incorporate a Rigid Body for Physics.
 * This sets up a Rectangle made by hand using plane objects for its faces.
 * Some faces are transparent so the user can see through and see what is inside.
 * This will be used as a Stage to put some models inside for the Solutions section,
 * so the user can see models, animations... about what the text is saying.
 */


const SolutionsStage = (props) => {

  const transparentMaterial = useMemo(() => 
    <meshStandardMaterial
      color={"white"}
      transparent={true}
      opacity={0.06}
      depthWrite={false} // Improve transparency
    />
  , []);

  return (
    <RigidBody type="fixed" name="rbFloor" position={[-800,200,-250]} rotation-x={Math.PI*1/2} gravityScale={0}>
      <mesh {...props}>
        <boxGeometry args={[300, 520, 20]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh {...props} position={[0,0,-255]}>
        <boxGeometry args={[300, 520, 20]} />
        {transparentMaterial}
      </mesh>
      <mesh {...props} position={[0,250,-120]} rotation-x={Math.PI*1/2}>
        <boxGeometry args={[300, 250, 20]} />
        {transparentMaterial}
      </mesh>
      <mesh {...props} position={[0,-250,-120]} rotation-x={Math.PI*1/2}>
        <boxGeometry args={[300, 250, 20]} />
        {transparentMaterial}
      </mesh>
      <mesh {...props} position={[-140,0,-120]} rotation-y={Math.PI*1/2}>
        <boxGeometry args={[250, 520, 20]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh {...props} position={[140,0,-120]} rotation-y={Math.PI*1/2}>
        <boxGeometry args={[250, 520, 20]} />
        {transparentMaterial}
      </mesh>
    </RigidBody>
  );
};

export default SolutionsStage;