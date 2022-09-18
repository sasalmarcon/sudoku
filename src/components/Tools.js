import React from 'react'
import Erase from './Erase'
import Pencil from './Pencil'

export default function Tools() {
  return (
    <div className='flex items-center justify-center gap-4'>
      <Erase/>
      <Pencil/>
    </div>
  )
}
