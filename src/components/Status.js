import React from 'react';

const Status = ({win, current}) => {
  const noMoveLeft = current.boardInit.every(el => el !== null);

  return (
    <h2>
      {win && `Winner ${win}`}
      {!win && !noMoveLeft && `Current player : ${current.isX ? 'X' : 'O'}`}
      {!win && noMoveLeft && 'TIE'}
    </h2>
  );
};

export default Status;
