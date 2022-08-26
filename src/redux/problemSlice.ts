import { createSlice } from "@reduxjs/toolkit";

import grind75List from "../types/Problem";
import { Problem } from "../types/Problem";

type problemsState = {
  questions?: Array<Problem>;
  count: number;
  filterByDifficulty: Array<String>;
  st: Array<number>;
};

const initialState: problemsState = {
  questions: grind75List.Array,
  count: 0,
  filterByDifficulty: [],
  st: [],
};

const problemSlice = createSlice({
  name: "problem",
  initialState: initialState,
  reducers: {
    setInitialProblems: (state) => {
      state.questions = grind75List.Array;
      state.count = grind75List.Array.length;
    },
    markQuestionChecked: (state, action: { type: string; payload: number }) => {
      if (state.st.includes(action.payload)) {
        state.st = state.st.filter((item) => item !== action.payload);
      } else {
        state.st.push(action.payload);
      }
    },
  },
});

export const { setInitialProblems, markQuestionChecked } = problemSlice.actions;
export const problemReducer = problemSlice.reducer;
