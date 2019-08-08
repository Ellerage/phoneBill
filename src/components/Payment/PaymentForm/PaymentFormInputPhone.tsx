import React from 'react';
import { FromGroup, Label, Input, Small } from './PaymentFormInput.styles'

type PaymentFormInputPhoneProps = {
  phoneNumber: string,
  changeValue: Function
}

function PaymentFormInputPhone ({ phoneNumber, changeValue } : PaymentFormInputPhoneProps) {
  const inputPhone = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    let x : any = value.replace(/\D/g, '')
                        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
/*
    let result = x[2] ? `+${x[1]} (${x[2]}) ${x[3]}` : `+${x[1]}` +
                (x[4] ? `-${x[4]}`                   : '') + 
                (x[5] ? `-${x[5]}`                   : '') + 
                (x[6] ? `-${x[6]}`                   : '');
                
    changeValue({name, value: result})
*/
    let result = x[2] ? `+${x[1]} (${x[2]}) ${x[3]}` : `+${x[1]}`;
    
    for (let i = 4; i < 6; i++) {
      result += x[i] ? `-${x[i]}` : ''
    }

    changeValue({name, value: result})
  }

  return (
    <FromGroup>
      <Label htmlFor="phoneNumber">Номер телефона</Label>
      <Input type="tel" 
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Введите номер телефона" 
              required 
              onChange={inputPhone}
              value={phoneNumber}/>

      <Small id="phoneHelp">
        Формат номера: +7 (XXX) XXX-XX-XX
      </Small>
    </FromGroup>
  );
}

export default PaymentFormInputPhone;