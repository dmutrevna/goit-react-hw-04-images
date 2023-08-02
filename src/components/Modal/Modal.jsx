import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, Overlay } from './Modal.styled';

export const Modal = ({ onClose, src }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClose}>
      <ModalContainer>
        <img src={src} alt="large_photo" />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
