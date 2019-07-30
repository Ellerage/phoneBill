import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage'
import Payment from '../Payment'

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/:operator" component={Payment}/>
      </Switch>
    </div>
  );
}

export default App;
