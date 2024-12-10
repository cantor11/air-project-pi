import useQuizStore from "../../../stores/quiz-store";

import Platform from "./trophies/Platform";
import GoldTrophy from "./trophies/GoldTrophy";
import SilverTrophy from "./trophies/SilverTrophy";
import BronzeTrophy from "./trophies/BronzeTrophy";

const Rewards = () => {
    const { questionsSection } = useQuizStore(); // Information brought from store

    return(
        <>
          <Platform position={[-40, -23, -126.5]}/>
          {questionsSection.userScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >= 1 && questionsSection.testDone === true ?
            <BronzeTrophy position={[-40, -20, -126.5]}/>
            : null}
          {questionsSection.userScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >= 2 && questionsSection.testDone === true ?
            <SilverTrophy position={[-40, -20.5, -126.5]}/>
            : null}
          {questionsSection.userScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >= 3 && questionsSection.testDone === true ?
            <GoldTrophy position={[-40, -21, -126.5]}/>
            : null}
        </>
    )
}

export default Rewards;