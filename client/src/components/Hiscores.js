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
      speed
    }
  }
`;

const addHiscoreMutation = gql`
  mutation($name: String!, $score: Int!, $time: Int!, $speed: Float!){
    addHiscore(name: $name, score: $score, time: $time, speed: $speed){
      id
      name
      score
      time
      speed
    }
  }
`;

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
        <div className="Hiscores">
          {this.displayHiscores()}
        </div>
      </div>
    )
  }

  displayHiscores = () => {
    const data = this.props.getHiscoresQuery;
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

  // TODO: better than alert popup
  submitHiscore = () => {
    const { scoreSubmission } = this.props;
    if (scoreSubmission.name.length < 1) {
      //alert("name can't be blank");
      return;
    }
    this.props.addHiscoreMutation({
      variables: { ...scoreSubmission },
      refetchQueries: [{ query: getHiscoresQuery }],
    })
  }
}

const Hiscore = ({ name, score, time }) =>
  <li className="Hiscore">
    <span>{name}</span>
    <span>{score} / {time}</span>
  </li>

export default compose(
  graphql(getHiscoresQuery, {name: 'getHiscoresQuery'}),
  graphql(addHiscoreMutation, {name: 'addHiscoreMutation'}),
)(Hiscores);