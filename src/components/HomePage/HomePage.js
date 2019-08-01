import React from 'react';

import MobileOperator from '../MobileOperator'
import API from '../../services/api-service.js'

import { Container, Title, Row } from './HomePage.style'

function HomePage () {
  const renderMobileOperators = () => {
    let ApiEx = new API();

    return ApiEx.mobileOperators.map((operator) => {
      return <MobileOperator key={operator.name} {...operator} />
    })
  }

  return (
    <Container>
      <Title>Оплата услуг сотовой связи</Title>
      <Row>{ renderMobileOperators() }</Row>
    </Container>
  );
}

export default HomePage;