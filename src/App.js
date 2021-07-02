import React, { useState } from 'react';
import Board from './components/Board';
import { calWinner } from './winCal';

import './styles/root.scss';

const App = () => {
  // setting states boardInit for initial state and boardUp for update state
  const [boardInit, boardUp] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(false);

  const win = calWinner(boardInit);

  const message = win ? `Winner ${win}` : `Current player : ${isX ? 'X' : 'O'}`;

  // custom functions
  const handleSqaure = position => {
    if (boardInit[position] || win) {
      return;
    }

    // Business Logics
    boardUp(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isX ? 'X' : 'O';
        }
        return square;
      });
    });

    setIsX(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE !</h1>
      <h2>{message}</h2>
      <Board boardInit={boardInit} handleSqaure={handleSqaure} />
    </div>
  );
};

export default App;
