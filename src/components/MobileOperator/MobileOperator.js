import React, { Component } from 'react';
import './MobileOperator.css'
import { Link } from "react-router-dom";

class MobileOperator extends Component {
  render() {
    return (
      <div className="MobileOperator">
        <Link to={`/${this.props.name}`}>
          <p className="title">{this.props.name}</p>
          <p className="link">Нажмите чтобы перейти к оплате</p>
        </Link>
      </div>
    );
  }
}

export default MobileOperator;

/*
<div className="MobileOperator col-12">
        <p>{this.props.name}</p>
        <p><Link to={`/${this.props.name}`}>Перейти к оплате</Link></p>
      </div>
      */