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
      <SmokeRing scale={5} position={[0,20,0]} opacity={0.8}/>

      <SmokeRing scale={10} position={[0,16,0]} opacity={0.8}/>
      
      <SmokeRing scale={7.5} position={[0,-3,0]} opacity={0.8}/>
    </>
  )
}

export default SmokeScenario
