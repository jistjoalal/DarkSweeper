import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Game from './components/Game';
import HiscorePages from './components/HiscorePages';

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/" exact component={Game} />
            <Route path="/hiscores" component={HiscorePages} />
            <Route component={Game} />
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;