import React from 'react';

// mines left, etc.
const GameInfo = ({ mines, flags, hidden, time }) =>
  <div className="Game-info">
    <p>
      <span role="img" aria-label="bomb">💣</span> {mines}
      <span role="img" aria-label="question"> ❓</span> {hidden}
      <span role="img" aria-label="timer"> ⏱</span> {time}
    </p>
    <p>
      <span role="img" aria-label="ok">👌 </span>
      Click around with right+left click for a safe start!
    </p>
    <p>
      <span role="img" aria-label="score">💯 </span>
      <a href="http://www.minesweeper.info/wiki/3BV" target="blank">
        Difficulty = minimum # of left clicks to win
      </a>
    </p>
    <p>
      <span role="img" aria-label="radioactive">☢ </span>
      Use middle click to xray (cheat) the area.
    </p>
  </div>;

export default GameInfo;