import styled from 'styled-components';

const Button = styled.button`
  background-color: #93AF9A;
  color: white;
  border-radius: 17px;
  padding: 14px 18px;
  font-weight: 700;
  border: none;
  min-width: 50px;
  cursor: pointer;
  ${(p) => p.disabled && `
  background-color: #D6D6D6;
  cursor: default;
  `}

`;

export default Button;