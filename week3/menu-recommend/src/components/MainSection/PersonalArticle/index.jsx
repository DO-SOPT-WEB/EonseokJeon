import { useReducer } from 'react';
import FirstChoice from './FirstChoice';
import SecondChoice from './SecondChoice';
import LastChoice from './LastChoice';
import * as S from './style';
import { DUMMY_DATA } from '../../../core/DUMMY_DATA';
import ResultArticle from '../ResultArticle';

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'done': {
      return { ...state, nthChoice: action.value };
    }
    case 'first': {
      return { ...state, firstChoice: action.value };
    }
    case 'second': {
      return { ...state, secondChoice: action.value };
    }
    case 'third': {
      return { ...state, thirdChoice: action.value };
    }
    default:
      throw Error('Unknown action : ' + action.type);
  }
};

const PersonalArticle = ({ selectOptionHandler, startPickHandler }) => {
  const [menuState, dispatchMenu] = useReducer(menuReducer, {
    nthChoice: 1,
    firstChoice: 0,
    secondChoice: 0,
    thirdChoice: 0,
  });

  const index =
    (menuState.firstChoice - 1) * 6 +
    (menuState.secondChoice - 1) * 2 +
    (menuState.thirdChoice - 1);

  const imgUrl = new URL(
    `../../../assets/${menuState.firstChoice}-${menuState.secondChoice}-${menuState.thirdChoice}.jpg`,
    import.meta.url
  ).href;

  return (
    <>
      {menuState.nthChoice === 1 && (
        <FirstChoice
          firstChoice={menuState.firstChoice}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          dispatchHandler={(type, value) => {
            dispatchMenu({ type, value });
          }}
        />
      )}
      {menuState.nthChoice === 2 && (
        <SecondChoice
          secondChoice={menuState.secondChoice}
          dispatchHandler={(type, value) => {
            dispatchMenu({ type, value });
          }}
        />
      )}
      {menuState.nthChoice === 3 && (
        <LastChoice
          thirdChoice={menuState.thirdChoice}
          dispatchHandler={(type, value) => {
            dispatchMenu({ type, value });
          }}
        />
      )}
      {menuState.nthChoice === 4 && (
        <ResultArticle imgUrl={imgUrl} num={index + 1} startPickHandler={startPickHandler} />
      )}
    </>
  );
};

export default PersonalArticle;
