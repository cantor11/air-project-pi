import { useRef, useCallback, useEffect, useState } from "react";
import { RigidBody } from "@react-three/rapier";

import { DryMudModel } from "./answerModels/DryMudModel";
import { EarthModel } from "./answerModels/EarthModel";
import { SnowBallRocks } from "./answerModels/SnowBallRocks";
import WaterWorldModel from "./answerModels/WaterWorldModel";
import useQuizStore from "../../../../stores/quiz-store";

/**
 * Answer0 Component
 * 
 * This functional React component sets up a interactive space using '@react-three/rapier'
 * to visualize models of the answers the user can choose for an specific question, when the
 * user chooses then an impulse will be applied on the answer.
 * When the user chooses an answer, it checks if it was correct and set the score, and saves that
 * the user already answered this question, so they can't answer again, unless the whole Quiz is
 * restarted. After some time the user answers, a Feedback of the question will be shown on screen.
 * To know if the user has answered and save the score based on their answer we will use a store made from Zustand.
 */


const Answer0 = () => {
  const [timer, setTimer] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false); // To know if the user selected an answer already
  const [showFeedback, setShowFeedback] = useState(false); // To know if after answer, show the Feedback already
  const intervalRef = useRef(null); // To ref the interval and cancel it if necessary
  const { questionsSection, setQuestionsSection } = useQuizStore(); // information brought from store

  // Refs for each answer model
  const topLeftImpulse = useRef();
  const topRightImpulse = useRef();
  const bottomLeftImpulse = useRef();
  const bottomRightImpulse = useRef();


  // Impulses to be applied on answers

  const impulse1 = useCallback(() => {
    topLeftImpulse.current.applyImpulse({ x: 0, y: 300, z: -900 }, true)
  }, []);
  
  const impulse2 = useCallback(() => {
    topRightImpulse.current.applyImpulse({ x: 0, y: 500, z: 1800 }, true)
  }, []);

  const impulse3 = useCallback(() => {
    bottomLeftImpulse.current.applyImpulse({ x: 0, y: 1200, z: -1600 }, true)
  }, []);
  
  const impulse4 = useCallback(() => {
    bottomRightImpulse.current.applyImpulse({ x: 0, y: 1000, z: 1200 }, true)
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
        break;
      case 2:
        correctAnswer();
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
        <EarthModel position={[-19, 10, 15]} scale={0.5} onClick={() => userAnswer(1)} />
      </RigidBody>
      <RigidBody ref={topRightImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
        <SnowBallRocks position={[-19, 7, -15]} scale={6} onClick={() => userAnswer(2)} />
      </RigidBody>
      <RigidBody ref={bottomLeftImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
        <EarthModel position={[-19, -2, 15]} scale={0.5} onClick={() => userAnswer(3)} />
        <WaterWorldModel scale={0.13} />
      </RigidBody>
      <RigidBody ref={bottomRightImpulse} onCollisionEnter={({ other }) => answerCollision(other) }>
        <DryMudModel position={[-19, -2, -15]} scale={2.7} onClick={() => userAnswer(4)} />
      </RigidBody>

      {/* <RigidBody>
        <mesh position={[-19, -1, -2]} onClick={() => console.log(questionsSection.userScore)}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </RigidBody> */}
    </>
  )
};

export default Answer0;