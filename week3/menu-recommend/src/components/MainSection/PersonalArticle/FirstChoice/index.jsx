import * as S from '../style';

const FirstChoice = ({ selectOptionHandler, startPickHandler, nthChoiceHandler }) => {
  return (
    <>
      <S.SubTitleStyle>오늘은 어떤 종류가 먹고 싶어?</S.SubTitleStyle>
      <S.CountParagraph>1 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle>
          <a href="#">한식</a>
        </S.ArticleStyle>
        <S.ArticleStyle>
          <a href="#">일식</a>
        </S.ArticleStyle>
        <S.ArticleStyle>
          <a href="#">중식</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
      <S.ButtonBox>
        <S.NextButton
          onClick={() => {
            selectOptionHandler('');
            startPickHandler(false);
          }}
        >
          이전으로
        </S.NextButton>
        <S.NextButton
          onClick={() => {
            nthChoiceHandler(2);
          }}
        >
          다음으로
        </S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default FirstChoice;
