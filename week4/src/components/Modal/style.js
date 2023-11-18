import styled from 'styled-components';
import { CardBox } from '../Card/style';

const ModalBox = styled(CardBox)`
  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export { ModalBox };
