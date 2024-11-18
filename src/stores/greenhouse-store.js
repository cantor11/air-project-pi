/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useGreenhouseStore = create((set) => ({
  view: {
    isTitleView: true,
    isAwarenessSectionView: false,
  },

  awarenessSection: {
    awarenessStep: 0,
    textQuantity: 0,
  },

  setView: (viewUpdates) =>
    set((state) => ({
      view: { ...state.view, ...viewUpdates },
    })),
  
  setAwarenessSection: (awarenessSectionUpdates) =>
    set((state) => ({
      awarenessSection: { ...state.awarenessSection, ...awarenessSectionUpdates},
    })),
}));

export default useGreenhouseStore;

