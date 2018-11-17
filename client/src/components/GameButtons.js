import React, { Component } from 'react';

class GameButtons extends Component {
  
  render() {
    const { newGame, infoOn, xrayOn, theme,
      toggleInfo, toggleXray, toggleTheme } = this.props;
    return (
      <div className="GameButtons">
        <button onClick={newGame}
          className="Game-button"
        >New Game
        </button>
        <button onClick={toggleInfo}
          className={`Game-button${infoOn ? ' toggle' : ''}`}
        >Game Info
        </button>
        <button onClick={toggleXray}
          className={`Game-button${xrayOn ? ' toggle' : ''}`}
        >X-RAY
        </button>
        <button onClick={toggleTheme}
          className={`Game-button${theme === 'light' ? ' toggle' : ''}`}
        >Theme
        </button>
      </div>
    );
  }
}

export default GameButtons;