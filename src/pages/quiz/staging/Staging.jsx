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
        distance={450000}  
        sunPosition={[0, -10, 0]}
        inclination={0}  
        azimuth={0.1}      
        turbidity={510}      
        rayleigh={0.1}
        mieCoefficient={0.01}    
        mieDirectionalG={0.9}      
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