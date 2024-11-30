import React from 'react';

/**
 * Lights component defines the lighting setup for the 3D scene.
 * It adds ambient light to the scene to provide basic illumination.
 */

const Lights = () => {

  return (
    <> 
      <directionalLight 
      castShadow
      position={[0, 30, 10]} 
      intensity={2}
      shadow-mapSize={[1024, 1024]}
      shadow-camera-far={50}
      shadow-camera-left={-1}
      shadow-camera-right={1}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
      <spotLight
        castShadow
        position={[-20, 3, 0]}
        intensity={100}
        distance={25}
        penumbra={50}
      />
      <pointLight
        castShadow
        position={[-1, 6.5, 10]}
        intensity={1}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[-6, 6.5, 10]}
        intensity={1}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[7.5, 6.5, 10]}
        intensity={1}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[1, 6.5, -11]}
        intensity={5}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[9, 6.5, -11]}
        intensity={5}
        distance={7}
        decay={1}
      />
      <pointLight
        castShadow
        position={[-6.5, 6.5, -11]}
        intensity={5}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[11, 6.5, -9]}
        intensity={5}
        distance={6.5}
        decay={1}
      />  
      <pointLight
        castShadow
        position={[11, 6.5, -1]}
        intensity={5}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[11, 6.5, 7]}
        intensity={5}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[11, 0, -9]}
        intensity={5}
        distance={6.5}
        decay={1}
      /> 
      <pointLight
        castShadow
        position={[11, 0, -1]}
        intensity={5}
        distance={6.5}
        decay={1}
      />
      <pointLight
        castShadow
        position={[11, 0, 7]}
        intensity={5}
        distance={6.5}
        decay={1}
      />
    </>
  )
};
  
  export default Lights;
  