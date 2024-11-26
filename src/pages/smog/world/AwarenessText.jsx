import React, { useState, useEffect } from 'react';
import { Html } from "@react-three/drei";

/**
 * `AwarenessText` is a React component that renders a series of informative text sections
 * about the impacts of smog within a 3D scene using `@react-three/drei`. The component 
 * uses `Html` for overlay content positioned in the 3D space. Users can navigate through 
 * three distinct text sections using the left and right arrow keys, which update the 
 * `textIndex` state. Each section presents specific content, including text and images, 
 * aimed at raising awareness of health and environmental issues caused by smog. 
 * Additionally, the component provides on-screen navigation instructions to guide users 
 * through the content.
 */

const AwarenessText = ({ setFreeNavigation }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [instructionText, setInstructionText] = useState("Utiliza las flechas izquierda y derecha para navegar.");

  const handleKeyPress = (event) => {
    if (event.key === "ArrowRight" && textIndex < 2) {
      setTextIndex((prevIndex) => prevIndex + 1);
    } else if (event.key === "ArrowLeft" && textIndex > 0) {
      setTextIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleUnlockNavigation = () => {
    setFreeNavigation(true);
    setInstructionText("Desplazate por la ciudad y descubre que puedes hacer al respecto.");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [textIndex]);

  return (
    <>
      {/* Text 1 */}
      {textIndex === 0 && (
        <>
        <Html
          wrapperClass='intro-text'
          occlude
          center
          distanceFactor={17}
          transform
          position={[90, 580, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <div className='awareness-text1'>
            <h2>
              - Agravamiento del asma<br/>
              - Aumento de infecciones respiratorias<br/>
              - Reducción de la función pulmonar<br/>
              - Mayor riesgo de cáncer de pulmón<br/>
              - Problemas cardiovasculares<br/>
              - Daños al sistema nervioso
            </h2>
          </div>
        </Html>
        <Html
          wrapperClass='intro-text'
          occlude
          center
          distanceFactor={14}
          transform
          position={[0, 580, -52]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <div>
            <h1>Consecuencias en la salud</h1>
          </div>
        </Html>
        <Html
          wrapperClass='intro-text'
          occlude
          center
          distanceFactor={15}
          transform
          position={[-85, 580, -1]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <div className='image-smog-text'>
            <img src="images/smog/lungs.png" alt="pulmon" width="1400" height="1400"/>
          </div>
        </Html>
        </>
      )}

      {/* Text 2 */}
      {textIndex === 1 && (
        <>
        <Html
          wrapperClass='intro-text'
          occlude
          center
          distanceFactor={17}
          transform
          position={[-90, 580, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <div className='awareness-text2'>
            <h2>
              - Contaminación del aire y el agua<br/>
              - Deterioro de la calidad del suelo<br/>
              - Reducción de la biodiversidad<br/>
              - Daños a los cultivos y vegetación<br/>
              - Aceleración del cambio climático<br/>
              - Reducción de la visibilidad
            </h2>
          </div>
        </Html>
        <Html
        wrapperClass='intro-text'
        occlude
        center
        distanceFactor={14}
        transform
        position={[0, 580, -52]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <div>
          <h1>Consecuencias en el medioambiente</h1>
        </div>
      </Html>
      <Html
          wrapperClass='intro-text'
          occlude
          center
          distanceFactor={15}
          transform
          position={[87, 580, -2]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <div className='image-smog-text'>
            <img src="images/smog/pollution-city.png" alt="mundo" width="1800" height="1800"/>
          </div>
        </Html>
      </>
      )}

      {/* Text 3 */}
      {textIndex === 2 && (
        <Html
          wrapperClass='intro-text'
          occlude
          center
          distanceFactor={17}
          transform
          position={[0, 580, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <div className='awareness-text3'>
            <h1><b>¿Qué vamos a hacer al respecto?</b></h1>
            <h2>
            ¿Vamos a seguir ignorando las consecuencias del smog hasta que sea demasiado tarde? 
            La salud de las personas y el futuro de nuestro planeta dependen de las decisiones que tomemos hoy.
            </h2>
            <br />
            <button className="intro-button" onClick={handleUnlockNavigation}>Activa la navegación...</button>
          </div>
        </Html>
      )}

    <Html
      wrapperClass='intro-text'    // CSS class for specific text styling
      occlude                      // Allows the text to occlude according to objects in the scene
      center                       // Centers the text in 3D space
      distanceFactor={15}          // Scales the visual distance of the text
      transform                    // Enables 3D transformations
      position={[-100, 578, 51]}     // Positions the text within the 3D space
      rotation={[-Math.PI / 2, 0, 0]} // Rotates the text for optimal visualization in the scene
    >
      <div className='awareness-instruction'>
        <h2> 
          <marquee scrollamount="23">
            {instructionText}
          </marquee>
        </h2>
        </div>
    </Html>
    </>
  )
}

export default AwarenessText