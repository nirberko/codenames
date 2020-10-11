import React from 'react';

import './Board.scss';

export const Board = ({ cards }) => {
  return (
    <div className="c-Board">
      <div className="c-Board__header">
        <div className="c-Board__header__remaining">
          <span data-team="blue">9</span>
          &nbsp;–&nbsp;
          <span data-team="red">8</span>
        </div>
        <div className="c-Board__header__current-turn">
          blue's turn
        </div>
        <button>
          end your turn
        </button>
      </div>
      <ul>
        {cards.map(({ text }, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  )
}