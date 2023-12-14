import * as S from './style';
import PersonalArticle from './PersonalArticle';
import SelectArticle from './SelectArticle';
import RandomArticle from './RandomArticle';

const MainSection = ({ selectOption, selectOptionHandler, startPick, startPickHandler }) => {
  return (
    <S.MainStyle>
      {!startPick && (
        <SelectArticle
          selectOption={selectOption}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
        />
      )}
      {startPick && selectOption === 'personal' && (
        <PersonalArticle
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
        />
      )}
      {startPick && selectOption === 'random' && (
        <RandomArticle startPickHandler={startPickHandler} />
      )}
    </S.MainStyle>
  );
};

export default MainSection;
