import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Controls from './Controls';
import './Game.css';

const Game = () => {
  const [tiles, setTiles] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (currentPlayer === 'O' && !winner) {
      const computerMoveTimeout = setTimeout(computerMove, 1000);
      return () => clearTimeout(computerMoveTimeout);
    }
  }, [currentPlayer, winner]);

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

  const computerMove = () => {
    const availableMoves = tiles.map((tile, index) => tile === '' ? index : null).filter(index => index !== null);
    let move = null;

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
  };

  const resetGame = () => {
    setTiles(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div>
      <Controls currentPlayer={currentPlayer} winner={winner} resetGame={resetGame} />
      <div className="grid">
        {tiles.map((value, index) => (
          <Tile key={index} value={value} onClick={() => handleTileClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Game;
