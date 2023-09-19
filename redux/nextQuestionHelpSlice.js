import { createSlice } from "@reduxjs/toolkit";

const nextQuestionHelpSlice = createSlice({
    name: "nextQ",
    initialState: {
        nextQue: "false",
    },
    reducers: {
        setNextQue: (state, action) => {
            state.nextQue = action.payload;
        },
    },
});
export const { setNextQue } = nextQuestionHelpSlice.actions;
export default nextQuestionHelpSlice.reducer;
