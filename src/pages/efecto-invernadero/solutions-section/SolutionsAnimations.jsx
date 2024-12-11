import { useMemo } from "react";
import { Physics } from "@react-three/rapier";

import BouncingBall from "./BouncingBall";
import DodecahedronContainer from "./DodecahedronContainer";
import NormalGasAnimation from "../awareness-section/animations/NormalGasAnimation";
import SolutionsStage from "./SolutionsStage";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

import Solution0 from "./solutions/Solution0";
import Solution1 from "./solutions/Solution1";
import Solution2 from "./solutions/Solution2";
import Solution3 from "./solutions/Solution3";
import Solution4 from "./solutions/Solution4";
import Solution5 from "./solutions/Solution5";
import Solution6 from "./solutions/Solution6";
import Solution7 from "./solutions/Solution7";
import Solution8 from "./solutions/Solution8";
import Solution9 from "./solutions/Solution9";

/**
 * SolutionsAnimations component
 * 
 * This functional React component sets up animations using other components based
 * on the current line being seen in solutions section.
 * We have: normal amount of Greenhouse gases over Earth, Solutions 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
 * To know the current line it will get the information brought from a store made with Zustand.
 * In addition, show some objets with Physics, colliders and Forces for the environment of the page.
 */


const SolutionsAnimations = () => {
  const { solutionsSection } = useGreeenhouseStore(); // Information brought from store

  const DodecaedronBallPosition = useMemo(() => 
    [-650, 305, -650]
  , []);

  return (
    <>
      <Physics>
        <BouncingBall position={DodecaedronBallPosition} />
        <DodecahedronContainer position={DodecaedronBallPosition} />

        <SolutionsStage />
        
        {solutionsSection.solutionsStep === 0 ?
          <Solution0 />
          : null}
        {solutionsSection.solutionsStep === 1 ?
          <Solution1 />
          : null}
        {solutionsSection.solutionsStep === 2 ?
          <Solution2 />
          : null}
        {solutionsSection.solutionsStep === 3 ?
          <Solution3 />
          : null}
        {solutionsSection.solutionsStep === 4 ?
          <Solution4 />
          : null}
        {solutionsSection.solutionsStep === 5 ?
          <Solution5 />
          : null}
        {solutionsSection.solutionsStep === 6 ?
          <Solution6 />
          : null}
        {solutionsSection.solutionsStep === 7 ?
          <Solution7 />
          : null}
        {solutionsSection.solutionsStep === 8 ?
          <Solution8 />
          : null}
        {solutionsSection.solutionsStep === 9 ?
          <Solution9 />
          : null}
      </Physics>

      {solutionsSection.solutionsStep >= 0 ?
        <NormalGasAnimation isAnimating={true} />
        : null}
    </>
  )
}

export default SolutionsAnimations;