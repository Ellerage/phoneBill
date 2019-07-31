import React, { Component } from 'react';
import PaymentFormInputPhone from './PaymentFormInputPhone.js'
import PaymentFormInputAmount from './PaymentFormInputAmount.js'
import { withRouter } from "react-router-dom";

import API from '../../../services/api-service.js'

class PaymentForm extends Component {
  state = {
    phoneNumber: '+7 (___) ___-__-__',
    amount: '',
    isLoad: false
  }

  componentDidMount = () => {
    this.setState({ phoneNumber: `+7 (${this.props.code}) ___-__-__`});
  }

  sendForm = async (e) => {
    e.preventDefault();

    let validate = [this.state.phoneNumber.replace(/[^0-9]/gim,'').length === 11,
                    Number(this.state.amount) >= 1,
                    Number(this.state.amount) <= 1000,
                    this.state.amount.length > 0
                    ]

    if (!validate.every(cur => cur === true)) {
      this.props.showError('Введите корректные данные')
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
    } else {
      alert('Что-то пошло не так...')
      this.props.showError('Произошла ошибка...')
      this.setState({ isLoad: false });
    }
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

          <button type="submit" className="btn btn-primary">{this.state.isLoad ? 'Опалата...' : 'Оплатить' }</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PaymentForm);