import React from 'react';
import './Controls.css'
export const ControlsDifficulty = ({setDifficulty,difficulty,setStart,start, resetGame}) => {
    const handleDifficultyClick = (level) => {
        setDifficulty(level);
        resetGame();
        };

    return(
    <div className='controls'>
            <p>What Difficulty? </p>
            <button onClick={() => handleDifficultyClick('Easy')}>Easy</button>
            <button onClick={() => handleDifficultyClick('Hard')}>Hard</button>
            <p>{difficulty}</p>
    </div>
    )
}
export const ControlsStarting = ({setStart,start, resetGame}) => {
    const handleStartClick = (starter) => {
    setStart(starter);
    resetGame();
    };
    return(
    <div className='controls'>
            <p>Who should Start? </p>
            <button onClick={() => handleStartClick('User')}>User</button>
            <button onClick={() => handleStartClick('Computer')}>Computer</button>
            <p>{start}</p>
    </div>
    )
}