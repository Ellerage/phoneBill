import React from 'react';
import { WrapMobileOperator, Title, StyledLink } from './MobileOperator.style'

type MobileOperatorProps = {
  name: string,
  title: string
}

function MobileOperator ({ name, title } : MobileOperatorProps) {
  return (
    <WrapMobileOperator>
      <StyledLink to={`/${name}`}>
        <Title>{title}</Title>
        <p>Нажмите чтобы перейти к оплате</p>
      </StyledLink>
    </WrapMobileOperator>
  );
}

export default MobileOperator;