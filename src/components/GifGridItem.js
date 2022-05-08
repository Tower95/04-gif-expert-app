import React from 'react';
import PropsTypes from 'prop-types';

const GifGridItem = ({id,title,url}) => {
  return (
    <div>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  );
}

export default GifGridItem;
