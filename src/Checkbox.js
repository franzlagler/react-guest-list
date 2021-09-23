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

  &:checked {
    background-image: url(${check});
  }
`;

function Checkbox(props) {
  return (
    <Input
      type="checkbox"
      id={props.id}
      onChange={props.handleCheckboxChange}
      checked={props.checked}
    />
  );
}
export default Checkbox;
