import React, { Component } from 'react';
import API from '../../services/api-service.js'

import PaymentForm from './PaymentForm'
import ErrorList from './ErrorList'

import { Title, Hr } from './Payment.style'

class Payment extends Component {
  state = {
    operatorInfo: {
      title: 'title',
      name: 'name',
      code: '9'
    },
    API: null,
    errorsList: []
  }

  componentDidMount = () => {
    let api = new API()
    let operator = api.mobileOperators.find(i => i.name === this.props.match.params.operator)
    
    if(operator === undefined) {
      this.props.history.push("/");
    } else {
      this.setState({ 
        operatorInfo: operator,
        API: api
      });
    }
  }

  showError = (err) => {
    this.setState({ errorsList: this.state.errorsList.concat(err) });
  }

  render() {
    return (
      <div>
        <Title>Оплата мобильного счета опаратора - {this.state.operatorInfo.title}</Title>
        <Hr/>
        <ErrorList errors={this.state.errorsList} />
        
        <PaymentForm {...this.state.operatorInfo} showError={(err) => this.showError(err)}/>
      </div>
    );
  }
}

export default Payment;