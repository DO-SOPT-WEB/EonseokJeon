import * as S from '../style';

const FirstChoice = ({ firstChoice, selectOptionHandler, startPickHandler, dispatchHandler }) => {
  return (
    <>
      <S.SubTitleStyle>오늘은 어떤 종류가 먹고 싶어?</S.SubTitleStyle>
      <S.CountParagraph>1 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle
          $isClicked={firstChoice === 1 ? true : false}
          onClick={() => {
            dispatchHandler('first', 1);
          }}
        >
          <a href="#">한식</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          $isClicked={firstChoice === 2 ? true : false}
          onClick={() => {
            dispatchHandler('first', 2);
          }}
        >
          <a href="#">일식</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          $isClicked={firstChoice === 3 ? true : false}
          onClick={() => {
            dispatchHandler('first', 3);
          }}
        >
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
          disabled={firstChoice === 0}
          onClick={() => {
            dispatchHandler('done', 2);
          }}
        >
          다음으로
        </S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default FirstChoice;
