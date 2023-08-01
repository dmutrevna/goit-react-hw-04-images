import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onButtonLoadMore }) => {
  const handleClick = () => {
    if (onButtonLoadMore) {
      toast.info('Loading....Please wait');
      onButtonLoadMore();
    }
  };

  return (
    <ButtonLoadMore onClick={handleClick} type="button">
      Load More
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onButtonLoadMore: PropTypes.func.isRequired,
};
