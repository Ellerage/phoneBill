import React from 'react';
import { WrapMobileOperator, Title, StyledLink } from './MobileOperator.style'

function MobileOperator ({name, title}) {
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