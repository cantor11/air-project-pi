import { useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';
import { RepeatWrapping } from "three";

const Moon = () => {
  const PATH = useMemo(() => "assets/smog/materials/moon/polystyrene_", []);

  const moonTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  });

  Object.keys(moonTexture).map((key)=>{
    moonTexture[key].wrapS = moonTexture[key].wrapT = RepeatWrapping;
    moonTexture[key].repeat.set(4, 4);
  });
  
  //console.log(moonTexture);
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#ffffff"
        map={moonTexture.map}
        normalMap={moonTexture.normalMap}
        aoMap={moonTexture.aoMap}
        roughnessMap={moonTexture.roughnessMap}
        roughness={0}
        metalness={3} 
        displacementMap={moonTexture.displacementMap}
      />
    </mesh>
  );
};

export default Moon;
