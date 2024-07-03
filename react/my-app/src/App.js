import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Tictactoe from './components/Tictactoe';
import './App.css';

const buttons = [
  { id: 'game1', image: '/files/gameicon/HM.png', hoverColor: 'rgba(255, 0, 144, 1)', route: '/' },
  { id: 'game2', image: '/files/gameicon/CARDS.png', hoverColor: 'rgba(0, 255, 0, 1)', route: '/cards' },
  { id: 'game3', image: '/files/gameicon/MEM.png', hoverColor: 'rgba(0, 30, 181, 1)', route: '/memory' },
  { id: 'game4', image: '/files/gameicon/RPS.png', hoverColor: 'rgba(247, 0, 255, 1)', route: '/rps' },
  { id: 'game5', image: '/files/gameicon/SAL.png', hoverColor: 'yellow', route: '/sal' },
  { id: 'game6', image: '/files/gameicon/HC.png', hoverColor: 'grey', route: '/hc' },
  { id: 'game7', image: '/files/gameicon/TTT.png', hoverColor: 'rgba(0, 255, 255, 1)', route: '/tictactoe' },
  { id: 'game8', image: '/files/gameicon/SNAKE.png', hoverColor: 'rgba(163, 87, 5, 1)', route: '/snake' },
  { id: 'game9', image: '/files/gameicon/other.png', hoverColor: '', route: '/other' }
];

const MainPage = () => {
  const navigate = useNavigate();

  const handleMouseEnter = (hoverColor) => {
    document.body.style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = '';
  };

  return (
    <div>
      <h1>Welcome to Webgames for you</h1>
      <div className="gamebox">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            id={btn.id}
            className="game"
            style={{
              backgroundImage: `url(${btn.image})`,
              backgroundColor: 'transparent',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onMouseEnter={() => handleMouseEnter(btn.hoverColor)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(btn.route)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tictactoe" element={<Tictactoe />} />

      </Routes>
    </Router>
  );
};

export default App;
