import { useCallback, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

/**
 * DodecahedronContainer Component
 * 
 * This functional React component sets up some 3D objects using `@react-three/fiber` 
 * to visualize 3d objects made by hand.
 * Also, it uses `@react-three/rapier` to incorporate a Rigid Body for Physics.
 * This sets up a Dodecahedron, which inside contains a "Cube" made by hand using
 * plane objects for its faces. Every face is a Rigid Body that will be "fixed".
 * Inside the "box" there will be a ball which will be impulsed many times, so it
 * will collide with the box's faces and keep bouncing.
 * The objective is to pretend that the ball bounces inside the Dodecahedron, but
 * it is actually bouncing inside de invisible box.
 */


const size = 30;
const Dodecahedron = ({ position, rotationValue }) => {
  return (
    <mesh position={position} rotation-y={Math.PI*rotationValue}>
      <dodecahedronGeometry args={[1 + 2*size]} />
      <meshPhysicalMaterial 
        color="cyan" 
        transparent={true} 
        opacity={0.4}
      />
    </mesh>
  );
};

function CubeFace({ position, rotation }) {
  const faceMeshRef = useRef();

  useFrame(() => {
    if (faceMeshRef.current) {
      faceMeshRef.current.visible = false;
    }
  });

  return (
    <mesh ref={faceMeshRef} position={position} rotation={rotation}>
      <planeGeometry args={[1 + 2*size, 1 + 2*size]} />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  )
}

const DodecahedronContainer = ({ position }) => {
  const [rotationValue, setValue] = useState(0); // Value that will change every time an "rbBall" collides with a face of the "box"

  // Function to build the "box" with plane objects
  const CubeBox = useCallback(({ position }) => {
    const faces = useMemo(() =>
      [
        { position: [0, - size, 0.5], rotation: [Math.PI / 2, 0, 0] },
        { position: [0, 1 + size, 0.5], rotation: [-Math.PI / 2, 0, 0] },
        { position: [0.5 + size, 0.5, 0.5], rotation: [0, Math.PI / 2, 0] },
        { position: [-0.5 - size, 0.5, 0.5], rotation: [0, -Math.PI / 2, 0] },
        { position: [0, 0.5, - size], rotation: [0, 0, Math.PI / 2] },
        { position: [0, 0.5, 1 + size], rotation: [0, 0, -Math.PI / 2] },
      ]
    , []);
  
    return (
      <RigidBody
        position={position}
        name='cubeBox'
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "bouncingBall") {
            handleChange();
          }
        }}
      >
        {faces.map((face, index) => (
          <CubeFace
            key={index}
            position={face.position}
            rotation={face.rotation}
          />
        ))}
      </RigidBody>
    )
  }, []);

  const handleChange = useCallback(() => {
    setValue(prevValue => {
      if (prevValue >= 2) {
        return 0;
      }
      return prevValue + 0.03;
    });
  }, []);

  return (
    <>
      <Dodecahedron position={position} rotationValue={rotationValue} />
      <CubeBox position={position} />
    </>
  );
};

export default DodecahedronContainer;