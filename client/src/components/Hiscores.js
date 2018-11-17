import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

const getHiscoresQuery = gql`
  {
    hiscores{
      id
      name
      score
      time
    }
  }
`;

const addHiscoreMutation = gql`
  mutation($name: String!, $score: Int!, $time: Int!){
    addHiscore(name: $name, score: $score, time: $time){
      id
      name
      score
      time
    }
  }
`;

// TODO: sort by (score / time) somehow
// TODO: factor out AddHiscore function
//  - then lift into Game component
// TODO: pagination
// TODO: scores by date (last day, week, etc.)
class Hiscores extends Component {

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
      <div className="HiscoreView">
        <h2>Hiscores:</h2>
        <ul className="Hiscores">
          {this.displayHiscores()}
        </ul>
      </div>
    )
  }

  displayHiscores = () => {
    const data = this.props.getHiscoresQuery;
    if (data.loading) {
      return <li>Loading Hiscores...</li>;
    }
    else {
      return data.hiscores.map(hiscore => {
        return <Hiscore key={hiscore.id} {...hiscore} />
      })
    }
  }

  submitHiscore = () => {
    const { scoreSubmission } = this.props;
    if (scoreSubmission.score < 2){
      alert('score too low to submit :(');
      return;
    }
    this.props.addHiscoreMutation({
      variables: { ...scoreSubmission },
      refetchQueries: [{ query: getHiscoresQuery }],
    })
  }
}

const Hiscore = ({ name, score, time, id }) =>
  <li className="Hiscore">
    {name} | {score} | {time}
  </li>

export default compose(
  graphql(getHiscoresQuery, {name: 'getHiscoresQuery'}),
  graphql(addHiscoreMutation, {name: 'addHiscoreMutation'}),
)(Hiscores);