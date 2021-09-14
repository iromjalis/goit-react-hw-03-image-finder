import React from "react";
import axios from "axios";

const API = "21072245-3acfda09a1d5bc65070e6b336";

const fetchImages = ({ currentPage = 1, searchQuery = "" }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API}&q=${searchQuery}&image_type=photo&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
