import React, { Component } from 'react';
import PaymentFormInputPhone from './PaymentFormInputPhone'
import PaymentFormInputAmount from './PaymentFormInputAmount'
import { withRouter, RouteComponentProps } from "react-router-dom";

import API from '../../../services/api-service.js'

import { Button } from './PaymentForm.style'

interface PaymentFormProps extends RouteComponentProps<{}> {
  code: string,
  showError: Function,
  history: any
}

interface IState {
  phoneNumber: any,
  amount: any,
  isLoad: boolean
}

class PaymentForm extends Component<PaymentFormProps> {
  state: IState = {
    phoneNumber: '',
    amount: '',
    isLoad: false
  }

  componentDidUpdate = (prevProps : any) => {
    if (this.props.code !== prevProps.code) {
      this.setState({ phoneNumber: `+7 ${this.props.code}` });
    }
  }

  sendForm = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let validate = [
      this.state.phoneNumber.replace(/[^0-9]/gim,'').length === 11 || 'Номер телефона должен содержать 11 цифр',
      Number(this.state.amount) >= 1                               || 'Минимальная сумма 1₽',
      Number(this.state.amount) <= 1000                            || 'Сумма не должна превышать 1000₽'
    ]

    let errorsValidate = validate.filter(validateItem => validateItem !== true);

    if (errorsValidate.length > 0) {
      this.props.showError(errorsValidate)
      return;
    }

    this.setState({ isLoad: true });

    let api = new API()

    let response = await api.requestToServer({
      phoneNumber: this.state.phoneNumber,
      amount: this.state.amount
    })

    if (response) {
      alert('Оплата прошла успешно!')
      this.props.history.push("/");
      return;
    }

    alert('Что-то пошло не так...')
    this.props.showError(['Произошла ошибка...'])
    this.setState({ isLoad: false });
  }

  changeValue = ({ name, value }: {name: string, value: string}) => {
    this.setState({ [name]: value });
  }

  render() {
    const { phoneNumber, amount } = this.state;

    return (
      <form onSubmit={this.sendForm}>
        <PaymentFormInputPhone phoneNumber={phoneNumber} changeValue={(val: any) => this.changeValue(val)} />
        <PaymentFormInputAmount amount={amount} changeValue={(val: any) => this.changeValue(val)}/>

        <Button type="submit">
          {this.state.isLoad ? 'Опалата...' : 'Оплатить' }
        </Button>
      </form>
    );
  }
}

export default withRouter(PaymentForm);