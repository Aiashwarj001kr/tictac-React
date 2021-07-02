import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import Status from './components/Status';

import { calWinner } from './winCal';

import './styles/root.scss';

const App = () => {
  // // setting states boardInit for initial state and boardUp for update state
  // const [boardInit, boardUp] = useState(Array(9).fill(null));
  // const [isX, setIsX] = useState(false);

  // for track game history
  const [history, setHistory] = useState([
    { boardInit: Array(9).fill(null), isX: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const win = calWinner(current.boardInit);



  // custom functions
  const handleSqaure = position => {
    if (current.boardInit[position] || win) {
      return;
    }

    // Business Logics
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.boardInit.map((square, pos) => {
        if (pos === position) {
          return last.isX ? 'X' : 'O';
        }
        return square;
      });

      return prev.concat({ boardInit: newBoard, isX: !last.isX });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE !</h1>
      <Status win={win} current={current} />
      <Board boardInit={current.boardInit} handleSqaure={handleSqaure} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
