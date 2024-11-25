import { useMemo } from "react";
import { Physics } from "@react-three/rapier";

import BouncingBall from "./BouncingBall";
import DodecahedronContainer from "./DodecahedronContainer";
import NormalGasAnimation from "./NormalGasAnimation";
import SolutionsStage from "./SolutionsStage";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

import Solution1 from "./Solution1";
import Solution2 from "./Solution2";
import Solution3 from "./Solution3";
import Solution4 from "./Solution4";
import Solution5 from "./Solution5";
import Solution6 from "./Solution6";
import Solution7 from "./Solution7";

/**
 * SolutionsAnimations component
 * 
 * This functional React component sets up animations using other components based
 * on the current line being seen in solutions section.
 * We have: normal amount of Greenhouse gases over Earth, Solution 1, Solution 2, Solution 3, solution 4, solution 5, solution 6, solution 7.
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
        {/* <SocialMediaSetModel scale={15} position={[-550,300,-230]} rotation-y={Math.PI*1/2} /> */}
      </Physics>

      {solutionsSection.solutionsStep >= 90 ?
        <NormalGasAnimation isAnimating={true} />
        : null}
    </>
  )
}

export default SolutionsAnimations;