import PropTypes from 'prop-types';
import {
  ImageGalleryItemContainer,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <ImageGalleryItemContainer>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
      </ImageGalleryItemContainer>
      {showModal && <Modal onClose={toggleModal} src={largeImageURL} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
