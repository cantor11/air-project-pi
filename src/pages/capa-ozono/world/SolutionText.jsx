import { Center, Text3D } from "@react-three/drei";
import { MathUtils } from "three";
import { Html } from "@react-three/drei";

const SolutionText = () => {

    return(
        <>
            <Center top position={[14, 6, 0]}>
                <Text3D
                    font="/fonts/blue-ocean.json"
                    rotation={[0, MathUtils.degToRad(90), 0]}
                    size={0.6}
                    height={0.1}
                            
                >
                    Que podemos hacer?
                    <meshNormalMaterial />
                </Text3D>
            </Center>
            <Html
                rotation={[0, MathUtils.degToRad(90), 0]}
                occlude
                center
                distanceFactor={2}
                transform
                position={[14, 4, 0]}
                style={{
                    textAlign: "center", 
                    fontSize: "13pt",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    maxWidth: "6000px", 
                    maxHeight: "6000px"
                }}
            >
                <h1>+ Promover energías renovables: Menos combustibles fósiles.</h1>
                <h1>+ Usar transporte sostenible: Bicicletas y transporte público.</h1>
                <h1>+ Reciclar y reutilizar: Disminuir la producción de químicos dañinos.</h1>
                <h1>+ Control de emisiones industriales: Filtros para reducir químicos tóxicos.</h1>
                <h1>+ Promover la investigación científica: Buscar nuevos métodos sostenibles.</h1>    
            </Html>
            
        </>
    );
};

export default SolutionText;