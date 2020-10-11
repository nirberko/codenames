import React from 'react';
import axios from "axios";
import { useQuery } from "react-query";

import { Board } from '../../components/Board/Board';

import './Game.scss';

export const GameRoute = ({ match: { params } }) => {
  const { data, status } = useQuery('game', async () => {
    const { data } = await axios.get(`/game/${params.gameId}`)

    return data;
  });

  console.log(data, status)
  return (
    <div className="r-Game">
      {status === 'loading' ? (
        <span>loading...</span>
      ) : status === 'success' ? (
        <Board cards={data.cards} />
        ) : null}
    </div>
  )
}