import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'http://localhost';
const client = new ApolloClient({
  uri: `${HOST}:${PORT}/graphql`
})

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