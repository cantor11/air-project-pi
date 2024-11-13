import { useCallback, useEffect, useRef, useState } from "react";
import { SmokeRing } from "./SmokeRing";

/**
 * NormalGasAnimation Component
 * 
 * This functional React component sets up a 3D object imported in this proyect
 * to use them to show an animation. The animation simulates
 * the greenhouse gases for the immersion in the page.
 * The animation uses a "value" and changes it from 0 to 1 to scale the objects and let
 * them be watched on screen, also, the animation uses a easeInOut effect, so at the
 * beggining it goes fast, and slow at the end.
 */

const NormalGasAnimation = ({ isAnimating }) => {
  const [value, setValue] = useState(0); // Value of scale for the objects
  const duration = 1200; // Time used to appear on screen
  const animationRef = useRef(null);

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

  return (
    <>
      <SmokeRing position={[-1000,-56,-300]} scale={90*value} />
      <SmokeRing position={[-1000,-260,-300]} scale={100*value} rotation-y={Math.PI/2}/>
    </>
  )
}

export default NormalGasAnimation;