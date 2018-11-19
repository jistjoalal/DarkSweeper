import React from 'react';

const GameInputs = ({ nCols, nRows, chance,
  onColChange, onRowChange, onChanceChange,
  submitSize
}) =>
  <div>
    <input className="Game-input"
      type="number" value={nCols} min={1} max={32}
      onChange={onColChange}
      onKeyUp={submitSize}/>
    x<input className="Game-input"
      type="number" value={nRows} min={1} max={32}
      onChange={onRowChange}
      onKeyUp={submitSize}/>
    x<input className="Game-input"
      type="number" value={chance} min={0} max={1.0} step={0.01}
      onChange={onChanceChange}
      onKeyUp={submitSize}/>
  </div>

export default GameInputs;