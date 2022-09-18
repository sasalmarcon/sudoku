import React from 'react'
import NewGame from "./NewGame";
import Reset from "./Reset";

export default function Game() {
  return (
    <div className='flex items-center justify-center w-full gap-4'>
       <NewGame/>
       <Reset/>
    </div>
  )
}
