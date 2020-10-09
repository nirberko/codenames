import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BoardRoute } from "./routes/Board/Board";

import 'normalize.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={BoardRoute} />
      </Switch>
    </div>
  );
}

export default App;
