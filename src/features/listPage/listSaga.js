import {call, put, takeLatest, delay} from "redux-saga/effects";

export function* listSaga({actions, search, getPopular}) {
  function* fetchListHandler ({payload: {query, page}}) {
    yield delay(2200);

    try {
      const response = yield (
          query?.trim()
              ? call(search, {page, query})
              : call(getPopular, {page})
      );

      yield put(actions.fetchSuccess({
        results: response.results,
        pagination: {
          page: response.page,
          totalPages: response.total_pages,
          totalResults: response.total_results,
        },
      }));
    } catch (error) {
      yield  put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchListHandler);
}