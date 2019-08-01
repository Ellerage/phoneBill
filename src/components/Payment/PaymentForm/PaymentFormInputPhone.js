import React, { Component } from 'react';
import { FromGroup, Label, Input, Small } from './PaymentFormInput.styles'

class PaymentFormInputPhone extends Component {
  inputPhone = (e) => {
    let value = e.target.value;

    let x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    let result = !x[2] ? `+${x[1]}` : `+${x[1]} (${x[2]}) ` + x[3] + (x[4] ? `-${x[4]}` : '') + (x[5] ? `-${x[5]}` : '') + (x[6] ? `-${x[6]}` : '');

    this.props.changeValue({name: e.target.id, value: result})
  }

  render() {
    return (
      <FromGroup>
        <Label htmlFor="phoneNumber">Номер телефона</Label>
        <Input type="tel" 
                id="phoneNumber" 
                placeholder="Введите номер телефона" 
                required 
                onChange={this.inputPhone}
                value={this.props.phoneNumber}/>

        <Small id="phoneHelp">
          Формат номера: +7 (XXX) XXX-XX-XX
        </Small>
      </FromGroup>
    );
  }
}

export default PaymentFormInputPhone;