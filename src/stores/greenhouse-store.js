/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useGreenhouseStore = create((set) => ({
  view: {
    isTitleView: true,
    isAwarenessSectionView: false,
    awarenessStep: 0,
  },

  setView: (viewUpdates) =>
    set((state) => ({
      view: { ...state.view, ...viewUpdates },
    })),
}));

export default useGreenhouseStore;

