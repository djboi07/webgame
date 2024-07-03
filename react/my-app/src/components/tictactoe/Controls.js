import React from 'react';
import './Controls.css';

const Controls = ({ currentPlayer, winner, resetGame }) => {
  return (
    <div className="controls">
      {winner ? <h2>{winner} has won!</h2> : <h2>Current Player: {currentPlayer}</h2>}
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Controls;
