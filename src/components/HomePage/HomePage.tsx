import React from 'react';

import MobileOperator from '../MobileOperator'
import API from '../../services/api-service.js'

import { Title, Row } from './HomePage.style'

function HomePage () {
  const renderMobileOperators = () => {
    let ApiEx = new API();

    return ApiEx.mobileOperators.map((operator) => {
      return <MobileOperator key={operator.name} {...operator} />
    })
  }

  return (
    <div>
      <Title>Оплата услуг сотовой связи</Title>
      <Row>{ renderMobileOperators() }</Row>
    </div>
  );
}

export default HomePage;