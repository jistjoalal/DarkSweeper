import React, {Component} from 'react';

import TileGrid from './TileGrid';
import HiddenToggle from './HiddenToggle';
import './Game.scss';

// adjacent tiles
const NEARBY_COORDS = [
  [-1, -1], [0, -1], [1, -1],
  [-1, 0], /*[0, 0],*/ [1,0],
  [-1, 1], [0, 1], [1,1]
];
// number range helper
const range = n => [...Array(n).keys()];
// popup message
const Popup = props =>
    <HiddenToggle show={props.show}>
      <div className="Popup" onContextMenu={e => e.preventDefault()}>
        <div className="Popup-inner">
          <p>{props.text}</p>
          
          {props.text === 'Winner!' ?
            <div className="Popup-score">
              <p>
                Difficulty: {props.score} | Time: {props.time}
              </p>
              <form onSubmit={e => props.submitHiscore(e)}>
                <input autoFocus className="Popup-name" type="text" placeholder="Name" />
                <input className="Popup-submit" type="submit" value="Submit" />
              </form>
            </div>
          : null}
          
          <button className="close" onClick={props.closePopup}>Back</button>
        </div>
      </div>
    </HiddenToggle>;
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
  

// TODO
// -fix bug: change size b4 game starts timer, need firstMoveMade state
//  -maybe set the change size to scale automatically + start new game?
// -win/lose animation/sound?
// -timer store minutes
// -refactor
// X-score based on 3BV?
//   -required clicks = openings + remaining numbers
//   -(doesnt take chording into account)
// X-timer
// X-adjust color theme w/ button
// X-adjust size + chance
// X-handle simultaneous click
// X-remove style logic!
// X-win
// X-mines left
// X-manage state correctly
// X-handle right click
// X-game over
class Game extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // grid
      nRows: 10,
      nCols: 10,
      chance: 0.1,
      gridState: null,
      // info
      totalMines: 0,
      totalFlags: 0,
      totalHidden: 100,
      gameStatus: 'Loading',
      time: 0,
      score: 0,
      // menu
      theme: 'dark',
      xray: false,
      infoOn: false,
      // internal
      ignoreNextClick: false
    };
  }
  
  render() {
    const { gameStatus, gridState, nRows, nCols, chance,
      totalMines, totalFlags, totalHidden,
      xray, infoOn, theme, time, score } = this.state;
      
    return (
      <div className="Game">
      
        <div className="Game-menu">
          
          <div>
          <button className="Game-button" onClick={this.newGame}>
            New Game
          </button>
          
          <button
            className={`Game-button${infoOn ? ' toggle' : ''}`}
            onClick={this.toggleInfo}
          >Game Info
          </button>
          
          <button 
            className={`Game-button${xray ? ' toggle' : ''}`}
            onClick={this.toggleXray}
          >X-RAY
          </button>
          
          <button className={`Game-button${theme === 'light' ? ' toggle' : ''}`}
            onClick={this.toggleTheme}
          >Theme
          </button>
          </div>
          
          <div>
            <input className="Game-input"
              type="number" value={nCols} min={1}
              onChange={e =>
                this.setState({ nCols: parseInt(e.target.value)})
              }
              onKeyUp={e => this.submitSize(e)}/>
            x<input className="Game-input"
              type="number" value={nRows} min={1}
              onChange={e =>
                this.setState({ nRows: parseInt(e.target.value)})
              }
              onKeyUp={e => this.submitSize(e)}/>
            x<input className="Game-input"
              type="number" value={chance} min={0} step={0.01}
              onChange={e =>
                this.setState({ chance: parseFloat(e.target.value)})
              }
              onKeyUp={e => this.submitSize(e)}/>
          </div>
          
        </div>
        
        <div className="Game-grid">
        
          <TileGrid
            gridState={gridState}
            xray={xray}
            theme={theme}
            mouseDown={this.mouseDown}
            mouseUp={this.mouseUp}
            mouseEnter={this.mouseEnter}
            mouseLeave={this.mouseLeave}
          />
          
          <Popup show={gameStatus !== 'Playing'} text={gameStatus}
            submitHiscore={this.submitHiscore} score={score} time={time}
            closePopup={this.newGame}/>
          
        </div>
        
        {infoOn ?
        <GameInfo
          mines={totalMines} flags={totalFlags} hidden={totalHidden} time={time}
        /> : null}
        
      </div>
    );
  }
  
  submitHiscore = e => {
    e.preventDefault();
    const name = e.target[0].value;
    const { score, time } = this.state;
    console.log(name, score, time);
    this.newGame();
  }
  
  componentDidMount() {
    this.newGame();
  }
  
  componentDidUpdate() {
    const { totalHidden, totalMines,
      nRows, nCols, gameStatus, gridState } = this.state;
    
    // new game = calculate nearby numbers, total mines, and reset game
    if (gameStatus === 'New Game') {
      this.countNearby();
      this.setState({
        totalMines: this.gridReduce((i, j) =>
          gridState[i][j].hasMine ? 1 : 0),
        totalFlags: 0,
        totalHidden: nRows * nCols,
        time: 0,
        score: 0,
        gameStatus: 'Playing'
      });
    }
    
    // update totalhidden
    if (gameStatus === 'Calculating') {
      this.setState({
        totalHidden: this.gridReduce((i, j) =>
          gridState[i][j].isRevealed ? 0 : 1),
        gameStatus: 'Playing'
      });
    }
    
    // win condition
    if (totalHidden === totalMines) {
      // total mines is set to string to prevent infinite loop
      // and still appear the same
      this.setState({ gameStatus: 'Scoring',
      totalMines: totalMines.toString() });
      // reset grid for scoring
      clearInterval(this.timer);
      this.resetGrid();
    }
    
    if (gameStatus === 'Scoring') {
      this.setState({
        gameStatus: 'Winner!',
        score: this.scoreGrid()
      });
    }
  }
  
  scoreGrid = () => {
    const anyUB = this.anyUnrevealedBlank();
    const anyUN = this.anyUnrevealedNumbers();
    // if any unrevealed blank tile, reveal
    if (anyUB) {
      this.reveal(anyUB.i, anyUB.j);
      return 1 + this.scoreGrid();
    }
    // else if any unrevealed numbers, reveal
    else if (anyUN) {
      this.reveal(anyUN.i, anyUN.j);
      return 1 + this.scoreGrid();
    }
    // else save score
    else {
      return 0;
    }
  }
  
  anyUnrevealedNumbers = () => {
    const { gridState } = this.state;
    let any = false;
    gridState.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (!tile.isRevealed && !tile.hasMine) {
          any = {i, j};
        }
      })
    })
    return any;
  }
  
  anyUnrevealedBlank = () => {
    const { gridState } = this.state;
    let any = false;
    gridState.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile.nearby === 0 && !tile.isRevealed && !tile.hasMine) {
          any = {i, j};
        }
      })
    })
    return any;
  }
  
  resetGrid = () => {
    this.everyTile((i, j) => 
      this.changeTile(i, j, { isRevealed: false, flag: false }))
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  // Grid State = 2d array of tile states
  // - nearby is the # of nearby mines
  newGridState = () => {
    const { nRows, nCols, chance } = this.state;
    return range(nRows).map(i => range(nCols).map(j => {
      return {
        isRevealed: false,
        hasMine: Math.random() < chance,
        nearby: 0,
        flag: false,
        isHighlighted: false,
        xray: false
      };
    }));
  }
  
  /*
    Mouse
  */
  
  mouseEnter = (e, i, j) => {
    const { gameStatus } = this.state;
    if (gameStatus !== 'Playing') { return; }
    // "both" down
    if (e.buttons === 3) { this.highlightArea(i, j, true); }
    // middle down
    if (e.buttons === 4) { this.xrayArea(i, j, true); }
  }
  
  mouseLeave = (e, i, j) => {
    // "both" down
    if (e.buttons === 3) { this.highlightArea(i, j, false); }
    // middle down
    if (e.buttons === 4) { this.xrayArea(i, j, false); }
  }
  
  mouseDown = (e, i, j) => {
    e.preventDefault(); // prevents click-drag to highlight text
    const { gameStatus } = this.state;
    if (gameStatus !== 'Playing') { return; }
    // "both" down
    if (e.buttons === 3) {
      this.setState({ ignoreNextClick: true });
      this.highlightArea(i, j, true);
    }
    // middle down
    if (e.button === 1) { this.xrayArea(i, j, true); }
  }
  
  mouseUp = (e, i, j) => {
    const { ignoreNextClick, gridState } = this.state;
    // "both" up
    if ([1,2].includes(e.buttons)) {
      this.setState({ ignoreNextClick: true });
      this.highlightArea(i, j, false);
      // if nearby mines == nearby flags, reveal this + nearby tiles
      // - !hasMine makes simultaneous click safe!
      if (gridState[i][j].nearby === this.nearbyFlags(i, j)
        && !gridState[i][j].hasMine)
      {
        this.reveal(i, j);
        this.eachNearby(i, j, (ix, jy) => {
          this.reveal(ix, jy);
        });
      }
      return;
    }
    // middle up
    if (e.button === 1) { this.xrayArea(i, j, false); }
    // left up
    else if (e.button === 0 && !ignoreNextClick) {
      this.handleClick(i, j);
    }// right up
    else if (e.button === 2 && !ignoreNextClick) {
      this.handleRightClick(i, j);
    }
    this.setState({ ignoreNextClick: false });
  }
 
  // left click to reveal tile or lose!
  handleClick = (i, j) => {
    const { gridState, gameStatus } = this.state;
    const { flag } = gridState[i][j];
    
    // ignore clicks if game is over or tile is flagged
    if (gameStatus !== 'Playing' || flag) { return; }
    
    // reveal clicked tile
    this.reveal(i, j);
  }
  
  // right click to set flag
  handleRightClick = (i, j) => {
    const { gridState, gameStatus, totalFlags } = this.state;
    const { isRevealed, flag } = gridState[i][j];
   
    // ignore clicks if game is over or tile revealed
    if (gameStatus !== 'Playing' || isRevealed) { return; }
    
    // toggle flag
    this.changeTile(i, j, { flag: !flag });
    
    // increment total flags
    const flagChange = !flag ? 1 : -1;
    this.setState({ totalFlags: totalFlags + flagChange });
  }
  
  /*
    Game Config
  */
  
  newGame = () => {
    this.setState({gridState: this.newGridState(), gameStatus: 'New Game' });
    clearInterval(this.timer);
    this.timer = setInterval(() => this.tick(), 1000);
  }
  
  tick = () => {
    const { totalHidden, nRows, nCols, gameStatus } = this.state;
    if (totalHidden !== nRows * nCols && gameStatus === 'Playing') {
      this.setState({time: this.state.time + 1});
    }
  }
  
  toggleTheme = () => {
    const { theme } = this.state;
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme: newTheme });
  }
  
  toggleInfo = () => {
    const { infoOn } = this.state;
    this.setState({ infoOn: !infoOn });
  }
  
  // see the path to victory!
  toggleXray = () => {
    this.setState({ xray: !this.state.xray });
  }
  
  submitSize = e => {
    if (e.key === 'Enter') {
      e.target.blur();
      this.newGame();
    }
  }
  
  /*
    Meat
  */
  
  xrayArea = (i, j, toggle) => {
    this.changeTile(i, j, { xray: toggle });
    this.eachNearby(i, j, (ix, jy) => {
      this.changeTile(ix, jy, { xray: toggle });
    })
  }
  
  highlightArea = (i, j, toggle) => {
    const { gridState } = this.state;
    // highlight self + nearby unflagged tiles
    this.changeTile(i, j, { isHighlighted: toggle })
    this.eachNearby(i, j, (ix, jy) => {
      if (!gridState[ix][jy].flag) {
        this.changeTile(ix, jy, { isHighlighted: toggle });
      }
    })
  }
  
  // revealed tiles that have 0 nearby mines reveal adjacent tiles
  reveal = (i, j) => {
    const { gridState } = this.state;
    const { nearby, hasMine, flag } = gridState[i][j];
    
    // recursion break
    if (gridState[i][j].isRevealed || flag) { return 0; }

    // check mine
    if (hasMine) {
      this.changeTile(i, j, {isRevealed: true});
      return this.setState({ gameStatus: 'Game Over'});
    }
    
    // reveal tile
    this.changeTile(i, j, {isRevealed: true});
    
    // this will trigger recount of totalHidden in componentDidUpdate
    this.setState({ gameStatus: 'Calculating' });
    
    // recursively clear adjacent tiles if 0 nearby
    if (nearby === 0 && !hasMine) {
      this.eachNearby(i, j, (ix, jy) => {
        this.reveal(ix, jy);
      });
    }
  }
  
  // calculates nearby mines for every tile
  countNearby = () => {
    this.everyTile((i, j) =>
      this.changeTile(i, j, { nearby: this.nearbyMines(i, j) }));
  }
  
  // returns # of mines nearby tile @ (i, j)
  nearbyMines = (i, j) => {
    const { gridState } = this.state;
    let sum = 0;
    this.eachNearby(i, j, (ix, jy) =>
      sum += gridState[ix][jy].hasMine ? 1 : 0);
    return sum;
  }
  
  // returns # of flags nearby tile @ (i, j)
  nearbyFlags = (i, j) => {
    const { gridState } = this.state;
    let sum = 0;
    this.eachNearby(i, j, (ix, jy) =>
      sum += gridState[ix][jy].flag ? 1 : 0);
    return sum;
  }
  
  // runs callback on each nearby tile that exists
  eachNearby = (i, j, callback) => {
    NEARBY_COORDS.forEach(c => {
      const ix = i + c[0],
            jy = j + c[1];
      if (this.validTile(ix, jy)) {
        callback(ix, jy);
      }
    });
  }
  
  // 2d array summing thing
  gridReduce = reducer => {
    let sum = 0;
    this.everyTile((i, j) =>
      sum += reducer(i, j));
    return sum;
  }
  
  // assign change to tile @ (i, j)
  changeTile = (i, j, change) => {
    const gridState = this.state.gridState.slice();
    Object.assign(gridState[i][j], change);
    this.setState({ gridState });
  }
  
  // callback to 2d array
  everyTile = callback =>
    this.state.gridState.map((row, i) => row.map((tile, j) => callback(i, j)))
  
  // boolean if tile exists at i,j coords
  validTile = (i, j) =>
    typeof this.state.gridState[i] === 'undefined' ? false :
      typeof this.state.gridState[i][j] !== 'undefined'
}

export default Game;