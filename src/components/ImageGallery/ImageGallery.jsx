import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  handleClick = (e) => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    console.log("gallery click");
  };
  handleLargeURLImage = (data) => {
    this.props.handleLargeURLImage(data);
  };
  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            onClick={this.handleClick}
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tag={tags}
            handleLargeURLImage={this.handleLargeURLImage}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};
