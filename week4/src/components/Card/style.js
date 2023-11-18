import styled from 'styled-components';

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '')};
  padding: 3rem 5rem;
  margin: 50vh auto 0;
  border: 1px solid #ddd;
  border-radius: 1rem;
  background-color: #222;
  transform: translateY(-50%);
`;

export { CardBox };
