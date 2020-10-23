import React, { useMemo, useState } from 'react';
import axios from "axios";
import { useQuery } from "react-query";
import io from 'socket.io-client';

import './Game.scss';
import { Room } from "../../components/Room/Room";
import { Board } from "../../components/Board/Board";

export const GameRoute = ({ match: { params } }) => {
  const [players, setPlayers] = useState([]);
  const [started, setStarted] = useState(false);

  const { gameId } = params;

  const { data, status } = useQuery('game', async () => {
    const { data } = await axios.get(`/game/${gameId}`)

    return data;
  });

  const socket = useMemo(() => io("ws://localhost:8080", {
    query: {
      gameId
    }
  }), []);

  socket.on('info', room => {
    setPlayers(room?.players || []);
    setStarted(room.started);
  })

  const onEnter = ({ username }) => {
    socket.emit('join', { username })
    setStarted(true);
  }

  socket.on('playerJoined', player => {
    if (!players.find(({ issued }) => issued === player.issued)) {
      setPlayers([...players, player]);
    }
  })

  socket.on('playerLeaved', player => {
    setPlayers(players.filter(({ issued }) => issued !== player.issued));
  })


  return (
    <div className="r-Game">
      {status === 'loading' ? (
        <span>loading...</span>
      ) : status === 'success' ? started ? (
        <Board cards={data.cards} />
      ) : (
        <Room players={players} onEnter={onEnter} />
      ) : null}
    </div>
  )
}