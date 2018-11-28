import React, {Component} from 'react';
import crypto from 'crypto';

import './Game.scss';

import { range } from './generic';
import TileGrid from './TileGrid';
import GameInfo from './GameInfo';
import GameButtons from './GameButtons';
import GameInputs from './GameInputs';
import Popup from './Popup';
import Hiscores from './Hiscores';

// adjacent tiles
const NEARBY_COORDS = [
  [-1, -1], [0, -1], [1, -1],
  [-1, 0], /*[0, 0],*/ [1,0],
  [-1, 1], [0, 1], [1,1]
];
  

// TODO: refactor
// TODO: better performance? bigger grids?
// TODO: adjust tile size?
// TODO: hiscore hack
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
      xrayOn: false,
      infoOn: false,
      // internal
      ignoreNextClick: false,
      scoreSubmission: null,
      xrayUsed: false,
      hash: null,
    };
  }
  
  render() {
    const { gameStatus, gridState, nRows, nCols, chance,
      totalMines, totalFlags, totalHidden,
      xrayOn, infoOn, theme, time, score, scoreSubmission,
      xrayUsed,
    } = this.state;
      
    return (
      <div className="Game">
        <div className="Game-menu">
          <GameButtons
            newGame={this.newGame}
            infoOn={infoOn}
            xrayOn={xrayOn}
            theme={theme}
            toggleInfo={this.toggleInfo}
            toggleXray={this.toggleXray}
            toggleTheme={this.toggleTheme}
          />
          
          <GameInputs
            nCols={nCols}
            nRows={nRows}
            chance={chance}
            onColChange={this.onColChange}
            onRowChange={this.onRowChange}
            onChanceChange={this.onChanceChange}
            newGame={this.newGame}
          />
        </div>
        
        <div className="Game-grid">
          <TileGrid
            gridState={gridState}
            xray={xrayOn}
            theme={theme}
            mouseDown={this.mouseDown}
            mouseUp={this.mouseUp}
            mouseEnter={this.mouseEnter}
            mouseLeave={this.mouseLeave}
            handleTouch={this.handleTouch}
          />
          <Popup
            text={gameStatus}
            xrayUsed={xrayUsed}
            score={score}
            time={time}
            submitHiscore={this.submitHiscore}
            closePopup={this.newGame}
            show={gameStatus !== 'Playing'}
          />
        </div>
        
        {infoOn ?
        <GameInfo
          mines={totalMines} flags={totalFlags} hidden={totalHidden} time={time}
        /> : null}

        <Hiscores scoreSubmission={scoreSubmission} />
        
        <footer>
          <a href="https://github.com/jistjoalal/DarkSweeper">
            <i className="fa fa-2x fa-github"></i>
          </a>
        </footer>
      </div>
    );
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
    
    // win condition
    if (totalHidden === totalMines
      // avoid auto-wins
      && totalHidden !== nRows * nCols) 
    {
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
        gameStatus: 'Hashing',
        score: this.scoreGrid(),
      });
    }
    
    if (gameStatus === 'Hashing') {
      const { score, time } = this.state;
      this.setState({
        gameStatus: 'Winner!',
        hash: crypto.createHash('sha1').update(`${score} ${time}`).digest('base64'),
      });
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  /*
    Mouse / Touch
  */

  // 2nd touch point sets flag
  handleTouch = (e, i, j) => {
    if (e.changedTouches[0].identifier === 1) {
      this.handleRightClick(i, j);
    }
  }
  
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
    // right up
    else if (e.button === 2 && !ignoreNextClick) {
      this.handleRightClick(i, j);
    }
    // left up
    else if (e.button === 0 && !ignoreNextClick) {
      this.handleClick(i, j);
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
    this.setState({
      gridState: this.newGridState(), 
      gameStatus: 'New Game',
      xrayUsed: false
    });
    clearInterval(this.timer);
    this.timer = setInterval(() => this.tick(), 1000);
  }
  
  tick = () => {
    const { totalHidden, gameStatus, nRows, nCols } = this.state;
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
    this.setState({ infoOn: !this.state.infoOn });
  }
  
  toggleXray = () => {
    this.setState({
      xrayOn: !this.state.xrayOn,
      xrayUsed: true,
    });
  }

  onColChange = e => {
    const v = parseInt(e.target.value)
    if (v > 0 && v <= 32) {
      this.setState({ nCols: parseInt(e.target.value)})
    }
  }
  onRowChange = e => {
    const v = parseInt(e.target.value)
    if (v > 0 && v <= 32) {
      this.setState({ nRows: parseInt(e.target.value)})
    }
  }
  onChanceChange = e => {
    if (!isNaN(parseFloat(e.target.value))) {
      this.setState({ chance: parseFloat(e.target.value)})
    }
  }
  
  /*
    Scoring
  */
  
  submitHiscore = e => {
    const name = e.target[0].value;
    const { score, time, hash } = this.state;
    const tHash = crypto.createHash('sha1').update(`${score} ${time}`).digest('base64')
    if (tHash === hash) {
      this.setState({scoreSubmission: {
        name, score, time,
        speed: (score / time)
      }});
      this.newGame();
    }
    else {
      this.setState({
        gameStatus: '🚨 Hacker',
      })
    }
    e.preventDefault();
  }

  
  //hash: `${score} ${time}`
  
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
  
  /*
    Game
  */
  
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
  
  resetGrid = () => {
    this.everyTile((i, j) => 
      this.changeTile(i, j, { isRevealed: false, flag: false }))
  }
  
  xrayArea = (i, j, toggle) => {
    this.changeTile(i, j, { xray: toggle });
    this.eachNearby(i, j, (ix, jy) => {
      this.changeTile(ix, jy, { xray: toggle });
    });
    this.setState({ xrayUsed: true });
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
    
    // recount of totalHidden
    this.setState({
      totalHidden: this.gridReduce((i, j) =>
        gridState[i][j].isRevealed ? 0 : 1
      ),
    });
    
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