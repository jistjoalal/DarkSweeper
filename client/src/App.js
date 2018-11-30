import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';
import HiscorePages from './components/HiscorePages';

const client = new ApolloClient({
  uri: '/graphql'
})

// TODO: hiscores page with sorting and pagination (just to view)
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      view: 'Back to Game',
    };
  }

  toggleView = () => {
    const { view } = this.state;
    this.setState({
      view: view === 'Back to Game' ? 'All Hiscores' : 'Back to Game',
    })
  }

  render() {
    const { view } = this.state;
    return (
      <ApolloProvider client={client}>
        {view === 'All Hiscores' ?
          <Game toggleView={this.toggleView} />
        : <HiscorePages toggleView={this.toggleView} />
        }
      </ApolloProvider>
    )
  }
}

export default App;