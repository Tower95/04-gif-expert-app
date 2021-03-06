import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { data: imgaes, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className='animate__animated animate__flash'>Loading</p>}

      <div className='card-grid'>
        {
          imgaes.map(img => (
            <GifGridItem
              key={img.id}
              {...img} />
          ))
        }
      </div>

      <hr />

    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
