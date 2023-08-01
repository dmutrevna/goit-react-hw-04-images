import axios from 'axios';

const API_KEY = '37389808-12bea4b2cb0bd7fcb8ca2392a';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    orientation: 'horizontal',
    image_type: 'photo',
    per_page: 12,
  },
});

export const getImages = async (query, page) => {
  const { data } = await instance.get(`?q=${query}&page=${page}`);
  return data;
};
