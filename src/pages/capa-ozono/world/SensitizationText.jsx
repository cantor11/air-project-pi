import { Text, Text3D, Html, Center } from "@react-three/drei";
import { MathUtils } from "three";

const SensitizationText = () => {
    return (
        <>
            <Html
                occlude
                center
                distanceFactor={2}
                transform
                position={[1, 5, 13]}
                style={{
                    textAlign: "center", 
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    fontSize: "14pt",
                    maxWidth: "1500px", 
                    maxHeight: "2000px"
                }}
            >
                <h1> Protejamos la Capa de Ozono: Un Escudo Vital </h1>
            </Html>
            <Html
                occlude
                center
                distanceFactor={2}
                transform
                position={[1, 3, 13]}
                style={{
                    textAlign: "center", 
                    fontSize: "12pt",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    maxWidth: "1800px", 
                    maxHeight: "2000px"
                }}
            >
                <h1> La capa de ozono actúa como un filtro esencial, bloqueando la radiación ultravioleta (UV) 
                    del sol que daña la salud humana y los ecosistemas. Sin embargo, el uso de sustancias como 
                    los clorofluorocarbonos (CFC) ha provocado su deterioro, creando un “agujero” que aumenta la 
                    exposición a estos rayos. Aunque el Protocolo de Montreal ha logrado reducir el uso de muchos de estos productos, 
                    la recuperación completa de la capa de ozono sigue en proceso y depende de nuestras acciones. A través de cambios 
                    en nuestro consumo y el apoyo a prácticas sostenibles, podemos ayudar a proteger este escudo y asegurar un planeta 
                    habitable para el futuro. Usa la plataforma o usa la flecha derecha para cambiar de escena.</h1>
            </Html>
            <Html 
                occlude
                center 
                transform
                distanceFactor={6}
                position={[1, 4, -14]} 
                rotation={[0, Math.PI, 0]}
            >
                <div className="containerImgText" style={{textAlign: "center"}}>
                    <img 
                        src="/images/capa-de-ozono.jpg" 
                        alt="Sensitization-Image" 
                        style={{ 
                            width: "400px", 
                            height: "auto",  
                            }}
                    />
                    <p
                        style={{ 
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            fontSize: "12pt",
                            maxWidth: "800px"
                            
                        }}
                    >La imagen muestra la Tierra con un agujero en la atmósfera, simbolizando el agotamiento de la 
                        capa de ozono y la vulnerabilidad del planeta a la radiación solar. Haz click en la plataforma o usa la flecha derecha para cambiar de escena.</p>
                </div>
            </Html>
        </>
    );
};

export default SensitizationText;