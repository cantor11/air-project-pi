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
      <SmokeRing scale={0.25} position={[6.5, 4.5, 11.3]} opacity={0.7} />  {/* Smallest smoke ring */}
      <SmokeRing scale={0.3} position={[11, 4.7, -12.2]} opacity={0.7} />  {/* Smallest smoke ring */}
      <SmokeRing scale={0.3} position={[-5, 4.7, -12.5]} opacity={0.7} />  {/* Smallest smoke ring */}
    </>
  );
};

export default SmokeScenario;