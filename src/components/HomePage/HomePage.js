import React from 'react';
import './HomePage.css'

import MobileOperator from '../MobileOperator'
import API from '../../services/api-service.js'

function HomePage () {
  const renderMobileOperators = () => {
    let ApiEx = new API();

    return ApiEx.mobileOperators.map((operator) => {
      return <MobileOperator key={operator.name} {...operator} />
    })
  }

  return (
    <div className="HomePage container">
      <h1>Оплата услуг сотовой связи</h1>
      <div className="row">
        {renderMobileOperators()}
      </div>
    </div>
  );
}

export default HomePage;