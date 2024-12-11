import useQuizStore from "../../../stores/quiz-store";

import Answer0 from "./answers/Answer0";
import Answer1 from "./answers/Answer1";
import Answer2 from "./answers/Answer2";
import AnswersKeyboardListeners from "./answers/AnswersKeyboardListeners";

const ShowAnswers = () => {
    const { questionsSection } = useQuizStore(); // Information brought from store


    return(
        <>
          <AnswersKeyboardListeners />
          {questionsSection.questionsStep === 0 ?
            <Answer0 />
            : null}
          {questionsSection.questionsStep === 1 ?
            <Answer1 />
            : null}
          {questionsSection.questionsStep === 2 ?
            <Answer2 />
            : null}
        </>
    )
}

export default ShowAnswers;