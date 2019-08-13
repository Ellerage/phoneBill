import React from 'react';
import { WrapMobileOperator, Title, StyledLink } from './MobileOperator.style'
import Link from 'next/link';

interface IMobileOperatorProps {
  name: string,
  title: string
}

function MobileOperator ({ 
  name, title 
} : IMobileOperatorProps) {
  return (
    <WrapMobileOperator>
      <Link href={`/payment?name=${name}`} as="/payment">
        <StyledLink>
          <Title>{title}</Title>
          <p>Нажмите чтобы перейти к оплате</p>
        </StyledLink>
      </Link>
    </WrapMobileOperator>
  );
}

export default MobileOperator;