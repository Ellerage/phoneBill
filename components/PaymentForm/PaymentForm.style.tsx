import styled from "styled-components"

export const Button = styled("button")`
	background: #2471FF;
	border: none;
	padding: 10px 20px 10px 20px;
	border-bottom: 3px solid #5994FF;
	border-radius: 3px;
	color: #D2E2FF;
  
  :hover{
    background: #6B9FFF;
    color:#fff;
  }
`;

export const Form = styled.form`
  max-width: 100vw;
	margin: 50px auto;
	background: #fff;
	border-radius: 2px;
	padding: 0px;
	font-family: Georgia, "Times New Roman", Times, serif;
`;