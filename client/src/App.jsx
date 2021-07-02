import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import { PAGE_NAME } from './utils/conf';
import './App.css';

function App() {
  const [page, setPage] = useState(PAGE_NAME.login);

  let pageToRender = null;
  if (page === PAGE_NAME.login) pageToRender = <Login setPage={setPage} />;
  else if (page === PAGE_NAME.join) pageToRender = <Join />;

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
