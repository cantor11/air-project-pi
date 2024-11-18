import { useMemo, useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * AwarenessKeyboardListeners component provides KeyboardControls from the Drei library.
 * It allows users to press some keys to go to the next or previous line of information
 * in the Awareness section. To change the current line and to know how many lines we have
 * it will use a function brought from a store made with Zustand.
 */

const AwarenessKeyboardListeners = () => {
  const [sub, get] = useKeyboardControls();
  const { setView, awarenessSection, setAwarenessSection } = useGreeenhouseStore(); // information brought from store
  const textQuantity = useMemo(
    () => awarenessSection.textQuantity, []);

  // useRefs to track the key's status
  const isRightKeyHeldRef = useRef(false);
  const isLeftKeyHeldRef = useRef(false);

  useFrame(() => {
    const { right, left, esc } = get(); // keys information

    // Logic for 'right' key
    if (right && !isRightKeyHeldRef.current) {
      isRightKeyHeldRef.current = true;
      setAwarenessSection({
        awarenessStep: (awarenessSection.awarenessStep + 1) % textQuantity,
      });
    }
    if (!right && isRightKeyHeldRef.current) {
      isRightKeyHeldRef.current = false; // When the key is up
    }

    // Logic for 'left' key
    if (left && !isLeftKeyHeldRef.current) {
      isLeftKeyHeldRef.current = true;
      setAwarenessSection({
        awarenessStep: (awarenessSection.awarenessStep + textQuantity - 1) % textQuantity,
      });
    }
    if (!left && isLeftKeyHeldRef.current) {
      isLeftKeyHeldRef.current = false; // When the key is up
    }

    // Logic for 'escape' key
    if (esc) {
      setView({
        isAwarenessSectionView: false,
      });
    }
  });
  
  return (
    null
  );
};

export default AwarenessKeyboardListeners;