import React from 'react';
import { Html } from "@react-three/drei";

const AwarenessText = () => {
  
  return (
    <>
    <Html
      wrapperClass='intro-text'    // CSS class for specific text styling
      occlude                      // Allows the text to occlude according to objects in the scene
      center                       // Centers the text in 3D space
      distanceFactor={15}          // Scales the visual distance of the text
      transform                    // Enables 3D transformations
      position={[80, 580, 0]}     // Positions the text within the 3D space
      rotation={[-Math.PI / 2, 0, 0]} // Rotates the text for optimal visualization in the scene
    >
      <div className='awareness-text1'>
        <h1>
          <b> 
            Hablemos sobre el smog... 
          </b> 
        </h1>
        <h2> 
          Resultado de varias décadas de contaminación del aire por emisiones de vehículos y fábricas, 
          perjudicial para la salud humana y el medio ambiente. Causando enfermedades respiratorias y afectando ecosistemas. 
          Para combatirlo, es esencial reducir las emisiones a través de energías limpias, 
          transporte público eficiente y políticas ambientales efectivas.
        </h2>
      </div>
    </Html>
    <Html
      wrapperClass='intro-text'    // CSS class for specific text styling
      occlude                      // Allows the text to occlude according to objects in the scene
      center                       // Centers the text in 3D space
      distanceFactor={15}          // Scales the visual distance of the text
      transform                    // Enables 3D transformations
      position={[-80, 580, 0]}     // Positions the text within the 3D space
      rotation={[-Math.PI / 2, 0, 0]} // Rotates the text for optimal visualization in the scene
    >
      <div className='awareness-text2'>
        <h1>
          <b> 
            Hablemos sobre el smog... 
          </b> 
        </h1>
        <h2> 
          Resultado de varias décadas de contaminación del aire por emisiones de vehículos y fábricas, 
          perjudicial para la salud humana y el medio ambiente. Causando enfermedades respiratorias y afectando ecosistemas. 
          Para combatirlo, es esencial reducir las emisiones a través de energías limpias, 
          transporte público eficiente y políticas ambientales efectivas.
        </h2>
        </div>
    </Html>
    <Html
      wrapperClass='intro-text'    // CSS class for specific text styling
      occlude                      // Allows the text to occlude according to objects in the scene
      center                       // Centers the text in 3D space
      distanceFactor={15}          // Scales the visual distance of the text
      transform                    // Enables 3D transformations
      position={[-100, 580, 55]}     // Positions the text within the 3D space
      rotation={[-Math.PI / 2, 0, 0]} // Rotates the text for optimal visualization in the scene
    >
      <div className='awareness-instruction'>
        <h2> 
          <marquee scrollamount="20">
          Utiliza las flechas izquierda y derecha para navegar.
          </marquee>
        </h2>
        </div>
    </Html>
    </>
  )
}

export default AwarenessText
