import React from 'react';
import Square from './Square';

const Board = ({boardInit, handleSqaure, winSquare}) => {
  
  // custom functions for rendering square.
  const renderState = position => {

    const isWinSquare = winSquare.includes(position);

    return (
      <Square
        value={boardInit[position]}
        onClick={() => handleSqaure(position)}
        isWinSquare={isWinSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderState(0)}
        {renderState(1)}
        {renderState(2)}
      </div>
      <div className="board-row">
        {renderState(3)}
        {renderState(4)}
        {renderState(5)}
      </div>
      <div className="board-row">
        {renderState(6)}
        {renderState(7)}
        {renderState(8)}
      </div>
    </div>
  );
};

export default Board;
