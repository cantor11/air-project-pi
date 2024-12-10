/**
 * WaterWorldModel Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an 3d object made by hand.
 * This is a sphere that will be used over the Earth model for the scene.
 */


const WaterWorldModel = ({scale = 1}) => {
  return (
    <mesh position={[-19, -2, 15]} scale={scale} receiveShadow>
      <sphereGeometry args={[20, 32, 32]} />
      <meshBasicMaterial color="darkblue" transparent opacity={0.7} />
    </mesh>
  )
}

export default WaterWorldModel;