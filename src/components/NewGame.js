import React from 'react'
import { useDispatch } from 'react-redux';
import { boardActions } from '../store/boardSlice';

export default function NewGame() {
   const dispatch = useDispatch();
    function handleClick(){
        dispatch(boardActions.newGame());
    }
  return (
    <div>
      <button onClick = {handleClick}
       className='bg-green-700 px-2 py-2 text-white rounded'>New Game</button>
    </div>
  )
}
