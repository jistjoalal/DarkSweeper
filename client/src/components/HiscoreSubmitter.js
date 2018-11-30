import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';

import { getHiscoresQuery, addHiscoreMutation } from '../queries';

class HiscoreSubmitter extends Component {
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
      <div style={{display: 'none'}}>
      </div>
    )
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
  graphql(getHiscoresQuery, {name: 'getHiscoresQuery'}),
  graphql(addHiscoreMutation, {name: 'addHiscoreMutation'}),
)(HiscoreSubmitter);