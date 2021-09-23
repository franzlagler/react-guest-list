import styled from '@emotion/styled';

const Button = styled.button`
  width: ${(props) => props.width};
  height: 30px;
  border: ${(props) => (props.noBorder ? '0' : '2px solid #212529')};
  border-radius: 15px;
  font-size: 20px;
`;

export default Button;
