import BurningAnimation from "./BurningAnimation";
import ColdingAnimation from "./ColdingAnimation";
import DroughtAnimation from "./DroughtAnimation";
import GasIncreaseAnimation from "./GasIncreaseAnimation";
import NormalGasAnimation from "./NormalGasAnimation";
import RainAnimation from "./RainAnimation";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * AwarenessAnimations component
 * 
 * This functional React component sets up animations using other components based
 * on the current line being seen in awareness section.
 * We have: normal amount of Greenhouse gases over Earth, colding animation for Earth,
 * increase of Greenhouse gases over Earth , burning animation for Earth,
 * drought animation for Earth, rain animation over Earth.
 * To know the current line it will get the information brought from a store made with Zustand.
 */

const AwarenessAnimations = () => {
  const { awarenessSection } = useGreeenhouseStore(); // Information brought from store

  return (
    <>
      {awarenessSection.awarenessStep === 1 ?
        <NormalGasAnimation isAnimating={true} />
        : null}
      {awarenessSection.awarenessStep === 2 ?
        <ColdingAnimation isAnimating={true} />
        : null}
      {awarenessSection.awarenessStep >= 3 ?
        <GasIncreaseAnimation isAnimating={true} />
        : null}
      {awarenessSection.awarenessStep === 5 ?
        <BurningAnimation isAnimating={true} />
        : null}
      {awarenessSection.awarenessStep === 6 ?
        <DroughtAnimation isAnimating={true} />
        : null}
      {awarenessSection.awarenessStep === 7 ?
        <RainAnimation isAnimating={true} />
        : null}
    </>
  )
}

export default AwarenessAnimations;