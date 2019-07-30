import React, { Component } from 'react';
import './Payment.css'
import { withRouter } from "react-router-dom";
import API from '../../services/api-service.js'

class Payment extends Component {
  state = {
    operatorInfo: {},
    phoneValue: '',
    amountValue: '',
    API: null,
    errorInfo: ''
  }

  componentDidMount = () => {
    let api = new API()
    let operator = api.mobileOperators.find(i => i.name === this.props.match.params.operator)

    this.setState({ 
      operatorInfo: operator,
      API: api
    });
  }

  sendForm = async (e) => {
    e.preventDefault();

    if (this.state.phoneValue.replace(/[^0-9]/gim,'').length === 11) {
      if (Number(this.state.amountValue) >= 1 && Number(this.state.amountValue) <= 1000) {
        let response = await this.state.API.requestToServer({
          phoneNumber: this.state.phoneValue,
          amountValue: this.state.amountValue
        })

        if (response) {
          alert('Оплата прошла успешно!')
          this.setState({ errorInfo: false });
          this.props.history.push("/");
        } else {
          alert('Что-то пошло не так...')
          this.setState({ errorInfo: true });
        }
      }
    }
  }

  setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
  }

  inputPhone = (e) => {
      let value = e.target.value;
      let matrix = "+7 (___) ___-__-__";
      let i = 0;
      let def = matrix.replace(/\D/g, "");
      let val = value.replace(/\D/g, "");

      if (def.length >= val.length) val = def;

      value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
      if (e.type === "blur") {
          if (value.length === 2) value = ""
      } else this.setCursorPosition(value.length, e.target)

      this.setState({ phoneValue: value });
  }

  inputAmount = (e) => {
    let value = e.target.value;

    if ((Number(value) >= 1 || value.length === 0) && Number(value) <= 1000) {
      this.setState({ amountValue: value });
    }
  }

  render() {
    const showError = this.state.errorInfo === true ? 'Произошла ошибка...' : ''

    return (
      <div>
        <h2>Оплата мобильного счета опаратора - {this.state.operatorInfo.title}</h2>
        <hr/>

        <div className="error">{showError}</div>

        <form onSubmit={this.sendForm}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Номер телефона</label>
            <input type="tel" id="phoneNumber" 
                              className="form-control" 
                              placeholder="Введите номер телефона" 
                              required onChange={this.inputPhone} 
                              onFocus={this.inputPhone} 
                              value={this.state.phoneValue}/>

            <small id="phoneHelp" className="form-text text-muted">
              Формат номера: +7 (XXX) XXX-XX-XX
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Сумма пополнения ₽</label>
            <input type="text" id="phoneNumber" 
                              className="form-control" 
                              placeholder="Сумма пополнения" 
                              required
                              onChange={this.inputAmount}
                              value={this.state.amountValue}
                              />

            <small id="amountHelp" className="form-text text-muted">
              Минимальная сумма пополнения 1₽. Максимальная 1000₽
            </small>
          </div>
          
          <button type="submit" className="btn btn-primary">Оплатить</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Payment);