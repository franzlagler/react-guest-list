import styled from '@emotion/styled';

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
  justify-content: center;
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  width: ${(props) => (props.width ? props.width : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'auto'};
  border: ${(props) => (props.border ? props.border : '0')};
  border-radius: 15px;
`;

export default Container;
