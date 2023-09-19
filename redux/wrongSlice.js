import { createSlice } from "@reduxjs/toolkit";

const wrongSlice = createSlice({
  name: "wrong",
  initialState: {
    wrongAnswer: false,
    wrongAnswerDiscription: "",
  },
  reducers: {
    setWrongAnswer: (state, action) => {
      state.wrongAnswer = action.payload;
    },
    setWrongAnswerDiscription: (state, action) => {
      state.wrongAnswerDiscription = action.payload;
    },
  },
});

export const { setWrongAnswer, setWrongAnswerDiscription } = wrongSlice.actions;
export default wrongSlice.reducer;
