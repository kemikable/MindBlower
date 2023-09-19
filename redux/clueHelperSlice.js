import { createSlice } from "@reduxjs/toolkit";

const clueHelperSlice = createSlice({
  name: "clue",
  initialState: {
    isClue: false,
    textUnderlineA: true,
    textUnderlineB: true,
    textUnderlineC: true,
    textUnderlineD: true,
  },

  reducers: {
    setIsClue: (state, action) => {
      state.isClue = action.payload;
    },
    setTextUnderlineA: (state, action) => {
      state.textUnderlineA = action.payload;
    },
    setTextUnderlineB: (state, action) => {
      state.textUnderlineB = action.payload;
    },
    setTextUnderlineC: (state, action) => {
      state.textUnderlineC = action.payload;
    },
    setTextUnderlineD: (state, action) => {
      state.textUnderlineD = action.payload;
    },
  },
});
export const {
  setIsClue,
  setTextUnderlineA,
  setTextUnderlineB,
  setTextUnderlineC,
  setTextUnderlineD,
} = clueHelperSlice.actions;
export default clueHelperSlice.reducer;
