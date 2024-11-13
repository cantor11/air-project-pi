import { useCallback, useMemo, useState } from "react";
import { Center, Text } from "@react-three/drei";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * TitleText Component
 * 
 * This functional React component sets up a text using `@react-three/drei` 
 * to visualize text in the main view: the title and a button to let the user
 * see the introduction of the topic. To know which view show and
 * change it, it will use a store made with Zustand.
 */

const TitleText = () => {
  const [hoveredIntroduction, setHoveredIntroduction] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const { view, setView } = useGreeenhouseStore(); // Information brought from store

  const texts = useMemo(() => (
    {
      introductionText: 'El efecto invernadero es un proceso natural\nen el que ciertos gases presentes en la atmósfera de la Tierra\n(llamados gases de efecto invernadero) atrapan una parte del calor\nque proviene del sol, evitando que escape al espacio\ny ayudando a mantener la temperatura adecuada para la vida.\n\n\nSin este efecto, la temperatura de la Tierra sería demasiado baja\npara permitir la vida tal como la conocemos.\n\n\nSin embargo, cuando las actividades humanas\naumentan la concentración de estos gases\nen la atmósfera, el efecto se intensifica,\nlo que provoca un calentamiento excesivo del planeta\ny contribuye al cambio climático.'
    }
  ), []);

  // Handle the action 'clic' on the introduction 'button', to show that text
  const handleClickIntroduction = useCallback(() => {
    setView({
      isTitleView: false,
    });
    setHoveredIntroduction(false);
  }, []);

  // Handle the action 'clic' on the 'back button' to return to the title view
  const handleBack = useCallback(() => {
    setView({
      isTitleView: true,
    });
    setHoveredBack(false);
  }, []);

  // When the introduction is seen, this function is called
  const introductionView = useCallback(() => {
    return (
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
          position={[50, -35, 0]}
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
    )
  }, [hoveredBack]);

  // When the title is seen, this function is called
  const titleView = useCallback(() => {
    return (
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
    )
  }, [hoveredIntroduction]);

  return (
    <Center position={[0, 25, 50]} rotation-x={-Math.PI*0.2}>
      {view.isTitleView ? ( // If user is seeing title or came back from introduction, then show this
        titleView()
      ) : ( // If user chooses to see the introduction, then show this
        introductionView()
      )}
    </Center>
  );
};

export default TitleText;