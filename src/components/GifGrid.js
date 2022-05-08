import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isElementOfType } from 'react-dom/test-utils';
import GifGridItem from './GifGridItem';
import { getGif } from '../helpers/getGif';

export const GifGrid = ({ category }) => {

  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  //useEffect indicate how many times the function will be execute 
  useEffect(() => {
    const gifs = getGif(category)
    .then((setImages))
  }, [category])

  return (<>
    <h3>{category}</h3>
    <div className='card-grid'>
      {images.map((img) => {
        return <GifGridItem key={img.id} {...img} />
      })
      }
    </div>
    <hr />
  </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
