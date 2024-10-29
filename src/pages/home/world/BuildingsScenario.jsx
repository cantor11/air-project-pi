import { BuildingSet } from "./BuildingsSet";

/**
 * BuildingsScenario Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize an environment with many sets of different buildings to show a city,
 * using a 3D object which is BuildingSet, placing it in strategic places to use the least
 * and produce the most inmertion.
 */

function BuildingsScenario() {
  return (
    <>
      <BuildingSet position={[0,0,0]} />
      <BuildingSet position={[0,0,90]} scale={0.5} rotation-y={-Math.PI/2}/>
      <BuildingSet position={[45,0,100]} scale={0.5} rotation-y={-Math.PI/-2}/>
      <BuildingSet position={[140,0,0]} rotation-y={-Math.PI / 2}/>
      <BuildingSet position={[140,0,110]} rotation-y={-Math.PI / 2}/>
      <BuildingSet position={[-100,0,0]} rotation-y={-Math.PI / 2}/>
      <BuildingSet position={[-100,0,120]} rotation-y={-Math.PI/-2}/>

      <BuildingSet position={[0,0,-140]} scale={2} rotation-y={Math.PI}/>
      <BuildingSet position={[210,0,-180]} scale={2} rotation-y={Math.PI*0}/>
      <BuildingSet position={[330,0,50]} scale={2} rotation-y={Math.PI/-2}/>
      <BuildingSet position={[-290,0,50]} scale={2} rotation-y={Math.PI/2}/>
      <BuildingSet position={[-250,0,-180]} scale={2} rotation-y={Math.PI*0}/>

      <BuildingSet position={[0,0,-700]} scale={6} rotation-y={Math.PI*0}/>

      <BuildingSet position={[-900,0,-700]} scale={8} rotation-y={Math.PI/2}/>
      <BuildingSet position={[-900,0,150]} scale={8} rotation-y={Math.PI/2}/>

      <BuildingSet position={[900,0,-900]} scale={8} rotation-y={Math.PI/-2}/>
      <BuildingSet position={[900,0,-100]} scale={8} rotation-y={Math.PI/-2}/>    
    </>
  )
}

export default BuildingsScenario