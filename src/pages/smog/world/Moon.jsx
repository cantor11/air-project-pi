import React from 'react';

const Moon = () => {
  return (
    <mesh position={[10, 15, -5]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#C0C0C0" />
    </mesh>
  );
};

export default Moon;
