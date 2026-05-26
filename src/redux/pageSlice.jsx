import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
    name: "page",
    initialState: {
        value: 1
    },
    reducers: {
        increment: (State) => {
            State.value += 1;
        },
        decrement: (State) => {
            State.value -= 1;
        },
        Reset: (State, action) => {
            State.value = action.payload
        }

    }
});
export const { increment, decrement, Reset } = pageSlice.actions;
export default pageSlice.reducer; 