import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Container from "./components/Container/Container";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

//* const API = '21072245-3acfda09a1d5bc65070e6b336';
//! https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=yellow+flowers&image_type=photo

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    error: null,
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
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=${searchQuery}&image_type=photo&page=${currentPage}`
      )
      .then(({ data }) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...this.state.images],
          currentPage: prevState.currentPage + 1,
          error: "",
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  //прокрутка вниз
  handleOnButtonClick = () => {
    this.fetchImages()
      .then(() =>
        // eslint-disable-next-line
        window.scrollTo({
          // eslint-disable-next-line
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  onLoadMore = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });

    this.fetchImages(searchQuery, currentPage + 1)
      .then((response) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector("#imagesList").scrollHeight,
          behavior: "smooth",
        });
      });
  };
  handleImageClick = ({ target }) => {
    if (target.nodeName !== "IMG") {
      return;
    }
    const { url } = target.dataset;
    const tag = target.alt;
    this.setState({
      url,
      tag,
      isLoading: true,
    });
    this.toggleModal();
  };

  toggleModal = () =>
    this.setState((prevState) => ({ showModal: !prevState.showModal }));

  hideLoaderInModal = () => this.setState({ isLoading: false });

  componentDidMount() {
    const { searchQuery } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=${searchQuery}&image_type=photo`
      )
      .then(({ data }) => {
        this.setState({ images: data.hits });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { images, filter, isLoading, error, showModal } = this.state;
    return (
      <div className="App">
        <Container>
          {showModal && (
            <Modal onClose={this.toggleModal} onClick={this.handleImageClick}>
              {isLoading && <ImageLoader />}
              <img src={url} alt={tag} onLoad={this.hideLoaderInModal} />
            </Modal>
          )}
          {error && <h1>404 - Page not found!!!</h1>}
          <Searchbar onSubmit={this.onChangeQuery} value={filter} />
          {isLoading && (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          )}
          {images && <ImageGallery images={images} />}

          {images.length > 0 && !isLoading && (
            <Button onClick={this.fetchImages} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
