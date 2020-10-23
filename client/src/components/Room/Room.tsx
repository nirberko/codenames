import React, { useState } from 'react';

import './Room.scss';

export const Room = ({ players, onEnter }) => {
  const [username, setUsername] = useState('');

  return (
    <div className="c-Room">
      <input placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={() => onEnter({ username })}>Enter</button>
      <strong>players</strong>
      <ul>
        {players.map((player) => (
          <li key={player.issued}>{player.username}: {player.team}</li>
        ))}
      </ul>
    </div>
  )
}