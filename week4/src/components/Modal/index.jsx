import ReactDOM from 'react-dom';
import * as S from './style';

const ModalOverlay = ({ children }) => {
  return <S.ModalBox>{children}</S.ModalBox>;
};

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay children={children} />,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default Modal;
