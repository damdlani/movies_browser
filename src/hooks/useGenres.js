import { useEffect } from "react";
import { fetchGenre, selectGenre } from "../features/genres/genresSlice";
import { useDispatch, useSelector } from "react-redux";

export const useGenres = () => {
  const dispatch = useDispatch();
  const genresResult = useSelector(selectGenre);

  useEffect(() => {
    dispatch(fetchGenre());
  }, [dispatch])

  const getMovieGenres = (genre_ids) => {
    const genres = [];

    genre_ids.forEach(ID => {
      const genreName = (genresResult.find((element) => element.id === ID)).name;
      genres.push(genreName);
    });

    return genres;
  };

  return getMovieGenres;
};
