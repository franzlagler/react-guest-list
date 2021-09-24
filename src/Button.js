import styled from '@emotion/styled';

const Button = styled.button`
  display: ${(props) => (props.display ? props.display : 'inline-block')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '10px 20px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#cce3de'};
  border: ${(props) => (props.border ? props.border : '2px solid #212529')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '15px'};
  color: ${(props) => (props.color ? props.color : '#212529')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background-color: #ced4da;
    opacity: 0.4;
  }
`;

export default Button;
