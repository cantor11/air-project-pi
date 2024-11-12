/**
 * FrostBall Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an 3d object made by hand.
 * This is a sphere that will be used over the Earth model when there is the
 * colding simulation for the scene.
 */


const SnowLight = ({scale = 1}) => {
  return (
    <mesh position={[-1000,-300,-300]} scale={scale}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshBasicMaterial color="lightblue" transparent opacity={0.1} />
    </mesh>
  )
}

export default SnowLight;