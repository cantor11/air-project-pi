import { SmokeRing } from "./SmokeRing";

/**
 * SmokeScenario Component
 * This component creates a visual representation of smoke rings in a 3D environment.
 * Each SmokeRing is rendered at different scales and heights to simulate the effect of rising smoke,
 * which is a common visual representation of air pollution and smog.
 * The opacity of each ring is set to 0.5 to provide a semi-transparent look, enhancing the
 * realistic portrayal of smoke dispersal in the air.
 */
const SmokeScenario = () => {
  return (
    <>
      {/* 
        Smoke rings are positioned in a vertical arrangement to simulate the effect of smoke rising.
        Each ring has a different scale to create a layered effect.
      */}
      <SmokeRing scale={2} position={[0, 20, 0]} opacity={0.5} />  {/* Smallest smoke ring */}
      <SmokeRing scale={2.5} position={[0, 18, 0]} opacity={0.5} />  {/* Slightly larger ring */}
      <SmokeRing scale={3} position={[0, 16, 0]} opacity={0.5} />    {/* Medium ring */}
      <SmokeRing scale={3.5} position={[0, 13.5, 0]} opacity={0.5} />{/* Larger ring */}
      <SmokeRing scale={4} position={[0, 11, 0]} opacity={0.5} />    {/* Larger still */}
      <SmokeRing scale={5} position={[0, 8, 0]} opacity={0.5} />     {/* Approaching maximum scale */}
      <SmokeRing scale={6.5} position={[0, 5, 0]} opacity={0.5} />   {/* Largest smoke ring */}
    </>
  );
};

export default SmokeScenario;