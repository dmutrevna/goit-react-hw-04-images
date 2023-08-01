import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { ModalContainer, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { src } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClose}>
        <ModalContainer>
          <img src={src} alt="large_photo" />
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
