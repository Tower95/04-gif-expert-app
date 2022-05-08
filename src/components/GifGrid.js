import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isElementOfType } from 'react-dom/test-utils';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  //useEffect indicate how many times the function will be execute 
  useEffect(() => {
    getGif(category);
  }, [])

  const getGif = async (search, limit = 10) => {
    let apy_key = 'jJLZKM3OnTkgYCQrl05B39jI2s0bKDLl'
    let url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&api_key=${apy_key}`
    const resp = await fetch(url);
    let { data } = await resp.json();
    const gifs = data.map(({title,id,images}) => {
      return {
        id,
        title ,
        url: images.downsized_medium.url
      }
    })
    console.log(gifs);
    setImages(gifs);
  }

  return (
    <div>
      <h3>{category}</h3>
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img}/>
        })
        }
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
