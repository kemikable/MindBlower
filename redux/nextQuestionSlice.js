import { createSlice } from "@reduxjs/toolkit";

const nextQuestionSlice = createSlice({
  name: "next",
  initialState: {
    nextQuestion: 1,
  },
  reducers: {
    setNextQuestion: (state, action) => {
      state.nextQuestion = action.payload + 1;
    },
  },
});

export const { setNextQuestion } = nextQuestionSlice.actions;
export default nextQuestionSlice.reducer;
