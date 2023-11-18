import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return { showModal, showModalHandler };
};

export default useModal;
