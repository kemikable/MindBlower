import { createSlice } from "@reduxjs/toolkit";

const correctSlice = createSlice({
  name: "correctCount",
  initialState: {
    correct: 1,
  },
  reducers: {
    setCorrect: (state, action) => {
      state.correct = state.correct + 1;
    },
    setCorrectZero: (state, action) => {
      state.correct = 1;
    },
  },
});
export const { setCorrect, setCorrectZero } = correctSlice.actions;
export default correctSlice.reducer;
