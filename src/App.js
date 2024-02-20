import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import PlayerInput from './components/PlayerInput';
import GameBoard from './components/GameBoard';
import { setPlayer1Name, setPlayer2Name } from './features/playerDetails/playerSlice';
import Message from './components/MessageBox';
import './App.css';



function App() {
  const [fragments, setFragments] = useState(Array(9).fill(''));
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [animation, setShowAnimation] = useState(false);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(true);
  const [count, setCount] = useState(0);

    const player1Name = useSelector((state) => state.players.player1Name);
    const player2Name = useSelector((state) => state.players.player2Name);
    const dispatch = useDispatch();

    const handlePlayer1NameChange = (event) => {
      dispatch(setPlayer1Name(event.target.value));
    };

    const handlePlayer2NameChange = (event) => {
      dispatch(setPlayer2Name(event.target.value));
    };

  const handleClick = (index) => {
    if (fragments[index] === '' && winner === null) {
      const newFragments = [...fragments];
      newFragments[index] = turn ? 'O' : 'X';
      setFragments(newFragments);
      setTurn(!turn);
      setCount(count + 1);
      checkWinner(newFragments);
    }
  };

  const checkWinner = (fragments) => {
    const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (fragments[a] && fragments[a] === fragments[b] && fragments[a] === fragments[c]) {
        setWinner(fragments[a]);
        setMessage(`Congratulations! ${fragments[a] === 'O' ? player1Name : player2Name} wins!`);
        setShowAnimation(true);
        setShowMessage(true);
        return;
      }
    }

    if (count === 8) {
      setMessage('It\'s a draw!');
      setShowMessage(true);
    }
  };

  const handleReset = () => {
    setFragments(Array(9).fill(''));
    setShowMessage(false);
    setWinner(null);
    setTurn(true);
    setCount(0);
  };

  const handleNewGame = () => {
    setPlayer1Name('');
    setPlayer2Name('');
    setFragments(Array(9).fill(''));
    setMessage('');
    setShowMessage(false);
    setWinner(null);
    setTurn(true);
    setCount(0);
  };

  return (
    <div className="main">
      <div className="centered-container">
        <h1>Tic-Tac-Toe</h1>
        <p id="instructions">
          Game starts by just Tap on box<br />
          First Player name
          <PlayerInput label="Player One" value={player1Name} onChange={handlePlayer1NameChange} />
          as <b>Player O</b>
          <PlayerInput label="Player Two" value={player2Name} onChange={handlePlayer2NameChange} />
          as <b>Player X</b>
        </p>
        <Message message={message} show={showMessage} player1Name={player1Name} player2Name={player2Name} onNewGame={handleNewGame} animation={animation} />
        <GameBoard fragments={fragments} onClick={handleClick} onReset={handleReset} winner={winner} />
      </div>
    </div>
  );
}

export default App;

