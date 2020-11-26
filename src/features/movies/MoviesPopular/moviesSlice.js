import {createListSlice} from "../../listPage/listSlice";

export const moviesSlice = createListSlice({
  name: "movies",
  });

export const { actions, selectors } = moviesSlice;


export default moviesSlice.reducer;