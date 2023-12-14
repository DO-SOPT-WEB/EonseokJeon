import { useEffect, useState } from 'react';
import ResultArticle from '../ResultArticle';
import styled, { keyframes } from 'styled-components';

const sizeUp = keyframes`
  0% {
    transform: scale(1);
  }
  
  100% {
    transform: scale(10);
  }
  `;

const AnimationText = styled.p`
  animation: ${sizeUp} 1s infinite linear;
`;

const RandomArticle = ({ startPickHandler }) => {
  const [count, setCount] = useState(3);
  const randomNum = Math.floor(Math.random() * 18) + 1;
  const first = Math.floor((randomNum - 1) / 6) + 1;
  const second = Math.floor(((randomNum - 1) % 6) / 2) + 1;
  const third = ((randomNum - 1) % 2) + 1;

  const imgUrl = new URL(`../../../assets/${first}-${second}-${third}.jpg`, import.meta.url).href;

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount((prev) => (prev -= 1));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);
  return (
    <>
      {count !== 0 && <AnimationText>{count}</AnimationText>}
      {count === 0 && (
        <ResultArticle imgUrl={imgUrl} num={randomNum} startPickHandler={startPickHandler} />
      )}
    </>
  );
};

export default RandomArticle;
