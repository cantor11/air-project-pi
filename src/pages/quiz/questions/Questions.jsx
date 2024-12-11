import { Center, Text3D } from "@react-three/drei";
import { MathUtils } from "three";
import { Html } from "@react-three/drei";
import useQuizStore from "../../../stores/quiz-store";
import { useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "./Arrow";
import { db } from "../../../../firebase.config"; // Ajusta la ruta según tu estructura
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../../../firebase.config";

const Questions = () => {
  const { questionsSection, setQuestionsSection } = useQuizStore(); // Información del store

  const questionsTextLines = useMemo(
    () => [
      "        Como se veria la tierra si no\nhubiesen Gases de Efecto Invernadero?",
      "    Cual es una emision nociva que puede provocar Smog?",
      "        Cual de los siguientes productos es una fuente de\nclorofluorocarbonos (CFCs) que deterioran la capa de ozono?"
    ],
    []
  );

  const handleNextLine = (isNext) => {
    setQuestionsSection({
      questionsStep: isNext
        ? (questionsSection.questionsStep + 1) % questionsSection.textQuantity
        : (questionsSection.questionsStep + questionsSection.textQuantity - 1) % questionsSection.textQuantity
    });
  };

  useEffect(() => {
    setQuestionsSection({
      questionsStep: 0,
      textQuantity: questionsTextLines.length
    });

    return () => null;
  }, []);

  const saveQuizToFirestore = async () => {
    if (!auth.currentUser) {
      alert("Debes iniciar sesión para enviar el quiz.");
      return;
    }

    const userId = auth.currentUser.uid;
    const userRef = doc(db, "quizzes", userId);

    try {
      const userSnapshot = await getDoc(userRef);
      const existingData = userSnapshot.exists() ? userSnapshot.data() : null;

      const newScoreSum = questionsSection.userScore.reduce((a, b) => a + b, 0);
      const oldScoreSum = existingData?.userScore?.reduce((a, b) => a + b, 0) || 0;

      if (newScoreSum > oldScoreSum) {
        setQuestionsSection({
          bestUserScore : questionsSection.userScore
        });
        await setDoc(userRef, {
          userScore: questionsSection.userScore,
          userAnswered: questionsSection.userAnswered,
          testDone: true
        });
        alert("Quiz enviado exitosamente.");
      } else if (newScoreSum === oldScoreSum) {
        alert("Ya habías respondido correctamente el quiz.");
      } else {
        alert("No se envió el quiz porque el puntaje no supera al anterior. Vuelvelo a intentar.");
      }
    } catch (error) {
      console.error("Error al guardar el quiz en DB:", error);
      alert("Ocurrió un error al enviar el quiz. Revisar consola.");
    }
  };

  const finishQuiz = useCallback(() => {
    const isQuizFinished = didUserAnswerAll();
    if (isQuizFinished) {
      saveQuizToFirestore();
    } else {
      alert("Faltan preguntas por responder.");
    }
  }, [questionsSection]);

  const didUserAnswerAll = useCallback(() => {
    return questionsSection.userAnswered.every((didAnswer) => didAnswer);
  }, [questionsSection]);

  const resetQuiz = async () => {
    setQuestionsSection({
      questionsStep: 0,
      textQuantity: questionsTextLines.length,
      userScore: [0, 0, 0],
      userAnswered: [false, false, false],
      testDone: false
    });
  };

  return (
    <group>
      <AnimatePresence mode="wait">
        <motion.group key={questionsSection.questionsStep}>
          <Center position={[-26, 13, 0]}>
            <Text3D
              position={[-0.01, 0, 0.2]}
              font="/fonts/Winter_Minie_Regular.json"
              rotation={[0, MathUtils.degToRad(90), 0]}
              height={0.1}
              size={1.02}
            >
              {questionsTextLines[questionsSection.questionsStep]}
              <meshBasicMaterial color="black" />
            </Text3D>

            <Text3D
              font="/fonts/Winter_Minie_Regular.json"
              rotation={[0, MathUtils.degToRad(90), 0]}
              height={0.1}
            >
              {questionsTextLines[questionsSection.questionsStep]}
              <meshBasicMaterial color="white" />
            </Text3D>
          </Center>
        </motion.group>
      </AnimatePresence>

      <group position={[-12, 2, 0]} rotation={[0, MathUtils.degToRad(90), 0]}>
        <mesh onClick={() => handleNextLine(false)} position={[-2, 0, 0]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
          <Arrow />
        </mesh>
        <mesh onClick={() => handleNextLine(true)} position={[2, 0, 0]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <Arrow />
        </mesh>
      </group>

      <Html position={[-800, -480, 210]}>
        <button style={{ fontSize: "2vh", width: "max-content" }} onClick={finishQuiz}>
          Enviar Quiz
        </button>
      </Html>

      <Html position={[-800, -480, -20]}>
        <button style={{ fontSize: "2vh", width: "max-content" }} onClick={resetQuiz}>
          Reiniciar Quiz
        </button>
      </Html>

      <Html position={[-800, -450, -350]}>
        <p style={{ fontSize: "2vh", color: "white", width: "max-content", textAlign: "center" }}>
          {"Usa las teclas ⭠ ⭢ | A D"}
          <br></br>
          {"para continuar las preguntas"}
        </p>
      </Html>
    </group>
  );
};

export default Questions;
