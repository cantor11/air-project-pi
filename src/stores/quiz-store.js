/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useQuizStore = create((set) => ({
  questionsSection: {
    questionsStep: 0,
    textQuantity: 0,
    userScore: [0, 0, 0],
    userAnswered: [false, false, false],
    testDone: false,
    bestUserScore: [0, 0, 0],
  },
  
  setQuestionsSection: (questionsSectionUpdates) =>
    set((state) => ({
      questionsSection: { ...state.questionsSection, ...questionsSectionUpdates},
    })),
}));
  
export default useQuizStore;