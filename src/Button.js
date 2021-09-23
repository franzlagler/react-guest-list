import styled from '@emotion/styled';

const Button = styled.button`
  width: ${(props) => props.width};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: 10px 20px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#cce3de'};
  border: ${(props) => (props.noBorder ? '0' : '2px solid #212529')};
  border-radius: 15px;
  color: ${(props) => (props.color ? props.color : '#212529')};
  font-size: 20px;
`;

export default Button;
