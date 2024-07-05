import React, { useState, useEffect, useCallback } from 'react';
import Tile from './Tile';
import { State, Rstbtn } from './State';
import {ControlsDifficulty,ControlsStarting} from './Controls';
import './Game.css';

const Game = () => {
  const [tiles, setTiles] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [winner, setWinner] = useState(null);

  const [difficulty, setDifficulty] = useState('Easy');
  const [start, setStart] = useState('User');

  const checkWinner = (tiles) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }
    return null;
  };

  const computerMove = useCallback(() => {
    const availableMoves = tiles.map((tile, index) => tile === '' ? index : null).filter(index => index !== null);
    let move = null;
    if (difficulty==='Hard'){
      for (let i of availableMoves) {
        const newTiles = [...tiles];
        newTiles[i] = 'O';
        if (checkWinner(newTiles) === 'O') {
          move = i;
          break;
        }
      }
      if (move === null) {
        for (let i of availableMoves) {
          const newTiles = [...tiles];
          newTiles[i] = 'X';
          if (checkWinner(newTiles) === 'X') {
            move = i;
            break;
          }
        }
      }
    }

    if (move === null && availableMoves.length > 0) {
      move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    if (move !== null) {
      const newTiles = tiles.slice();
      newTiles[move] = 'O';
      setTiles(newTiles);
      const gameWinner = checkWinner(newTiles);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setCurrentPlayer('X');
      }
    }
  }, [tiles,difficulty]);

  useEffect(()=>{
    if (start === 'Computer'){
      setCurrentPlayer("O")
    }else{
      setCurrentPlayer('X')
    }
  },[start]);
  
  useEffect(() => {
    const timings = [1000,2000,1500,500]
    if (currentPlayer === 'O' && !winner) {
      const computerMoveTimeout = setTimeout(computerMove, timings[Math.floor(Math.random()*4)]);
      return () => clearTimeout(computerMoveTimeout);
    }
  }, [currentPlayer, winner, computerMove]);

  const handleTileClick = (index) => {
    if (tiles[index] || winner || currentPlayer === 'O') return;
    const newTiles = tiles.slice();
    newTiles[index] = currentPlayer;
    setTiles(newTiles);
    const gameWinner = checkWinner(newTiles);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer('O');
    }
  };

  const resetGame = () => {
    setTiles(Array(9).fill(''));
    if (start === 'Computer'){
      setCurrentPlayer("O")
    }else{
      setCurrentPlayer('X')
    }
    setWinner(null);
  };

  return (
    <div className='partition'>
      <div className='left'>
        <ControlsDifficulty
          difficulty={difficulty} 
          setDifficulty={setDifficulty}
          resetGame={resetGame} />
      </div>
      <div className='center'>
          <State currentPlayer={currentPlayer} winner={winner} />
        <div className="grid">
          {tiles.map((value, index) => (
            <Tile key={index} value={value} onClick={() => handleTileClick(index)} />
          ))}
        </div>
          <Rstbtn  resetGame={resetGame} />
      </div>
      <div className='right'>
        <ControlsStarting
          start={start} 
          setStart={setStart}
          resetGame={resetGame} />
      </div>
    </div>
  );
};

export default Game;
