import React from 'react';

import './Board.scss';

const worlds = [
  "פרה",
  "ילד",
  "איש",
  "מכבסה",
  "פרה",
  "ילד",
  "איש",
  "מכבסה",
  "פרה",
  "ילד",
  "איש",
  "מכבסה",
  "פרה",
  "ילד",
  "איש",
  "מכבסה",
  "פרה",
  "ילד",
  "איש",
  "מכבסה",
]

export const Board = () => {
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
        {worlds.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  )
}