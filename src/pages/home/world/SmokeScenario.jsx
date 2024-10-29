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
      <SmokeRing scale={10} position={[0,0,0]} opacity={1}/>
      <SmokeRing scale={80} position={[0,0,0]} opacity={0.3}/>

      <SmokeRing scale={50} position={[200,20,0]} opacity={0.1}/>
      <SmokeRing scale={50} position={[-200,20,0]} opacity={0.1}/>

      <SmokeRing scale={130} position={[0,0,0]} opacity={1}/>
    </>
  )
}

export default SmokeScenario
