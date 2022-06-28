import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <h2>Loading...</h2>}
      <div className='card-grid'>
        {gifs.map((gif) => (
          <GifItem {...gif} key={gif.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
