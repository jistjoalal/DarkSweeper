import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import { getHiscoresQuery } from '../queries';

import { Hiscore } from './generic';

class HiscorePage extends Component {

  render() {
    return (
      <div className="Hiscores">
        <li className="Hiscore">
          <span className="HiscoreHeader">Name</span>
          <span className="HiscoreHeader">EBV / s</span>
        </li>
        {this.displayHiscores()}
      </div>
    )
  }

  displayHiscores = () => {
    const { data } = this.props;
    if (data.loading) {
      return <i className="fa fa-2x fa-circle-o-notch fa-spin"></i>;
    }
    else {
      if (!data.hiscores) {
        return <span>Couldn't connect to DB</span>
      }
      return data.hiscores.map(hiscore => {
        return <Hiscore key={hiscore.id} {...hiscore} />
      })
    }
  }
}

export default graphql(getHiscoresQuery, {
  options: props => ({
    variables: {
      page: props.page,
    }
  })
})(HiscorePage);