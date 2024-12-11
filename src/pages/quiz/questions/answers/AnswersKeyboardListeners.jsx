import { useMemo, useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useQuizStore from "../../../../stores/quiz-store";

/**
 * AnswersKeyboardListeners component provides KeyboardControls from the Drei library.
 * It allows users to press some keys to go to the next or previous question
 * in the Quiz section. To change the current questions and to know how many questions
 * we have it will use a function brought from a store made with Zustand.
 */

const AnswersKeyboardListeners = () => {
  const [sub, get] = useKeyboardControls();
  const { questionsSection, setQuestionsSection } = useQuizStore(); // information brought from store
  
  const textQuantity = useMemo(
    () => questionsSection.textQuantity, [questionsSection]);  

  // useRefs to track the key's status
  const isRightKeyHeldRef = useRef(false);
  const isLeftKeyHeldRef = useRef(false);

  useFrame(() => {
    const { right, left } = get(); // keys information

    // Logic for 'right' key
    if (right && !isRightKeyHeldRef.current) {
      isRightKeyHeldRef.current = true;
      setQuestionsSection({
        questionsStep: (questionsSection.questionsStep + 1) % textQuantity,
      });
    }
    if (!right && isRightKeyHeldRef.current) {
      isRightKeyHeldRef.current = false; // When the key is up
    }

    // Logic for 'left' key
    if (left && !isLeftKeyHeldRef.current) {
      isLeftKeyHeldRef.current = true;
      setQuestionsSection({
        questionsStep: (questionsSection.questionsStep + textQuantity - 1) % textQuantity,
      });
    }
    if (!left && isLeftKeyHeldRef.current) {
      isLeftKeyHeldRef.current = false; // When the key is up
    }
  });
  
  return (
    null
  );
};

export default AnswersKeyboardListeners;