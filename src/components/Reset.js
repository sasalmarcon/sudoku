import React from 'react'
import { useDispatch } from 'react-redux';
import { boardActions } from '../store/boardSlice';

export default function Reset() {
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(boardActions.reset());
    }
  return (
    <div>
      <button onClick = {handleClick}
       className='bg-yellow-500 px-2 py-2 text-white rounded'>Reset</button>
    </div>
  )
}
