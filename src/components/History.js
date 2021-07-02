import React from 'react';

const History = ({ history , moveTo, currentMove}) => {
  return (
    <div>
      <ul>
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button type="button" onClick={()=>{
                  moveTo(move);
              }} style={
                  {
                      fontWeight: move === currentMove? 'bold': 'normal'
                  }
              }>
                {move === 0 ? 'Game Start' : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
