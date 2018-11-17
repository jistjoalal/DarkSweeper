import React, { Component } from 'react';

import logo from '../img/logo.svg';

class Tile extends Component {
  render() {
    const { isRevealed, hasMine, nearby, flag,
      onMouseDown, onMouseUp, onMouseEnter, onMouseLeave,
      xray, theme } = this.props;
    
    return (
      <div className={`Tile-${theme}`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onContextMenu={e => e.preventDefault()}
      >
        <Over isRevealed={isRevealed} flag={flag} xray={xray} theme={theme}>
          <Under hasMine={hasMine} nearby={nearby} />
        </Over>
      </div>
    );
  }
}

// covers revealed tiles
const Over = ({ isRevealed, flag, children, xray, theme }) =>
  isRevealed ? children :
    <div className={`Cover-${theme}`}>
      {flag ? <Flag /> : xray ? children : null}
    </div>;
  
// whats underneath tile?
const Under = ({ hasMine, nearby }) =>
  hasMine ? <Mine /> : <ColoredNumber n={nearby} />

// minesweeper colors in the css!
const ColoredNumber = ({ n }) =>
  <span className={`nearby${n}`}>
    {n !== 0 ? n : null}
  </span>;

const Mine = () => <img className="Mine" src={logo} alt="X" />;
  
const Flag = () => <span className="Flag">F</span>;

export default Tile;