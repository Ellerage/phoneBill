import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import HomePage from '../HomePage'
import Payment from '../Payment/index.js'


const Container = styled.div`
  max-width: 1140px;
  padding: 0px 15px;
  margin: 0 auto;
  width: 85%;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/:operator" component={Payment}/>
      </Switch>
    </Container>
  );
}

export default App;
