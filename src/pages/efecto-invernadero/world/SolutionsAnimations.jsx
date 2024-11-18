import NormalGasAnimation from "./NormalGasAnimation";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * SolutionsAnimations component
 * 
 * This functional React component sets up animations using other components based
 * on the current line being seen in solutions section.
 * We have: normal amount of Greenhouse gases over Earth.
 * To know the current line it will get the information brought from a store made with Zustand.
 */

const SolutionsAnimations = () => {
  const { solutionsSection } = useGreeenhouseStore(); // Information brought from store

  return (
    <>
      {solutionsSection.solutionsStep >= 0 ?
        <NormalGasAnimation isAnimating={true} />
        : null}
    </>
  )
}

export default SolutionsAnimations;