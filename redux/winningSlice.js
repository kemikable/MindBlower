import { createSlice } from "@reduxjs/toolkit";

const winningSlice = createSlice({
  name: "winningCount",
  initialState: {
    winnings: 0,
  },
  reducers: {
    setWinnings: (state, action) => {
      state.winnings = action.payload;
    },
    setWinningsZero: (state, action) => {
      state.winnings = 0;
    },
  },
});
export const { setWinnings, setWinningsZero } = winningSlice.actions;
export default winningSlice.reducer;
