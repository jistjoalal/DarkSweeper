import React, { Component } from 'react';

import Tile from './Tile';

const range = n => [...Array(n).keys()];

class TileGrid extends Component {
  
  render() {
    const { gridState } = this.props;
    if (gridState === null) { return null; }
    return range(gridState.length).map((i) =>
      <div key={i} className="Game-grid-row">
        {range(gridState[i].length).map((j) =>
          <this.renderTileAt key={`${i},${j}`} i={i} j={j} />
        )}
      </div>
    );
  }
  
  renderTileAt = ({ i, j }) => {
    const { isRevealed, hasMine, nearby, flag,
      isHighlighted, xray } = this.props.gridState[i][j];
    // display highlighted tiles as blank
    const isR = isHighlighted ? true : isRevealed,
          hasM = isHighlighted ? false : hasMine,
          nB = isRevealed ? nearby : isHighlighted ? 0 : nearby;
    return <Tile
      isRevealed={isR}
      hasMine={hasM}
      nearby={nB}
      flag={flag}
      xray={xray || this.props.xray}
      theme={this.props.theme}
      onMouseDown={e => this.props.mouseDown(e, i, j)}
      onMouseUp={e => this.props.mouseUp(e, i, j)}
      onMouseEnter={e => this.props.mouseEnter(e, i, j)}
      onMouseLeave={e => this.props.mouseLeave(e, i, j)}
      handleTouch={e => this.props.handleTouch(e, i, j)}
    />;
  }
}

export default TileGrid;