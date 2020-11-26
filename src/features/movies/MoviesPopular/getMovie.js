import { fetchFromAPI } from "../../../lib/fetchFromAPI";

export const getMovie = ({ page }) => fetchFromAPI({
    path: "/movie/popular",
    parameters: {
        page,
    }
});