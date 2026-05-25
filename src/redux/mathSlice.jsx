import { createSlice } from "@reduxjs/toolkit";
const mathSlice=createSlice({
    name: "math",
    initialState: {
        value: 10
    },
    reducers:{
       increment:(State)=>{
        State.value += 1;
       },
       decrement:(State)=>{
        State.value -= 1;
       },
       multiply:(State,action)=>{
        State.value *= action.payload;
       },
       Reset:(State,action)=>{
        State.value = action.payload;
       },
    }
});
export const{increment,decrement,multiply,Reset}=mathSlice.actions;
export default mathSlice.reducer;