import { DUMMY_DATA } from '../../../core/DUMMY_DATA';
import * as S from '../PersonalArticle/style';

const ResultArticle = ({ imgUrl, num, startPickHandler }) => {
  return (
    <>
      <p>오늘의 추천음식은 바로!!</p>
      <img src={imgUrl} width={400} height={300} />
      <p>{DUMMY_DATA[num - 1]}</p>
      <S.StartButton
        onClick={() => {
          startPickHandler(false);
        }}
      >
        다시하기
      </S.StartButton>
    </>
  );
};

export default ResultArticle;
