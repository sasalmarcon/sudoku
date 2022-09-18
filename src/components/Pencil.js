import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { modeActions } from '../store/modeSlice';

export default function Pencil() {
    const dispatch = useDispatch();
    const mode = useSelector(state=>state.mode);
    function handleClick(){
        if(mode.mode !== 'PENCIL')
        {
            dispatch(modeActions.toPencil());
        }
        else
        {
            dispatch(modeActions.toPen());
        }
        
    }
  return (
    <div className={`px-2 py-2 rounded ${mode.mode === 'PENCIL' ? "bg-green-500":"bg-gray-300"}`}>
        <button onClick={handleClick}>Pencil</button>
    </div>
  )
}
