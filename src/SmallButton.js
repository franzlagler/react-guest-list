import styled from '@emotion/styled';

const SmallButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  margin: 0 10px 0 0;
  padding: 5px 10px;
  border: 1px solid #212529;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background-color: #ced4da;
    opacity: 0.4;
  }
`;

export default SmallButton;
