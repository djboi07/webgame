import React from 'react';
import './State.css';

export const State = ({ currentPlayer, winner}) => {
  return (
    <div className="state">
      {winner ? <h2>{winner} has won!</h2> : <h2>Current Player: {currentPlayer}</h2>}
    </div>
  );
};
export const Rstbtn = ({resetGame}) => {
  return (
    <div className="state">
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

