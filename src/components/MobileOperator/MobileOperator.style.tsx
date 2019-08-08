import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Title = styled("p")`
  font-size: 22px;
`;

export const WrapMobileOperator = styled("div")`
  border: 1px solid grey;
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 15px;

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;