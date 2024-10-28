import React from 'react';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

/**
 * Lights component defines the lighting setup for the 3D scene.
 * It adds ambient light to the scene to provide basic illumination.
 */

const Lights = () => {
  const directionalLightRef = React.useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 5, 'yellow');
  return (
    <> 
      <directionalLight 
      castShadow 
      ref={directionalLightRef} 
      position={[10, 20, 5]} 
      intensity={3}
      shadow-mapSize={[1024, 1024]}
      shadow-camera-far={50}
      shadow-camera-left={-1}
      shadow-camera-right={1}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
    </>
  )
};
  
  export default Lights;
  