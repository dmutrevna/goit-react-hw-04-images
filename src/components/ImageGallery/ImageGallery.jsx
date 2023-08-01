import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyle } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyle>
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} />
      ))}
    </ImageGalleryStyle>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
