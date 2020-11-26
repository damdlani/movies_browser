import { fetchFromAPI } from "../../../lib/fetchFromAPI";

export const getSearchedMovies = ({query, page}) => fetchFromAPI({
  path: "/search/movie",
  parameters: {
    page,
    query,
  },
});