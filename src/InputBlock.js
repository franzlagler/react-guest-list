import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  margin: 0 0 10px 5px;
  font-size: 20px;
  font-weight: bolder;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #212529;
  border-radius: 15px;
  font-size: 20px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cce3de;
  }
  &:disabled {
    background-color: #ced4da;
    opacity: 0.4;
  }
`;

function InputBlock(props) {
  return (
    <>
      <Label htmlFor={props.id}>{props.name}</Label>
      <Input
        id={props.id}
        onChange={props.handleInputChange}
        value={props.value}
        disabled={props.disabled}
        ref={props.firstNameInputField}
      />
    </>
  );
}

export default InputBlock;
