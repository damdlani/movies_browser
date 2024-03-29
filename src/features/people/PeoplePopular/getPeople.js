import {API_KEY, URL_ADDRESS} from "../../../lib/consts";

export const getPeople = async (page, query) => {
    if (!query || query.trim() === "") {
        const response = await fetch(`${URL_ADDRESS}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    }
};