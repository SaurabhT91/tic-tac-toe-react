import React from 'react';
import '../styles/PlayerInput.css';

const PlayerInput = ({ label, value, onChange }) => {
  return (
    <div className="player-input">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default PlayerInput;

