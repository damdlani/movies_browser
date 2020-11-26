import {getMovie} from "./getMovie";
import {getSearchedMovies} from "./getSearchedMovies";
import {actions} from "./moviesSlice";
import {listSaga} from "../../listPage/listSaga";

export function* moviesSaga() {
    yield listSaga({
        getPopular: getMovie,
        search: getSearchedMovies,
        actions,
    });
}