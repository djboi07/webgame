import React from 'react';
import Game from './tictactoe/Game';
import './Tictactoe.css';

function Tictactoe() {
  return (
    <div className="Tictactoe">
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
}

export default Tictactoe;
