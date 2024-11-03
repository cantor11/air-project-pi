/**
 * Moon Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an 3d object made by hand.
 * This is sphere that will be used as a moon for the scene.
 */

const Moon = () => {
  return (
    <mesh position={[-200, -60, -100]} castShadow>
      <sphereGeometry args={[20, 32, 32]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default Moon