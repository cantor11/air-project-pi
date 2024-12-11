import { useEffect, useMemo, useState } from "react";
import useQuizStore from "../../../../stores/quiz-store";

/**
 * AnswersFeedback Component
 * 
 * This functional React component sets up a subsection for Quiz section
 * to visualize some feedback based on the question the user answers.
 * To know the current question or to change it, we will use a store made from Zustand.
 */

const AnswersFeedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const { questionsSection } = useQuizStore(); // information brought from store

  // Array that contains every line that will be shown
  const textLines = useMemo(
    () => [
      "El Efecto Invernadero es un fenómeno natural.<br><br>Los gases en la atmósfera atrapan el calor del sol, por lo que sin estos gases la Tierra tendría una temperatura MUY baja. Por eso son necesarios.",
      "El smog se genera a partir de los elementos que provocan GASES nocivos en exceso, como fábricas, basureros, vehiculos con biocombustible, entre otras.",
      "Los clorofluorocarbonos (CFCs) fueron ampliamente utilizados en el pasado, especialmente en aerosoles y sistemas de refrigeración. Sin embargo, estos compuestos tienen un efecto devastador en la capa de ozono, lo que llevó a su regulación y posterior prohibición a nivel global.",
    ],
    []
  );

    // Build the feedback message
    const getFeedbackMessage = (index) => {
      const isCorrect = questionsSection.userScore[index] === 1;
      const correctnessText = isCorrect ? "Correcta" : "Incorrecta";
      return `Pregunta #${index + 1}: ${correctnessText}<br><br>${textLines[index]}`;
    };

  // If the current question has been answered, then show its feedback
  useEffect(() => {
    const indexQuestion = questionsSection.questionsStep;
    const userAnsweredQuestions = questionsSection.userAnswered;

    if (userAnsweredQuestions[indexQuestion] === true) {
      setShowFeedback(true);
    } else {
      setShowFeedback(false);
    }
  }, [questionsSection]);

  return (
    <>
      {showFeedback ? (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(50, 50, 50)",
              width: "60%",
              height: "min-content",
              marginBottom: "10%",
              borderRadius: "30px",
              position: "relative",
              padding: "15px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "1.5vw",
                color: "lightgray",
                margin: "5%",
                textShadow: `
                  -2px -2px 0 #000, 
                  2px -2px 0 #000, 
                  -2px 2px 0 #000, 
                  2px 2px 0 #000`,
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: getFeedbackMessage(questionsSection.questionsStep),
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AnswersFeedback;