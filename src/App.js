import Board from "./components/Board";
import Keypad from "./components/Keypad";
import Game from "./components/Game";
import Tools from "./components/Tools";
import { useSelector } from "react-redux";
import Confetti from 'react-confetti';

function App() {
  const board = useSelector(state=>state.board.puzzle);
  let win = board.every(row => row.every(col => {
    return col.isCorrect === true
  }))
  console.log(win)
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      {win && <Confetti/>}
       <Game/>
      <Board/>
      <Tools/>
      <Keypad/>
     
    </div>
  );
}

export default App;
