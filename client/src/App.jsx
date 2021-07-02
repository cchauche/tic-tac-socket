import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tic-Tac-Socket.io</h1>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/:gameId" children={<Game />} />
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
