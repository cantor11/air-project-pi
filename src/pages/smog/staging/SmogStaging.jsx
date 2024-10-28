import React from 'react'
import { Cloud, Environment, Float, Sky, Sparkles, Stars, Text } from "@react-three/drei"

const SmogStaging = () => {
  return (
    <>
      <Sparkles
        position={[0, 60, 0]}
        color={"yellow"}
        count={100}
        size={120}
        fade={true}
        speed={20}
        scale={370}
      />

      <Cloud
        seed={1}
        scale={20}
        volume={15}
        color={"#d1d1d1"}
        fade={200}
        segments={45}
        bounds={[11, 7, 11]}
        position={[0, 100, 0]}
        opacity={0.6}
        growth={4}
        speed={0.25}
        concentrate={"inside"}
        />
        
      <Stars
        radius={400}
        depth={500}
        count={5000}
        factor={20}
        saturation={5}
        fade
        speed={1}
      />
  </>
  )
}

export default SmogStaging;
