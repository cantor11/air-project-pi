import React from 'react'
import { Cloud, Environment, Float, Sky, Sparkles, Stars, Text } from "@react-three/drei"

const SmogStaging = () => {

  return (
    <>
      <Sparkles
        position={[0, -30, 0]}
        color={"#737811"}
        count={400}
        size={110}
        fade={true}
        speed={20}
        scale={450}
      />
      <Cloud
        seed={3}
        scale={22}
        volume={25}
        color={"#d1d1d1"}
        fade={200}
        segments={40}
        bounds={[12, 5, 12]}
        position={[0, 10, 0]}
        opacity={0.5}
        growth={5}
        speed={0.25}
        //concentrate={"inside"}
        />
      <Stars
        radius={400}
        depth={500}
        count={5000}
        factor={25}
        saturation={5}
        fade
        speed={1}
      />
      <Stars
        radius={400}
        depth={500}
        count={150}
        factor={90}
        saturation={5}
        fade
        speed={1}
      />
      <Sky
        distance={450000}  
        sunPosition={[0, -10, 0]}
        inclination={0}  
        azimuth={0.1}      
        turbidity={210}      
        rayleigh={0.1}
        mieCoefficient={0.01}    
        mieDirectionalG={0.9}      
      />
  </>
  )
}

export default SmogStaging;