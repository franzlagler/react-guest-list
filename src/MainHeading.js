import styled from '@emotion/styled';
import list from '../public/images/list.svg';

const HeadingContainer = styled.div`
  display: flex;
  @media (max-width: 400px) {
    display: grid;
    margin: 20px auto;
  }
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

const Image = styled.img`
  width: 70px;
  @media (max-width: 650px) {
    width: 50px;
    margin: 0 auto 20px auto;
  }
  margin-right: 20px;
`;

const Heading1 = styled.h1`
  margin: 0;
  font-size: 60px;
  @media (max-width: 650px) {
    font-size: 40px;
  }
  text-align: center;
  letter-spacing: 2px;
`;

function MainHeading() {
  return (
    <HeadingContainer>
      <Image src={list} alt="Logo" />
      <Heading1>Guest List App</Heading1>
    </HeadingContainer>
  );
}

export default MainHeading;
