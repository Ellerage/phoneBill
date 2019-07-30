import React, { Component } from 'react';
import './HomePage.css'

import MobileOperator from '../MobileOperator'
import API from '../../services/api-service.js'

class HomePage extends Component {
  state = {
    mobileOperators: []
  }

  renderMobileOperators = () => {
    let ApiEx = new API();

    return ApiEx.mobileOperators.map((operator) => {
      return <MobileOperator key={operator.name} {...operator} />
    })
  }

  render() {
    return (
      <div className="HomePage container">
        <h1>Оплата услуг сотовой связи</h1>
        <div className="row">
          {this.renderMobileOperators()}
        </div>
      </div>
    );
  }
}

export default HomePage;