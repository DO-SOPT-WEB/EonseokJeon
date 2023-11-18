import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '')};
  color: ${({ disabled }) => (disabled ? 'gray' : '#ddd')};
  font-size: 2rem;
  padding: 0.7rem 0;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: ${({ disabled }) => (disabled ? 'rgba(0,0,0,0.5)' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'cursor')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'rgba(0,0,0,0.5)' : '#444')};
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { ButtonLink };
