import React, { Component } from 'react';

class PaymentFormInputPhone extends Component {
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

      this.props.changeValue({name: e.target.id, value})
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="phoneNumber">Номер телефона</label>
        <input type="tel" id="phoneNumber" 
                          className="form-control" 
                          placeholder="Введите номер телефона" 
                          required 
                          onChange={this.inputPhone}
                          value={this.props.phoneNumber}/>

        <small id="phoneHelp" className="form-text text-muted">
          Формат номера: +7 (XXX) XXX-XX-XX
        </small>
      </div>
    );
  }
}

export default PaymentFormInputPhone;