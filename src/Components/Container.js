import styled from '@emotion/styled';

const Container = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
  padding: ${(props) => (props.padding ? props.padding : '0')};
  border: ${(props) => (props.border ? props.border : '0')};
  border-radius: 15px;
`;

export default Container;
