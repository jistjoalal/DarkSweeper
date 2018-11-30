import { gql } from 'apollo-boost';

const getHiscoresQuery = gql`
  query($page: Int){
    hiscores(page: $page){
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

export { getHiscoresQuery, addHiscoreMutation };