import React from 'react';
import PropTypes from 'prop-types';
import { isElementOfType } from 'react-dom/test-utils';

export const GifGrid =({category}) => {

  const getGif = async (search, limit = 10) =>{
    let apy_key = 'jJLZKM3OnTkgYCQrl05B39jI2s0bKDLl'
    let url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&api_key=${apy_key}`
    const resp = await fetch(url);
    let  {data} = await resp.json();
    const gif = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    console.log(gif);
  }
  getGif(category);
  return (
    <li>
      <h3>{category}</h3>
    </li>
  );
}

GifGrid.propTypes = {
  category : PropTypes.string.isRequired
}
