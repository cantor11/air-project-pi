import { Center, Text3D } from "@react-three/drei";
import { MathUtils } from "three";
import { Html } from "@react-three/drei";
import useQuizStore from "../../../stores/quiz-store";
import { useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from "./Arrow";


const Questions = () => {
  const { questionsSection, setQuestionsSection } = useQuizStore(); // information brought from store

  const questionsTextLines = useMemo(
    () => [
      "Efecto Invernadero","Smog","Capa de Ozono"
    ], []
  );


  // Change the current line of information using the store, with the next one or previous one, using % and based on the amount of lines we have
  const handleNextLine = (isNext) => {
    setQuestionsSection({
      questionsStep: isNext
        ? (questionsSection.questionsStep + 1) % questionsSection.textQuantity //questionsTextLines.length
        : (questionsSection.questionsStep + questionsSection.textQuantity /* questionsTextLines.length */ - 1) % questionsSection.textQuantity //questionsTextLines.length,
    });
  };


  // Everytime user gets in this section, it will show the first question, so we set the current question with 0 using the store, also we set in the store the amount of questions we have
  useEffect(() => {
    setQuestionsSection({
      questionsStep: 0,
      textQuantity: questionsTextLines.length,
    });

    return () => null;
  }, []);


  // Finish the Quiz if user finished
  const finishQuiz = useCallback(() => {
    const isQuizFinished = didUserAnswerAll();
    if (isQuizFinished) {
      alert("¡Quiz Enviado!");
      /* Logic to save the score on Firestore */
    } else {
      alert("Faltan preguntas por responder");
    }
  }, []);


  // Check if user answered all questions
  const didUserAnswerAll = useCallback(() => {
    const userAnswered = questionsSection.userAnswered;

    for (let i = 0; i < userAnswered.length; i++) {
      const didAnswer = userAnswered[i];
      if (!didAnswer) return false;
    }
    return true;
  }, []);


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
          rotation={[Math.PI/2,Math.PI/2,0]}
        >
          <Arrow/>
        </mesh>
        <mesh
          onClick={() => handleNextLine(true)}
          position={[2, 0, 0]}
          rotation={[Math.PI/2,-Math.PI/2,0]}
        >
          <Arrow/>
        </mesh>
      </group>

      <Html position={[-800, -500, 100]}>
        <button style={{ fontSize: '2vh', width: 'max-content' }} onClick={finishQuiz}>
          Enviar Quiz
        </button>
      </Html>
    </group>
    );
};

export default Questions;