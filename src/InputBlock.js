import styled from '@emotion/styled';

const Label = styled.label`
  font-size: 15px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid #212529;
  border-radius: 15px;
  font-size: 20px;
`;

function InputBlock(props) {
  return (
    <>
      <Label htmlFor={props.id}>{props.name}</Label>
      <Input
        id={props.id}
        onChange={props.handleInputChange}
        value={props.value}
      />
    </>
  );
}

export default InputBlock;
