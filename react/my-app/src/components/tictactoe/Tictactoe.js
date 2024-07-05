import React,{useEffect} from 'react';
import Game from './Game';
import './Tictactoe.css';

function Tictactoe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Tictactoe">
      <h1>Tic Tac Toe</h1>
      <Game/>
    </div>
  );
}

export default Tictactoe;
