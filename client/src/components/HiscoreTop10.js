import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';

import { getHiscoresQuery, addHiscoreMutation } from '../queries';
import { Hiscore } from './generic';

class HiscoreTop10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSubmission: null,
    }
  }

  componentDidUpdate() {
    const { scoreSubmission } = this.props;
    const { lastSubmission } = this.state;
    if (scoreSubmission !== lastSubmission) {
      this.setState({ lastSubmission: scoreSubmission });
      this.submitHiscore();
    }
  }

  render() {
    return (
      <div>
        <h2>Top 10:</h2>
        <div className="Hiscores">
          <li className="Hiscore">
            <span className="HiscoreHeader">Name</span>
            <span className="HiscoreHeader">EBV / s</span>
          </li>
          {this.displayHiscores()}
        </div>
      </div>
    )
  }

  displayHiscores = () => {
    const data = this.props.getHiscoresQuery;
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

  submitHiscore = () => {
    const { scoreSubmission } = this.props;
    if (scoreSubmission.name.length < 1) { return; }
    this.props.addHiscoreMutation({
      variables: { ...scoreSubmission },
      refetchQueries: [{ query: getHiscoresQuery }],
    })
  }
}

export default compose(
  graphql(getHiscoresQuery, {
    options: props => ({
      variables: {
        page: props.page,
      }
    }),
    name: 'getHiscoresQuery'
  }),
  graphql(addHiscoreMutation, {
    name: 'addHiscoreMutation'
  }),
)(HiscoreTop10);