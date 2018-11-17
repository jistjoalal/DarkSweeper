import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';

const client = new ApolloClient({
  uri: `http://localhost:${process.env.PORT || 3001}/graphql`
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