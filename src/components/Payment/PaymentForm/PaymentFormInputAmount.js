import React, { Component } from 'react';
import { FromGroup, Label, Input, Small } from './PaymentFormInput.styles'

class PaymentFormInputAmount extends Component {
  inputAmount = (e) => {
    let value = e.target.value;

    if ((Number(value) >= 1 || value.length === 0) && Number(value) <= 1000) {
      this.props.changeValue({name: e.target.name, value})
    }
  }

  render() {
    return (
      <FromGroup>
        <Label htmlFor="amount">Сумма пополнения ₽</Label>
        <Input type="text" 
                id="amount"
                name="amount"
                placeholder="Сумма пополнения" 
                required
                onChange={this.inputAmount}
                value={this.props.amount}/>

        <Small id="amountHelp">
          Минимальная сумма пополнения 1₽. Максимальная 1000₽
        </Small>
      </FromGroup>
    );
  }
}

export default PaymentFormInputAmount;