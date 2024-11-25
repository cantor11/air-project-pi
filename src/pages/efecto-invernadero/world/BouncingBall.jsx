import { useCallback, useEffect, useRef, useState } from "react";
import { BallCollider, RigidBody } from "@react-three/rapier";

import useGreenhouseStore from "../../../stores/greenhouse-store";

/**
 * BouncingBall Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize an 3d object made by hand.
 * Also, it uses `@react-three/rapier` to incorporate a Rigid Body, colliders
 * and do some Physic events.
 * This is a sphere that has an "impulse" when an event happens, specifically when the
 * user is changing the text in Solutions section.
 * The ball will be bouncing then since it will be put inside a "box".
 * In addition, when the ball collides, a value will be increasing from 0 to 1, once it
 * reaches 1, it will start to decrease to 0, and like this continuously.
 */


const BouncingBall = (props) => {
  const { solutionsSection } = useGreenhouseStore(); // Information brought from store

  const bouncingBallRef = useRef(null);
  const [value, setValue] = useState(0); // Value that will change every time the ball collides
  const [isIncreasing, setIsIncreasing] = useState(true); // To know if the value should increase or decrase

  useEffect(() => {
    handleBall();
    return () => { null };
  }, [solutionsSection.solutionsStep]);  // Efect executed when available

  // Function called everytime the value should be changed
  const handleChange = () => {
    if (isIncreasing) {
      // If increasing, increase the value
      setValue(prevValue => {
        if (prevValue >= 1) {
          setIsIncreasing(false); // Change to descreasing when reaches 1
          return 1;
        }
        return prevValue + 0.2;
      });
    } else {
      // If decreasing, decrease the value
      setValue(prevValue => {
        if (prevValue <= 0) {
          setIsIncreasing(true); // Change to increasing when value reaches 0
          return 0;
        }
        return prevValue - 0.2;
      });
    }
  };

  // Function to apply an impulse on the ball
  const handleBall = useCallback(() => {
    bouncingBallRef.current.applyImpulse({ x: (10**5)*5, y: (10**5)*10, z: -(10**5)*1 }, true);
  }, []);

  return (
    <RigidBody
      name="bouncingBall"
      ref={bouncingBallRef}
      type="dynamic"
      colliders={false}
      restitution={1.5}
      gravityScale={0.1}
      onCollisionEnter={() => {
        handleChange();
      }}
    >
      <mesh {...props}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshStandardMaterial color={[value/100, value/10, value]} />
      </mesh>
      <BallCollider args={[10]} position={props.position} />
    </RigidBody>
  );
};

export default BouncingBall;
