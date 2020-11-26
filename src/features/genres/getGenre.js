import {fetchFromAPI} from "../../lib/fetchFromAPI";

export const getGenre = () => fetchFromAPI({
    path: "/genre/movie/list",
});
