import React, { useState, useEffect } from 'react';
import PaymentFormInputPhone from './PaymentFormInputPhone'
import PaymentFormInputAmount from './PaymentFormInputAmount'

import { withRouter, RouteComponentProps } from "react-router-dom";

import API from '../../../services/api-service.js'
import { Button, Form } from './PaymentForm.style'

interface IPaymentFormProps extends RouteComponentProps<{}> {
  code: string,
  history: any,
  showError: Function
}

const PaymentForm = ({code, showError, history}: IPaymentFormProps) => {
  const [ phoneNumber, changePhoneNumber ] = useState('')
  const [ amount, changeAmount ] = useState('')
  const [ isLoad, changeLoadStatus ] = useState(false)

  useEffect(() => {
    changePhoneNumber(`+7 ${code}`)
  }, [code])

  const sendForm = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let validate = [
      phoneNumber.replace(/[^0-9]/gim,'').length === 11 || 'Номер телефона должен содержать 11 цифр',
      Number(amount) >= 1                               || 'Минимальная сумма 1₽',
      Number(amount) <= 1000                            || 'Сумма не должна превышать 1000₽'
    ]

    const errorsValidate = validate.filter(validateItem => validateItem !== true);

    if (errorsValidate.length > 0) {
      showError(errorsValidate)
      return;
    }

    changeLoadStatus(true)

    const api = new API()
    let response = await api.requestToServer({
      phoneNumber,
      amount
    })

    if (response) {
      alert('Оплата прошла успешно!')
      history.push("/");
      return;
    }

    alert('Что-то пошло не так...')
    showError(['Произошла ошибка...'])
    changeLoadStatus(false)
  }

  return (
    <Form onSubmit={sendForm}>
      <PaymentFormInputPhone phoneNumber={phoneNumber} changeValue={(val: string) => changePhoneNumber(val)} />
      <PaymentFormInputAmount amount={amount} changeValue={(val: string) => changeAmount(val)}/>

      <Button type="submit">
        {isLoad ? 'Опалата...' : 'Оплатить' }
      </Button>
    </Form>
  );
}

export default withRouter(PaymentForm);