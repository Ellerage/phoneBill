import React, { Component } from 'react';

class PaymentFormInputAmount extends Component {
  inputAmount = (e) => {
    let value = e.target.value;

    if ((Number(value) >= 1 || value.length === 0) && Number(value) <= 1000) {
      this.props.changeValue({name: e.target.id, value})
    }
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="amount">Сумма пополнения ₽</label>
        <input type="text" id="amount" 
                          className="form-control" 
                          placeholder="Сумма пополнения" 
                          required
                          onChange={this.inputAmount}
                          value={this.props.amount}
                          />

        <small id="amountHelp" className="form-text text-muted">
          Минимальная сумма пополнения 1₽. Максимальная 1000₽
        </small>
      </div>
    );
  }
}

export default PaymentFormInputAmount;