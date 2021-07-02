import React from 'react';

const Square = ({ value, onClick, isWinSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
