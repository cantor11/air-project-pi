import { useKeyboardControls } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import useGreeenhouseStore from "../../../stores/greenhouse-store";
import { useRef } from "react";

/**
 * KeyboardListeners component provides KeyboardControls from the Drei library.
 * It allows users to press some keys to go to the next or previous line of information
 * in the Awareness section. To change the current line it will use a function brought
 * from a store made with Zustand.
 */

const KeyboardListeners = () => {
  const [sub, get] = useKeyboardControls();
  const { view, setView } = useGreeenhouseStore(); // information brought from store

  // useRefs to track the key's status
  const isRightKeyHeldRef = useRef(false);
  const isLeftKeyHeldRef = useRef(false);

  useFrame(() => {
    const { right, left } = get(); // keys information

    // Logic for 'right' key
    if (right && !isRightKeyHeldRef.current) {
      isRightKeyHeldRef.current = true;
      setView({
        awarenessStep: (view.awarenessStep + 1) % 7,
      });
    }
    if (!right && isRightKeyHeldRef.current) {
      isRightKeyHeldRef.current = false; // When the key is up
    }

    // Logic for 'left' key
    if (left && !isLeftKeyHeldRef.current) {
      isLeftKeyHeldRef.current = true;
      setView({
        awarenessStep: (view.awarenessStep + 7 - 1) % 7,
      });
    }
    if (!left && isLeftKeyHeldRef.current) {
      isLeftKeyHeldRef.current = false; // When the key is up
    }
  });
  
  return (
    null
  );
};

export default KeyboardListeners;