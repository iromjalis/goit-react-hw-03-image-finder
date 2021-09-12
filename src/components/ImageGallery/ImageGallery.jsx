import React from "react";
// import PropTypes from "prop-types";
import shortid from "shortid";
import ImageGalleryItem from "./ImageGalleryItem";
//import { Test } from './ImageGallery.styles';

const ImageGallery = ({ images }) => {
  return (
    <div className="ImageGalleryWrapper">
      <ul className="ImageGallery">
        {images &&
          images.map((image) => {
            return <ImageGalleryItem key={shortid.generate()} image={image} />;
          })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};

export default ImageGallery;
