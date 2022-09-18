import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { makepuzzle, solvepuzzle } from "sudoku";
import validSudoku from "../helper/checkBoard";
import construct2DArray from "../helper/construct2dArray";

let puzzle = makepuzzle();
let solution   = solvepuzzle(puzzle);
let puzzle2d = construct2DArray(puzzle,9,9).map(row=>row.map(col =>{
  if(col === null)
  {
    return col = '';
  }
  else
  {
    return col = col + 1;
  }
}));

let solution2d = construct2DArray(solution,9,9).map(row=>row.map(col =>{
  if(col === null)
  {
    return col = '';
  }
  else
  {
    return col = (col + 1).toString();
  }
}));



export const boardSlice = createSlice({
    name:'board',
    initialState:{
      puzzle:puzzle2d.map(row =>row.map(col =>{
        const isFilled = col !== '' ? true : false; 
        return {
          id: nanoid(),
          value:col.toString(),
          filled:isFilled,
          isCorrect: isFilled ? true:false,
          marks:[]
        }
    })),
    solution:solution2d

    },
    reducers:{
       insertNumber:(state,action)=>{
       //
       let rowIndex = 0;
       state.puzzle.forEach(row =>{
        rowIndex++;
        let colIndex = 0;
        row.forEach(col =>{
        colIndex++;
        if(col.id === action.payload.id && col.filled === false)
         {
          col.value = action.payload.value; 
        
          col.marks = [];
          if(col.value !== state.solution[rowIndex-1][colIndex-1])
          {
              col.isCorrect = false;
          }
          else
          {
            col.isCorrect = true;
          }
         }
    })})
       //

       },
       newGame:(state)=>{
        puzzle = makepuzzle();
        solution   = solvepuzzle(puzzle);
        puzzle2d = construct2DArray(puzzle,9,9).map(row=>row.map(col =>{
            if(col === null)
              {
               return col = '';
              }
            else
             {
             return col = col + 1;
            }
          }));

       solution2d = construct2DArray(solution,9,9).map(row=>row.map(col =>{
        if(col === null)
        {
         return col = '';
        }
        else
       {
         return col = col + 1;
        }
      }));
        let rowIndex = 0;
        state.puzzle.forEach(row =>{
          rowIndex++;
          let colIndex = 0;
          row.forEach(col => {
            colIndex++;
            const isFilled = puzzle2d[rowIndex-1][colIndex-1] !== '' ? true : false; 
            col.value = puzzle2d[rowIndex-1][colIndex-1];
            col.filled = isFilled;
            col.isCorrect = isFilled ? true:false;
            col.marks = [];
          })
        })
        state.solution = solution2d;
       },
       //
       reset:(state) =>{
        state.puzzle.forEach(row => row.forEach(col =>{
          if(!col.filled)
          {
            col.value = '';
            col.isCorrect = false;
            col.marks = [];
          }
        }))
       },
       //
      erase:(state,action)=>{
        state.puzzle.forEach(row => row.forEach(col =>{
          if(col.id === action.payload.id && col.filled === false)
          {
            col.value = '';
            col.isCorrect = false;
            col.marks = [];
          }
        }))
      },
       //
       insertMarks:(state,action)=>{
        state.puzzle.forEach(row => row.forEach(col =>{
          if(col.id === action.payload.id && col.filled === false)
          {
                  if(col.marks.indexOf(action.payload.value) === -1)
                  {
                    col.marks = [...col.marks,action.payload.value]
                    col.value = '';
                    col.marks.sort((a,b)=>(a-b));
                  }
                  else
                  {
                    const index = col.marks.indexOf(action.payload.value);
                    col.marks = [...col.marks.slice(0,index),...col.marks.slice(index+1)]
                  }
            
                
            col.isCorrect = false;
          }
        }))
        //
        console.log(validSudoku(state.puzzle))
        if(!validSudoku(state.puzzle))
        {
          state.puzzle.forEach(row => row.forEach(col =>{
            if(col.id === action.payload.id && col.filled === false)
            {
                      const index = col.marks.indexOf(action.payload.value);
                      col.marks = [...col.marks.slice(0,index),...col.marks.slice(index+1)]
              col.isCorrect = false;
            }
          }))

        }
       },
       //
    }

})

export const boardActions = boardSlice.actions;
export default boardSlice;
