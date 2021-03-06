import styled from '@emotion/styled';
import check from '../public/images/check.svg';

const Input = styled.input`
  display: inline-block;
  appearance: none;
  margin-right: 20px;
  height: 30px;
  aspect-ratio: 1;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:checked {
    background-image: url(${check});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

function Checkbox(props) {
  return (
    <Input
      type="checkbox"
      id={props.id}
      onKeyPress={props.handleCheckboxKeypress}
      onChange={props.handleCheckboxChange}
      checked={props.checked}
      aria-label="check"
    />
  );
}
export default Checkbox;
