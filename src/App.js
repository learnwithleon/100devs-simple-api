import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Search } from './components/Search';
import { Browse } from './components/Browse';
import './lib/font-awesome/css/all.min.css';

import { GlobalContext, GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Browse />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
