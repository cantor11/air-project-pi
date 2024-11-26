import React, { useState } from 'react';
import { Html } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';

/**
 * `IntroText` Component
 *
 * This component displays an informational text block introducing the topic of smog
 * on the 3D web page. The text aims to raise awareness about the harmful effects of 
 * smog on human health and the environment, explaining that it is a result of decades 
 * of air pollution from vehicle and factory emissions. It also highlights the importance 
 * of adopting measures like clean energy, efficient public transportation, and effective 
 * environmental policies to reduce smog.
 *
 * The component leverages the `Html` feature from `@react-three/drei` to position and render
 * the text in 3D space, making it visually accessible within the scene.
 */

const IntroText = () => {
  const { camera } = useThree();
  const [clicked, setClicked] = useState(false);

  // Animation Hook
  const springProps = useSpring({
    position: clicked ? [0, 660, 0] : [camera.position.x, camera.position.y, camera.position.z],
    config: { tension: 18, friction: 30 },
    onChange: ({ value }) => {
      camera.position.set(...value.position);
      camera.lookAt(0, 0, 0);
    },
  });

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Html
      wrapperClass='intro-text'    // CSS class for specific text styling
      occlude                      // Allows the text to occlude according to objects in the scene
      center                       // Centers the text in 3D space
      distanceFactor={16}          // Scales the visual distance of the text
      transform                    // Enables 3D transformations
      position={[-5, 230, 420]}     // Positions the text within the 3D space
      rotation={[-Math.PI / 6, 0, 0]} // Rotates the text for optimal visualization in the scene
    >
      <div className='intro-smog'>
      <h1>
        <b> 
          Hablemos sobre el smog... 
        </b> 
      </h1>
      <h2> 
        Como resultado de varias décadas de contaminación del aire por emisiones de vehículos y fábricas, 
        perjudicial para la salud humana y el medio ambiente. Causando enfermedades respiratorias y afectando ecosistemas. 
        Para combatirlo, es esencial reducir las emisiones a través de energías limpias, 
        transporte público eficiente y políticas ambientales efectivas.
      </h2>
      <br />
      <button className="intro-button" onClick={handleClick}>Conoce más...</button>
      </div>
    </Html>
  )
}

export default IntroText