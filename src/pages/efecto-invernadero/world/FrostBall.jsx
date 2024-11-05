/**
 * FrostBall Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an 3d object made by hand.
 * This is a sphere that will be used over the Earth model when there is the
 * colding simulation for the scene.
 */


const FrostBall = () => {
  return (
    <>
      <mesh position={[-1000,-300,-300]}  scale={1}>
        <sphereGeometry args={[20, 32, 32]} />
        {/* <meshBasicMaterial color="lightblue" transparent opacity={0.5} /> */}
        <meshPhysicalMaterial 
          color="lightblue" 
          
          opacity={0.1} 
          roughness={0.1}  // Controla la dispersión de luz
          transmission={0.9}  // Hace que el material sea translúcido
          thickness={0.3}  // Añade profundidad para el efecto de hielo
          envMapIntensity={1}  // Para que refleje la luz del ambiente
        />
      </mesh>
      <mesh position={[-1000,-300,-300]}  scale={34}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshBasicMaterial color="lightblue" transparent opacity={0.1} />
      </mesh>
    </>
  )
}

export default FrostBall