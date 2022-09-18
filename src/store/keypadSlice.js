import { createSlice } from "@reduxjs/toolkit";

const KEYPAD = ['1','2','3','4','5','6','7','8','9'];

export const keypadSlice = createSlice({
    name:'keypad',
    initialState: KEYPAD.map(item =>{
      return {
        id:item,
        value:item,
        isSelected:false,
      }
  }),
    reducers:{
      selectNumber(state,action){
       state.forEach(item=>{
        if(item.id === action.payload.id)
        {
          item.isSelected=true;
        }
        else
        {
          item.isSelected=false;
        }
       })

        }
      },
    })

export const keypadActions = keypadSlice.actions;
export default keypadSlice;
