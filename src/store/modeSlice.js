import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name:'mode',
    initialState:{mode:'PEN'},
    reducers:{
        toEraser:(state)=>{
            state.mode = 'ERASER';
        },
        toPencil:(state)=>{
            state.mode = 'PENCIL';
        },
        toPen:(state)=>{
            state.mode = 'PEN';
        }
    }
})

export const modeActions = modeSlice.actions;
export default modeSlice;
