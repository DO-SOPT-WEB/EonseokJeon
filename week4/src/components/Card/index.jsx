import * as S from './style';

const Card = ({ width = '50rem', children }) => {
  return <S.CardBox width={width}>{children}</S.CardBox>;
};

export default Card;
