import React from 'react';
import '../styles/MessageBox.css';

const Message = ({ message, show, player1Name, player2Name, onNewGame, animation }) => {
  return (
    <div className={`message-container ${show ? '' : 'hide'}`}>
      <p id={`message`} className = {`congratulations ${animation ? '' : 'hide'}`}>
        {message}
      </p>
      <button id="newgame-btn" onClick={onNewGame}>New Game</button>
    </div>
  );
};

export default Message;
