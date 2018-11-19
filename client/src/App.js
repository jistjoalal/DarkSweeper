import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';

// dev or prod
const uri = window.location.host === 'localhost:3000' ?
  'http://localhost:3001/graphql' : 'http://www.darksweeper.com/graphql';
const client = new ApolloClient({
  uri
})

// TODO: hiscores page with sorting and pagination (just to view)
class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
        <Game />
      </ApolloProvider>
    )
  }
}

export default App;