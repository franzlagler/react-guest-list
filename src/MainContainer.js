import styled from '@emotion/styled';

const MainContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 4%;
  @media (max-width: 700px) {
    padding: 1%;
  }
  background-color: #f8f9fa;
  border: 2px solid #212529;
  border-radius: 15px;
`;

export default MainContainer;
