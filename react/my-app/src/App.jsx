import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Tictactoe from './components/tictactoe/Tictactoe';
import './App.css';

const buttons = [
  { id: 'game1', image: '/files/gameicon/HM.png',fontColor:"black", hoverColor: 'rgba(255, 0, 144, 1)',textShadow:'0 10px 20px #1BFF00', route: '/' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' },
  { id: 'game2', image: '/files/gameicon/CARDS.png',fontColor:"black", hoverColor: 'rgba(0, 255, 0, 1)',textShadow:'0 0 20px #FF00FF', route: '/cards' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' },
  { id: 'game3', image: '/files/gameicon/MEM.png',fontColor:"white", hoverColor: 'rgba(0, 0,69, 1)',textShadow:'0 0 20px #00FF00', route: '/memory', boxColor:'0 12px 16px 0 white, 0 17px 25px 0 white' },
  { id: 'game4', image: '/files/gameicon/RPS.png',fontColor:"black", hoverColor: 'rgba(247, 0, 255, 1)',textShadow:'0 0 20px #00FF00', route: '/rps' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' },
  { id: 'game5', image: '/files/gameicon/SAL.png',fontColor:"black", hoverColor: 'yellow',textShadow:'0 0 20px #FF0000', route: '/sal' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' },
  { id: 'game6', image: '/files/gameicon/HC.png',fontColor:"black", hoverColor: 'grey',textShadow:'0 0 20px #00FF00', route: '/hc' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' },
  { id: 'game7', image: '/files/gameicon/TTT.png',fontColor:"black", hoverColor: 'rgba(0, 255, 255, 1)',textShadow:'0 0 20px #00FF00', route: '/tictactoe' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' },
  { id: 'game8', image: '/files/gameicon/SNAKE.png',fontColor:"white", hoverColor: 'rgba(96, 48, 0, 1)',textShadow:'0 0 20px #00FF00', route: '/snake' ,boxColor:'0 12px 16px 0 white, 0 17px 25px 0 white' },
  { id: 'game9', image: '/files/gameicon/other.png',fontColor:"black", hoverColor: 'white', route: '/other' ,boxColor:'0 12px 16px 0 black, 0 17px 25px 0 black' }
];

const MainPage = () => {
  const navigate = useNavigate();

  const handleMouseEnter = (btnId,hoverColor,fontColor,textShadow,boxColor) => {
    document.body.style.backgroundColor = hoverColor;
    document.getElementById('h1').style.color=fontColor;
    document.getElementById('h1').style.textShadow=textShadow;
    document.getElementById(btnId).style.boxShadow=boxColor;
  };
  
  const handleMouseLeave = (btnId) => {
    document.body.style.backgroundColor = '';
    document.getElementById('h1').style.color='';
    document.getElementById('h1').style.textShadow=''
    document.getElementById(btnId).style.boxShadow='';
    
  };

  return (
    <div className='root'>
      <h1 id='h1'>Webgames for you</h1>
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
            onMouseOver={() => handleMouseEnter(btn.id,btn.hoverColor,btn.fontColor,btn.textShadow,btn.boxColor)}
            onMouseLeave={() => handleMouseLeave(btn.id)}
            
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
