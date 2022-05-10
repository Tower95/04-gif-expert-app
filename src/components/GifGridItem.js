import React from 'react';
import PropsTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated  animate__fadeInRight">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifGridItem;

GifGridItem.propTypes = {
  title: PropsTypes.string.isRequired,
  url: PropsTypes.string.isRequired
}