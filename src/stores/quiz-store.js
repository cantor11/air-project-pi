/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useQuizStore = create((set) => ({
    view: {
      isSummaryView: false,
    },

    questionsSection: {
        questionsStep: 0,
        textQuantity: 0,
        isMoreInfoView: false,
      },
  
    setView: (viewUpdates) =>
      set((state) => ({
        view: { ...state.view, ...viewUpdates },
      })),
    
    setQuestionsSection: (questionsSectionUpdates) =>
      set((state) => ({
        questionsSection: { ...state.questionsSection, ...questionsSectionUpdates},
      })),
  }));
  
  export default useQuizStore;
  
  