import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/MoviesPopular/moviesSaga";
import { genresSaga } from "./features/genres/genresSaga";
import { peopleSaga } from "./features/people/PeoplePopular/peopleSaga";
import { personDetailSaga } from "./features/people/PersonDetail/personDetailSaga";
import { personCreditsSaga } from "./features/people/PersonCredits/personCreditsSaga";
import { movieDetailSaga } from "./features/movies/MovieDetail/movieDetailSaga";
import { movieCreditsSaga } from "./features/movies/MovieCredits/movieCreditsSaga";
import { searchedMoviesSaga } from "./features/movies/MoviesPopular/searchedMoviesSaga";
import { searchedPeopleSaga } from "./features/people/PeoplePopular/searchedPeopleSaga";
import { changePagePeopleSaga } from "./features/people/PeoplePopular/changePagePeopleSaga";
import { firstPeoplePageSaga } from "./features/people/PeoplePopular/firstPeoplePageSaga";

export default function* rootSaga () {
  yield all([
    moviesSaga(),
    genresSaga(),
    firstPeoplePageSaga(),
    peopleSaga(),
    movieDetailSaga(),
    movieCreditsSaga(),
    personDetailSaga(),
    personCreditsSaga(),
    searchedMoviesSaga(),
    searchedPeopleSaga(),
    searchedMoviesSaga(),
    changePagePeopleSaga(),
  ]);
}