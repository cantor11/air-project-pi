import { useRef, useCallback, useEffect } from "react";
import { RigidBody } from "@react-three/rapier";
import useQuizStore from "../../../../stores/quiz-store";

/**
 * Answer0 Component
 * 
 * This functional React component sets up a interactive space using '@react-three/rapier'
 * to visualize models of the answers the user can choose for an specific question, when the
 * user chooses then an impulse will be applied on the answer.
 * When the user chooses an answer, it checks if it was correct and set the score, and saves that
 * the user already answered this question, so they can't answer again, unless the whole Quiz is
 * restarted.
 * To know if the user has answered and save the score based on their answer we will use a store made from Zustand.
 */


const Answer0 = () => {
  const { questionsSection, setQuestionsSection } = useQuizStore(); // information brought from store

  // Refs for each answer model
  const topLeftImpulse = useRef();
  const topRightImpulse = useRef();
  const bottomLeftImpulse = useRef();
  const bottomRightImpulse = useRef();


  // Impulses to be applied on answers

  const impulse1 = useCallback(() => {
    topLeftImpulse.current.applyImpulse({ x: 0, y: 100, z: -200 }, true)
  }, []);
  
  const impulse2 = useCallback(() => {
    topRightImpulse.current.applyImpulse({ x: 0, y: 100, z: 200 }, true)
  }, []);

  const impulse3 = useCallback(() => {
    bottomLeftImpulse.current.applyImpulse({ x: 0, y: 200, z: -200 }, true)
  }, []);
  
  const impulse4 = useCallback(() => {
    bottomRightImpulse.current.applyImpulse({ x: 0, y: 200, z: 200 }, true)
  }, []);


  // Check if the user already answered or not to check the answer
  const userAnswer = useCallback((answer) => {
    const hasUserAnswered = questionsSection.userAnswered[0]; // Check if user answered based on the index of the Answer Component
    if (!hasUserAnswered) {
      checkAnswer(answer);
      setUserAnswer();
    }
  }, []);


  // Check the answer of the user, and check if it's correct
  const checkAnswer = useCallback((answer) => {
    switch (answer) {
      case 1:
        impulse1();
        correctAnswer();
        break;
      case 2:
        impulse2();
        break;
      case 3:
        impulse3();
        break;
      case 4:
        impulse4();
        break;
    }
  }, []);


  // Set the store to know the user already gave an answer
  const setUserAnswer = useCallback(() => {
    const newUserAnswered = questionsSection.userAnswered;
    newUserAnswered[0] = true; // Change based on the index of the Answer Component
    setQuestionsSection({
      userAnswered: newUserAnswered,
    });
  }, []);


  // When the user chooses the correct answer in this question
  const correctAnswer = useCallback(() => {
    const newAnswers = questionsSection.userScore;
    newAnswers[0] = 1; // Set the answer based on the index of the Answer Component
    setQuestionsSection({
      userScore: newAnswers,
    });
  }, []);


/*   // When the component is shown, set it to show the Title view first
  useEffect(() => {
  
  }, []); */

  const answerCollision = useCallback((other) => {
    if(other.rigidBodyObject.name === "responseStage") {
      console.log("COLISSION");
    }
  }, []);

  return (
    <>
      <RigidBody ref={topLeftImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
        <mesh name="topLeft" position={[-19, 8, 15]} onClick={() => userAnswer(1)}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
      </RigidBody>
      <RigidBody ref={topRightImpulse}>
        <mesh name="topRight" position={[-19, 8, -15]} onClick={() => userAnswer(2)}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
      </RigidBody>
      <RigidBody ref={bottomLeftImpulse}>
        <mesh name="bottomLeft" position={[-19, -1, 15]} onClick={() => userAnswer(3)}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
      </RigidBody>
      <RigidBody ref={bottomRightImpulse}>
        <mesh name="bottomRight" position={[-19, -1, -15]} onClick={() => userAnswer(4)}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
      </RigidBody>

      <RigidBody>
        <mesh position={[-19, -1, -2]} onClick={() => console.log(questionsSection.userScore)}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </RigidBody>
    </>
  )
};

export default Answer0;