import { Center, Text } from "@react-three/drei";
import { useCallback, useMemo, useState } from "react";
import useHomeStore from "../../../stores/home-store";

/**
 * HomeText Component
 * 
 * This functional React component sets up a text using `@react-three/fiber` 
 * to visualize text in the main view: the title and some buttons to let the user
 * see the summary of the problems or the introduction of the page.
 */

const HomeText = () => {
  const [hoveredSummary, setHoveredSummary] = useState(false);
  const [hoveredIntroduction, setHoveredIntroduction] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [showNewText, setShowNewText] = useState(false);
  const { setView } = useHomeStore(); // Information brought from store

  const texts = useMemo(() => (
    {
      title: 'Problemas\nMedioambientales\ndel Aire',
      introductionText: 'Bienvenid@ a nuestra experiencia interactiva\nsobre problemas medioambientales del aire.\n\nExploraremos tres de los desafíos que enfrentamos hoy en día:\nEl Efecto Invernadero, el Smog y el agotamiento de la Capa de Ozono.\n\nEn SkyShield nuestro propósito es concientizar y sensibilizar\nsobre la gravedad de estos problemas, sus consecuencias\ny las soluciones que se pueden implementar.\n\nTe invitamos a navegar por nuestro entorno virtual,\ninteractuar con objetos 3D\ny, al final, participar en un QUIZ para evaluar tus conocimientos.\n\nJuntos, podemos aprender y actuar por un futuro más saludable\n“Visualizando el aire que respiramos”'
    }
  ), []);

  const handleClickSummary = useCallback(() => {
    setView({
      isSummaryView: true,
    });
  }, []);

  const handleClickIntroduction = useCallback(() => {
    setHoveredIntroduction(false);
    setShowNewText(true);
  }, []);

  const handleBack = useCallback(() => {
    setShowNewText(false);
    setHoveredBack(false);
  }, []);

  return (
    <Center position={[0, 35, 50]} rotation-x={-Math.PI*0.2}>
      {showNewText ? ( // If user selects to see the introduction, then show this
        <>
          <Text
            position={[0, -25, 0]}
            color={"gray"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={4}
            textAlign="center"
          >
            {texts['introductionText']}
          </Text>
          <Text
            position={[0, -25.5, -0.1]}
            color={"black"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={4.05}
            textAlign="center"
          >
            {texts['introductionText']}
          </Text>
          <Text
            position={[30, -35, 0]}
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
      ) : ( // If user is seeing title or came back from introduction, then show this
        <>
          <Text
            color={"gray"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/blue-ocean.ttf"
            fontSize={15}
            textAlign="center"
          >
            {texts['title']}
          </Text>
          <Text
            position={[0, -1, -1]}
            color={"darkgreen"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/blue-ocean.ttf"
            fillOpacity={0.5}
            fontSize={15.2}
            textAlign="center"
          >
            {texts['title']}
          </Text>
          <Text
            position={[30, -20, 0]}
            color={hoveredSummary ? "white" : "gray"} // Change when hovered
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={hoveredSummary ? 8 : 7}
            onClick={handleClickSummary}
            onPointerOver={() => setHoveredSummary(true)} // Hover
            onPointerOut={() => setHoveredSummary(false)} // Not hover
          >
            {`Resumen`}
          </Text>
          <Text
            position={[-30, -20, 0]}
            color={hoveredIntroduction ? "white" : "gray"} // Change when hovered
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={hoveredIntroduction ? 8 : 7}
            onClick={handleClickIntroduction}
          onPointerOver={() => setHoveredIntroduction(true)} // Hover
          onPointerOut={() => setHoveredIntroduction(false)} // Not hover
          >
            {`Introducción`}
          </Text>
        </>
      )}
    </Center>
  );
};

export default HomeText;