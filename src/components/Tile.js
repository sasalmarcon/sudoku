import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { boardActions } from '../store/boardSlice';

export default function Tile(props) {
  const keypad = useSelector(state=>state.keypad);
  const mode = useSelector(state=>state.mode);
  const dispatch = useDispatch();
  
  function updateTile(e){
    let value = '';
    switch(mode.mode)
    {
      case 'ERASER':
        dispatch(boardActions.erase({id:e.target.id}))
        break;
      case 'PENCIL':
        value = '';
        keypad.forEach(item=>{
         if(item.isSelected)
           {
               value = item.value
          }
           })
        dispatch(boardActions.insertMarks({id:e.target.id,value:value}))
        break;
      default:
        value = '';
        keypad.forEach(item=>{
         if(item.isSelected)
           {
               value = item.value
          }
           })
        dispatch(boardActions.insertNumber({id:e.target.id,value:value}))
    }
   
   
  }
 
  const lineStyle =
  (props.colIndex !== 0 && props.colIndex !== 8 && props.colIndex % 3 === 2)
   ?
  (props.rowIndex !== 0 && props.rowIndex !== 8 && props.rowIndex % 3 === 2) ? "border-2 border-gray-400 border-r-4 border-b-4 border-b-black border-r-black":"border-2 border-gray-400 border-r-4 border-r-black "
    :
  (props.rowIndex !== 0 && props.rowIndex !== 8 && props.rowIndex % 3 === 2) ? "border-2 border-gray-400 border-b-4 border-b-black":"border-2 border-gray-400";
  
  const style = props.isFilled ? "text-black"
  :
  props.marks.length > 0 ? "text-[10px] text-gray-500 break-all"
  :
  props.isCorrect ? "text-blue-700":"text-red-500"
  ;
  return (
    <div onClick={updateTile}
     id = {props.id}
     value = {props.value}
     className={`bg-gray-200 w-[40px] h-[40px] ${lineStyle} flex items-center justify-center  font-bold ${style} `}>
     {
      props.marks.length > 0 ? props.marks : props.value
     }
    </div>
  )
}
