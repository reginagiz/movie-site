import React from 'react';
import getImageUrl from '../../../utils/getImageUrl';

const contentStyle = {
  height: '500px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const MovieImage = ({ image }) => (
  <div>
    <h3 style={contentStyle}>
      <img
        src={getImageUrl(image)} alt="Still" 
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </h3>
  </div>
);

export default MovieImage;
