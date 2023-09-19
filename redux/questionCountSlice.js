import { createSlice } from "@reduxjs/toolkit";

const questionCountSlice = createSlice({
  name: "count",
  initialState: {
    questionCount: 1,
  },
  reducers: {
    setQuestionCount: (state, action) => {
      state.questionCount = action.payload;
    },
  },
});
export const { setQuestionCount } = questionCountSlice.actions;
export default questionCountSlice.reducer;
