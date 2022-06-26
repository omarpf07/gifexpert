import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getGifsResponse = async () => {
    const gifsResponse = await getGifs(category);
    setGifs(gifsResponse);
    setLoading(false);
  };

  useEffect(() => {
    getGifsResponse(gifs);
  }, []);

  return { gifs, loading };
};
