import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getImages } from 'service/Api';
import { AppContainer } from './App.styled';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photosLoaded, setPhotosLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() === '') return;

      setLoading(true);

      try {
        const { hits, totalHits } = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));

        if (hits.length === 0) {
          toast.info('Sorry, there are no images matching your search query.');
        }

        if (!photosLoaded) {
          setPhotosLoaded(true);
          toast.success(`We found ${totalHits} photos`);
        }
      } catch (error) {
        toast.error('Ops... something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page, photosLoaded]);

  const handleSubmit = searchQuery => {
    if (searchQuery.trim() === '') {
      return toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
    }

    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setShowBtn(false);
    setLoading(true);
    setPhotosLoaded(false);
  };

  const onButtonLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSubmit} />
      {loading ? <Loader /> : <ImageGallery images={images} />}
      {showBtn && <Button onButtonLoadMore={onButtonLoadMore} />}
    </AppContainer>
  );
};
