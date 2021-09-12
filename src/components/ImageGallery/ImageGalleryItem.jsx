import React, { Component } from "react";

class ImageGalleryItem extends Component {
  state = {};
  handleClick = (e) => {
    console.log(e.currentTarget);
    console.log(e.target.large);
  };

  render() {
    const { webformatURL, user, largeImageURL, id } = this.props.image;
    return (
      <li className="ImageGalleryItem" key={id} onClick={this.handleClick}>
        <img
          src={webformatURL}
          alt={user}
          large={largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
