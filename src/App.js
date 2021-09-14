/* eslint-disable react/no-unused-state */
import "./App.css";
import React, { Component } from "react";
import axios from "axios";
// import Loader from 'react-loader-spinner';

import Container from "./components/Container/Container";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

//* const API = '21072245-3acfda09a1d5bc65070e6b336';
//! https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=yellow+flowers&image_type=photo

class App extends Component {
  state = {
    images: [],
    searchQuery: "cat",
    largeImageURL: "",
    filter: "",
    isLoading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=${searchQuery}&image_type=photo&page=${currentPage}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...this.state.images],
          currentPage: prevState.currentPage + 1,
          error: "",
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount = () => {
    const { searchQuery } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=${searchQuery}&image_type=photo`
      )
      .then(({ data }) => {
        this.setState({ images: data.hits });
      })
      .catch((error) => console.log(error));
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  handleLargeURLImage = (data) => {
    this.setState({ largeImageURL: data });
    this.setState({ showModal: true });
  };

  render() {
    const { images, showModal, largeImageURL } = this.state;
    return (
      <div className="App">
        <Container>
          {showModal && (
            <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
          )}
          <Searchbar
            onSubmit={this.onChangeQuery}
            searchQuery={this.searchQuery}
          />
          {images.length > 0 && (
            <ImageGallery
              images={images}
              handleLargeURLImage={this.handleLargeURLImage}
            />
          )}
          {images.length > 0 && <Button />}
        </Container>
        {/* <button onClick={this.toggleModal}> show modal</button> */}
      </div>
    );
  }
}

export default App;
