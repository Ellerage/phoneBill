import React from 'react';
import styled from 'styled-components';

type ErrorListProps = {
  errors: string[]
}

const ErrorList = ({errors} : ErrorListProps) => {
  return (<div>
    {
      errors.map((err, i) => {
        return <StyledError key={i}>{err}</StyledError>
      })
    }
  </div>)
}

const StyledError = styled.div`
  color: red;
  padding: 5px 0px;
`;

export default ErrorList;