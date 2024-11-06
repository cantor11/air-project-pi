import { useCallback, useEffect, useRef, useState } from "react";
import { SnowBallRocks } from "./SnowBallRocks";
import FrostBall from "./FrostBall";

/**
 * AwarenessText Component
 * 
 * This functional React component sets up some 3D objects imported in this proyect
 * to use them to show an animation. The animation simulates the Earth getting frozen,
 * for the immersion in the page.
 * The animation uses a "value" and change it from 0 to 1 to scale the objects and let
 * them be watched on screen, also, the animation uses a easeInOut effect, so at the
 * beggining it goes fast, and slow at the end.
 */

const ColdingAnimation = ({ isAnimating }) => {
  const [value, setValue] = useState(0); // Value of scale for the objects
  const duration = 1200;
  const animationRef = useRef(null);

  // Easing function
  const easeInOutCubic = useCallback((t) => {
    return t < 0.5
    ? 6 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }, []);

  // Function to start the animation
  const startAnimation = () => {
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
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current); // Stops animation
      animationRef.current = null; // Clean reference
    }
    setValue(0); // Restarts value to 0
  };

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

  return (
    <>
      <SnowBallRocks position={[-910,-750,-260]} scale={970*value} />
      <FrostBall scale={31*value} />
      <FrostBall scale={34*value} />
    </>
  )
}

export default ColdingAnimation
