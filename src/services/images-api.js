import axios from "axios";

axios.defaults.params = { currentPage: 1, searchQuery: "" };
const API = "21072245-3acfda09a1d5bc65070e6b336";
axios.defaults.baseURL = "https://pixabay.com/api/";
const params = "&image_type=photo";

const fetchImages = async ({ currentPage, searchQuery }) => {
  return await axios
    .get(`?key=${API}&q=${searchQuery}&${params}&page=${currentPage}`)
    .then((response) => response.data.hits);
};

export default { fetchImages };
