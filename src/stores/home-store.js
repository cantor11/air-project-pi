/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useHomeStore = create((set) => ({
  view: {
    isSummaryView: false,
  },

  setView: (viewUpdates) =>
    set((state) => ({
      view: { ...state.view, ...viewUpdates },
    })),
}));

export default useHomeStore;

