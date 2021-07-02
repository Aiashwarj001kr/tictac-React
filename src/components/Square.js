import React from 'react';

const Square = ({ value, onClick, isWinSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
