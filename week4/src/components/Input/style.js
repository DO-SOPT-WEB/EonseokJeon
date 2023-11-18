import styled from 'styled-components';

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const LabelCSS = styled.label`
  width: 10rem;
`;

const InputCSS = styled.input`
  width: calc(100% - 10rem);
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.4rem;

  &::placeholder {
    color: #999;
  }
`;

export { InputBox, LabelCSS, InputCSS };
