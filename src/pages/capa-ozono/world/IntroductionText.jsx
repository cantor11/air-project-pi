import { Text, Text3D, Center } from "@react-three/drei";
import { MathUtils } from "three";

/**
 * IntroductionText Component
 * This component displays informative text in a 3D environment,
 * highlighting the importance of the ozone layer and its depletion.
 * The text is positioned and rotated to be easily readable within the 3D scene.
 * The first text displays a title, while the second text provides a detailed description.
 * 
 * @returns {JSX.Element} A 3D representation of introductory text regarding ozone layer depletion.
 */
const IntroductionText = () => {
    return (
        <>
            {/* 
                Main title text regarding ozone layer depletion.
                Positioned and rotated for visibility within the 3D scene.
            */}
            <Text 
                position={[-7, 4, 1.2]} // Position in the 3D space
                rotation={[0, MathUtils.degToRad(-90), 0]} // Rotate to face the camera
                fontSize={0.35} // Font size of the title
                maxWidth={4.5} // Maximum width before wrapping
                font="/fonts/blue-ocean.ttf" // Custom font for the title
                textAlign="center" // Center text alignment
            >
                Agotamiento de la capa de ozono...
            </Text>
            
            {/* 
                Detailed description text about the ozone layer and its importance.
                Also positioned and rotated for readability.
            */}
            <Text 
                position={[-7, 2.3, 1.2]} // Position in the 3D space
                rotation={[0, MathUtils.degToRad(-90), 0]} // Rotate to face the camera
                fontSize={0.2} // Font size of the description
                maxWidth={3.5} // Maximum width before wrapping
                textAlign="center" // Center text alignment
                font="/fonts/arial_narrow_7.ttf" // Custom font for the description
            >
                La capa de ozono nos protege de la radiación ultravioleta dañina. Sin embargo, 
                sustancias como los CFCs la han debilitado, aumentando los riesgos de cáncer de piel, 
                daños oculares y afectando ecosistemas. Gracias al Protocolo de Montreal, su recuperación 
                está en marcha, pero es vital continuar con prácticas sostenibles para protegerla. Haz click 
                en el arbusto o usa las flechas izquierda y derecha para cambiar de escena. 
            </Text>
            <Center left top position={[-9.5, 0.7, 1.2]}>
                <Text3D
                    font="/fonts/blue-ocean.json"
                    rotation={[0, MathUtils.degToRad(-90), 0]}
                    size={0.3}
                    height={0.1}
                            
                >
                    {' Utiliza las plataformas o flechas para cambiar de escenas'}
                    <meshNormalMaterial />
                </Text3D>
            </Center>
        </>
    );
};

export default IntroductionText;