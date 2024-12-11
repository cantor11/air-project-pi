import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useRef, useCallback, useEffect, useState } from "react";

import SprayOzoneModel from "./answerModels/SprayOzoneModel";
import PikachuOzonoModel from "./answerModels/PikachuOzoneModel";
import SolarPanelOzoneModel from "./answerModels/SolarPanelOzoneModel";
import LedLampOzoneModel from "./answerModels/LedLampOzoneModel";

import useQuizStore from "../../../../stores/quiz-store";
const Answer2 = () => {
    const [timer, setTimer] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false); // To know if the user selected an answer already
    const [showFeedback, setShowFeedback] = useState(false); // To know if after answer, show the Feedback already
    const intervalRef = useRef(null); // To ref the interval and cancel it if necessary
    const { questionsSection, setQuestionsSection } = useQuizStore(); // information brought from store

    const topLeftImpulse = useRef();
    const topRightImpulse = useRef();
    const bottomLeftImpulse = useRef();
    const bottomRightImpulse = useRef();
  
    const impulse1 = useCallback(() => {
        topLeftImpulse.current.applyImpulse({ x: 0, y: 40, z: -40 }, true)
    }, []);
    
    const impulse2 = useCallback(() => {
        topRightImpulse.current.applyImpulse({ x: 0, y: 20, z: 40 }, true)
    }, []);

    const impulse3 = useCallback(() => {
        bottomLeftImpulse.current.applyImpulse({ x: 0, y: 25, z: -20 }, true)
    }, []);
    
    const impulse4 = useCallback(() => {
        bottomRightImpulse.current.applyImpulse({ x: 0, y: 50, z: 50 }, true)
    }, []);

      // Check if the user already answered or not to check the answer
  const userAnswer = useCallback((answer) => {
    if (!answerSelected) {
      setAnswerSelected(true);
      checkAnswer(answer);
    }
  }, [answerSelected]);


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
    newUserAnswered[2] = true; // Change based on the index of the Answer Component
    setQuestionsSection({
      userAnswered: newUserAnswered,
    });
  }, []);


  // When the user chooses the correct answer in this question
  const correctAnswer = useCallback(() => {
    const newAnswers = questionsSection.userScore;
    newAnswers[2] = 1; // Set the answer based on the index of the Answer Component
    setQuestionsSection({
      userScore: newAnswers,
    });
  }, []);


  // When an answer model falls on the stage, execute the feedback timer
  const answerCollision = useCallback((other) => {
    if(other.rigidBodyObject.name === "responseStage") {
      executeFeedbackTimer();
    }
  }, []);


  // Starts the timer from 0 to max Time to show the Feedback
  const executeFeedbackTimer = () => {
    const maxTime = 2;
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // If there is an interval running, then clean it
    }
    setTimer(0); // Restart the timer

    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer + 1 === maxTime) {
          clearInterval(intervalRef.current);
          setShowFeedback(true); // When timer finishes, execute this
          return maxTime;
        }
        return prevTimer + 1; // Increase timer every second
      });
    }, 1000); // 1000 ms = 1 second
  };


  // Executed when timer finishes
  useEffect(() => {
    if (showFeedback) setUserAnswer();
  }, [showFeedback]);


  useEffect(() => {
    // Clean interval when component is down
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

    return (
        <>
        <RigidBody ref={topLeftImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
            <mesh name="topLeft" position={[-19, 8, 15]} onClick={() => userAnswer(1)}>
                <SprayOzoneModel />
            </mesh>
        </RigidBody>
        <RigidBody ref={topRightImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
            <mesh name="topRight" position={[-19, 8, -15]} onClick={() => userAnswer(2)}>
                <SolarPanelOzoneModel />
            </mesh>
        </RigidBody>
        <RigidBody colliders={false} ref={bottomLeftImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
            <mesh name="bottomLeft" position={[-19, -1, 15]} onClick={() => userAnswer(3)}>
                <PikachuOzonoModel />
            </mesh>
            <CuboidCollider scale={1} args={[1, 0.3, 1.3]} position={[-18, -1.55, 14.3]} rotation={[Math.PI/3, 0, 0]}/>
        </RigidBody>
        <RigidBody colliders={false} ref={bottomRightImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
            <mesh name="bottomRight" position={[-19, -1, -15]} onClick={() => userAnswer(4)}>
                <LedLampOzoneModel />
            </mesh>
            <CuboidCollider scale={1} args={[2, 0.2, 2]} position={[-19, -1, -15]}/>
        </RigidBody>
        </>
    )
  };
  
  export default Answer2;