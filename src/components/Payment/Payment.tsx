import React, { useState, useEffect } from 'react';
import API from '../../services/api-service.js'

import PaymentForm from './PaymentForm'
import ErrorList from './ErrorList'

import { Title, Hr } from './Payment.style'

interface IPaymentProps {
  match: any,
  history: any
}

function Payment ({ match, history }: IPaymentProps) {
  const [errorsList, addErrors] = useState([])
  const [operatorInfo, setOperator] = useState({ title: '...', name: '...', code: '9' })

  useEffect(() => {
    let api = new API();
    let operator = api.mobileOperators.find(operator => operator.name === match.params.operator)
    
    if(operator === undefined) {
      history.push("/");
    } else {
      setOperator(operator)
    }
  }, [history, match])

  const showError = (err : any) => {
    addErrors(err)
  }

  return (
    <div>
      <Title>Оплата мобильного счета опаратора - {operatorInfo.title}</Title>
      <Hr/>
      <ErrorList errors={errorsList} />
      
      <PaymentForm {...operatorInfo} showError={(err : any) => showError(err)}/>
    </div>
  );
}

export default Payment;