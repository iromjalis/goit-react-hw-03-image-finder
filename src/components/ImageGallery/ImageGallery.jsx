import React from "react";
// import PropTypes from "prop-types";
import shortid from "shortid";
import ImageGalleryItem from "./ImageGalleryItem";
//import { Test } from './ImageGallery.styles';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery" id="#imagesList">
      {images &&
        images.map((image) => {
          return <ImageGalleryItem key={shortid.generate()} image={image} />;
        })}
    </ul>
  );
};

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};

export default ImageGallery;
