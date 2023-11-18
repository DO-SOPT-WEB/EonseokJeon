import styled from 'styled-components';

const ProfileBox = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const ImageCSS = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const ProfileParagraph = styled.p`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #666;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { ProfileBox, ImageCSS, ProfileParagraph };
