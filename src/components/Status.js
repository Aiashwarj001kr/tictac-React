import React from 'react';

const Status = ({ win, current }) => {
  const noMoveLeft = current.boardInit.every(el => el !== null);

  return (
    <div className="status-message">
      {win && (
        <>
          Winner{' '}
          <span className={win === 'X' ? 'text-green' : 'text-orange'}>
            {win}
          </span>
        </>
      )}
      {!win && !noMoveLeft && (
        <>
          Current player :{' '}
          <span className={current.isX ? 'text-green' : 'text-orange'}>
            {current.isX ? 'X' : 'O'}
          </span>
        </>
      )}
      {!win && noMoveLeft && 'TIE'}
    </div>
  );
};

export default Status;
