import React, { Component } from "react";
//components
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
      <ul className="ImageGallery" id="imagesList">
        {images.map(({ id, webformatURL, largeImageURL, tags, user }) => (
          <ImageGalleryItem
            onClick={this.handleClick}
            key={`${id}${user}`}
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
