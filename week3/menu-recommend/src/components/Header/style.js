import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  font-size: 3.6rem;
  text-align: center;
  border: 1px solid #555;
`;

const ReStartButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10rem;
  padding: 1rem 2rem;
  font-size: 2.4rem;
  border: 1px solid #555;
  border-radius: 1rem;
  transition: all 0.3s ease;
  transform: translateY(-50%);

  &:hover {
    background-color: #222;
  }
`;

export { HeaderStyle, ReStartButton };
