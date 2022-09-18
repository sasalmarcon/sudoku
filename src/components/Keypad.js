import React from 'react'
import Button from './Button'
import { useSelector} from 'react-redux'
export default function Keypad() {
  const keypad = useSelector(state => state.keypad);
  const buttons = keypad.map(button =>{
    return (
      <React.Fragment key = {button.id}>
           <Button value = {button.value} isSelected = {button.isSelected}/>
      </React.Fragment>
       
    )
  })
  return (
    <div className='flex'>
     {buttons}
    </div>
  )
}
