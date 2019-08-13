import React from 'react';
import API from '../services/api-service.js'
import PaymentForm from '../components/PaymentForm'
import ErrorList from '../components/ErrorList'
import { Title, Hr, Container } from '../components/Payment.style'
import { withRouter } from 'next/router'

interface IPaymentProps {
  router: any
}

class Payment extends React.Component<IPaymentProps> {
  state = {
    operatorInfo: { title: '...', name: '...', code: '9' },
    errorsList: []
  }

  componentDidMount = () => {
    let api = new API();
    let operator = api.mobileOperators.find(operator => operator.name === this.props.router.query.name)
    
    if(operator === undefined) {
      this.props.router.push("/");
    } else {
      this.setState({ operatorInfo: operator });
    }
  }

  showError = (err : any) => {
    this.setState({ errorsList: err });
  }

  render = () => {
    const { showError } = this;
    const { errorsList, operatorInfo } = this.state;

    return (
      <Container>
        <Title>Оплата мобильного счета опаратора - {operatorInfo.title}</Title>
        <Hr/>
        <ErrorList errors={errorsList} />
        
        <PaymentForm {...operatorInfo} showError={(err : string[]) => showError(err)}/>
      </Container>
    );
  }
}

export default withRouter(Payment);