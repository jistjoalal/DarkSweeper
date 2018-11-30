import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';
import HiscorePages from './components/HiscorePages';

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      view: 'Game',
    };
  }

  toggleView = () => {
    const { view } = this.state;
    this.setState({
      view: view === 'Game' ? 'Hiscores' : 'Game',
    })
  }

  render() {
    const { view } = this.state;
    return (
      <ApolloProvider client={client}>
        {view !== 'Hiscores' ?
          <Game toggleView={this.toggleView} />
        : <HiscorePages toggleView={this.toggleView} />
        }
      </ApolloProvider>
    )
  }
}

export default App;