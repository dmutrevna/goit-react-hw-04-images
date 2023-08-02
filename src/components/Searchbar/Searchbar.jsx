import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  InputStyle,
  SearchButton,
  SearchForm,
  SearchbarStyle,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
      return;
    }

    if (value.trim() === previousValue.trim()) {
      toast.info(
        'Sorry, you have already sent this request before. Please enter a new request'
      );
      return;
    }

    setPreviousValue(value);
    onSubmit(value);
  };

  return (
    <SearchbarStyle>
      <SearchForm onSubmit={handleSubmit}>
        <InputStyle
          onChange={handleInputChange}
          value={value}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />

        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchbarStyle>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
