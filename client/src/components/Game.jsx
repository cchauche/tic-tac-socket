import React from 'react';
import { useParams } from 'react-router-dom';

const Game = (props) => {
  let {gameId} = useParams();
  return (
    <div>
      <h2>{`You are in room: ${gameId}`}</h2>
    </div>
  );
};

export default Game;
