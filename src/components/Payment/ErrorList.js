import React from 'react';
import styled from 'styled-components';

const ErrorList = ({errors}) => {
  return errors.map((err, i) => {
    return <StyledError key={i}>{err}</StyledError>
  })
}

const StyledError = styled.div`
  color: red;
  padding: 5px 0px;
`;

export default ErrorList;