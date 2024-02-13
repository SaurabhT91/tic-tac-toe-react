import React from 'react';
import '../styles/GameBoard.css';

const GameBoard = ({ fragments, onClick, onReset, onNewGame, winner }) => {
  return (
    <div className="game-container">
      <div className="game">
        {fragments.map((value, index) => (
          <button key={index} className="fragment" onClick={() => onClick(index)} disabled={value !== '' || winner !== null}>
            {value}
          </button>
        ))}
      </div>
      <button id="reset-btn" onClick={onReset}>Reset Game</button>
    </div>
  );
};

export default GameBoard;
