import { Text } from "@react-three/drei";
import { MathUtils } from "three";

const IntroductionText = () => {
    return (
        <>
            <Text 
                position={[-7, 4, 1.2]}
                rotation={[0, MathUtils.degToRad(-90), 0]}
                fontSize={0.35}
                maxWidth={4.5}
                font="/fonts/blue-ocean.ttf"
                textAlign="center"

            > Agotamiento de la capa de ozono... </Text>
            <Text 
                position={[-7, 2.3, 1.2]}
                rotation={[0, MathUtils.degToRad(-90), 0]}
                fontSize={0.2}
                maxWidth={3.5}
                textAlign="center"
                font="/fonts/arial_narrow_7.ttf"
            > 
            La capa de ozono nos protege de la radiación ultravioleta dañina. Sin embargo, sustancias como los CFCs la han debilitado, aumentando los riesgos de cáncer de piel, daños oculares y afectando ecosistemas. Gracias al Protocolo de Montreal, su recuperación está en marcha, pero es vital continuar con prácticas sostenibles para protegerla. </Text>
        </>
    );d
};

export default IntroductionText;