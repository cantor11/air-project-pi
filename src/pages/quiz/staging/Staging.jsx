import { Sky, Stars } from "@react-three/drei";

/**
 * This component defines the sky settings for the 3D scene, simulating a nighttime environment
 * as part of a larger scene focused on air pollution and smog. 
 * It uses the `Sky` component from `@react-three/drei` to adjust lighting, 
 * color, and atmosphere settings to reflect low-light conditions.
 */

const Staging = () => {
  return (
    <>
      <Sky
        distance={450000} // Controls the distance of the sky dome for perspective depth
        sunPosition={[0, -1, 0]} // Positions the sun below the horizon for a darker sky
        inclination={0.6} // Adjusts the angle of the light source to simulate nightfall
        azimuth={0.25} // Determines the direction of the light relative to the scene
        turbidity={10} // Increases atmospheric particles for a hazier look
      />
      <Stars
        radius={100}           
        depth={50}              
        count={5000}            
        factor={4}              
        saturation={0}          
        fade={true}             
      />
      </>
  );
};

export default Staging;