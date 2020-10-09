import {createSlice} from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        isLoading: false,
        genres: [],
    },
    reducers: {
        fetchGenre: (state) => {
            state.isLoading = true;
        },
        fetchGenreSucces: (state, {payload}) => {
            state.genres = payload.genres;
            state.isLoading = false;
        },
        fetchGenreError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchGenre,
    fetchGenreSucces,
    fetchGenreError,
} = genresSlice.actions;

export const selectGenre = (state) => state.genres.genres;

export default genresSlice.reducer;
