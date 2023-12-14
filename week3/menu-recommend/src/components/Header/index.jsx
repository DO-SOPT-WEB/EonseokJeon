import * as S from './style';

const Header = ({ selectOption, selectOptionHandler, startPickHandler }) => {
  return (
    <S.HeaderStyle>
      <h1>🍛 오늘의 점메추 🍛</h1>
      {selectOption !== '' && (
        <S.ReStartButton
          onClick={() => {
            selectOptionHandler('');
            startPickHandler(false);
          }}
        >
          처음으로
        </S.ReStartButton>
      )}
    </S.HeaderStyle>
  );
};

export default Header;
