import styled from '@emotion/styled';

const Input = styled.input`
  appearance: none;
  height: 30px;
  aspect-ratio: 1;
  border: 1px solid black;
  border-radius: 5px;

  &:checked {
    background-color: red;
  }
`;

function Checkbox() {
  return <Input type="checkbox" />;
}
export default Checkbox;
