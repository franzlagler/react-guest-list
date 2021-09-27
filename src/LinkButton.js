import styled from '@emotion/styled';

const LinkButton = styled.button`
  padding-bottom: 5px;
  margin: 15px 15px 15px 0;
  background-color: inherit;
  border: 0;
  border-bottom: ${(props) => (props.underline ? '2px solid black' : '0')};
  border-radius: 2px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;

export default LinkButton;
