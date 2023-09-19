import { createSlice } from "@reduxjs/toolkit";

const endGameSlice = createSlice({
  name: "end",
  initialState: {
    isEnd: false,
  },
  reducers: {
    setIsEnd: (state, action) => {
      state.isEnd = action.payload;
    },
  },
});
export const { setIsEnd } = endGameSlice.actions;
export default endGameSlice.reducer;
