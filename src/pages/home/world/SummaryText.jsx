import { useCallback, useMemo, useState } from "react";
import { Center, Text } from "@react-three/drei";
import useHomeStore from "../../../stores/home-store";

/**
 * SummaryText Component
 * 
 * This functional React component sets up a text using `@react-three/drei` 
 * to visualize text in the scene: the summary of the 3 specific problems.
 */

const SummaryText = () => {
  const [hoveredBack, setHoveredBack] = useState(false);
  const { view, setView } = useHomeStore(); // Information brought from store

  const texts = useMemo(() => (
    {
      resumeText: 'Veremos estos problemas medioambientales:\n\n| EFECTO INVERNADERO |\nUn fenómeno natural necesario para mantener la temperatura\nde la Tierra, pero las actividades humanas han aumentado\nlos gases que lo provocan, causando cambios climáticos extremos.\n\n| SMOG |\nUna mezcla de contaminación y humedad que afecta especialmente\na las ciudades, provocando problemas de salud respiratoria.\n\n| AGOTAMIENTO DE LA CAPA DE OZONO |\nProtege la Tierra de la radiación solar dañina, pero por productos\nquímicos ha sido dañada, aumentando el riesgo de cáncer de piel.\n\nPara saber más, presiona la etiqueta\ndel tema que quieras en el encabezado de arriba.',
    }
  ), []);

  const handleBack = useCallback(() => {
    setHoveredBack(false);
    setView({
      isSummaryView: false,
    });
  }, []);

  return (
    <Center position={[0, 20, 160]} rotation-x={-Math.PI*1/2}>
      {view.isSummaryView ? ( // If user is not seeing the title, then show this
        <>
          <Text
            position={[0, 0, 0]}
            color={"gray"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={4}
            textAlign="center"
          >
            {texts['resumeText']}
          </Text>
          <Text
            position={[0, -0.3, -0.1]}
            color={"black"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={4.05}
            textAlign="center"
          >
            {texts['resumeText']}
          </Text>
          <Text
            position={[30, -15, 0]}
            color={hoveredBack ? "white" : "gray"} // Change when hovered
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={hoveredBack ? 8 : 7}
            onClick={handleBack}
          onPointerOver={() => setHoveredBack(true)} // Hover
          onPointerOut={() => setHoveredBack(false)} // Not hover
          >
            {`Regresar`}
          </Text>
        </>
      ) : null}
    </Center>
  );
};

export default SummaryText;