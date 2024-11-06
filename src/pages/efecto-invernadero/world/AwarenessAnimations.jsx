import ColdingAnimation from "./ColdingAnimation"
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * AwarenessAnimations component
 * 
 * This functional React component sets up animations using other components based
 * on the current line being seen in awareness section.
 * We have: colding animation for Earth.
 * To know the current line it will get the information brought from a store made with Zustand.
 */

const AwarenessAnimations = () => {
  const { view } = useGreeenhouseStore(); // Information brought from store
  return (
    <>
      {view.awarenessStep === 2 ?
      <ColdingAnimation isAnimating={true} />
      : null}
    </>
  )
}

export default AwarenessAnimations