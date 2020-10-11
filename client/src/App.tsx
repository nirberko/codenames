import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools'

import { GameRoute } from "./routes/Game/Game";

import 'normalize.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ReactQueryDevtools initialIsOpen={false} />

      <Switch>
        <Route exact path="/game/:gameId" component={GameRoute} />
      </Switch>
    </div>
  );
}

export default App;
