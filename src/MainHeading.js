import styled from '@emotion/styled';
import list from '../public/images/list.svg';

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Image = styled.img`
  width: 70px;
  margin-right: 20px;
`;

const Heading1 = styled.h1`
  margin: 0;
  font-size: 60px;
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
