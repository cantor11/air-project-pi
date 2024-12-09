import { Center, Text3D } from "@react-three/drei";
import { MathUtils } from "three";
import { Html } from "@react-three/drei";
import useQuizStore from "../../../stores/quiz-store";
import { useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from "./Arrow";


const Questions = () => {
    const { setView, questionsSection, setQuestionsSection } = useQuizStore(); // information brought from store

    const questionsTextLines = useMemo(
        () => [
          "Esteban me la chupa","Junior también","xd"
        ], []
      );
  // Change the current line of information using the store, with the next one or previous one, using % and based on the amount of lines we have
  const handleNextLine = (isNext) => {
    setQuestionsSection({
      questionsStep: isNext
        ? (questionsSection.questionsStep + 1) % questionsTextLines.length
        : (questionsSection.questionsStep + questionsTextLines.length - 1) % questionsTextLines.length,
    });
  };
    return(
<group>
      <AnimatePresence mode="wait">
        <motion.group
          key={questionsSection.questionsStep} // Clave única para cada línea
          initial={{ opacity: 0, positionY: -5 }}
          animate={{ opacity: 1, positionY: 0 }}
          exit={{ opacity: 0, positionY: 5 }}
          transition={{ duration: 0.5 }}
        >
          <Center top position={[-14, 6, 0]}>
            <Text3D
              font="/fonts/blue-ocean.json"
              rotation={[0, MathUtils.degToRad(90), 0]}
              size={1}
              height={0.1}
            >
              {questionsTextLines[questionsSection.questionsStep].replace(/<br>/g, '\n')}
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </motion.group>
      </AnimatePresence>

      {/* Botones de navegación */}
      <group position={[-12, 2, 0]} rotation={[0, MathUtils.degToRad(90), 0]}>
        <mesh
          onClick={() => handleNextLine(false)}
          position={[-2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[Math.PI/2,Math.PI/2,0]}
        >
          <Arrow/>
        </mesh>
        <mesh
          onClick={() => handleNextLine(true)}
          position={[2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[Math.PI/2,-Math.PI/2,0]}
        >
          <Arrow/>
        </mesh>
      </group>
    </group>
    );
};

export default Questions;