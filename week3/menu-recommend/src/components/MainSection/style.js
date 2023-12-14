import styled from 'styled-components';

const MainStyle = styled.main`
  max-width: 120rem;
  height: 59rem;
  padding: 5rem 20rem;
  margin: 5rem auto;
  text-align: center;
  border: 1px solid #555;
`;

const SubTitleStyle = styled.h2`
  width: 100%;
  padding: 1rem 0;
  margin: 0 auto 4rem;
  border: 1px solid #555;
  border-radius: 1rem;
`;

const CountParagraph = styled.p`
  padding: 0 1rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  text-align: end;
`;

const MainSectionStyle = styled.section`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const ArticleStyle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  cursor: pointer;
  background-color: ${({ $isClicked }) => ($isClicked === 'true' ? 'red' : 'inherit')};
  border: 1px solid #555;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

const StartButton = styled.button`
  width: 10rem;
  padding: 1rem 0;
  margin: 2rem auto;
  color: ${({ disabled }) => (disabled ? 'red' : 'blue')};
  border: 1px solid #555;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  padding: 1rem 2rem;
  margin-top: 2rem;
  border: 1px solid #555;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

export {
  MainStyle,
  SubTitleStyle,
  CountParagraph,
  MainSectionStyle,
  ArticleStyle,
  StartButton,
  ButtonBox,
  NextButton,
};
