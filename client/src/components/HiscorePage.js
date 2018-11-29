import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import { getHiscoresQuery } from '../queries';

import { Hiscore } from './generic';

class HiscorePage extends Component {

  render() {
    const { view, toggleView } = this.props;
    return (
      <div className="HiscorePage">
        <h1>Hiscores</h1>

        <div className="Hiscores">
          <li className="Hiscore">
            <span className="HiscoreHeader">Name</span>
            <span className="HiscoreHeader">EBV / s</span>
          </li>
          {this.displayHiscores()}
        </div>

        <footer>
          <button onClick={toggleView} className={`App-button`}>
            <i className="fa fa-3x fa-undo"></i>
          </button>
        </footer>
      </div>
    )
  }

  displayHiscores = () => {
    const { data } = this.props;
    console.log(this.props)
    if (data.loading) {
      return <li>Loading Hiscores...</li>;
    }
    else {
      if (!data.hiscores) {
        return <li>Couldn't connect to DB</li>
      }
      return data.hiscores.map(hiscore => {
        return <Hiscore key={hiscore.id} {...hiscore} />
      })
    }
  }
}

export default graphql(getHiscoresQuery)(HiscorePage);