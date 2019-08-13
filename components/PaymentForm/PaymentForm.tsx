import React from 'react';
import PaymentFormInputPhone from './PaymentFormInputPhone'
import PaymentFormInputAmount from './PaymentFormInputAmount'

import { withRouter } from 'next/router'

import API from '../../services/api-service'
import { Button, Form } from './PaymentForm.style'

interface IPaymentFormProps {
  code: string,
  showError: Function,
  router: any
}

class PaymentForm extends React.Component<IPaymentFormProps> {
  state = {
    phoneNumber: '',
    amount: '',
    isLoad: false
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.code !== prevProps.code) {
      this.setState({ phoneNumber: `+7 ${this.props.code}`});
    }
  }

  sendForm = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phoneNumber, amount } = this.state;

    let validate = [
      phoneNumber.replace(/[^0-9]/gim,'').length === 11 || 'Номер телефона должен содержать 11 цифр',
      Number(amount) >= 1                               || 'Минимальная сумма 1₽',
      Number(amount) <= 1000                            || 'Сумма не должна превышать 1000₽'
    ]

    const errorsValidate = validate.filter(validateItem => validateItem !== true);

    if (errorsValidate.length > 0) {
      this.props.showError(errorsValidate)
      return;
    }

    this.setState({ isLoad: true });

    const api = new API()
    let response = await api.requestToServer({
      phoneNumber,
      amount
    })

    if (response) {
      alert('Оплата прошла успешно!')
      this.props.router.push("/");
      return;
    }

    alert('Что-то пошло не так...')
    this.props.showError(['Произошла ошибка...'])
    this.setState({ isLoad: false });
  }

  render() {
    const { sendForm } = this;
    const { phoneNumber, amount, isLoad } = this.state;

    return (
      <Form onSubmit={sendForm}>
        <PaymentFormInputPhone phoneNumber={phoneNumber} changeValue={(val: string) => this.setState({ phoneNumber: val })} />
        <PaymentFormInputAmount amount={amount} changeValue={(val: string) => this.setState({ amount: val })}/>
  
        <Button type="submit">
          {isLoad ? 'Опалата...' : 'Оплатить' }
        </Button>
      </Form>
    );
  }
}

export default withRouter(PaymentForm);