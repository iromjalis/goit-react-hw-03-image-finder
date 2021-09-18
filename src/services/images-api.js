import axios from "axios";
import config from "./config";

axios.defaults.params = {
  ...config,
};

const fetchImages = async ({ currentPage, searchQuery }) => {
  const { API, params } = axios.defaults.params;
  return await axios
    .get(
      `?key=${API}&q=${searchQuery}&${params}&page=${currentPage}`,
      axios.defaults.params
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
