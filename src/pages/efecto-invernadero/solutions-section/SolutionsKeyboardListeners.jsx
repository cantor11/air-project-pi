import { useMemo, useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * SolutionsKeyboardListeners component provides KeyboardControls from the Drei library.
 * It allows users to press some keys to go to the next or previous line of information
 * in the Solutions section, also keys to get out from Solutions section, and to get
 * out from an extra section.
 * To change the current line and to know how many lines we have
 * it will use a function brought from a store made with Zustand.
 */

const SolutionsKeyboardListeners = () => {
  const [sub, get] = useKeyboardControls();
  const { setView, solutionsSection, setSolutionsSection } = useGreeenhouseStore(); // information brought from store
  const textQuantity = useMemo(
    () => solutionsSection.textQuantity, []
  );

  // useRefs to track the key's status
  const isRightKeyHeldRef = useRef(false);
  const isLeftKeyHeldRef = useRef(false);
  const isEscKeyHeldRef = useRef(false);

  useFrame(() => {
    const { right, left, esc } = get(); // keys information

    // First check if user is not seeing "more info" view
    if (!solutionsSection.isMoreInfoView) {
      // Logic for 'right' key
      if (right && !isRightKeyHeldRef.current) {
        isRightKeyHeldRef.current = true;
        setSolutionsSection({
          solutionsStep: (solutionsSection.solutionsStep + 1) % textQuantity,
        });
      }
      if (!right && isRightKeyHeldRef.current) {
        isRightKeyHeldRef.current = false; // When the key is up
      }

      // Logic for 'left' key
      if (left && !isLeftKeyHeldRef.current) {
        isLeftKeyHeldRef.current = true;
        setSolutionsSection({
          solutionsStep: (solutionsSection.solutionsStep + textQuantity - 1) % textQuantity,
        });
      }
      if (!left && isLeftKeyHeldRef.current) {
        isLeftKeyHeldRef.current = false; // When the key is up
      }

      // Logic for 'escape' key
      if (esc && !isEscKeyHeldRef.current) {
        isEscKeyHeldRef.current = true;
        setView({
          isSolutionsSectionView: false,
        });
      }
      if (!esc && isEscKeyHeldRef.current) {
        isEscKeyHeldRef.current = false; // When the key is up
      }
    } else { // If seeing "more info" view, only enables 'esc' key
      if (esc && !isEscKeyHeldRef.current) {
        isEscKeyHeldRef.current = true;
        setSolutionsSection({
          isMoreInfoView: false,
        });
      }
      if (!esc && isEscKeyHeldRef.current) {
        isEscKeyHeldRef.current = false; // When the key is up
      }
    }
    
  });
  
  return (
    null
  );
};

export default SolutionsKeyboardListeners;