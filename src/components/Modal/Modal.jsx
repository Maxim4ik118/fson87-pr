import { useEffect } from 'react';
import { StyledModal } from './Modal.styled';

const Modal = ({ onCloseModal, modalData }) => {
  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
      
      window.addEventListener('keydown', onEscapeClick);
      
      return () => { 
          window.removeEventListener('keydown', onEscapeClick);
      }
  }, [onCloseModal]);

  return (
    <StyledModal onClick={onOverlayClick}>
      <div className="modal">
        <h2>Modal</h2>
        <p>{modalData}</p>
        <button onClick={onCloseModal} className="closeModalBtn">
          Close
        </button>
      </div>
    </StyledModal>
  );
};

export default Modal;
