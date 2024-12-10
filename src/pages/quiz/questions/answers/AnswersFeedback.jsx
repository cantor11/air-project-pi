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
  const [ showFeedback, setShowFeedback ] = useState(false);
  const { questionsSection } = useQuizStore(); // information brought from store

  // Array that contains every line that will be shown
  const textLines = useMemo(
    () => [
      "Pregunta #0<br><br>Aquí va una retroalimentación para la pregunta de Efecto Invernadero",
      "Pregunta #1<br><br>Aquí va una retroalimentación para la pregunta de Smog",
      "Pregunta #2<br><br> Los clorofluorocarbonos (CFCs) fueron ampliamente utilizados en el pasado, especialmente en aerosoles y sistemas de refrigeración. Sin embargo, estos compuestos tienen un efecto devastador en la capa de ozono, lo que llevó a su regulación y posterior prohibición a nivel global.",
    ], []
  );

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
      {showFeedback ?
        <div style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'rgb(50, 50, 50)', width: '60%', height: 'min-content', marginBottom: '10%', borderRadius: '10%' }}>
            <div style={{ textAlign: 'center', fontSize: '1.5vw', color: 'lightgray', margin: '5%',
              textShadow: `
                -1px -2px 0 #AA0,
                0px -0px 0 #990,
                -2px 2px 0 #330,
                2px 2px 0 #550`
            }}>
              <div dangerouslySetInnerHTML={{ __html: textLines[questionsSection.questionsStep] }} />
            </div>
          </div>
        </div>
        : null }
    </>
  )
}

export default AnswersFeedback;