import { Center, Text } from "@react-three/drei";
import { useCallback, useMemo, useState } from "react";

/**
 * HomeText Component
 * 
 * This functional React component sets up a text using `@react-three/drei` 
 * to visualize text in the main view: the title and a button to let the user
 * see the introduction of the topic.
 */

const HomeText = () => {
  const [hoveredIntroduction, setHoveredIntroduction] = useState(false)
  const [hoveredBack, setHoveredBack] = useState(false)
  const [showNewText, setShowNewText] = useState(false)

  const texts = useMemo(() => (
    {
      introductionText: 'El efecto invernadero es un proceso natural\nen el que ciertos gases presentes en la atmósfera de la Tierra\n(llamados gases de efecto invernadero) atrapan una parte del calor\nque proviene del sol, evitando que escape al espacio\ny ayudando a mantener la temperatura adecuada para la vida.\n\n\nSin este efecto, la temperatura de la Tierra sería demasiado baja\npara permitir la vida tal como la conocemos.\n\n\nSin embargo, cuando las actividades humanas\naumentan la concentración de estos gases\nen la atmósfera, el efecto se intensifica,\nlo que provoca un calentamiento excesivo del planeta\ny contribuye al cambio climático.'
    }
  ), []);

  const handleClickIntroduction = useCallback(() => {
    setHoveredIntroduction(false)
    setShowNewText(true)
  }, []);

  const handleBack = useCallback(() => {
    setShowNewText(false)
    setHoveredBack(false)
  }, []);

  return (
    <Center position={[0, 35, 50]} rotation-x={-Math.PI*0.2}>
      {showNewText ? ( // If user selects to see summary or introduction, then show this
        <>
          <Text
            position={[0, -20, 0]}
            color={"gray"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={4}
            textAlign="center"
            outlineBlur={2}
            outlineColor={"darkblue"}
          >
            {texts['introductionText']}
          </Text>
          <Text
            position={[0, -20.5, -0.1]}
            color={"darkblue"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/arial_narrow_7.ttf"
            fontSize={4.05}
            textAlign="center"
            outlineBlur={5}
            outlineColor={"black"}
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
      ) : ( // If user is seeing title or came back from summary or introduction, then show this
        <>
          <Text
            position={[0,15,0]}
            color={"gray"}
            anchorX={"center"}
            anchorY={"bottom"}
            font="/fonts/Designer.otf"
            fontSize={15}
            textAlign="center"
          >
            {`EFECTO\nINVERNADERO`}
          </Text>
          <Text
            position={[0, -20, 0]}
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