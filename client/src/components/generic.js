import React from 'react';

const HiddenToggle = props => {
  if (props.show) {
      return props.children;
  }return null;
};

// number range helper
const range = n => [...Array(n).keys()];

const Hiscore = ({ name, score, time }) =>
  <li className="Hiscore">
    <span>{name}</span>
    <span>{score} / {time}</span>
  </li>


export { HiddenToggle, range, Hiscore };