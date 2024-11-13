import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CloudModel } from "./CloudModel";
import { PurpleRainstormModel } from "./PurpleRainstormModel";
import WaterWorldModel from "./WaterWorldModel";

/**
 * RainAnimation Component
 * 
 * This functional React component sets up a 3D object imported in this proyect
 * to use them to show an animation. The animation simulates a storm on the Earth,
 * for the immersion in the page.
 * The animation uses a "value" and changes it from 0 to 1 to scale the objects and let
 * them be watched on screen, also, the animation uses a easeInOut effect, so at the
 * beggining it goes fast, and slow at the end.
 * In addition, uses an "angle" and changes it from 0 to 2*PI to rotate the objects continuosly.
 */

const RainAnimation = ({ isAnimating }) => {
  const speed = 0.003; // Speed the clouds rotate over Earth
  const [value, setValue] = useState(0); // Value of scale for the objects
  const duration = 1200; // Time used to appear on screen
  const animationRef = useRef(null);

  // Refs for all groups of clouds
  const rainCloud_1 = useRef();
  const rainCloud_2 = useRef();
  const rainCloud_3 = useRef();
  const rainCloud_4 = useRef();
  const rainCloud_5 = useRef();
  const rainCloud_6 = useRef();
  const rainCloud_7 = useRef();
  const rainCloud_8 = useRef();

  // Easing function
  const easeInOutCubic = useCallback((t) => {
    return t < 0.5
    ? 6 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }, []);

  const startAnimation = useCallback(() => {
    const startTime = performance.now();
    
    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Normalize time
      const easedProgress = easeInOutCubic(progress); // Apply easing function
      setValue(easedProgress);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateValue); // Call function in the next frame
      }
    };

    animationRef.current = requestAnimationFrame(updateValue); // Start animation
  }, []);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current); // Stops animation
      animationRef.current = null; // Clean reference
    }
    setValue(0); // Restarts value to 0
  }, []);

  // Clean to cancel animation if component is not up
  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Detect if start or stop animation with parameter in this component
  useEffect(() => {
    isAnimating ?
    startAnimation()
    : stopAnimation()
  }, [isAnimating]);


  useFrame(() => {
    // Axis rotation, for every frame

    rainCloud_1.current.rotation.x += 0*speed;
    rainCloud_1.current.rotation.y += 1*speed;
    rainCloud_1.current.rotation.z += 1*speed;

    rainCloud_2.current.rotation.x += 0*speed;
    rainCloud_2.current.rotation.y += 1*speed;
    rainCloud_2.current.rotation.z += 1*speed;

    rainCloud_3.current.rotation.x += 0*speed;
    rainCloud_3.current.rotation.y += 1*speed;
    rainCloud_3.current.rotation.z += 1*speed;

    rainCloud_4.current.rotation.x += 0*speed;
    rainCloud_4.current.rotation.y += 1*speed;
    rainCloud_4.current.rotation.z += 1*speed;

    rainCloud_5.current.rotation.x += 1*speed;
    rainCloud_5.current.rotation.y += 0*speed;
    rainCloud_5.current.rotation.z += 1*speed;

    rainCloud_6.current.rotation.x += 1*speed;
    rainCloud_6.current.rotation.y += 0*speed;
    rainCloud_6.current.rotation.z += 1*speed;

    rainCloud_7.current.rotation.x += 1*speed;
    rainCloud_7.current.rotation.y += 0*speed;
    rainCloud_7.current.rotation.z += 1*speed;

    rainCloud_8.current.rotation.x += 1*speed;
    rainCloud_8.current.rotation.y += 0*speed;
    rainCloud_8.current.rotation.z += 1*speed;
  });

  return (
    <>
      <WaterWorldModel scale={25.5*value} />
      <group ref={rainCloud_1} position={[-1000, -300, -300]} rotation={[0,0,0]} scale={value}>
        <CloudModel position={[-550, 0, 0]} scale={20} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_2} position={[-1000, -300, -300]} rotation={[0,Math.PI*1/2,0]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_3} position={[-1000, -300, -300]} rotation={[0,-Math.PI,0]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350,0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_4} position={[-1000, -300, -300]} rotation={[0,-Math.PI*1/2,0]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_5} position={[-1000, -300, -300]} rotation={[0,0,0]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_6} position={[-1000, -300, -300]} rotation={[0,0,Math.PI*1/2]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_7} position={[-1000, -300, -300]} rotation={[0,0,-Math.PI]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
      <group ref={rainCloud_8} position={[-1000, -300, -300]} rotation={[0,0,-Math.PI*1/2]} scale={value}>
        <CloudModel position={[-550, 0, -70]} scale={20} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
        <PurpleRainstormModel position={[-350, 0, 0]} scale={1} rotation-x={Math.PI*1/2} rotation-z={Math.PI*1/2} />
      </group>
    </>
  )
}

export default RainAnimation;