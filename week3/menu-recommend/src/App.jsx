import { useState } from 'react';
import Header from '@components/Header';
import MainSection from '@components/MainSection';
import GlobalStyle from '@styles/GlobalStyle';

export default function App() {
  const [selectOption, setSelectOption] = useState('');
  const [startPick, setStartPick] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header
        selectOption={selectOption}
        selectOptionHandler={(selected) => {
          setSelectOption(selected);
        }}
        startPickHandler={(isStart) => {
          setStartPick(isStart);
        }}
      />
      <MainSection
        selectOption={selectOption}
        startPick={startPick}
        selectOptionHandler={(selected) => {
          setSelectOption(selected);
        }}
        startPickHandler={(isStart) => {
          setStartPick(isStart);
        }}
      />
    </>
  );
}
