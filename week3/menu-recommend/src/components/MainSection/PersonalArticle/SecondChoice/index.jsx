import * as S from '../style';

const SecondChoice = ({ secondChoice, dispatchHandler }) => {
  return (
    <>
      <S.SubTitleStyle>그럼 이 중에는 뭐가 끌려?</S.SubTitleStyle>
      <S.CountParagraph>2 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle
          $isClicked={secondChoice === 1 ? true : false}
          onClick={() => {
            dispatchHandler('second', 1);
          }}
        >
          <a href="#">밥</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          $isClicked={secondChoice === 2 ? true : false}
          onClick={() => {
            dispatchHandler('second', 2);
          }}
        >
          <a href="#">면</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          $isClicked={secondChoice === 3 ? true : false}
          onClick={() => {
            dispatchHandler('second', 3);
          }}
        >
          <a href="#">고기</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
      <S.ButtonBox>
        <S.NextButton
          onClick={() => {
            dispatchHandler('done', 1);
          }}
        >
          이전으로
        </S.NextButton>
        <S.NextButton
          disabled={secondChoice === 0}
          onClick={() => {
            dispatchHandler('done', 3);
          }}
        >
          다음으로
        </S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default SecondChoice;
