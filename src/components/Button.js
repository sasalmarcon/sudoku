import React from 'react'
import { useDispatch } from 'react-redux'
import { keypadActions } from '../store/keypadSlice';

export default function Button(props) {
  const dispatch = useDispatch();
  function handleSelect(e){
   dispatch(keypadActions.selectNumber({id:e.target.id,value:e.target.value}));
  }

  return (
    <div className=''>
      <button
       onClick={handleSelect}
       id = {props.value}
       value = {props.value}
       className={`${props.isSelected ? "bg-red-500":"bg-gray-800"} text-gray-100 px-4 py-2 mx-2 rounded shadow-md shadow-gray-400`}>
        {props.value}
        </button>
    </div>
  )
}
