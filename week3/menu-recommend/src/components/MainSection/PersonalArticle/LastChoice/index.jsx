import * as S from '../style';

const LastChoice = ({ thirdChoice, dispatchHandler }) => {
  return (
    <>
      <S.SubTitleStyle>마지막으로 골라줘!</S.SubTitleStyle>
      <S.CountParagraph>3 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle
          $isClicked={thirdChoice === 1 ? true : false}
          onClick={() => {
            dispatchHandler('third', 1);
          }}
        >
          <a href="#">국물 X</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          $isClicked={thirdChoice === 2 ? true : false}
          onClick={() => {
            dispatchHandler('third', 2);
          }}
        >
          <a href="#">국물 O</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
      <S.ButtonBox>
        <S.NextButton
          onClick={() => {
            dispatchHandler('done', 2);
          }}
        >
          이전으로
        </S.NextButton>
        <S.NextButton
          disabled={thirdChoice === 0}
          onClick={() => {
            dispatchHandler('done', 4);
          }}
        >
          결과보기
        </S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default LastChoice;
