import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage'
import Payment from '../Payment/index.js'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/:operator" component={Payment}/>
      </Switch>
    </div>
  );
}

export default App;
