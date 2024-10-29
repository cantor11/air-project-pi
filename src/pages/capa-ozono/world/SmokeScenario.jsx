import { SmokeRing } from "./SmokeRing";

/**
 * SmokeScenario Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize an environment with clouds that pretend to be smoke, using a
 * 3D object which is SmokeRing, placing it in strategic places to use the least
 * and produce the most inmertion.
 */

const SmokeScenario = () => {
  return (
    <>
      <SmokeRing scale={2} position={[0,20,0]} opacity={0.5}/>

      <SmokeRing scale={2.5} position={[0,18,0]} opacity={0.5}/>
      <SmokeRing scale={3} position={[0,16,0]} opacity={0.5}/>
      <SmokeRing scale={3.5} position={[0,13.5,0]} opacity={0.5}/>
      
      <SmokeRing scale={4} position={[0,11,0]} opacity={0.5}/>
      <SmokeRing scale={5} position={[0,8,0]} opacity={0.5}/>
      <SmokeRing scale={6.5} position={[0,5,0]} opacity={0.5}/>
    </>
  )
}

export default SmokeScenario
