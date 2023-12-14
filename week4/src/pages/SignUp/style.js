import styled from 'styled-components';
import { ButtonLink } from '@components/Button/style';

const InputBox = styled.div`
  width: 100%;
`;

const IdDuplicateCheckBox = styled.div`
  display: flex;
  gap: 2rem;
`;

const DuplicateCheckButton = styled(ButtonLink)`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  background-color: ${({ button_color }) => button_color};
`;

export { InputBox, IdDuplicateCheckBox, DuplicateCheckButton };
