import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = () => (
  <ul className="ImageGallery">
    ImageGallery
    <ImageGalleryItem />
    {/* <!-- Набор <li> с изображениями --> */}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};
