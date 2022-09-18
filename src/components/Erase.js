import React from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import { modeActions } from '../store/modeSlice';
export default function Erase() {
    const mode = useSelector(state=>state.mode)
    const dispatch = useDispatch();
    function handleClick(){
        if(mode.mode !== 'ERASER')
        {
            dispatch(modeActions.toEraser());
        }
        else
        {
            dispatch(modeActions.toPen());
        }
    }
  return (
    <div className={`px-2 py-2 rounded ${mode.mode === 'ERASER' ? "bg-green-500":"bg-gray-300"}`}>
      <button onClick={handleClick}>Eraser</button>
    </div>
  )
}
