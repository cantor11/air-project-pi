import { Center, Text } from "@react-three/drei";
import { useState } from "react";

/**
 * HomeText Component
 * 
 * This functional React component sets up a 3D object using `@react-three/fiber` 
 * to visualize some text in the main view, and some buttons to redirect the user
 * to the summary section or introduction section of the page.
 */

const HomeText = () => {
  const [hoveredSummary, setHoveredSummary] = useState(false)
  const [hoveredIntroduction, setHoveredIntroduction] = useState(false)

  return (
    <>
      <Center position={[0, 35, 50]} rotation-x={-Math.PI*0.2}>
        <Text
          //position={[0, 30, 40]}
          color={"gray"}
          anchorX={"center"}
          anchorY={"bottom"}
          font="/fonts/blue-ocean.ttf"
          fontSize={15}
        >
          {`     Problemas\nMedioambientales\n        del Aire`}
        </Text>
        <Text
          position={[0, -1, -1]}
          color={"darkgreen"}
          anchorX={"center"}
          anchorY={"bottom"}
          font="/fonts/blue-ocean.ttf"
          fillOpacity={0.5}
          fontSize={15.2}
        >
          {`     Problemas\nMedioambientales\n        del Aire`}
        </Text>
        <Text
          position={[-30, -20, 0]}
          color={hoveredSummary ? "white" : "gray"} // Change when hovered
          anchorX={"center"}
          anchorY={"bottom"}
          font="/fonts/blue-ocean.ttf"
          fontSize={hoveredSummary ? 8 : 7}
          onClick={() => console.log('onClickSummary')}
          onPointerOver={() => setHoveredSummary(true)} // Hover
          onPointerOut={() => setHoveredSummary(false)} // Not hover
        >
          {`Resumen`}
        </Text>
        <Text
          position={[30, -20, 0]}
          color={hoveredIntroduction ? "white" : "gray"} // Change when hovered
          anchorX={"center"}
          anchorY={"bottom"}
          font="/fonts/blue-ocean.ttf"
          fontSize={hoveredIntroduction ? 8 : 7}
          onClick={() => console.log('onClickIntroduction')}
        onPointerOver={() => setHoveredIntroduction(true)} // Hover
        onPointerOut={() => setHoveredIntroduction(false)} // Not hover
        >
          {`Introducción`}
        </Text>
      </Center>
    </>
  );
};

export default HomeText;