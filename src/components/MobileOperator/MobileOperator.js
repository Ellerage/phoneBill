import React from 'react';
import './MobileOperator.css'
import { Link } from "react-router-dom";

function MobileOperator ({name, title}) {
  return (
    <div className="MobileOperator">
      <Link to={`/${name}`}>
        <p className="title">{title}</p>
        <p className="link">Нажмите чтобы перейти к оплате</p>
      </Link>
    </div>
  );
}

export default MobileOperator;