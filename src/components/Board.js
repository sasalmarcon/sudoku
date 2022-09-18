import React from 'react';
import Tile from './Tile';
import { useSelector} from 'react-redux';


export default function Board() {
  const board = useSelector(state => state.board);
  let rowIndex = 0;
  const tiles = board.puzzle.map(row =>{
    rowIndex++;
    let colIndex = 0;
    return row.map(col =>{
      colIndex++;
    return (
      <Tile
       key = {col.id} 
       id = {col.id} 
       colIndex = {colIndex-1} 
       rowIndex = {rowIndex-1} 
       value = {col.value} 
       isFilled = {col.filled}
       isCorrect = {col.isCorrect}
       marks = {col.marks}
       />
    )
  })})

  return (
    <div className='grid grid-cols-9 grid-rows-9 w-[360px]'>
      {tiles}
    </div>
  )
}
