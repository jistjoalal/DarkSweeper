import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';

// TODO: production port doesn't work?
// const PORT = process.env.PORT || 3001;
// const HOST = process.env.HOST || 'http://localhost';
// console.log(PORT, HOST);
const client = new ApolloClient({
  uri: `http://localhost:8081/graphql`
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