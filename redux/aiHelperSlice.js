import { createSlice } from "@reduxjs/toolkit";

const aiHelperSlice = createSlice({
    name: "ai",
    initialState: {
        isAi: "",
    },
    reducers: {
        setIsAi: (state, action) => {
            state.isAi = action.payload;
        },
    },
});
export const { setIsAi } = aiHelperSlice.actions;
export default aiHelperSlice.reducer;
