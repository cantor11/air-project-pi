import { useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';
import { RepeatWrapping } from "three";

/**
 * `Moon` Component
 *
 * This component renders a textured 3D sphere that represents the Moon within the 3D scene. 
 * It uses various textures, including displacement, normal, roughness, and ambient occlusion maps, 
 * to create a realistic lunar surface. 
 *
 * Textures are loaded from the specified path and wrapped using `RepeatWrapping` to create a tiled effect 
 * on the sphere surface. The `metalness` and `roughness` properties are configured to give the Moon 
 * a distinct appearance under scene lighting.
 *
 * The component leverages Three.js’s `meshStandardMaterial` to control the texture application and 
 * lighting interactions.
 */

const Moon = () => {
  const PATH = useMemo(() => "assets/smog/materials/moon/polystyrene_", []);

  const moonTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  });

  // Apply wrapping and repeat settings for each texture map
  Object.keys(moonTexture).map((key) => {
    moonTexture[key].wrapS = moonTexture[key].wrapT = RepeatWrapping;
    moonTexture[key].repeat.set(4, 4);
  });

  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} /> {/* Defines the Moon's shape and detail level */}
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