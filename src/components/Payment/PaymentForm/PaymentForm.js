import React, { Component } from 'react';
import PaymentFormInputPhone from './PaymentFormInputPhone'
import PaymentFormInputAmount from './PaymentFormInputAmount'
import { withRouter } from "react-router-dom";

import API from '../../../services/api-service.js'

import { Button } from './PaymentForm.style'

class PaymentForm extends Component {
  state = {
    phoneNumber: '',
    amount: '',
    isLoad: false
  }

  componentDidMount = () => {
    this.setState({ phoneNumber: `+7 ${this.props.code}`});
  }

  sendForm = async (e) => {
    e.preventDefault();

    let validate = [this.state.phoneNumber.replace(/[^0-9]/gim,'').length === 11 ? '' : 'Номер телефона должен содержать 11 цифр',
                    Number(this.state.amount) >= 1    ? '' : 'Минимальная сумма 1₽',
                    Number(this.state.amount) <= 1000 ? '' : 'Сумма не должна превышать 1000₽',
                    this.state.amount.length > 0      ? '' : 'Введите сумму пополнения'
                    ]

    let errorsValidate = validate.filter(validateItem => validateItem);
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
    this.props.showError('Произошла ошибка...')
    this.setState({ isLoad: false });
  }

  changeValue = ({name, value}) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendForm}>
          <PaymentFormInputPhone phoneNumber={this.state.phoneNumber} changeValue={(val) => this.changeValue(val)} />
          <PaymentFormInputAmount amount={this.state.amount} changeValue={(val) => this.changeValue(val)}/>

          <Button type="submit">{this.state.isLoad ? 'Опалата...' : 'Оплатить' }</Button>
        </form>
      </div>
    );
  }
}
// <button type="submit" className="btn btn-primary">{this.state.isLoad ? 'Опалата...' : 'Оплатить' }</button>
export default withRouter(PaymentForm);