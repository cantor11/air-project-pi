import React from 'react';
import { Html } from "@react-three/drei";

const IntroText = () => {
  return (
    <Html
      wrapperClass='intro-text'
      occlude
      center
      distanceFactor={16}
      transform
      position={[0, 230, 420]}
      rotation={[-Math.PI / 6, 0, 0]}
    >
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
    </Html>
  )
}

export default IntroText
