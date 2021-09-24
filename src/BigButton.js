import styled from '@emotion/styled';

const BigButton = styled.button`
  width: 200px;
  margin: 20px;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid #212529;
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background-color: #ced4da;
    opacity: 0.4;
  }
`;

export default BigButton;
