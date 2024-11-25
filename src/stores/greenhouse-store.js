/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useGreenhouseStore = create((set) => ({
  view: {
    isTitleView: true,
    isAwarenessSectionView: false,
    isSolutionsSectionView: false,
  },

  awarenessSection: {
    awarenessStep: 0,
    textQuantity: 0,
  },

  solutionsSection: {
    solutionsStep: 0,
    textQuantity: 0,
    isMoreInfoView: false,
  },

  setView: (viewUpdates) =>
    set((state) => ({
      view: { ...state.view, ...viewUpdates },
    })),
  
  setAwarenessSection: (awarenessSectionUpdates) =>
    set((state) => ({
      awarenessSection: { ...state.awarenessSection, ...awarenessSectionUpdates},
    })),

  setSolutionsSection: (solutionsSectionUpdates) =>
    set((state) => ({
      solutionsSection: { ...state.solutionsSection, ...solutionsSectionUpdates},
    })),
}));

export default useGreenhouseStore;