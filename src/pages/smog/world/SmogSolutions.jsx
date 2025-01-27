import React from 'react';
import Trash1 from './trash/Trash1';
import Trash2 from './trash/Trash2';
import Trash3 from './trash/Trash3';
import Trash4 from './trash/Trash4';
import { Float, Text3D } from '@react-three/drei';
import AdSignal from './AdSignal';
import { Text } from '@react-three/drei';
import { useNavigate } from "react-router-dom";

const SmogSolutions = () => {
    const navigate = useNavigate();

    return (
    <>  
        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.3}
            floatingRange={[1,1]}
        >
        <Text3D
            position={[-220, 30, -30]}
            rotation={[0, -Math.PI / 2, 0]}
            font="/fonts/blue-ocean.json"
            height={0.9}
            lineHeight={0.75}
            letterSpacing={0.01}
            size={9.5}
        >
            {'NO a la contaminación!'}
            <meshStandardMaterial color={"#dcdc00"}/>
        </Text3D>
        </Float>

        <mesh position={[-120, -7, 47]} scale={[8, 8, 8]} rotation={[0, Math.PI / 2, 0]}>
            <Trash1 />
        </mesh>
        <mesh position={[-220, -8, 20]} scale={[0.08, 0.08, 0.08]} rotation={[0, -Math.PI / 3, 0]}>
            <Trash2 />
        </mesh>
        <mesh position={[-225, -4, 18]} scale={[1, 1, 1]} rotation={[0, -Math.PI / 3, 0]}>
            <Trash3 />
        </mesh>
        <mesh position={[-230, -8, 40]} scale={[0.1, 0.1, 0.1]} rotation={[0, -Math.PI / 3, 0]}>
            <Trash4 />
        </mesh>
        <mesh position={[-224, -8, 47]} scale={[0.1, 0.1, 0.1]} rotation={[0, -Math.PI / 3, 0]}>
            <Trash4 />
        </mesh>
        <mesh position={[-235, -8, 45]} scale={[0.1, 0.1, 0.1]} rotation={[0, -Math.PI / 3, 0]}>
            <Trash4 />
        </mesh>

        
        <Float
            speed={2}
            rotationIntensity={0.05}
            floatIntensity={0.2}
            floatingRange={[0,0]}
        >
        <Text3D
            position={[238, 70, 50]}
            rotation={[0, Math.PI / 2, 0]}
            font="/fonts/blue-ocean.json"
            bevelEnabled
            bevelSegments={1}
            bevelSize={0.15}
            bevelThickness={0.01}
            height={0}
            lineHeight={0.75}
            letterSpacing={0.3}
            size={7.5}
        >
            {'   Concientiza a\n otras personas!'}
            <meshBasicMaterial color={"yellow"}/>
        </Text3D>
        </Float>

        <mesh position={[244, -8, 10]} scale={[40, 40, 40]} rotation={[0, Math.PI / 2, 0]}>
            <AdSignal />
        </mesh>

        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.3}
            floatingRange={[1,1]}
        >
        <Text3D
            position={[-70, 28, 210]}
            rotation={[0, 0, 0]}
            font="/fonts/blue-ocean.json"
            height={0.5}
            lineHeight={0.75}
            letterSpacing={0.01}
            size={9.5}
        >
            {'NO a los combustibles fósiles!'}
            <meshStandardMaterial color={"#ffff00"}/>
        </Text3D>
        </Float>
        <Text 
            position={[-50, 30, -245]}
            rotation={[0, Math.PI, 0]}
            color="yellow" 
            anchorX={"right"} 
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            scale={[7, 7, 7]}
            outlineWidth={0.03}
            outlineColor="black" 
        >
            {"                        ¿Terminaste de navegar? \n\
                 Pon a prueba tus conocimientos con \n\
                nuestro quiz, pero si aún no terminas, \n\
                    vuelve cuando estés preparado."}
        </Text>
        <mesh 
            onClick={() => navigate("/quiz")} 
            onPointerOver={(e) => (document.body.style.cursor = "pointer")}
            onPointerOut={(e) => (document.body.style.cursor = "default")}
            >
        <Float 
            speed={3}
            rotationIntensity={0.1}
            floatIntensity={0.6}
            floatingRange={[1,1]}
        >
            <Text 
                position={[-21, 10, -245]}
                rotation={[0, Math.PI, 0]}
                color="yellow" 
                anchorX={"right"} 
                anchorY={"bottom"}
                font="/fonts/arial_narrow_7.ttf"
                scale={[7, 7, 7]}
                outlineWidth={0.012}
                outlineColor="yellow" 
             >
            Realiza el quiz...
            </Text>
        </Float>
        </mesh>
    </>  
    )
}

export default SmogSolutions
